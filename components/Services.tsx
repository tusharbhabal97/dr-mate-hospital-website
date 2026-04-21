"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { getSpecialitySlugByName } from "@/data/specialities";

type ServiceItem = {
  name: string;
  marathi: string;
  summary: string;
  icon: "emergency" | "critical" | "surgery" | "diagnostics" | "advanced" | "women" | "baby" | "rehab";
  specialityRef?: string;
};

const services: ServiceItem[] = [
  {
    name: "Emergency & Trauma Care",
    marathi: "24 × 7 आपत्कालीन सेवा व अपघात",
    summary: "Round-the-clock emergency response, trauma stabilization, and rapid critical care support.",
    icon: "emergency",
    specialityRef: "24x7 Emergency & Trauma Care",
  },
  {
    name: "ICU & ICCU",
    marathi: "अतिदक्षता विभाग",
    summary: "Intensive and coronary critical care monitoring for medically unstable and high-risk patients.",
    icon: "critical",
    specialityRef: "ICU",
  },
  {
    name: "Operation Theatre",
    marathi: "ऑपरेशन थिएटर",
    summary: "Modern operation theatre infrastructure for planned and emergency procedures.",
    icon: "surgery",
    specialityRef: "General Surgery",
  },
  {
    name: "CT Scan",
    marathi: "सीटी स्कॅन",
    summary: "High-speed cross-sectional imaging for rapid clinical diagnosis and treatment planning.",
    icon: "diagnostics",
  },
  {
    name: "Cath Lab",
    marathi: "कॅथ लॅब",
    summary: "Advanced cardiac intervention setup for angiography and catheter-based heart procedures.",
    icon: "advanced",
    specialityRef: "Cardiology",
  },
  {
    name: "Ventilator",
    marathi: "व्हेंटिलेटर",
    summary: "Mechanical respiratory support for critically ill patients in monitored settings.",
    icon: "critical",
    specialityRef: "ICU",
  },
  {
    name: "Defibrillator",
    marathi: "डिफिब्रिलेटर",
    summary: "Emergency rhythm correction support for life-threatening cardiac arrhythmias.",
    icon: "emergency",
  },
  {
    name: "BiPAP",
    marathi: "बायपॅप",
    summary: "Non-invasive breathing support for respiratory distress and pulmonary recovery.",
    icon: "critical",
  },
  {
    name: "ECG",
    marathi: "ईसीजी",
    summary: "Fast cardiac electrical activity assessment for chest pain, palpitations, and screening.",
    icon: "diagnostics",
    specialityRef: "Cardiology",
  },
  {
    name: "2D Echo",
    marathi: "टू-डी इको",
    summary: "Ultrasound-based heart function assessment for structure, valves, and pumping efficiency.",
    icon: "diagnostics",
    specialityRef: "Cardiology",
  },
  {
    name: "TMT",
    marathi: "ट्रेडमिल टेस्ट",
    summary: "Stress-based cardiac evaluation to assess exercise tolerance and ischemic risk.",
    icon: "diagnostics",
    specialityRef: "Cardiology",
  },
  {
    name: "USG & Doppler",
    marathi: "सोनोग्राफी व डॉपलर",
    summary: "Ultrasound and flow-based vascular diagnostics for abdominal, obstetric, and circulatory assessment.",
    icon: "diagnostics",
  },
  {
    name: "Digital X-Ray",
    marathi: "डिजिटल एक्स-रे",
    summary: "Rapid digital radiology imaging with improved clarity and low turnaround time.",
    icon: "diagnostics",
  },
  {
    name: "Mammography",
    marathi: "मॅमोग्राफी",
    summary: "Dedicated breast imaging for early screening, diagnosis, and follow-up.",
    icon: "diagnostics",
    specialityRef: "Breast Clinic",
  },
  {
    name: "Laboratory & Pathology",
    marathi: "लॅबोरेटरी व पॅथॉलॉजी",
    summary: "Comprehensive blood and pathology investigations supporting fast and accurate clinical decisions.",
    icon: "diagnostics",
  },
  {
    name: "Ambulance Service",
    marathi: "रुग्णवाहिका",
    summary: "Emergency ambulance support for timely patient transport and pre-hospital assistance.",
    icon: "emergency",
  },
  {
    name: "Endoscopy",
    marathi: "एंडोस्कोपी",
    summary: "Minimally invasive endoscopic evaluation and therapeutic GI procedures.",
    icon: "advanced",
    specialityRef: "Gastroenterology & Endoscopy",
  },
  {
    name: "Laparoscopy",
    marathi: "लेप्रोस्कोपी",
    summary: "Keyhole surgical approach for reduced pain, smaller incisions, and faster recovery.",
    icon: "surgery",
    specialityRef: "Laparoscopy",
  },
  {
    name: "Laser Surgery",
    marathi: "लेझर उपचार",
    summary: "Precision laser-assisted procedures for selected clinical and surgical indications.",
    icon: "surgery",
  },
  {
    name: "ESWL Lithotripsy",
    marathi: "लीथोट्रीप्सी (किडनी स्टोन साठी)",
    summary: "Non-invasive shock-wave treatment for kidney stone fragmentation and passage.",
    icon: "advanced",
    specialityRef: "Urology",
  },
  {
    name: "Urodynamic Study",
    marathi: "युरोडायनॅमिक तपासणी",
    summary: "Functional bladder and urinary pressure evaluation for voiding disorders.",
    icon: "diagnostics",
    specialityRef: "Urology",
  },
  {
    name: "Uroflowmetry",
    marathi: "युरोफ्लोमेट्री",
    summary: "Urine flow pattern testing for lower urinary tract assessment.",
    icon: "diagnostics",
    specialityRef: "Urology",
  },
  {
    name: "Dialysis Unit",
    marathi: "डायलिसिस",
    summary: "Structured renal replacement therapy support for acute and chronic kidney disease.",
    icon: "advanced",
    specialityRef: "Nephrology",
  },
  {
    name: "Pediatric Care & NICU",
    marathi: "बालरोग व एन आय सी यु",
    summary: "Child-focused and neonatal critical care with continuous monitoring and specialist support.",
    icon: "baby",
    specialityRef: "NICU",
  },
  {
    name: "Gynecology & Obstetrics",
    marathi: "स्त्रीरोग व प्रसूती",
    summary: "Comprehensive women-focused care including gynecology, pregnancy, and delivery support.",
    icon: "women",
    specialityRef: "Obstetrics & Gynecology",
  },
  {
    name: "Physiotherapy",
    marathi: "फिजिओथेरपी",
    summary: "Mobility restoration, pain management, and rehabilitation for post-surgical and chronic conditions.",
    icon: "rehab",
    specialityRef: "Physiotherapy & Rehabilitation",
  },
];

function ServiceIcon({ type }: { type: ServiceItem["icon"] }) {
  const cls = "w-6 h-6";

  switch (type) {
    case "emergency":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "critical":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
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
    case "advanced":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10" />
          <path d="M7 12h10" />
        </svg>
      );
    case "women":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 12v9" />
          <path d="M8 17h8" />
        </svg>
      );
    case "baby":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="3" />
          <path d="M7 21v-4a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "rehab":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 20l6-6" />
          <path d="M8 8l8 8" />
          <path d="M14 4l6 6" />
          <path d="M4 14l6 6" />
        </svg>
      );
    case "diagnostics":
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="14" height="14" rx="2" />
          <path d="M7 7h6v6H7z" />
          <path d="M17 17l4 4" />
        </svg>
      );
  }
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Services Available / उपलब्ध सुविधा
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            Hospital <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-3xl mx-auto">
            Complete emergency, critical care, diagnostics, procedures, and speciality support under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, idx) => {
            const slug = service.specialityRef
              ? getSpecialitySlugByName(service.specialityRef)
              : undefined;

            return (
              <article
                key={service.name}
                className="reveal service-card card bg-white border border-gray-100 rounded-xl p-6 group shadow-card hover:shadow-card-hover transition-all duration-300"
                style={{ transitionDelay: `${idx * 45}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon type={service.icon} />
                </div>

                <h3 className="font-display font-bold text-lg text-dark mb-1 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-muted mb-2">{service.marathi}</p>
                <p className="text-muted text-sm leading-relaxed mb-4">{service.summary}</p>

                {slug ? (
                  <Link
                    href={`/specialities/${slug}`}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-bold group-hover:gap-3 transition-all"
                  >
                    <span>View Speciality</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                    </svg>
                  </Link>
                ) : (
                  <span className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                    Available at Hospital
                  </span>
                )}
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-muted text-sm mb-4">
            Need speciality-level details? Explore all dedicated departments.
          </p>
          <Link
            href="/departments"
            className="btn-primary inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl shadow-btn hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Specialities
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
