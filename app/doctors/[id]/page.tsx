import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";
import { doctors } from "@/data/doctors";
import { departments } from "@/data/departments";

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((item) => item.id === params.id);

  if (!doctor) {
    notFound();
  }

  const department = departments.find((item) => item.id === doctor.departmentId);

  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Doctor Profile"
          title={doctor.name}
          subtitle={doctor.specialization}
          badge={department ? department.name : "Specialist Care"}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors", href: "/doctors" }, { label: doctor.name }]}
          actions={
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center bg-white text-primary text-sm font-bold px-6 py-3 rounded-xl"
            >
              Book Appointment
            </Link>
          }
        />
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr]">
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-card">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Specialty
              </p>
              <p className="text-dark font-display font-bold text-xl">
                {doctor.specialization}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Experience
              </p>
              <p className="text-sm text-muted">{doctor.experience}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Qualification
              </p>
              <p className="text-sm text-muted">{doctor.qualification}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Department
              </p>
              <p className="text-sm text-muted">{department?.name ?? "General Care"}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Available Timing
              </p>
              <p className="text-sm text-muted">{doctor.timings}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-100 p-7 shadow-card">
            <h2 className="font-display font-bold text-2xl text-dark mb-3">
              Professional Overview
            </h2>
            <p className="text-muted leading-relaxed">{doctor.bio}</p>
          </div>

          <div className="bg-gradient-to-br from-[#1a237e] to-[#0d1757] rounded-3xl p-7 text-white shadow-card">
            <h3 className="font-display font-bold text-xl mb-2">
              Book a Consultation
            </h3>
            <p className="text-white/80 text-sm mb-5">
              Schedule a visit with {doctor.name} and receive a personalized care plan.
            </p>
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center bg-white text-[#1a237e] text-sm font-bold px-5 py-3 rounded-xl"
            >
              Book Appointment
            </Link>
          </div>

          {department && (
            <div className="bg-white rounded-3xl border border-slate-100 p-7 shadow-card">
              <h3 className="font-display font-bold text-xl text-dark mb-3">
                Department Focus
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {department.overview}
              </p>
              <Link
                href={`/departments/${department.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                View Department Details
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
