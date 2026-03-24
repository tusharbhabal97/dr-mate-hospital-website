"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "25+", label: "Years of Excellence", icon: "🏆" },
  { value: "500+", label: "Expert Doctors", icon: "👨‍⚕️" },
  { value: "50K+", label: "Happy Patients", icon: "❤️" },
  { value: "30+", label: "Specialties", icon: "🏥" },
];

const highlights = [
  "NABH Accredited Multi-Specialty Hospital",
  "24/7 Emergency & Trauma Care",
  "Advanced Robotic Surgery Technology",
  "200+ Bed Capacity with ICU Facilities",
  "International Patient Services",
  "Cashless Insurance from 200+ providers",
];

export default function About() {
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
    <section id="about" className="py-16 lg:py-24 bg-surface dot-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative reveal-left">
            {/* Main card */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-10 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <span className="text-2xl mb-2 block">{stat.icon}</span>
                      <p className="font-display font-extrabold text-3xl mb-1">{stat.value}</p>
                      <p className="text-white/70 text-sm font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm">NABH Certified</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Dr. Mate Hospital is nationally accredited and ISO certified, maintaining the highest standards of healthcare delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-card p-4 z-20 border border-primary/10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#10B981">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-dark">NABH</p>
                  <p className="text-xs text-muted">Accredited</p>
                </div>
              </div>
            </div>

            {/* Emergency badge */}
            <div className="absolute -bottom-8 -left-4 bg-white rounded-2xl shadow-card p-4 z-20 border border-primary/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400 absolute top-0 right-0 animate-pulse" />
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#EF4444">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V7c0-.55.45-1 1-1z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-sm text-dark">24/7 Emergency</p>
                  <p className="text-xs text-green-500 font-semibold">Always Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                About Dr. Mate Hospital
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-6 leading-tight">
              Your Health, Our{" "}
              <span className="gradient-text">Top Priority</span>
            </h2>

            <p className="text-muted text-base lg:text-lg leading-relaxed mb-6">
              Established in 1980, Dr. Mate Hospital has been Pune&apos;s most trusted multi-specialty 
              hospital for over 25 years. We combine cutting-edge medical technology with 
              compassionate patient care to deliver world-class healthcare outcomes.
            </p>

            <p className="text-muted text-base leading-relaxed mb-8">
              Our team of 500+ specialized doctors, nurses, and healthcare professionals 
              work together to provide personalized treatment plans tailored to each 
              patient&apos;s unique needs.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-dark">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/book-appointment" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5">
              Book Appointment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
