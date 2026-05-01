"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    label: "All Our Specialities",
    cards: [
      { name: "Internal Medicine", icon: "clinic" },
      { name: "ICU", icon: "icu" },
      { name: "Cardiology", icon: "heart" },
      { name: "Interventional Radiology", icon: "scan" },
      { name: "Nephrology", icon: "kidney" },
      { name: "Gastroenterology & Endoscopy", icon: "endo" },
      { name: "24x7 Emergency & Trauma Care", icon: "emergency" },
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
      { name: "Cardiology", icon: "heart", details: ["Cath Lab", "Angiography", "Angioplasty", "Pacemaker Implantation", "Device Closure", "TMT", "2D Echo (Adult & Pediatric)", "Stress Echo"] },
      { name: "Interventional Radiology", icon: "scan", details: ["Limb/Kidney/Brain Angiography", "Angioplasty", "Chemo Port Insertion", "Permcath for Dialysis"] },
      { name: "Nephrology", icon: "kidney", details: ["Dialysis", "AV Fistula Surgery"] },
      { name: "Gastroenterology & Endoscopy", icon: "endo", details: ["Gastroscopy", "Colonoscopy", "ERCP", "Biopsy", "Stone Removal", "Stenting"] },
      { name: "GI Surgery", icon: "surgery", details: ["Liver", "Intestine", "Pancreas Surgery"] },
      { name: "Urology", icon: "urology", details: ["Kidney Stone Treatment", "RIRS", "URS", "PCNL", "ESWL", "Uroflowmetry", "Urodynamic Study"] },
      { name: "Oncology", icon: "oncology", details: ["Chemotherapy"] },
      { name: "Oncosurgery", icon: "oncology" },
      { name: "Neurosurgery", icon: "brain" },
      { name: "Neurology", icon: "brain" },
      { name: "Orthopedics", icon: "bone", details: ["Fracture Management", "Joint Replacement", "Arthroscopy"] },
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
      { name: "Varicose Vein Clinic", icon: "clinic", details: ["EVLA Laser Treatment", "Foam Sclerotherapy"] },
      { name: "Breast Clinic", icon: "clinic", details: ["Mammography"] },
      { name: "Obesity & Weight Loss Clinic", icon: "clinic", details: ["Bariatric Surgery"] },
    ],
  },
  {
    id: "diag",
    label: "Procedures & Diagnostics",
    cards: [
      { name: "Cardiology", icon: "diagnostics", details: ["TMT", "2D Echo (Adult & Pediatric)", "Stress Echo"] },
      { name: "Gastroenterology & Endoscopy", icon: "diagnostics", details: ["Gastroscopy", "Colonoscopy", "ERCP", "Biopsy"] },
      { name: "Interventional Radiology", icon: "diagnostics", details: ["Limb/Kidney/Brain Angiography", "Angioplasty"] },
      { name: "Breast Clinic", icon: "diagnostics", details: ["Mammography"] },
      { name: "Urology", icon: "diagnostics", details: ["Uroflowmetry", "Urodynamic Study"] },
    ],
  },
];

function getSpecialityTabClasses(tabId: TabConfig["id"], active: boolean): string {
  if (tabId === "all") {
    return active
      ? "bg-teal-700 text-white shadow-md hover:bg-teal-800"
      : "bg-teal-50 text-teal-800 hover:bg-teal-100";
  }
  if (tabId === "super") {
    return active
      ? "bg-blue-700 text-white shadow-md hover:bg-blue-800"
      : "bg-blue-50 text-blue-800 hover:bg-blue-100";
  }
  if (tabId === "broad") {
    return active
      ? "bg-violet-700 text-white shadow-md hover:bg-violet-800"
      : "bg-violet-50 text-violet-800 hover:bg-violet-100";
  }
  if (tabId === "aux") {
    return active
      ? "bg-amber-600 text-white shadow-md hover:bg-amber-700"
      : "bg-amber-50 text-amber-800 hover:bg-amber-100";
  }
  return active
    ? "bg-cyan-700 text-white shadow-md hover:bg-cyan-800"
    : "bg-cyan-50 text-cyan-800 hover:bg-cyan-100";
}

function getSpecialityTabIconColor(tabId: TabConfig["id"]): string {
  if (tabId === "all") return "#0f766e";
  if (tabId === "super") return "#1d4ed8";
  if (tabId === "broad") return "#6d28d9";
  if (tabId === "aux") return "#b45309";
  return "#0e7490";
}

function getSpecialitySourceTab(name: string): TabConfig["id"] {
  const inTab = (tabId: TabConfig["id"]) =>
    tabs.find((t) => t.id === tabId)?.cards.some((c) => c.name === name) ?? false;

  if (inTab("super")) return "super";
  if (inTab("broad")) return "broad";
  if (inTab("aux")) return "aux";
  if (inTab("diag")) return "diag";
  return "all";
}

function getEffectiveSpecialityIconColor(activeTabId: TabConfig["id"], cardName: string): string {
  if (activeTabId === "all") {
    return getSpecialityTabIconColor(getSpecialitySourceTab(cardName));
  }
  return getSpecialityTabIconColor(activeTabId);
}

function MedicalIcon({ type, name }: { type: ServiceCard["icon"]; name: string }) {
  const cls = "h-6 w-6";
  const n = name.toLowerCase();

  if (n.includes("internal medicine")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M12 7v6" />
        <path d="M9 10h6" />
        <path d="M8.5 15h7" />
      </svg>
    );
  }

  if (n === "icu") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h16" />
        <path d="M6 8v8" />
        <path d="M18 8v8" />
        <path d="M4 16h16" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  if (n.includes("interventional radiology")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="10" height="10" rx="2" />
        <path d="M10 7.5v5" />
        <path d="M7.5 10h5" />
        <path d="M15 15l4 4" />
      </svg>
    );
  }

  if (n.includes("nephrology")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4c-3.2 0-5.5 2.7-5.5 6.5S5.8 17 9 17c1.8 0 3.5-1.3 3.5-3.8V8.5C12.5 5.8 10.8 4 9 4z" />
        <path d="M15 4c3.2 0 5.5 2.7 5.5 6.5S18.2 17 15 17c-1.8 0-3.5-1.3-3.5-3.8V8.5C11.5 5.8 13.2 4 15 4z" />
      </svg>
    );
  }

  if (n.includes("gastroenterology")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h11" />
        <circle cx="17.5" cy="12" r="2.5" />
        <path d="M6.5 9.5v5" />
        <path d="M10 10.5v3" />
      </svg>
    );
  }

  if (n.includes("24x7 emergency")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    );
  }

  if (n.includes("general surgery")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5l6 6" />
        <path d="M13 13l6 6" />
        <path d="M14 4l6 6" />
      </svg>
    );
  }

  if (n.includes("gi surgery")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6l12 12" />
        <path d="M15 4l5 5" />
        <path d="M4 15l5 5" />
      </svg>
    );
  }

  if (n.includes("laparoscopy")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5l6 6" />
        <path d="M11 11l8 8" />
        <circle cx="8" cy="17" r="2" />
      </svg>
    );
  }

  if (n === "urology") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v7" />
        <path d="M8.5 7h7" />
        <path d="M7 14a5 5 0 0 0 10 0" />
        <path d="M12 14v6" />
      </svg>
    );
  }

  if (n === "oncology") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5c1.5 2 2.2 3.7 2.2 5.2A2.2 2.2 0 1 1 9.8 10c0-1.5.7-3.2 2.2-5z" />
        <path d="M12 12v7" />
        <path d="M9.5 16h5" />
      </svg>
    );
  }

  if (n.includes("oncosurgery")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5c1.5 2 2.2 3.7 2.2 5.2A2.2 2.2 0 1 1 9.8 10c0-1.5.7-3.2 2.2-5z" />
        <path d="M15 13l4 4" />
        <path d="M14 16l2-2" />
      </svg>
    );
  }

  if (n.includes("orthopedics")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9a2.5 2.5 0 1 1 3.5-3.5L15.5 12l-7 6.5A2.5 2.5 0 1 1 5 15l3.5-3L5 9z" />
        <path d="M19 9a2.5 2.5 0 1 0-3.5-3.5L8.5 12l7 6.5A2.5 2.5 0 1 0 19 15l-3.5-3L19 9z" />
      </svg>
    );
  }

  if (n.includes("neurosurgery")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3" />
        <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  if (n.includes("neurology")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3" />
        <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3" />
        <path d="M10 8h4M10 16h4" />
      </svg>
    );
  }

  if (n.includes("plastic surgery")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5l6 6" />
        <path d="M11 11l8 8" />
        <path d="M16 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
      </svg>
    );
  }

  if (n.includes("pediatric surgery")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8.5" cy="8.5" r="2" />
        <path d="M8.5 10.5v4.5" />
        <path d="M6.5 13h4" />
        <path d="M13 11l6 6" />
        <path d="M15 9l6 6" />
      </svg>
    );
  }

  if (n.includes("obstetrics") || n.includes("gynecology")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M12 11.5V20" />
        <path d="M9.5 16h5" />
      </svg>
    );
  }

  if (n === "nicu") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="10" rx="2" />
        <circle cx="10" cy="13" r="2" />
        <path d="M15 11h3M16.5 9.5v3" />
      </svg>
    );
  }

  if (n === "ent") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a4 4 0 0 1 4 4c0 2.2-1.5 3.5-2.7 4.5a3 3 0 0 0-1.3 2.5v1" />
        <path d="M12 19h.01" />
        <path d="M8 11c0-2.2 1.5-4 4-4" />
      </svg>
    );
  }

  if (n.includes("proctology")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5c-2 1.2-3 3-3 5.5 0 4 2.5 7.5 6 8.5 3.5-1 6-4.5 6-8.5C18 8 17 6.2 15 5" />
        <path d="M12 9v4" />
        <path d="M10 11h4" />
      </svg>
    );
  }

  if (n.includes("varicose vein")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4v16" />
        <path d="M15 4v16" />
        <path d="M9 8c2 0 2 2 4 2s2-2 4-2" />
        <path d="M9 14c2 0 2 2 4 2s2-2 4-2" />
      </svg>
    );
  }

  if (n.includes("diabetes clinic")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4s3.5 3.8 3.5 6A3.5 3.5 0 1 1 8.5 10c0-2.2 3.5-6 3.5-6z" />
        <path d="M12 14v5" />
        <path d="M9.5 16.5h5" />
      </svg>
    );
  }

  if (n.includes("diabetic foot")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14c0-2.5 1.5-4.5 4-5.5 1.8-.7 3.5.8 3.5 2.7V16a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3z" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="10.8" cy="8.8" r="1" />
        <circle cx="12.8" cy="8.4" r="1" />
      </svg>
    );
  }

  if (n.includes("vac therapy")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="8" height="8" rx="1.5" />
        <path d="M13 11h3l3 3" />
        <path d="M7.5 11h3" />
      </svg>
    );
  }

  if (n.includes("breast clinic")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 8h7a3 3 0 0 1 3 3v7" />
        <path d="M9 8v8a3 3 0 0 0 3 3h5" />
      </svg>
    );
  }

  if (n.includes("obesity") || n.includes("weight loss")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M12 9l2.5 2.5" />
        <circle cx="12" cy="9" r="1" />
      </svg>
    );
  }

  if (n.includes("physiotherapy")) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="6.5" r="2" />
        <path d="M10 8.5l2.5 3.5-2.5 4.5" />
        <path d="M12.5 12h4" />
        <path d="M8 17.5h5" />
      </svg>
    );
  }

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
          <path d="M12 5c1.5 2 2.2 3.7 2.2 5.2A2.2 2.2 0 1 1 9.8 10c0-1.5.7-3.2 2.2-5z" />
          <path d="M12 12v7" />
          <path d="M9.5 16h5" />
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
  const router = useRouter();

  const getValidTab = (value: string | null): TabConfig["id"] =>
    value === "all" ||
    value === "super" ||
    value === "broad" ||
    value === "aux" ||
    value === "diag"
      ? value
      : "all";

  const readTabFromUrl = (): TabConfig["id"] => {
    if (typeof window === "undefined") return "all";
    const params = new URLSearchParams(window.location.search);
    return getValidTab(params.get("tab"));
  };

  const [activeTab, setActiveTab] = useState<TabConfig["id"]>("all");

  useEffect(() => {
    const syncTabFromUrl = () => {
      const tabFromUrl = readTabFromUrl();
      setActiveTab((prev) => (prev === tabFromUrl ? prev : tabFromUrl));
    };

    syncTabFromUrl();
    window.addEventListener("popstate", syncTabFromUrl);
    return () => window.removeEventListener("popstate", syncTabFromUrl);
  }, []);

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
                  getSpecialityTabClasses(tab.id, active)
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
                <div
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-primary/5 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10"
                  style={{ color: getEffectiveSpecialityIconColor(activeTab, card.name) }}
                >
                  <MedicalIcon type={card.icon} name={card.name} />
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
