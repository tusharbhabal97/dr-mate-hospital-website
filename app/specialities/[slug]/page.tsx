import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import {
  getRelatedSpecialities,
  getSpecialityBySlug,
  specialities,
} from "@/data/specialities";

export async function generateStaticParams() {
  return specialities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const speciality = getSpecialityBySlug(params.slug);

  if (!speciality) {
    return {
      title: "Speciality Not Found | Dr. Mate Hospital",
    };
  }

  return {
    title: `${speciality.name} | Speciality Care | Dr. Mate Hospital`,
    description: speciality.short_description,
  };
}

export default function SpecialityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const speciality = getSpecialityBySlug(params.slug);

  if (!speciality) {
    notFound();
  }

  const related = getRelatedSpecialities(speciality.slug, 4);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pb-24 pt-28">
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <nav className="text-xs sm:text-sm text-slate-500">
              <Link href="/departments" className="hover:text-primary transition-colors">
                Specialities
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700 font-semibold">{speciality.name}</span>
            </nav>
          </div>
        </section>

        <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50/40 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                Speciality Care
              </span>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-slate-900">
                {speciality.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                {speciality.short_description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center rounded-xl bg-primary text-white px-5 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-slate-300 text-slate-700 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid gap-6 lg:grid-cols-12">
          <article className="lg:col-span-12 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
            <h2 className="font-display text-2xl font-bold text-slate-900">Overview</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">{speciality.overview}</p>
          </article>

          <article className="lg:col-span-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
            <h2 className="font-display text-xl font-bold text-slate-900">Services Offered</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {speciality.services.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="lg:col-span-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
            <h2 className="font-display text-xl font-bold text-slate-900">
              Symptoms / Conditions Treated
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {speciality.symptoms.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 text-primary">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="lg:col-span-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
            <h2 className="font-display text-xl font-bold text-slate-900">Treatments & Procedures</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {speciality.treatments.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Related Specialities</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/specialities/${item.slug}`}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_22px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.1)] transition-all"
              >
                <h3 className="font-display text-base font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.short_description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="fixed bottom-4 right-4 z-40">
          <Link
            href="/book-appointment"
            className="inline-flex items-center rounded-full bg-primary text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-primary/90 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </main>
    </>
  );
}
