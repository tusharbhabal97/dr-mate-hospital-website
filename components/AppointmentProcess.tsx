"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Select Department",
    desc: "Choose from 30+ medical specialties. Our website makes it easy to find the right department for your needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1F3C88">
        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.33C18 2.55 15.45 0 12.27 0c-1.63 0-3.1.8-4.03 2.02-.17.22-.32.46-.45.72C7.01.81 5.64 0 4 0 2.34 0 1 1.34 1 3c0 1.66 1.34 3 3 3H4.18C3.07 6 2 7.07 2 8.18V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
      </svg>
    ),
    color: "bg-primary/10 border-primary/20",
    numColor: "text-primary",
  },
  {
    step: "02",
    title: "Choose Doctor",
    desc: "Browse doctor profiles, read patient reviews, and select the specialist who best matches your requirements.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1FA971">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    color: "bg-healing/10 border-healing/20",
    numColor: "text-healing",
  },
  {
    step: "03",
    title: "Book Appointment",
    desc: "Select a convenient time slot. Receive instant confirmation via SMS and email with all details.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1F3C88">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
      </svg>
    ),
    color: "bg-primary/10 border-primary/20",
    numColor: "text-primary",
  },
  {
    step: "04",
    title: "Visit Hospital",
    desc: "Arrive at your scheduled time. Our staff will be ready to assist you throughout your entire visit.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1F3C88">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    color: "bg-primary/10 border-primary/20",
    numColor: "text-primary",
  },
];

export default function AppointmentProcess() {
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
    <section id="appointment-process" className="py-16 lg:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Simple Process
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            How to Book an{" "}
            <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto">
            Getting the healthcare you need is simple. Follow these 4 easy steps
            to book your appointment with our expert doctors.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-16 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0" style={{ left: '12.5%', right: '12.5%' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent animate-shimmer opacity-30" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                className="reveal flex flex-col items-center text-center group"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Step Number + Icon */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    {/* Inner circle */}
                    <div
                      className={`w-14 h-14 rounded-full ${step.color} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.icon}
                    </div>
                  </div>
                  {/* Step badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-display font-extrabold flex items-center justify-center shadow-btn">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg text-dark mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <div className="glass card rounded-xl p-8 max-w-lg mx-auto border border-primary/10 shadow-card">
            <h3 className="font-display font-bold text-xl text-dark mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-muted text-sm mb-5">
              Book your appointment online in under 2 minutes or call us for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/book-appointment"
                className="btn-primary text-sm px-7 py-3"
              >
                Book Online Now
              </a>
              <a
                href="tel:+912012345678"
                className="btn-outline text-sm px-7 py-3"
              >
                Call +91 20-1234-5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
