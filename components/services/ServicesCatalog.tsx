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
      })),
    ),
  },
  ...serviceCategoriesForPages.map((category) => ({
    id: category.slug,
    label: category.title,
    cards: category.items.map((service) => ({
      name: service.name,
      href: getServiceHref(category.slug, service.slug),
    })),
  })),
];

function ServiceGlyph({ seed }: { seed: number }) {
  const cls = "h-5 w-5";
  const variant = seed % 6;

  if (variant === 0) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4v16M4 12h16" />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12h8" />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  if (variant === 3) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 8h12M6 12h12M6 16h12" />
      </svg>
    );
  }

  if (variant === 4) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }

  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 6h8v12H8z" />
      <path d="M10 10h4M10 14h4" />
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
                  active
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-slate-500 transition-all duration-300 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10">
                <ServiceGlyph seed={index + card.name.length} />
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
