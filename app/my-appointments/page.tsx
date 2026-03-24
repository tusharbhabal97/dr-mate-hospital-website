import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import ImmersiveDetailLayout from "@/components/ImmersiveDetailLayout";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

function statusTone(status: string) {
  const normalized = status.toLowerCase();
  if (normalized === "accepted" || normalized === "confirmed") {
    return "bg-emerald-50 text-emerald-700";
  }
  if (normalized === "rejected" || normalized === "cancelled") {
    return "bg-red-50 text-red-700";
  }
  return "bg-amber-50 text-amber-700";
}

export default async function MyAppointmentsPage() {
  const token = cookies().get(AUTH_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  if (!session) {
    redirect("/auth?next=%2Fmy-appointments");
  }

  let appointments: Array<{
    _id: string;
    department: string;
    preferredDate: string | null;
    preferredSlot: string | null;
    status: string;
    createdAt: Date;
    message: string;
  }> = [];

  try {
    const db = await getDb();
    const records = await db
      .collection("appointments")
      .find({ $or: [{ userEmail: session.email }, { email: session.email }] })
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray();

    appointments = records.map((item) => ({
      _id: String(item._id),
      department: item.department || "General",
      preferredDate: item.preferredDate || null,
      preferredSlot: item.preferredSlot || null,
      status: item.status || "requested",
      createdAt: item.createdAt || new Date(),
      message: item.message || "",
    }));
  } catch {
    appointments = [];
  }

  return (
    <ImmersiveDetailLayout
      badge="Patient Dashboard"
      title="My Appointments"
      description="Manage and review your appointment activity in one place."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "My Appointments" },
      ]}
      stats={[
        { label: "Account", value: "Active" },
        { label: "Email", value: session.email.split("@")[0] },
        { label: "Booking Access", value: "Enabled" },
        { label: "Support", value: "24/7" },
      ]}
      afterContent={<Footer />}
    >
      <div className="bg-white rounded-[2rem] border border-slate-100 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
        {appointments.length === 0 ? (
          <>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
              No Appointments Yet
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              You have no confirmed appointments right now. Start by booking your
              first consultation.
            </p>
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-white text-sm font-bold px-5 py-3"
            >
              Book Appointment
            </Link>
          </>
        ) : (
          <>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-5">
              Appointment Requests
            </h2>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <article
                  key={appointment._id}
                  className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                      {appointment.department}
                    </span>
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusTone(
                        appointment.status,
                      )}`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Preferred Date:{" "}
                    <span className="font-semibold">
                      {appointment.preferredDate || "Not specified"}
                    </span>
                  </p>
                  <p className="text-slate-700 text-sm">
                    Preferred Slot:{" "}
                    <span className="font-semibold">
                      {appointment.preferredSlot || "Not specified"}
                    </span>
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Requested on {new Date(appointment.createdAt).toLocaleString()}
                  </p>
                  {appointment.message ? (
                    <p className="text-slate-600 text-sm mt-2 break-words whitespace-pre-wrap">
                      {appointment.message}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </ImmersiveDetailLayout>
  );
}
