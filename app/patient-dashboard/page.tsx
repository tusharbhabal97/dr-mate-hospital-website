import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import ImmersiveDetailLayout from "@/components/ImmersiveDetailLayout";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

type AppointmentSummary = {
  _id: string;
  department: string;
  preferredDate: string | null;
  preferredSlot: string | null;
  status: string;
  createdAt: Date;
};

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

export default async function PatientDashboardPage() {
  const token = cookies().get(AUTH_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  if (!session) {
    redirect("/auth?next=%2Fpatient-dashboard");
  }

  let recentAppointments: AppointmentSummary[] = [];
  let totalAppointments = 0;

  try {
    const db = await getDb();
    const query = { $or: [{ userEmail: session.email }, { email: session.email }] };

    totalAppointments = await db.collection("appointments").countDocuments(query);

    const records = await db
      .collection("appointments")
      .find(query)
      .sort({ createdAt: -1 })
      .limit(3)
      .toArray();

    recentAppointments = records.map((item) => ({
      _id: String(item._id),
      department: item.department || "General",
      preferredDate: item.preferredDate || null,
      preferredSlot: item.preferredSlot || null,
      status: item.status || "requested",
      createdAt: item.createdAt || new Date(),
    }));
  } catch {
    recentAppointments = [];
    totalAppointments = 0;
  }

  const firstName = session.email.split("@")[0];

  return (
    <ImmersiveDetailLayout
      badge="Patient Dashboard"
      title="Your Health Dashboard"
      description="Manage appointments, track requests, and access patient services from one secure place."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dashboard" }]}
      stats={[
        { label: "Account", value: "Active" },
        { label: "Appointments", value: String(totalAppointments) },
        { label: "User", value: firstName },
        { label: "Support", value: "24/7" },
      ]}
      afterContent={<Footer />}
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
        <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-card">
          <h2 className="font-display text-2xl font-bold text-slate-900">Quick Actions</h2>
          <p className="mt-2 text-sm text-slate-600">
            Everything important is one click away.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/my-appointments"
              className="group rounded-2xl border border-primary/20 bg-primary/5 p-4 transition hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                Dashboard Module
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                View Appointments
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                See all your requests, statuses, and dates.
              </p>
            </Link>

            <Link
              href="/book-appointment"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                Care Access
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                Book Appointment
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Schedule your next consultation quickly.
              </p>
            </Link>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                Coming Soon
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                Medical Records
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Access prescriptions and reports in one place.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                Coming Soon
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                Billing & Insurance
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Track invoices, payments, and claim status.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-card">
          <h2 className="font-display text-2xl font-bold text-slate-900">Recent Activity</h2>
          <p className="mt-2 text-sm text-slate-600">
            Your latest appointment requests.
          </p>

          <div className="mt-6 space-y-3">
            {recentAppointments.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  No appointment activity yet. Start by booking your first consultation.
                </p>
                <Link
                  href="/book-appointment"
                  className="mt-3 inline-flex rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white"
                >
                  Book Now
                </Link>
              </div>
            ) : (
              recentAppointments.map((appointment) => (
                <article
                  key={appointment._id}
                  className="rounded-xl border border-slate-200 bg-slate-50/80 p-4"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                      {appointment.department}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${statusTone(
                        appointment.status,
                      )}`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700">
                    Preferred Date: {appointment.preferredDate || "Not specified"}
                  </p>
                  <p className="text-sm text-slate-700">
                    Preferred Slot: {appointment.preferredSlot || "Not specified"}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Requested on {new Date(appointment.createdAt).toLocaleString()}
                  </p>
                </article>
              ))
            )}
          </div>

          <Link
            href="/my-appointments"
            className="mt-5 inline-flex rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Go to View Appointments
          </Link>
        </section>
      </div>
    </ImmersiveDetailLayout>
  );
}
