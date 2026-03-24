import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/lib/mongodb";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { sendAppointmentRequestEmail } from "@/lib/email";

type AppointmentPayload = {
  name?: string;
  phone?: string;
  email?: string;
  department?: string;
  date?: string;
  slot?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AppointmentPayload;

    const name = body.name?.trim() || "";
    const phone = body.phone?.trim() || "";
    const email = body.email?.trim().toLowerCase() || "";
    const department = body.department?.trim() || "";
    const date = body.date?.trim() || "";
    const slot = body.slot?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !phone || !department || !date || !slot) {
      return NextResponse.json(
        { error: "Name, phone, department, preferred date, and preferred slot are required." },
        { status: 400 },
      );
    }

    if (email && !emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    const token = cookies().get(AUTH_COOKIE_NAME)?.value;
    const session = verifySessionToken(token);

    if (!session) {
      return NextResponse.json(
        { error: "Please login to book an appointment." },
        { status: 401 },
      );
    }

    const db = await getDb();
    const appointments = db.collection("appointments");

    const insertResult = await appointments.insertOne({
      name,
      phone,
      email: email || session.email,
      department,
      preferredDate: date || null,
      preferredSlot: slot || null,
      message,
      status: "requested",
      source: "website",
      userEmail: session.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const recipient = (email || session.email || "").trim();
    if (recipient) {
      try {
        await sendAppointmentRequestEmail({
          email: recipient,
          name,
          department,
          preferredDate: date,
          preferredSlot: slot,
          appointmentId: String(insertResult.insertedId),
        });
      } catch {
        // Email failures should not block appointment creation.
      }
    }

    return NextResponse.json({
      ok: true,
      appointmentId: String(insertResult.insertedId),
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to save appointment right now." },
      { status: 500 },
    );
  }
}
