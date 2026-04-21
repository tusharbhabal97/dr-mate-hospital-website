"use client";

import { useEffect, useRef } from "react";

type FacilityItem = {
  english: string;
  marathi: string;
};

type FacilityGroup = {
  title: string;
  highlight: string;
  items: FacilityItem[];
};

const facilityGroups: FacilityGroup[] = [
  {
    title: "Emergency & Critical Care",
    highlight: "24x7 life-saving support",
    items: [
      { english: "Emergency & Trauma Care", marathi: "24 × 7 आपत्कालीन सेवा व अपघात" },
      { english: "ICU & ICCU", marathi: "अतिदक्षता विभाग" },
      { english: "Operation Theatre", marathi: "ऑपरेशन थिएटर" },
      { english: "Ventilator", marathi: "व्हेंटिलेटर" },
      { english: "Defibrillator", marathi: "डिफिब्रिलेटर" },
      { english: "BiPAP", marathi: "बायपॅप" },
      { english: "Ambulance Service", marathi: "रुग्णवाहिका सेवा" },
    ],
  },
  {
    title: "Diagnostics & Imaging",
    highlight: "Accurate, faster diagnosis",
    items: [
      { english: "CT Scan", marathi: "सीटी स्कॅन" },
      { english: "ECG", marathi: "ईसीजी" },
      { english: "2D Echo", marathi: "टू-डी इको" },
      { english: "TMT", marathi: "ट्रेडमिल टेस्ट" },
      { english: "USG & Doppler", marathi: "सोनोग्राफी व डॉपलर" },
      { english: "Digital X-Ray", marathi: "डिजिटल एक्स-रे" },
      { english: "Mammography", marathi: "मॅमोग्राफी" },
      { english: "Laboratory & Pathology", marathi: "लॅबोरेटरी व पॅथॉलॉजी" },
    ],
  },
  {
    title: "Advanced Procedures",
    highlight: "Minimally invasive care",
    items: [
      { english: "Cath Lab", marathi: "कॅथ लॅब" },
      { english: "Endoscopy", marathi: "एंडोस्कोपी" },
      { english: "Laparoscopy", marathi: "लेप्रोस्कोपी" },
      { english: "Laser Surgery", marathi: "लेझर उपचार" },
      { english: "ESWL Lithotripsy", marathi: "लीथोट्रीप्सी (किडनी स्टोन साठी)" },
      { english: "Urodynamic Study", marathi: "युरोडायनॅमिक तपासणी" },
      { english: "Uroflowmetry", marathi: "युरोफ्लोमेट्री" },
      { english: "Dialysis Unit", marathi: "डायलिसिस" },
    ],
  },
  {
    title: "Women, Child & Recovery",
    highlight: "Continuity of care",
    items: [
      { english: "Pediatric Care & NICU", marathi: "बालरोग व एन आय सी यु" },
      { english: "Gynecology & Obstetrics", marathi: "स्त्रीरोग व प्रसूती" },
      { english: "Physiotherapy", marathi: "फिजिओथेरपी" },
    ],
  },
];

export default function Facilities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Facilities Available / उपलब्ध सुविधा
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            Hospital <span className="gradient-text">Facilities</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto">
            Advanced infrastructure with complete emergency, diagnostic, critical care,
            and speciality support under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {facilityGroups.map((group, idx) => (
            <article
              key={group.title}
              className="reveal card bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="font-display font-bold text-lg text-dark">{group.title}</h3>
                <span className="text-[11px] font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-lg whitespace-nowrap">
                  {group.highlight}
                </span>
              </div>

              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.english} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-sm leading-relaxed text-slate-700">
                      <span className="font-semibold text-dark">{item.english}</span>{" "}
                      <span className="text-muted">({item.marathi})</span>
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 reveal">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white overflow-hidden relative">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

            <div className="relative z-10 grid sm:grid-cols-4 gap-6 text-center">
              {[
                { num: "24x7", label: "Emergency Response" },
                { num: "ICU", label: "Critical Care Readiness" },
                { num: "Cath Lab", label: "Cardiac Intervention" },
                { num: "Dialysis", label: "Renal Support Services" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display font-extrabold text-3xl lg:text-4xl mb-1">{item.num}</p>
                  <p className="text-white/80 text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
