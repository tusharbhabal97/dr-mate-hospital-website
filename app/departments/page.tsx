"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";
import HeroInfoCards from "@/components/layouts/HeroInfoCards";
import { getSpecialitySlugByName } from "@/data/specialities";

type ServiceCard = {
  name: string;
  details?: string[];
  icon: "heart" | "icu" | "scan" | "kidney" | "endo" | "emergency" | "surgery" | "urology" | "oncology" | "bone" | "brain" | "woman" | "nicu" | "ent" | "clinic" | "therapy" | "diagnostics";
};

type TabConfig = {
  id: "all" | "super" | "broad" | "aux" | "diag";
  label: string;
  cards: ServiceCard[];
};

const departmentHeroCards = [
  {
    title: "29+",
    subtitle: "Specialities",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v4h4v2h-6V7h2z" />
      </svg>
    ),
  },
  {
    title: "Expert",
    subtitle: "Clinical Teams",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.79 2.99-4S17.66 3 16 3s-3 1.79-3 4 1.34 4 3 4zm-8 0c1.66 0 2.99-1.79 2.99-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.98 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Advanced",
    subtitle: "Diagnostics",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 2h6v2l-2 3v4.38l4.45 6.68A2 2 0 0115.79 21H8.21a2 2 0 01-1.66-2.94L11 11.38V7L9 4V2zm1.87 11l-2.8 4.2h7.86l-2.8-4.2h-2.26z" />
      </svg>
    ),
  },
  {
    title: "24/7",
    subtitle: "Emergency Care",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
];

const tabs: TabConfig[] = [
  {
    id: "all",
    label: "All Our Services",
    cards: [
      { name: "Internal Medicine", icon: "clinic" },
      { name: "ICU", icon: "icu" },
      { name: "Cardiology", icon: "heart" },
      { name: "Interventional Radiology", icon: "scan" },
      { name: "Nephrology", icon: "kidney" },
      { name: "Gastroenterology & Endoscopy", icon: "endo" },
      { name: "Emergency & Trauma Care", icon: "emergency" },
      { name: "General Surgery", icon: "surgery" },
      { name: "GI Surgery", icon: "surgery" },
      { name: "Laparoscopy", icon: "surgery" },
      { name: "Urology", icon: "urology" },
      { name: "Oncology", icon: "oncology" },
      { name: "Oncosurgery", icon: "oncology" },
      { name: "Orthopedics", icon: "bone" },
      { name: "Neurosurgery", icon: "brain" },
      { name: "Neurology", icon: "brain" },
      { name: "Plastic Surgery", icon: "surgery" },
      { name: "Pediatric Surgery", icon: "surgery" },
      { name: "Obstetrics & Gynecology", icon: "woman" },
      { name: "NICU", icon: "nicu" },
      { name: "ENT", icon: "ent" },
      { name: "Proctology", icon: "clinic" },
      { name: "Varicose Vein Clinic", icon: "clinic" },
      { name: "Diabetes Clinic", icon: "clinic" },
      { name: "Diabetic Foot Clinic", icon: "clinic" },
      { name: "VAC Therapy", icon: "therapy" },
      { name: "Breast Clinic", icon: "clinic" },
      { name: "Obesity & Weight Loss Clinic", icon: "clinic" },
      { name: "Physiotherapy & Rehabilitation", icon: "therapy" },
    ],
  },
  {
    id: "super",
    label: "Super Specialities",
    cards: [
      { name: "Cardiology", icon: "heart", details: ["Cath Lab", "Angiography", "Angioplasty", "Pacemaker", "Device Closure", "TMT", "2D Echo", "Stress Echo"] },
      { name: "Interventional Radiology", icon: "scan", details: ["Advanced Angiography", "Angioplasty", "Chemo Port", "Permcath"] },
      { name: "Nephrology", icon: "kidney", details: ["Dialysis", "AV Fistula Surgery"] },
      { name: "Gastroenterology & Endoscopy", icon: "endo", details: ["Gastroscopy", "Colonoscopy", "ERCP"] },
      { name: "GI Surgery", icon: "surgery", details: ["Liver", "Intestine", "Pancreas Surgery"] },
      { name: "Urology", icon: "urology", details: ["Kidney Stone Treatment", "RIRS", "URS", "PCNL", "ESWL", "Urodynamic Study"] },
      { name: "Oncology", icon: "oncology", details: ["Chemotherapy"] },
      { name: "Oncosurgery", icon: "oncology" },
      { name: "Neurosurgery", icon: "brain" },
      { name: "Neurology", icon: "brain" },
      { name: "Bariatric Surgery", icon: "surgery", details: ["Obesity & Weight Loss Clinic"] },
    ],
  },
  {
    id: "broad",
    label: "Broad Specialities",
    cards: [
      { name: "Internal Medicine", icon: "clinic" },
      { name: "ICU", icon: "icu" },
      { name: "24x7 Emergency & Trauma Care", icon: "emergency" },
      { name: "General Surgery", icon: "surgery" },
      { name: "Laparoscopy", icon: "surgery" },
      { name: "Orthopedics", icon: "bone" },
      { name: "Obstetrics & Gynecology", icon: "woman" },
      { name: "Pediatric Surgery", icon: "surgery" },
      { name: "NICU", icon: "nicu" },
      { name: "ENT", icon: "ent" },
      { name: "Plastic Surgery", icon: "surgery" },
      { name: "Proctology", icon: "clinic" },
    ],
  },
  {
    id: "aux",
    label: "Auxiliary Services",
    cards: [
      { name: "Physiotherapy & Rehabilitation", icon: "therapy" },
      { name: "Diabetes Clinic", icon: "clinic" },
      { name: "Diabetic Foot Clinic", icon: "clinic" },
      { name: "VAC Therapy", icon: "therapy" },
      { name: "Varicose Vein Clinic", icon: "clinic" },
      { name: "Breast Clinic", icon: "clinic" },
    ],
  },
  {
    id: "diag",
    label: "Diagnostics Services",
    cards: [
      { name: "Interventional Radiology Diagnostics", icon: "diagnostics" },
      { name: "Cardiac Diagnostics", icon: "diagnostics", details: ["TMT", "2D Echo", "Stress Echo"] },
      { name: "Endoscopy Diagnostics", icon: "diagnostics", details: ["Gastroscopy", "Colonoscopy", "ERCP"] },
      { name: "Mammography", icon: "diagnostics" },
    ],
  },
];

function MedicalIcon({ type }: { type: ServiceCard["icon"] }) {
  const cls = "h-6 w-6";

  switch (type) {
    case "heart":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "icu":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h18" />
          <path d="M6 7v10" />
          <path d="M18 7v10" />
          <path d="M3 17h18" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      );
    case "scan":
    case "diagnostics":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="14" height="14" rx="2" />
          <path d="M7 7h6v6H7z" />
          <path d="M17 17l4 4" />
        </svg>
      );
    case "kidney":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 4c-3.5 0-6 3-6 7s2.5 7 6 7c2 0 4-1.6 4-4.5V8.5C13 5.6 11 4 9 4z" />
          <path d="M15 4c3.5 0 6 3 6 7s-2.5 7-6 7c-2 0-4-1.6-4-4.5V8.5C11 5.6 13 4 15 4z" />
        </svg>
      );
    case "endo":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h12" />
          <circle cx="18" cy="12" r="2" />
          <path d="M6 9v6" />
          <path d="M9 10v4" />
          <path d="M12 9v6" />
        </svg>
      );
    case "emergency":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "surgery":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l7 7" />
          <path d="M20 20l-7-7" />
          <path d="M14 5l5 5" />
          <path d="M5 14l5 5" />
        </svg>
      );
    case "urology":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v8" />
          <path d="M8 7h8" />
          <path d="M7 13a5 5 0 0 0 10 0" />
          <path d="M12 13v8" />
        </svg>
      );
    case "oncology":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
    case "bone":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 9a2.5 2.5 0 1 1 3.5-3.5L15.5 12l-7 6.5A2.5 2.5 0 1 1 5 15l3.5-3L5 9z" />
          <path d="M19 9a2.5 2.5 0 1 0-3.5-3.5L8.5 12l7 6.5A2.5 2.5 0 1 0 19 15l-3.5-3L19 9z" />
        </svg>
      );
    case "brain":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3" />
          <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3" />
          <path d="M9 8h6" />
          <path d="M9 12h6" />
          <path d="M9 16h6" />
        </svg>
      );
    case "woman":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 12v9" />
          <path d="M8 17h8" />
        </svg>
      );
    case "nicu":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="10" rx="2" />
          <circle cx="9" cy="13" r="2" />
          <path d="M14 12h5" />
          <path d="M16.5 10v5" />
        </svg>
      );
    case "ent":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4c4 0 7 2 7 6s-3 6-7 6-7-2-7-6 3-6 7-6z" />
          <path d="M12 10v4" />
        </svg>
      );
    case "therapy":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21v-8" />
          <path d="M8 17h8" />
          <path d="M12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        </svg>
      );
    case "clinic":
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M9 8h6" />
          <path d="M12 5v6" />
          <path d="M8 14h8" />
          <path d="M8 17h5" />
        </svg>
      );
  }
}

export default function DepartmentsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getValidTab = (value: string | null): TabConfig["id"] =>
    value === "all" ||
    value === "super" ||
    value === "broad" ||
    value === "aux" ||
    value === "diag"
      ? value
      : "all";

  const [activeTab, setActiveTab] = useState<TabConfig["id"]>(
    getValidTab(searchParams.get("tab")),
  );

  useEffect(() => {
    const tabFromUrl = getValidTab(searchParams.get("tab"));
    if (tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams, activeTab]);

  const visibleCards = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.cards ?? tabs[0].cards,
    [activeTab]
  );

  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Specialities"
          title="All Our Specialities"
          subtitle="Comprehensive healthcare services delivered with advanced technology and expert care"
          badge="29+ services | 24/7 emergency support"
          breadcrumbs={[{ label: "Specialities" }]}
          actions={<HeroInfoCards items={departmentHeroCards} />}
        />
      }
    >
      <section className="mb-6">
        <h2 className="font-display font-bold text-2xl text-dark">All Our Specialities</h2>
        <p className="mt-2 text-sm text-muted max-w-3xl">
          Comprehensive healthcare services delivered with advanced technology and expert care
        </p>
      </section>

      <section className="rounded-2xl bg-white border border-slate-100 p-5 sm:p-6 shadow-card">
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  router.replace(`/departments?tab=${tab.id}`, { scroll: false });
                }}
                className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                aria-pressed={active}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
          {visibleCards.map((card) => {
            const hasDetails = Boolean(card.details?.length);
            const slug = getSpecialitySlugByName(card.name) ?? "internal-medicine";
            return (
              <Link
                key={card.name}
                href={`/specialities/${slug}`}
                aria-label={`Open ${card.name} speciality details`}
                className="group block rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-slate-500 transition-all duration-300 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10">
                  <MedicalIcon type={card.icon} />
                </div>

                <h3 className="text-center text-sm font-semibold leading-snug text-dark min-h-[40px]">
                  {card.name}
                </h3>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    hasDetails
                      ? "max-h-0 opacity-0 mt-0 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100 group-focus:mt-2 group-focus:max-h-24 group-focus:opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {hasDetails ? (
                    <p className="text-center text-xs leading-relaxed text-muted">
                      {card.details?.join(" | ")}
                    </p>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}


