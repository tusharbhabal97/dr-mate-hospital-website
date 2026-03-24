import Link from "next/link";
import { notFound } from "next/navigation";
import ImmersiveDetailLayout from "@/components/ImmersiveDetailLayout";
import diseasesData from "@/data/disease.json";

type Disease = {
  id: string;
  name: string;
  description: string;
  category: string;
  symptoms?: string[];
  causes?: string[];
  diagnosis?: string[];
  treatment?: string[];
  risk_factors?: string[];
  prevention?: string[];
  prevalence?: string;
  niams_url?: string;
};

type ListSection = {
  title: string;
  items: string[];
};

const RELATED_OVERRIDES: Record<string, string[]> = {
  "diabetes-mellitus": ["hypertension", "coronary-artery-disease", "obesity"],
  hypertension: ["coronary-artery-disease", "diabetes-mellitus"],
  "coronary-artery-disease": ["hypertension", "diabetes-mellitus"],
  "dengue-fever": ["viral-fever"],
  "viral-fever": ["dengue-fever"],
  asthma: ["chronic-obstructive-pulmonary-disease-copd"],
  "chronic-obstructive-pulmonary-disease-copd": ["asthma"],
};

export default function DiseaseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const diseases = (diseasesData as { diseases: Disease[] }).diseases ?? [];
  const disease = diseases.find((d) => d.id === params.id);

  if (!disease) {
    notFound();
  }

  const allSections: Array<{ title: string; items?: string[] }> = [
    { title: "Symptoms", items: disease.symptoms },
    { title: "Causes", items: disease.causes },
    { title: "Diagnosis", items: disease.diagnosis },
    { title: "Treatment", items: disease.treatment },
    { title: "Risk Factors", items: disease.risk_factors },
    { title: "Prevention", items: disease.prevention },
  ];

  const sections: ListSection[] = allSections
    .map((section) => ({ title: section.title, items: section.items ?? [] }))
    .filter((section) => section.items.length > 0);

  const overrideIds = new Set(RELATED_OVERRIDES[disease.id] ?? []);
  const overrideRelated = diseases.filter((d) => overrideIds.has(d.id));
  const categoryRelated = diseases.filter(
    (d) => d.id !== disease.id && d.category === disease.category,
  );
  const related = [...overrideRelated, ...categoryRelated].filter(
    (item, index, list) =>
      item.id !== disease.id &&
      list.findIndex((entry) => entry.id === item.id) === index,
  ).slice(0, 3);

  return (
    <ImmersiveDetailLayout
      badge={disease.category}
      title={disease.name}
      description={disease.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Diseases & Conditions", href: "/diseases" },
        { label: disease.name },
      ]}
      stats={[
        { label: "Symptoms", value: disease.symptoms?.length ?? 0 },
        { label: "Causes", value: disease.causes?.length ?? 0 },
        { label: "Treatments", value: disease.treatment?.length ?? 0 },
        { label: "Prevention", value: disease.prevention?.length ?? 0 },
      ]}
    >
      <div className="grid lg:grid-cols-12 gap-6">
        <article className="lg:col-span-8 relative overflow-hidden bg-white rounded-[2rem] border border-slate-100 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <span className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-primary/10" />
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
            Condition Overview
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-2xl">
            Understand key symptoms, causes, diagnosis options, and treatment
            pathways for {disease.name}. This overview is intended for patient
            awareness and should be followed by specialist consultation.
          </p>
          <div className="flex flex-wrap gap-2">
            {disease.category.split("/").map((category) => (
              <span
                key={category}
                className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700"
              >
                {category.trim()}
              </span>
            ))}
            {disease.prevalence && (
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700">
                Prevalence Available
              </span>
            )}
          </div>
        </article>

        <article className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-[#1a237e] rounded-[2rem] p-6 text-white relative overflow-hidden">
          <span className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/10" />
          <h2 className="font-display font-bold text-2xl mb-3">Need Help?</h2>
          <p className="text-white/75 text-sm leading-relaxed mb-5">
            Our specialists can guide you through symptoms and treatment options.
          </p>
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center rounded-xl bg-white text-[#1a237e] text-sm font-bold px-5 py-3"
          >
            Book Appointment
          </Link>
          <p className="text-white/70 text-xs mt-4">24/7 Emergency: +91 1800-MEDICARE</p>
        </article>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
          {sections.map((section) => (
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

        <div className="lg:col-span-4 space-y-6">
          {disease.prevalence && (
            <article className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <h2 className="font-display font-bold text-xl text-slate-900 mb-3">
                Prevalence
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {disease.prevalence}
              </p>
            </article>
          )}

          {disease.niams_url && (
            <article className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <h2 className="font-display font-bold text-xl text-slate-900 mb-3">
                Learn More
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Verified medical information source from NIAMS.
              </p>
              <a
                href={disease.niams_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold"
              >
                Visit NIAMS Reference
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
                    d="M13 7h6m0 0v6m0-6L10 16"
                  />
                </svg>
              </a>
            </article>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
            Related Conditions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/diseases/${item.id}`}
                className="bg-white rounded-[1.5rem] border border-slate-100 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_14px_36px_rgba(15,23,42,0.09)] transition-all"
              >
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-3">
                  {item.category.split("/")[0]}
                </span>
                <h3 className="font-display font-bold text-slate-900 text-base mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 pt-5 border-t border-slate-200">
        <Link
          href="/diseases"
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
          Back to All Conditions
        </Link>
      </div>
    </ImmersiveDetailLayout>
  );
}
