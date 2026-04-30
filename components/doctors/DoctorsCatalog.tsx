"use client";

import { useMemo, useState } from "react";
import DoctorCard from "@/components/cards/DoctorCard";
import { doctors } from "@/data/doctors";

type DoctorTab = {
  id: string;
  label: string;
  doctorIds: string[];
};

const tabs: DoctorTab[] = [
  {
    id: "all",
    label: "All Doctors",
    doctorIds: doctors.map((doctor) => doctor.id),
  },
  {
    id: "cardio-ctvs",
    label: "Cardiology & Cardiothoracic Surgery",
    doctorIds: [
      "dr-swapnil-dhondibhau-mate",
      "dr-surajkumar-patil",
      "dr-nitin-thakare",
    ],
  },
  {
    id: "neuro-neurosurgery",
    label: "Neurology & Neurosurgery",
    doctorIds: ["dr-amol-mahajan", "dr-satish-dere"],
  },
  {
    id: "oncology",
    label: "Oncology (Cancer Care)",
    doctorIds: ["dr-vipul-doshi", "dr-anup-tamhanakar"],
  },
  {
    id: "gastro-renal-urology",
    label: "Gastro, Renal & Urology",
    doctorIds: [
      "dr-akshay-kulkarni",
      "dr-aditya-kulkarni",
      "dr-sharad-garudkar",
      "dr-sudarshan-daga",
    ],
  },
  {
    id: "general-specialized-surgery",
    label: "General & Specialized Surgery",
    doctorIds: ["dr-deepak-patil", "dr-ajay-naik"],
  },
  {
    id: "interventional-radiology",
    label: "Interventional Radiology",
    doctorIds: ["dr-yogesh-thube"],
  },
];

const doctorBadgeById: Record<string, string> = {
  "dr-swapnil-dhondibhau-mate": "Cardiology",
  "dr-surajkumar-patil": "Cardiology",
  "dr-nitin-thakare": "Cardiothoracic Surgery",
  "dr-amol-mahajan": "Neurology",
  "dr-satish-dere": "Neurosurgery",
  "dr-vipul-doshi": "Oncology",
  "dr-anup-tamhanakar": "Oncology",
  "dr-akshay-kulkarni": "Gastroenterology",
  "dr-aditya-kulkarni": "GI Surgery",
  "dr-sharad-garudkar": "Nephrology",
  "dr-sudarshan-daga": "Urology",
  "dr-deepak-patil": "Plastic Surgery",
  "dr-ajay-naik": "Pediatric Surgery",
  "dr-yogesh-thube": "Interventional Radiology",
};

export default function DoctorsCatalog() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const visibleDoctors = useMemo(() => {
    const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
    return active.doctorIds
      .map((id) => doctors.find((doctor) => doctor.id === id))
      .filter((doctor): doctor is (typeof doctors)[number] => Boolean(doctor));
  }, [activeTab]);

  return (
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            specialization={doctorBadgeById[doctor.id] ?? doctor.specialization}
            experience={doctor.experience}
            bio={doctor.bio}
            image={doctor.image}
          />
        ))}
      </div>
    </section>
  );
}
