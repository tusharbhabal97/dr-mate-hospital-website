"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ServicesDropdown.module.css";

export const servicesData = {
  "Emergency & Critical Care": [
    "Emergency & Trauma Care",
    "ICU & ICCU",
    "Ventilator",
    "Defibrillator",
    "BiPAP",
    "Ambulance Service",
  ],
  "Cardiac & Monitoring": ["ECG", "2D Echo", "TMT"],
  "Diagnostics & Imaging": ["CT Scan", "USG & Doppler", "Digital X-Ray", "Mammography"],
  "Laboratory Services": ["Laboratory & Pathology"],
  "Surgical & Procedures": [
    "Operation Theatre",
    "Endoscopy",
    "Laparoscopy",
    "Laser Surgery",
    "ESWL Lithotripsy",
  ],
  "Urology & Renal Care": ["Urodynamic Study", "Uroflowmetry", "Dialysis Unit"],
  "Specialized Care": ["Pediatric Care & NICU", "Gynecology & Obstetrics", "Physiotherapy"],
  "Cardiology Support": ["Cath Lab"],
} as const;

export type ServiceCategory = keyof typeof servicesData;

const serviceCategories = Object.keys(servicesData) as ServiceCategory[];

const toServiceAnchor = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const servicesList = serviceCategories.flatMap((category) =>
  servicesData[category].map((title) => ({
    title,
    href: `/services#${toServiceAnchor(title)}`,
  })),
);

type ServicesDropdownProps = {
  isOpen?: boolean;
  onServiceClick?: () => void;
};

export default function ServicesDropdown({ isOpen = false, onServiceClick }: ServicesDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(
    "Emergency & Critical Care",
  );
  const [showServicesPanel, setShowServicesPanel] = useState(false);
  const activeServices = servicesData[activeCategory];

  useEffect(() => {
    if (isOpen) {
      setShowServicesPanel(false);
      setActiveCategory("Emergency & Critical Care");
    }
  }, [isOpen]);

  return (
    <div
      className="relative"
      onMouseLeave={() => setShowServicesPanel(false)}
    >
      <aside
        onMouseEnter={() => setShowServicesPanel(true)}
        onFocus={() => setShowServicesPanel(true)}
        className="w-[250px] rounded-[10px] border border-slate-700/70 bg-[#0f172a] p-5 shadow-[0_18px_42px_rgba(2,6,23,0.48)]"
      >
        <ul role="tablist" aria-label="Service categories" className="space-y-1.5">
          {serviceCategories.map((category) => {
            const selected = activeCategory === category;
            return (
              <li key={category}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="services-category-panel"
                  onMouseEnter={() => {
                    setShowServicesPanel(true);
                    setActiveCategory(category);
                  }}
                  onFocus={() => {
                    setShowServicesPanel(true);
                    setActiveCategory(category);
                  }}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-200 ${
                    selected
                      ? "bg-[#1f2937] font-semibold text-white"
                      : "text-slate-300 hover:bg-[#1f2937]/80 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <div
        id="services-category-panel"
        role="tabpanel"
        onMouseEnter={() => setShowServicesPanel(true)}
        onFocus={() => setShowServicesPanel(true)}
        className={`absolute left-full top-0 ml-2 w-[min(92vw,560px)] rounded-[10px] border border-slate-700/70 bg-[#111827] p-5 md:p-6 shadow-[0_18px_42px_rgba(2,6,23,0.48)] transition-all duration-200 ${
          showServicesPanel
            ? "visible translate-x-0 opacity-100 pointer-events-auto"
            : "invisible -translate-x-2 opacity-0 pointer-events-none"
        }`}
      >
        <ul key={activeCategory} className={`space-y-1 ${styles.panelFadeIn}`}>
          {activeServices.map((service) => (
            <li key={service}>
              <Link
                href={`/services#${toServiceAnchor(service)}`}
                onClick={onServiceClick}
                className="block rounded-md px-1 py-2.5 text-sm text-slate-200 transition-colors duration-200 hover:text-white hover:underline"
              >
                {service}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
