"use client";

import { useEffect, useRef } from "react";

const facilities = [
  {
    title: "Advanced ICU",
    desc: "State-of-the-art Intensive Care Unit with 24/7 monitoring and critical care specialists.",
    icon: "🏥",
    stat: "50 Beds",
    color: "border-medical/20 bg-medical/5",
    iconBg: "bg-medical/10",
  },
  {
    title: "Modern OT",
    desc: "Laminar flow operation theatres with robotic surgical systems and real-time imaging.",
    icon: "⚕️",
    stat: "12 OTs",
    color: "border-primary/20 bg-primary/5",
    iconBg: "bg-primary/10",
  },
  {
    title: "Diagnostics Lab",
    desc: "Fully automated lab with 1500+ tests available. Results within hours, not days.",
    icon: "🔬",
    stat: "1500+ Tests",
    color: "border-primary/20 bg-primary/5",
    iconBg: "bg-primary/10",
  },
  {
    title: "Emergency Ward",
    desc: "Rapid response emergency department with dedicated trauma bays and ambulance services.",
    icon: "🚑",
    stat: "24/7 Active",
    color: "border-medical/20 bg-medical/5",
    iconBg: "bg-medical/10",
  },
  {
    title: "24/7 Pharmacy",
    desc: "In-house pharmacy with all essential medicines, surgical supplies and home delivery.",
    icon: "💊",
    stat: "5000+ Medicines",
    color: "border-healing/20 bg-healing/5",
    iconBg: "bg-healing/10",
  },
  {
    title: "MRI & CT Scan",
    desc: "High-resolution 3T MRI and 128-slice CT scanner for precise diagnosis.",
    icon: "🩻",
    stat: "3T MRI",
    color: "border-primary/20 bg-primary/5",
    iconBg: "bg-primary/10",
  },
  {
    title: "Blood Bank",
    desc: "Fully equipped blood bank with regular supply of all blood groups and components.",
    icon: "🩸",
    stat: "All Groups",
    color: "border-medical/20 bg-medical/5",
    iconBg: "bg-medical/10",
  },
  {
    title: "Rehabilitation",
    desc: "Comprehensive physiotherapy and rehabilitation center with modern equipment.",
    icon: "🏋️",
    stat: "100+ Equipment",
    color: "border-primary/20 bg-primary/5",
    iconBg: "bg-primary/10",
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
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              World-Class Infrastructure
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            Hospital <span className="gradient-text">Facilities</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto">
            Our hospital is equipped with the most advanced medical technology and
            infrastructure to ensure the best patient care experience.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, idx) => (
            <div
              key={facility.title}
              className="reveal service-card card bg-white border border-gray-100 rounded-xl p-6 group cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${facility.iconBg} rounded-full flex items-center justify-center text-xl text-primary group-hover:scale-110 transition-transform`}>
                  {facility.icon}
                </div>
                <span className="text-xs font-bold bg-white text-primary px-2.5 py-1 rounded-lg border border-primary/10 shadow-sm">
                  {facility.stat}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-dark mb-2 group-hover:text-primary transition-colors">
                {facility.title}
              </h3>
              <p className="text-muted text-xs leading-relaxed">{facility.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-14 reveal">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white overflow-hidden relative">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

            <div className="relative z-10 grid sm:grid-cols-4 gap-6 text-center">
              {[
                { num: "200+", label: "Hospital Beds" },
                { num: "12", label: "Operating Theatres" },
                { num: "50", label: "ICU Beds" },
                { num: "3T", label: "MRI Scanner" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display font-extrabold text-3xl lg:text-4xl mb-1">{item.num}</p>
                  <p className="text-white/70 text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
