import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ImmersiveDetailLayout from "@/components/ImmersiveDetailLayout";
import AppointmentProcess from "@/components/AppointmentProcess";
import DoctorCard from "@/components/cards/DoctorCard";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";

type Section = {
  title: string;
  items: string[];
};

export default function DepartmentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const department = departments.find((item) => item.id === params.id);

  if (!department) {
    notFound();
  }

  const contentSections: Section[] = [
    { title: "Key Services", items: department.keyServices },
    { title: "Conditions Treated", items: department.conditionsTreated },
    { title: "Diagnostics", items: department.diagnostics },
    { title: "Treatments", items: department.treatments },
  ];

  const related = departments.filter((item) => item.id !== department.id).slice(0, 3);
  const relatedDoctors = doctors.filter((doctor) => doctor.departmentId === department.id);

  return (
    <ImmersiveDetailLayout
      badge={department.category}
      title={department.name}
      description={department.summary}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Specialities", href: "/departments" },
        { label: department.name },
      ]}
      stats={[
        { label: "Core Services", value: department.keyServices.length },
        { label: "Conditions", value: department.conditionsTreated.length },
        { label: "Diagnostics", value: department.diagnostics.length },
        { label: "Treatments", value: department.treatments.length },
      ]}
      afterContent={
        <>
          <AppointmentProcess />
          <Footer />
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-6">
        <article className="lg:col-span-8 relative overflow-hidden bg-white rounded-[2rem] border border-slate-100 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <span className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-primary/10" />
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
            About Department
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-2xl">
            {department.overview}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
            {department.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-[1rem] border border-slate-100 bg-slate-50/70 px-3 py-2.5"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/80 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-[#1a237e] rounded-[2rem] p-6 text-white relative overflow-hidden">
          <span className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/10" />
          <h2 className="font-display font-bold text-2xl mb-3">Need Help?</h2>
          <p className="text-white/75 text-sm leading-relaxed mb-5">
            Talk to our specialists and get a personalized care plan for your
            health goals.
          </p>
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center rounded-xl bg-white text-[#1a237e] text-sm font-bold px-5 py-3"
          >
            Book Appointment
          </Link>
          <p className="text-white/70 text-xs mt-4">24/7 Emergency: +91 1800-MEDICARE</p>
        </article>

        <div className="lg:col-span-5 space-y-6">
          {contentSections.slice(0, 2).map((section) => (
            <article
              key={section.title}
              className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
            >
              <h2 className="font-display font-bold text-xl text-slate-900 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/80 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="lg:col-span-7 space-y-6">
          {contentSections.slice(2).map((section) => (
            <article
              key={section.title}
              className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
            >
              <h2 className="font-display font-bold text-xl text-slate-900 mb-4">
                {section.title}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2.5"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/80 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
            Related Departments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/departments/${item.id}`}
                className="bg-white rounded-[1.5rem] border border-slate-100 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_14px_36px_rgba(15,23,42,0.09)] transition-all"
              >
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-3">
                  Department
                </span>
                <h3 className="font-display font-bold text-slate-900 text-base mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedDoctors.length > 0 && (
        <div className="mt-10">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
            Associated Doctors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedDoctors.slice(0, 3).map((doctor) => (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                name={doctor.name}
                specialization={doctor.specialization}
                experience={doctor.experience}
                bio={doctor.bio}
                image={doctor.image}
              />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View All Doctors
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
              </svg>
            </Link>
          </div>
        </div>
      )}

      <div className="mt-8 pt-5 border-t border-slate-200">
        <Link
          href="/departments"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 text-slate-800 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Departments
        </Link>
      </div>
    </ImmersiveDetailLayout>
  );
}
