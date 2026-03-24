"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import diseasesData from "@/data/disease.json";

// ── Icon helpers ──────────────────────────────────────────────
const icons = {
  symptoms: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  causes: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  diagnosis: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  ),
  treatment: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  risk: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  prevention: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
};

const sectionConfig = [
  {
    key: "symptoms",
    label: "Symptoms",
    icon: "symptoms",
    color: "navy",
    iconBg: "bg-[#e8eaf6]",
    iconColor: "text-[#1a237e]",
    dotColor: "bg-[#1a237e]",
    borderColor: "border-[#1a237e]",
  },
  {
    key: "causes",
    label: "Causes",
    icon: "causes",
    color: "red",
    iconBg: "bg-[#ffebee]",
    iconColor: "text-[#c62828]",
    dotColor: "bg-[#c62828]",
    borderColor: "border-[#c62828]",
  },
  {
    key: "diagnosis",
    label: "Diagnosis",
    icon: "diagnosis",
    color: "green",
    iconBg: "bg-[#e8f5e9]",
    iconColor: "text-[#2e7d32]",
    dotColor: "bg-[#2e7d32]",
    borderColor: "border-[#2e7d32]",
  },
  {
    key: "treatment",
    label: "Treatment",
    icon: "treatment",
    color: "navy",
    iconBg: "bg-[#e8eaf6]",
    iconColor: "text-[#1a237e]",
    dotColor: "bg-[#1a237e]",
    borderColor: "border-[#1a237e]",
  },
  {
    key: "risk_factors",
    label: "Risk Factors",
    icon: "risk",
    color: "red",
    iconBg: "bg-[#ffebee]",
    iconColor: "text-[#c62828]",
    dotColor: "bg-[#c62828]",
    borderColor: "border-[#c62828]",
  },
  {
    key: "prevention",
    label: "Prevention",
    icon: "prevention",
    color: "green",
    iconBg: "bg-[#e8f5e9]",
    iconColor: "text-[#2e7d32]",
    dotColor: "bg-[#2e7d32]",
    borderColor: "border-[#2e7d32]",
  },
] as const;

const RELATED_OVERRIDES: Record<string, string[]> = {
  "diabetes-mellitus": ["hypertension", "coronary-artery-disease", "obesity"],
  hypertension: ["coronary-artery-disease", "diabetes-mellitus"],
  "coronary-artery-disease": ["hypertension", "diabetes-mellitus"],
  "dengue-fever": ["viral-fever"],
  "viral-fever": ["dengue-fever"],
  asthma: ["chronic-obstructive-pulmonary-disease-copd"],
  "chronic-obstructive-pulmonary-disease-copd": ["asthma"],
};

export default function DiseasePage() {
  const { id } = useParams<{ id: string }>();
  const disease = useMemo(
    () => diseasesData.diseases.find((d) => d.id === id),
    [id],
  );

  if (!disease) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-dark mb-4">
            Condition not found
          </h1>
          <Link href="/diseases" className="btn-primary">
            Back to Diseases
          </Link>
        </div>
      </div>
    );
  }

  // Related diseases (manual links + same category/letter)
  const overrideIds = new Set(RELATED_OVERRIDES[disease.id] ?? []);
  const overrideRelated = diseasesData.diseases.filter((d) =>
    overrideIds.has(d.id),
  );
  const categoryRelated = diseasesData.diseases.filter(
    (d) =>
      d.id !== disease.id &&
      (d.category === disease.category || d.letter === disease.letter),
  );
  const related = [...overrideRelated, ...categoryRelated].filter(
    (item, index, list) =>
      item.id !== disease.id &&
      list.findIndex((entry) => entry.id === item.id) === index,
  ).slice(0, 3);

  const contentSections = sectionConfig
    .map((section) => ({
      ...section,
      items: disease[section.key as keyof typeof disease] as string[] | undefined,
    }))
    .filter(
      (
        section,
      ): section is (typeof sectionConfig)[number] & { items: string[] } =>
        Array.isArray(section.items) && section.items.length > 0,
    );

  return (
    <main className="min-h-screen bg-surface">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#0d1757] via-[#1a237e] to-[#0d1757] pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-20" />
        {/* Decorative blobs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#c62828]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-[#2e7d32]/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 text-sm flex-wrap">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <svg
              className="w-4 h-4 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/diseases"
              className="text-white/60 hover:text-white transition-colors"
            >
              Diseases and Conditions
            </Link>
            <svg
              className="w-4 h-4 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-[#ad8b3a] font-semibold truncate max-w-[200px]">
              {disease.name}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              {/* Category badge */}
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-5">
                <span className="w-2 h-2 bg-[#ad8b3a] rounded-full" />
                {disease.category}
              </span>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {disease.name}
              </h1>

              <p className="text-white/75 font-body text-base md:text-lg leading-relaxed max-w-2xl">
                {disease.description}
              </p>
            </div>

            {/* Quick stats panel */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="glass rounded-2xl p-5 border border-white/30 bg-white/10 backdrop-blur-md">
                <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
                  Quick Overview
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm font-body">
                      Symptoms
                    </span>
                    <span className="bg-[#1a237e] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {disease.symptoms.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm font-body">
                      Causes
                    </span>
                    <span className="bg-[#c62828] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {disease.causes.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm font-body">
                      Treatments
                    </span>
                    <span className="bg-[#2e7d32] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {disease.treatment.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm font-body">
                      Risk Factors
                    </span>
                    <span className="bg-[#ad8b3a] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {disease.risk_factors.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prevalence Banner ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#e8eaf6] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-4 h-4 text-[#1a237e]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-[#1a237e] text-sm">
                Prevalence:{" "}
              </span>
              <span className="font-body text-muted text-sm">
                {disease.prevalence}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {/* Main Sections - 2 cols */}
          <div className="lg:col-span-2 space-y-7">
            {contentSections.map((section) => (
              <article
                id={section.key}
                key={section.key}
                className={`scroll-mt-32 bg-white rounded-2xl shadow-card border border-gray-100 border-l-4 ${section.borderColor} overflow-hidden`}
              >
                {/* Section header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50/80">
                  <div
                    className={`w-10 h-10 ${section.iconBg} rounded-xl flex items-center justify-center ${section.iconColor}`}
                  >
                    {icons[section.icon]}
                  </div>
                  <h2 className="font-display font-bold text-dark text-lg">
                    {section.label}
                  </h2>
                  <span
                    className={`ml-auto text-xs font-bold px-2.5 py-1 rounded-full ${section.iconBg} ${section.iconColor}`}
                  >
                    {section.items.length}
                  </span>
                </div>

                {/* Items list */}
                <ul className="px-6 py-5 space-y-3.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span
                        className={`w-2 h-2 ${section.dotColor} rounded-full flex-shrink-0 mt-2`}
                      />
                      <span className="font-body text-dark/85 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Sidebar - 1 col */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            {/* On this page */}
            {contentSections.length > 0 && (
              <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                <h3 className="font-display font-bold text-dark text-sm mb-3">
                  On this page
                </h3>
                <div className="space-y-2">
                  {contentSections.map((section) => (
                    <a
                      key={section.key}
                      href={`#${section.key}`}
                      className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 border border-gray-100 text-dark/80 hover:text-[#1a237e] hover:border-[#1a237e]/30 hover:bg-[#e8eaf6]/30 transition-colors"
                    >
                      <span className="font-body text-sm">{section.label}</span>
                      <span className="text-xs font-bold text-[#1a237e]">
                        {section.items.length}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Source Card */}
            <div className="bg-gradient-to-br from-[#1a237e] to-[#0d1757] rounded-2xl p-5 text-white shadow-card">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-white text-sm mb-2">
                Medical Source
              </h3>
              <p className="text-white/70 font-body text-xs mb-4 leading-relaxed">
                Information sourced from NIAMS (National Institute of Arthritis
                and Musculoskeletal and Skin Diseases)
              </p>
              <a
                href={disease.niams_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors w-full justify-center"
              >
                View on NIAMS
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Book Appointment CTA */}
            <div className="bg-gradient-to-br from-[#c62828] to-[#8e0000] rounded-2xl p-5 text-white shadow-card">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-white text-sm mb-2">
                Consult a Doctor
              </h3>
              <p className="text-white/75 font-body text-xs mb-4 leading-relaxed">
                Get expert medical advice from our specialists for{" "}
                <span className="font-semibold">{disease.name}</span>.
              </p>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 bg-white text-[#c62828] text-xs font-bold px-4 py-2.5 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5 w-full justify-center"
              >
                Book Appointment
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Emergency Card */}
            <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#ffebee] rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#c62828]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark text-sm">
                    Emergency?
                  </h3>
                  <p className="text-muted text-xs font-body">24/7 Available</p>
                </div>
              </div>
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center gap-2 bg-[#c62828] hover:bg-[#ef5350] text-white font-bold text-sm py-3 rounded-xl transition-colors w-full"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 123-456-7890
              </a>
            </div>

            {/* Category tag */}
            <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100">
              <h3 className="font-display font-bold text-dark text-sm mb-3">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {disease.category.split("/").map((cat, i) => (
                  <span
                    key={i}
                    className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                      i === 0 ? "tag-navy" : i === 1 ? "tag-red" : "tag-green"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Related Conditions ── */}
        {related.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-display font-bold text-dark text-2xl">
                Related Conditions
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#1a237e]/20 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/diseases/${rel.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card service-card h-full">
                    <span className="tag-navy mb-3 inline-block">
                      {rel.category.split("/")[0]}
                    </span>
                    <h3 className="font-display font-bold text-dark text-sm mb-2 group-hover:text-[#1a237e] transition-colors leading-snug">
                      {rel.name}
                    </h3>
                    <p className="text-muted font-body text-xs leading-relaxed line-clamp-2 mb-3">
                      {rel.description.slice(0, 90)}...
                    </p>
                    <span className="flex items-center gap-1 text-[#1a237e] text-xs font-semibold group-hover:gap-2 transition-all">
                      Learn more
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Back Button ── */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link
            href="/diseases"
            className="inline-flex items-center gap-2 btn-outline-dark px-6 py-3 rounded-xl text-sm"
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
      </section>
    </main>
  );
}
