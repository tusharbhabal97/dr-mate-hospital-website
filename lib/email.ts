import nodemailer from "nodemailer";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;

  if (!host || !user || !pass || !from) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    from,
  };
}

export async function sendOtpEmail(email: string, otp: string) {
  const config = getSmtpConfig();

  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      // Dev fallback to avoid blocking local testing without SMTP.
      // eslint-disable-next-line no-console
      console.log(`[DEV OTP] ${email} => ${otp}`);
      return;
    }
    throw new Error("SMTP config missing");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  await transporter.sendMail({
    from: config.from,
    to: email,
    subject: "Dr. Mate Hospital - Your Verification OTP",
    text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
        <h2 style="margin:0 0 12px;color:#1a237e">Dr. Mate Hospital</h2>
        <p style="margin:0 0 12px;color:#374151">Use the OTP below to verify your account:</p>
        <p style="font-size:28px;font-weight:700;letter-spacing:4px;margin:0 0 12px;color:#111827">${otp}</p>
        <p style="margin:0;color:#6b7280">This OTP is valid for 10 minutes.</p>
      </div>
    `,
  });
}

type AppointmentEmailPayload = {
  email: string;
  name: string;
  department: string;
  preferredDate: string;
  preferredSlot: string;
  appointmentId: string;
};

type AppointmentStatusPayload = Omit<AppointmentEmailPayload, "appointmentId"> & {
  status: "requested" | "accepted" | "rejected";
};

async function sendAppointmentEmail({
  email,
  subject,
  text,
  html,
}: {
  email: string;
  subject: string;
  text: string;
  html: string;
}) {
  const config = getSmtpConfig();

  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log(`[DEV Appointment Email] ${email} => ${subject}`);
      return;
    }
    throw new Error("SMTP config missing");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  await transporter.sendMail({
    from: config.from,
    to: email,
    subject,
    text,
    html,
  });
}

export async function sendAppointmentRequestEmail(payload: AppointmentEmailPayload) {
  const { email, name, department, preferredDate, preferredSlot, appointmentId } = payload;
  const subject = "Dr. Mate Hospital - Appointment Request Received";
  const text = `Hi ${name},\n\nWe received your appointment request.\n\nDepartment: ${department}\nPreferred Date: ${preferredDate}\nPreferred Slot: ${preferredSlot}\nReference ID: ${appointmentId}\n\nWe will review and update you shortly.\n\nDr. Mate Hospital`;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
      <h2 style="margin:0 0 12px;color:#1a237e">Appointment Request Received</h2>
      <p style="margin:0 0 12px;color:#374151">Hi ${name},</p>
      <p style="margin:0 0 16px;color:#374151">We received your appointment request. Here are the details:</p>
      <ul style="margin:0 0 16px;padding-left:18px;color:#111827">
        <li><strong>Department:</strong> ${department}</li>
        <li><strong>Preferred Date:</strong> ${preferredDate}</li>
        <li><strong>Preferred Slot:</strong> ${preferredSlot}</li>
        <li><strong>Reference ID:</strong> ${appointmentId}</li>
      </ul>
      <p style="margin:0;color:#6b7280">We will review your request and update you shortly.</p>
      <p style="margin:16px 0 0;color:#6b7280">Dr. Mate Hospital</p>
    </div>
  `;

  await sendAppointmentEmail({ email, subject, text, html });
}

export async function sendAppointmentStatusEmail(payload: AppointmentStatusPayload) {
  const { email, name, department, preferredDate, preferredSlot, status } = payload;
  const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);
  const subject = `Dr. Mate Hospital - Appointment ${statusLabel}`;
  const text = `Hi ${name},\n\nYour appointment request has been ${status}.\n\nDepartment: ${department}\nPreferred Date: ${preferredDate}\nPreferred Slot: ${preferredSlot}\n\nIf you need any changes, please contact us.\n\nDr. Mate Hospital`;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
      <h2 style="margin:0 0 12px;color:#1a237e">Appointment ${statusLabel}</h2>
      <p style="margin:0 0 12px;color:#374151">Hi ${name},</p>
      <p style="margin:0 0 16px;color:#374151">Your appointment request has been <strong>${status}</strong>.</p>
      <ul style="margin:0 0 16px;padding-left:18px;color:#111827">
        <li><strong>Department:</strong> ${department}</li>
        <li><strong>Preferred Date:</strong> ${preferredDate}</li>
        <li><strong>Preferred Slot:</strong> ${preferredSlot}</li>
      </ul>
      <p style="margin:0;color:#6b7280">If you need any changes, please contact us.</p>
      <p style="margin:16px 0 0;color:#6b7280">Dr. Mate Hospital</p>
    </div>
  `;

  await sendAppointmentEmail({ email, subject, text, html });
}
