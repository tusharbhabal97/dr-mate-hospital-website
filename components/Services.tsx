"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    id: "cardiology",
    title: "Cardiology",
    desc: "Advanced heart care with state-of-the-art diagnostic tools and expert cardiologists for comprehensive cardiac treatment.",
    color: "from-red-50 to-red-100/50",
    iconBg: "bg-medical/10",
    iconColor: "#E53935",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#E53935" />
      </svg>
    ),
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    desc: "Expert bone and joint care including joint replacement, spine surgery, and sports injury treatment with quick recovery.",
    color: "from-blue-50 to-blue-100/50",
    iconBg: "bg-primary/10",
    iconColor: "#1F3C88",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#1F3C88" opacity="0.25"/>
        <path d="M12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1F3C88"/>
        <rect x="11" y="4" width="2" height="3" rx="1" fill="#1F3C88"/>
        <rect x="11" y="13" width="2" height="5" rx="1" fill="#1F3C88"/>
        <rect x="7" y="8.5" width="3" height="2" rx="1" fill="#1F3C88"/>
        <rect x="14" y="8.5" width="3" height="2" rx="1" fill="#1F3C88"/>
      </svg>
    ),
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    desc: "Specialized healthcare for infants, children, and adolescents with a gentle, child-friendly approach and dedicated pediatric ICU.",
    color: "from-green-50 to-green-100/50",
    iconBg: "bg-healing/10",
    iconColor: "#1FA971",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1FA971">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
  },
  {
    id: "neurology",
    title: "Neurology",
    desc: "Comprehensive diagnosis and treatment for brain, spine, and nervous system disorders using advanced neuroimaging technology.",
    color: "from-primary/5 to-primary/10",
    iconBg: "bg-primary/10",
    iconColor: "#1F3C88",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1F3C88">
        <path d="M11 2v2.07A8.001 8.001 0 0 0 4.07 11H2v2h2.07A8.001 8.001 0 0 0 11 19.93V22h2v-2.07A8.001 8.001 0 0 0 19.93 13H22v-2h-2.07A8.001 8.001 0 0 0 13 4.07V2h-2zm1 4a6 6 0 1 1 0 12A6 6 0 0 1 12 6z"/>
        <circle cx="12" cy="12" r="2" fill="#1F3C88"/>
      </svg>
    ),
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    desc: "Round-the-clock emergency services with rapid response teams, trauma care units, and intensive care facilities.",
    color: "from-medical/5 to-medical/10",
    iconBg: "bg-medical/10",
    iconColor: "#E53935",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#E53935">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V7c0-.55.45-1 1-1z"/>
      </svg>
    ),
  },
  {
    id: "diagnostics-lab",
    title: "Diagnostics & Lab",
    desc: "State-of-the-art diagnostic laboratory offering comprehensive pathology, radiology, and imaging services with rapid results.",
    color: "from-primary/5 to-primary/10",
    iconBg: "bg-primary/10",
    iconColor: "#1F3C88",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1F3C88">
        <path d="M19.5 3.09L15 7.59V3h-2v7h7V8h-4.5l4.5-4.5-1.5-1.41zM3 11v2h7v-2H3zm0 4v2h5v-2H3zm0 4v2h7v-2H3zm8-4v2h10v-2H11zm0 4v2h10v-2H11zm0-8v2h6v-2h-6z"/>
      </svg>
    ),
  },
  {
    id: "gynecology",
    title: "Gynecology",
    desc: "Comprehensive women's healthcare including maternity, reproductive health, minimally invasive surgeries, and prenatal care.",
    color: "from-healing/5 to-healing/10",
    iconBg: "bg-healing/10",
    iconColor: "#1FA971",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1FA971">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-1 9v9l1-1.5 1 1.5V13a5.007 5.007 0 0 1-2 0z"/>
      </svg>
    ),
  },
  {
    id: "dental-care",
    title: "Dental Care",
    desc: "Complete dental solutions from routine checkups to advanced cosmetic dentistry, implants, and orthodontic treatments.",
    color: "from-primary/5 to-primary/10",
    iconBg: "bg-primary/10",
    iconColor: "#1F3C88",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1F3C88">
        <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.5 2.5 1 4l1 4c.2.8.8 1.5 1.5 1.5s1.3-.7 1.5-1.5l.5-2 .5 2c.2.8.8 1.5 1.5 1.5s1.3-.7 1.5-1.5l1-4c.5-1.5 1-2.5 1-4C17.5 4 15.5 2 12 2z"/>
      </svg>
    ),
  },
];

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
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Our Departments
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            Comprehensive{" "}
            <span className="gradient-text">Medical Services</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto">
            We offer a wide range of specialized medical services with expert
            doctors and cutting-edge technology for the best patient outcomes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className="reveal service-card card bg-white border border-gray-100 rounded-xl p-6 cursor-pointer group shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${service.iconBg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-dark mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-muted text-sm leading-relaxed mb-4">{service.desc}</p>

              {/* Learn More */}
              <Link
                href={`/departments/${service.id}`}
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold group-hover:gap-3 transition-all"
              >
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-muted text-sm mb-4">
            Don't see your specialty? We have 25+ departments.
          </p>
          <Link
            href="/departments"
            className="btn-primary inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl shadow-btn hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Departments
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
