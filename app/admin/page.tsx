import { cookies } from "next/headers";
import Link from "next/link";
import { getDb } from "@/lib/mongodb";
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin-auth";
import AdminLoginForm from "./AdminLoginForm";
import { appointmentDepartments } from "@/lib/appointments";

type AdminSection = "overview" | "appointments" | "analytics";
type AdminStatusFilter = "all" | "requested" | "accepted" | "rejected";

function normalizeStatus(status: string) {
  const normalized = status.toLowerCase();
  if (normalized === "confirmed") return "accepted";
  if (normalized === "cancelled") return "rejected";
  if (normalized === "accepted" || normalized === "rejected" || normalized === "requested") {
    return normalized;
  }
  return "requested";
}

function statusTone(status: string) {
  const normalized = normalizeStatus(status);
  if (normalized === "accepted") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (normalized === "rejected") return "bg-red-50 text-red-700 border-red-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams?: { section?: string; status?: string; department?: string };
}) {
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  const adminSession = verifyAdminSessionToken(token);

  if (!adminSession) {
    return <AdminLoginForm />;
  }

  let appointments: Array<{
    _id: string;
    name: string;
    phone: string;
    email: string;
    department: string;
    preferredDate: string | null;
    preferredSlot: string | null;
    message: string;
    status: string;
    createdAt: Date;
  }> = [];

  try {
    const db = await getDb();
    const records = await db
      .collection("appointments")
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    appointments = records.map((item) => ({
      _id: String(item._id),
      name: item.name || "",
      phone: item.phone || "",
      email: item.email || "",
      department: item.department || "",
      preferredDate: item.preferredDate || null,
      preferredSlot: item.preferredSlot || null,
      message: item.message || "",
      status: normalizeStatus(item.status || "requested"),
      createdAt: item.createdAt || new Date(),
    }));
  } catch {
    appointments = [];
  }

  const today = new Date();
  const requestedCount = appointments.filter((a) => a.status === "requested").length;
  const acceptedCount = appointments.filter((a) => a.status === "accepted").length;
  const rejectedCount = appointments.filter((a) => a.status === "rejected").length;
  const todayCount = appointments.filter(
    (a) => new Date(a.createdAt).toDateString() === today.toDateString(),
  ).length;
  const sectionParam = searchParams?.section;
  const activeSection: AdminSection =
    sectionParam === "appointments" || sectionParam === "analytics" ? sectionParam : "overview";
  const filterParam = searchParams?.status;
  const activeStatusFilter: AdminStatusFilter =
    filterParam === "requested" || filterParam === "accepted" || filterParam === "rejected"
      ? filterParam
      : "all";
  const departmentParam = searchParams?.department;
  const departmentLookup = new Map(
    appointmentDepartments.map((department) => [department.toLowerCase(), department]),
  );
  const activeDepartmentFilter =
    departmentParam && departmentParam.toLowerCase() !== "all"
      ? departmentLookup.get(departmentParam.toLowerCase()) ?? "all"
      : "all";
  const statusFilteredAppointments =
    activeStatusFilter === "all"
      ? appointments
      : appointments.filter((appointment) => appointment.status === activeStatusFilter);
  const filteredAppointments =
    activeDepartmentFilter === "all"
      ? statusFilteredAppointments
      : statusFilteredAppointments.filter(
          (appointment) => appointment.department === activeDepartmentFilter,
        );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.08)] mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="font-display text-3xl font-bold text-slate-900">
                Admin Panel
              </h1>
              <p className="text-slate-600 text-sm mt-1">
                Logged in as <span className="font-semibold">{adminSession.username}</span>
              </p>
            </div>
            <form action="/api/admin/logout" method="post">
              <button className="btn-outline text-sm px-5 py-2.5 font-bold" type="submit">
                Logout
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <Link
            href="/admin?section=overview"
            className={`rounded-2xl border p-5 transition ${
              activeSection === "overview"
                ? "border-primary/40 bg-primary/5 shadow-card"
                : "border-slate-100 bg-white hover:border-primary/25"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              Section
            </p>
            <h2 className="font-display text-xl font-bold text-slate-900 mt-1">Overview</h2>
            <p className="mt-1 text-sm text-slate-600">
              Snapshot of total requests and activity.
            </p>
          </Link>

          <Link
            href="/admin?section=appointments&status=all"
            className={`rounded-2xl border p-5 transition ${
              activeSection === "appointments"
                ? "border-primary/40 bg-primary/5 shadow-card"
                : "border-slate-100 bg-white hover:border-primary/25"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              Section
            </p>
            <h2 className="font-display text-xl font-bold text-slate-900 mt-1">
              View Appointments
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Open and review all appointment requests.
            </p>
          </Link>

          <Link
            href="/admin?section=analytics"
            className={`rounded-2xl border p-5 transition sm:col-span-2 lg:col-span-1 ${
              activeSection === "analytics"
                ? "border-primary/40 bg-primary/5 shadow-card"
                : "border-slate-100 bg-white hover:border-primary/25"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              Section
            </p>
            <h2 className="font-display text-xl font-bold text-slate-900 mt-1">Analytics</h2>
            <p className="mt-1 text-sm text-slate-600">
              Department and status distribution.
            </p>
          </Link>
        </div>

        {activeSection === "overview" && (
          <section className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.08)]">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <p className="text-slate-500 text-xs font-semibold uppercase">Total Requests</p>
                <p className="font-display text-3xl font-bold text-slate-900 mt-1">
                  {appointments.length}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <p className="text-slate-500 text-xs font-semibold uppercase">Requested</p>
                <p className="font-display text-3xl font-bold text-slate-900 mt-1">
                  {requestedCount}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <p className="text-slate-500 text-xs font-semibold uppercase">Accepted</p>
                <p className="font-display text-3xl font-bold text-slate-900 mt-1">
                  {acceptedCount}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <p className="text-slate-500 text-xs font-semibold uppercase">Rejected</p>
                <p className="font-display text-3xl font-bold text-slate-900 mt-1">
                  {rejectedCount}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <p className="text-slate-500 text-xs font-semibold uppercase">Today</p>
                <p className="font-display text-3xl font-bold text-slate-900 mt-1">{todayCount}</p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-sm text-indigo-800">
              Tip: Click <span className="font-semibold">View Appointments</span> above to open
              the full list.
            </div>
          </section>
        )}

        {activeSection === "appointments" && (
          <section className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.08)] overflow-x-auto">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
              Appointment Requests
            </h2>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {[
                { key: "all", label: "All" },
                { key: "requested", label: "Requested" },
                { key: "accepted", label: "Accepted" },
                { key: "rejected", label: "Rejected" },
              ].map((filterItem) => (
                <Link
                  key={filterItem.key}
                  href={`/admin?section=appointments&status=${filterItem.key}&department=${encodeURIComponent(
                    activeDepartmentFilter,
                  )}`}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    activeStatusFilter === filterItem.key
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-slate-200 bg-white text-slate-600 hover:border-primary/30"
                  }`}
                >
                  {filterItem.label}
                </Link>
              ))}
              <form
                method="get"
                className="flex flex-wrap items-center gap-2"
              >
                <input type="hidden" name="section" value="appointments" />
                <input type="hidden" name="status" value={activeStatusFilter} />
                <select
                  name="department"
                  defaultValue={activeDepartmentFilter}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">All Departments</option>
                  {appointmentDepartments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10"
                >
                  Filter
                </button>
              </form>
            </div>

            {filteredAppointments.length === 0 ? (
              <p className="text-slate-600 text-sm">No appointment requests yet.</p>
            ) : (
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b border-slate-200">
                    <th className="py-2 pr-4">Patient</th>
                    <th className="py-2 pr-4">Department</th>
                    <th className="py-2 pr-4">Preferred Date</th>
                    <th className="py-2 pr-4">Preferred Slot</th>
                    <th className="py-2 pr-4">Message</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Created</th>
                    <th className="py-2 pr-4">Update</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map((appointment) => (
                    <tr key={appointment._id} className="border-b border-slate-100">
                      <td className="py-3 pr-4">
                        <p className="font-semibold text-slate-900">{appointment.name}</p>
                        <p className="text-slate-600">{appointment.phone}</p>
                        <p className="text-slate-500 text-xs break-all">
                          {appointment.email || "-"}
                        </p>
                      </td>
                      <td className="py-3 pr-4">{appointment.department || "-"}</td>
                      <td className="py-3 pr-4">{appointment.preferredDate || "-"}</td>
                      <td className="py-3 pr-4">{appointment.preferredSlot || "-"}</td>
                      <td className="py-3 pr-4">
                        {appointment.message ? (
                          <details className="group max-w-xs w-full">
                            <summary className="list-none cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 shadow-[0_6px_14px_rgba(15,23,42,0.04)] overflow-hidden">
                              <div className="flex items-center gap-3 min-w-0">
                                <p className="text-slate-700 text-xs leading-relaxed max-h-10 overflow-hidden break-words group-open:hidden flex-1 min-w-0">
                                  {appointment.message}
                                </p>
                                <span className="ml-auto shrink-0 rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold text-primary group-open:hidden">
                                  View
                                </span>
                                <span className="ml-auto shrink-0 rounded-full border border-slate-300 bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-600 hidden group-open:inline-flex">
                                  Hide
                                </span>
                              </div>
                            </summary>
                            <div className="mt-2 rounded-lg border border-primary/10 bg-white px-3 py-2 text-xs text-slate-700 leading-relaxed break-words whitespace-pre-wrap shadow-[0_8px_16px_rgba(15,23,42,0.06)]">
                              {appointment.message}
                            </div>
                          </details>
                        ) : (
                          <span className="text-slate-400 text-xs">No message</span>
                        )}
                      </td>
                      <td className="py-3 pr-4 capitalize">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusTone(
                            appointment.status,
                          )}`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4 whitespace-nowrap">
                        {new Date(appointment.createdAt).toLocaleString()}
                      </td>
                      <td className="py-3 pr-4">
                        <form
                          action="/api/admin/appointments/status"
                          method="post"
                          className="flex items-center gap-2"
                        >
                          <input type="hidden" name="appointmentId" value={appointment._id} />
                          <input type="hidden" name="statusFilter" value={activeStatusFilter} />
                          <input
                            type="hidden"
                            name="departmentFilter"
                            value={activeDepartmentFilter}
                          />
                          <select
                            name="status"
                            defaultValue={appointment.status}
                            className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="requested">Requested</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                          <button
                            type="submit"
                            className="rounded-lg border border-primary/30 bg-primary/5 px-2.5 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10"
                          >
                            Save
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        )}

        {activeSection === "analytics" && (
          <section className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.08)]">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Analytics</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 p-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-3">
                  Requests by Status
                </h3>
                <div className="space-y-2">
                  {["requested", "accepted", "rejected"].map((status) => {
                    const count = appointments.filter((a) => a.status === status).length;
                    return (
                      <div key={status} className="flex items-center justify-between text-sm">
                        <span className="capitalize text-slate-600">{status}</span>
                        <span className="font-semibold text-slate-900">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 p-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-3">
                  Top Departments
                </h3>
                <div className="space-y-2">
                  {Object.entries(
                    appointments.reduce<Record<string, number>>((acc, appointment) => {
                      const key = appointment.department || "General";
                      acc[key] = (acc[key] || 0) + 1;
                      return acc;
                    }, {}),
                  )
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 6)
                    .map(([department, count]) => (
                      <div key={department} className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">{department}</span>
                        <span className="font-semibold text-slate-900">{count}</span>
                      </div>
                    ))}
                  {appointments.length === 0 && (
                    <p className="text-sm text-slate-500">No data available yet.</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="mt-5">
          <Link href="/" className="text-sm font-semibold text-primary">
            Back to Website
          </Link>
        </div>
      </div>
    </main>
  );
}
