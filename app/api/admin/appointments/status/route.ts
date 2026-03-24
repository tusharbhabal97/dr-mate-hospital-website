import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin-auth";
import { appointmentDepartments } from "@/lib/appointments";
import { sendAppointmentStatusEmail } from "@/lib/email";

const allowedStatuses = new Set(["requested", "accepted", "rejected"]);
const allowedFilters = new Set(["all", "requested", "accepted", "rejected"]);
const departmentLookup = new Map(
  appointmentDepartments.map((dept) => [dept.toLowerCase(), dept]),
);

export async function POST(req: NextRequest) {
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  const adminSession = verifyAdminSessionToken(token);

  const formData = await req.formData();
  const appointmentId = String(formData.get("appointmentId") || "").trim();
  const status = String(formData.get("status") || "").trim().toLowerCase();
  const statusFilter = String(formData.get("statusFilter") || "all")
    .trim()
    .toLowerCase();
  const departmentFilter = String(formData.get("departmentFilter") || "all").trim();

  const safeFilter = allowedFilters.has(statusFilter) ? statusFilter : "all";
  const normalizedDepartment = departmentFilter.toLowerCase();
  const safeDepartment =
    normalizedDepartment === "all"
      ? "all"
      : departmentLookup.get(normalizedDepartment) ?? "all";
  const redirectUrl = new URL(
    `/admin?section=appointments&status=${safeFilter}&department=${encodeURIComponent(
      safeDepartment,
    )}`,
    req.url,
  );

  if (!adminSession || !appointmentId || !allowedStatuses.has(status)) {
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  try {
    const db = await getDb();
    const existing = await db.collection("appointments").findOne({
      _id: new ObjectId(appointmentId),
    });

    if (!existing) {
      return NextResponse.redirect(redirectUrl, { status: 303 });
    }

    const previousStatus = String(existing.status || "requested").toLowerCase();

    await db.collection("appointments").updateOne(
      { _id: new ObjectId(appointmentId) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      },
    );

    const recipient = String(existing.email || existing.userEmail || "").trim();
    if (recipient && previousStatus !== status) {
      try {
        await sendAppointmentStatusEmail({
          email: recipient,
          name: String(existing.name || "Patient"),
          department: String(existing.department || "General"),
          preferredDate: String(existing.preferredDate || "Not specified"),
          preferredSlot: String(existing.preferredSlot || "Not specified"),
          status: status as "requested" | "accepted" | "rejected",
        });
      } catch {
        // Email failures should not block admin updates.
      }
    }
  } catch {
    // Ignore update failures and return to admin panel.
  }

  return NextResponse.redirect(redirectUrl, { status: 303 });
}
