"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  allServicesCategory,
  getServiceHref,
  serviceCategoriesForPages,
} from "@/data/services-menu";

type ServiceCard = {
  name: string;
  href: string;
  sourceTabId: string;
};

type ServiceTab = {
  id: string;
  label: string;
  cards: ServiceCard[];
};

const tabs: ServiceTab[] = [
  {
    id: "all",
    label: "All Our Services",
    cards: serviceCategoriesForPages.flatMap((category) =>
      category.items.map((service) => ({
        name: service.name,
        href: getServiceHref(category.slug, service.slug),
        sourceTabId: category.slug,
      })),
    ),
  },
  ...serviceCategoriesForPages.map((category) => ({
    id: category.slug,
    label: category.title,
    cards: category.items.map((service) => ({
      name: service.name,
      href: getServiceHref(category.slug, service.slug),
      sourceTabId: category.slug,
    })),
  })),
];

function getServiceTabClasses(tabId: string, active: boolean): string {
  if (tabId === "all") {
    return active
      ? "bg-blue-700 text-white shadow-md hover:bg-blue-800"
      : "bg-blue-50 text-blue-800 hover:bg-blue-100";
  }
  if (tabId === "emergency-critical-care") {
    return active
      ? "bg-red-700 text-white shadow-md hover:bg-red-800"
      : "bg-red-50 text-red-800 hover:bg-red-100";
  }
  if (tabId === "cardiac-monitoring") {
    return active
      ? "bg-cyan-700 text-white shadow-md hover:bg-cyan-800"
      : "bg-cyan-50 text-cyan-800 hover:bg-cyan-100";
  }
  if (tabId === "diagnostics-imaging") {
    return active
      ? "bg-violet-700 text-white shadow-md hover:bg-violet-800"
      : "bg-violet-50 text-violet-800 hover:bg-violet-100";
  }
  if (tabId === "laboratory-services") {
    return active
      ? "bg-sky-700 text-white shadow-md hover:bg-sky-800"
      : "bg-sky-50 text-sky-800 hover:bg-sky-100";
  }
  if (tabId === "surgical-procedures") {
    return active
      ? "bg-amber-600 text-white shadow-md hover:bg-amber-700"
      : "bg-amber-50 text-amber-800 hover:bg-amber-100";
  }
  if (tabId === "urology-renal-care") {
    return active
      ? "bg-teal-700 text-white shadow-md hover:bg-teal-800"
      : "bg-teal-50 text-teal-800 hover:bg-teal-100";
  }
  if (tabId === "specialized-care") {
    return active
      ? "bg-emerald-700 text-white shadow-md hover:bg-emerald-800"
      : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100";
  }
  if (tabId === "cardiology-support") {
    return active
      ? "bg-indigo-700 text-white shadow-md hover:bg-indigo-800"
      : "bg-indigo-50 text-indigo-800 hover:bg-indigo-100";
  }
  return active
    ? "bg-slate-700 text-white shadow-md hover:bg-slate-800"
    : "bg-slate-100 text-slate-700 hover:bg-slate-200";
}

function getServiceTabIconColor(tabId: string): string {
  if (tabId === "all") return "#1d4ed8";
  if (tabId === "emergency-critical-care") return "#b91c1c";
  if (tabId === "cardiac-monitoring") return "#0e7490";
  if (tabId === "diagnostics-imaging") return "#6d28d9";
  if (tabId === "laboratory-services") return "#0369a1";
  if (tabId === "surgical-procedures") return "#b45309";
  if (tabId === "urology-renal-care") return "#0f766e";
  if (tabId === "specialized-care") return "#047857";
  if (tabId === "cardiology-support") return "#4338ca";
  return "#334155";
}

function getEffectiveServiceIconColor(activeTabId: string, card: ServiceCard): string {
  if (activeTabId === "all") {
    return getServiceTabIconColor(card.sourceTabId);
  }
  return getServiceTabIconColor(activeTabId);
}

function ServiceGlyph({ name }: { name: string }) {
  const cls = "h-5 w-5";
  const iconName = name.toLowerCase();

  if (iconName.includes("emergency") || iconName.includes("trauma")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M12 3v18" />
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </svg>
    );
  }

  if (iconName.includes("icu") || iconName.includes("ventilator")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M7 12h2l2-3 3 6 1-3h2" />
      </svg>
    );
  }

  if (iconName.includes("defibrillator")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3L6 13h5l-1 8 8-12h-5l1-6z" />
      </svg>
    );
  }

  if (iconName.includes("bipap")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h5" />
        <path d="M15 12h5" />
        <path d="M9 9h6v6H9z" />
      </svg>
    );
  }

  if (iconName.includes("ambulance")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="12" height="8" rx="1.5" />
        <path d="M15 10h3l3 3v3h-6z" />
        <circle cx="7" cy="17" r="1.5" />
        <circle cx="17" cy="17" r="1.5" />
        <path d="M6 11h4" />
        <path d="M8 9v4" />
      </svg>
    );
  }

  if (iconName.includes("ecg") || iconName.includes("tmt")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2-3 3 6 2-4h7" />
      </svg>
    );
  }

  if (iconName.includes("echo")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20s-6-4.5-6-9a3.5 3.5 0 0 1 6-2.3A3.5 3.5 0 0 1 18 11c0 4.5-6 9-6 9z" />
        <path d="M9.5 12h2M10.5 11v2" />
      </svg>
    );
  }

  if (iconName.includes("ct scan")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  if (iconName.includes("usg") || iconName.includes("doppler")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="4" width="12" height="10" rx="2" />
        <path d="M12 14v6" />
        <path d="M10 20h4" />
        <path d="M7.5 9.5c1.2-1.2 3.8-1.2 5 0" />
      </svg>
    );
  }

  if (iconName.includes("x-ray")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 9l6 6" />
        <path d="M15 9l-6 6" />
      </svg>
    );
  }

  if (iconName.includes("mammography")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 8h7a3 3 0 0 1 3 3v7" />
        <path d="M9 8v8a3 3 0 0 0 3 3h5" />
        <path d="M15 11h4" />
      </svg>
    );
  }

  if (iconName.includes("laboratory") || iconName.includes("pathology")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 3v5l-4 7a3 3 0 0 0 2.6 4.5h6.8A3 3 0 0 0 18 15l-4-7V3" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  if (iconName.includes("operation theatre")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3" />
        <path d="M12 11v7" />
        <path d="M7 18h10" />
      </svg>
    );
  }

  if (iconName.includes("endoscopy")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="8" r="2" />
        <path d="M9 8h6a4 4 0 0 1 0 8h-2" />
        <path d="M13 16v3" />
      </svg>
    );
  }

  if (iconName.includes("laparoscopy")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 6l6 6" />
        <path d="M11 12l7 7" />
        <path d="M15 4l5 5" />
        <circle cx="8" cy="17" r="2" />
      </svg>
    );
  }

  if (iconName.includes("laser surgery")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="16" r="3" />
        <path d="M20 4l-7 7" />
        <path d="M18 4h2v2" />
        <path d="M10 14l3-3" />
      </svg>
    );
  }

  if (iconName.includes("lithotripsy") || iconName.includes("eswl")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 5c-2.5 2-3 5.7-1.2 8.3L12 20l5.2-6.7C19 10.7 18.5 7 16 5c-1.6-1.3-3.8-1.2-5 0-1.2-1.2-3.4-1.3-5 0z" />
        <circle cx="13.5" cy="11.5" r="1.5" />
        <path d="M5 11h3M4 13h3" />
      </svg>
    );
  }

  if (iconName.includes("urodynamic")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v9" />
        <path d="M9 10l3 3 3-3" />
        <path d="M6 20h12" />
        <path d="M16 6h2v4" />
      </svg>
    );
  }

  if (iconName.includes("uroflowmetry")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 18h14" />
        <path d="M8 15c1.5-2 3-3 4-6 1 3 2.5 4 4 6" />
        <path d="M12 5v3" />
      </svg>
    );
  }

  if (iconName.includes("dialysis")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 5c-2.2 1.8-2.7 5-.9 7.2L10 16" />
        <path d="M16 5c2.2 1.8 2.7 5 .9 7.2L14 16" />
        <path d="M12 9v8" />
        <path d="M10 17h4" />
      </svg>
    );
  }

  if (iconName.includes("pediatric") || iconName.includes("nicu")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="6" width="14" height="12" rx="2" />
        <circle cx="12" cy="10" r="2" />
        <path d="M9.5 16a2.5 2.5 0 0 1 5 0" />
      </svg>
    );
  }

  if (iconName.includes("gynecology") || iconName.includes("obstetrics")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M12 11v8" />
        <path d="M9.5 16h5" />
      </svg>
    );
  }

  if (iconName.includes("physiotherapy")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="6.5" r="2" />
        <path d="M10 8.5l2.5 3.5-2.5 4.5" />
        <path d="M12.5 12h4" />
        <path d="M8 17.5h5" />
      </svg>
    );
  }

  if (iconName.includes("cath lab")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h4l2-3 3 6 2-4h5" />
        <circle cx="19" cy="7" r="2" />
      </svg>
    );
  }

  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export default function ServicesCatalog() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const visibleCards = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.cards ?? tabs[0].cards,
    [activeTab],
  );

  return (
    <>
      <section className="mb-6">
        <h2 className="font-display font-bold text-2xl text-dark">All Our Services</h2>
        <p className="mt-2 text-sm text-muted max-w-3xl">{allServicesCategory.overview}</p>
      </section>

      <section className="rounded-2xl bg-white border border-slate-100 p-5 sm:p-6 shadow-card">
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  getServiceTabClasses(tab.id, active)
                } cursor-pointer`}
                aria-pressed={active}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
          {visibleCards.map((card, index) => (
            <Link
              key={`${card.href}-${index}`}
              href={card.href}
              className="group block rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
              aria-label={`Open ${card.name} service details`}
            >
              <div
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-primary/5 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10"
                style={{ color: getEffectiveServiceIconColor(activeTab, card) }}
              >
                <ServiceGlyph name={card.name} />
              </div>
              <h3 className="text-center text-sm font-semibold leading-snug text-dark min-h-[40px]">
                {card.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
