import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ImmersiveDetailLayout from "@/components/ImmersiveDetailLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export default async function BookAppointmentPage() {
  const token = cookies().get(AUTH_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  if (!session) {
    redirect("/auth?next=%2Fbook-appointment");
  }

  const prefillData = {
    name: "",
    phone: "",
    email: session.email,
  };

  try {
    const db = await getDb();
    const user = await db.collection("users").findOne(
      { email: session.email },
      { projection: { fullName: 1, phone: 1, email: 1 } },
    );
    if (user) {
      prefillData.name = user.fullName ?? "";
      prefillData.phone = user.phone ?? "";
      prefillData.email = user.email ?? session.email;
    }
  } catch {
    // Graceful fallback to session email-only prefill.
  }

  return (
    <ImmersiveDetailLayout
      badge="Quick Booking"
      title="Book Your Appointment"
      description="Schedule a consultation with our specialists. Fill the form below and our team will contact you shortly to confirm your appointment."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Book Appointment" },
      ]}
      stats={[
        { label: "Response Time", value: "30m" },
        { label: "Departments", value: "25+" },
        { label: "Doctors", value: "500+" },
        { label: "Support", value: "24/7" },
      ]}
      afterContent={
        <>
          <Contact prefillData={prefillData} redirectOnSuccessTo="/my-appointments" />
          <Footer />
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <article className="bg-white rounded-[1.5rem] border border-slate-100 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <h2 className="font-display font-bold text-slate-900 text-lg mb-2">
            Fast Scheduling
          </h2>
          <p className="text-slate-600 text-sm">
            Share preferred date and department for quick confirmation.
          </p>
        </article>
        <article className="bg-white rounded-[1.5rem] border border-slate-100 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <h2 className="font-display font-bold text-slate-900 text-lg mb-2">
            Expert Team
          </h2>
          <p className="text-slate-600 text-sm">
            Get connected with specialist doctors across all core departments.
          </p>
        </article>
        <article className="bg-white rounded-[1.5rem] border border-slate-100 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <h2 className="font-display font-bold text-slate-900 text-lg mb-2">
            Clear Follow-up
          </h2>
          <p className="text-slate-600 text-sm">
            Receive appointment details and next-step instructions from our team.
          </p>
        </article>
        <article className="bg-white rounded-[1.5rem] border border-slate-100 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <h2 className="font-display font-bold text-slate-900 text-lg mb-2">
            Emergency Ready
          </h2>
          <p className="text-slate-600 text-sm">
            24/7 emergency support for urgent medical attention.
          </p>
        </article>
      </div>
    </ImmersiveDetailLayout>
  );
}
