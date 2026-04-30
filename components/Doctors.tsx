"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Swapnil Dhondibhau Mate",
    specialty: "Cardiologist",
    exp: "Mon, Wed, Sat · 1PM-5PM",
    rating: 4.9,
    reviews: 238,
    initials: "SM",
    gradFrom: "from-primary",
    gradTo: "to-healing",
    tags: ["Root Canal", "Implants", "Cosmetic"],
  },
  {
    name: "Dr. Surajkumar Patil",
    specialty: "Cardiologist",
    exp: "Tue, Fri · 1PM-5PM",
    rating: 4.8,
    reviews: 312,
    initials: "SP",
    gradFrom: "from-medical",
    gradTo: "to-primary",
    tags: ["Bypass Surgery", "Angioplasty", "Echo"],
  },
  {
    name: "Dr. Nitin Thakare",
    specialty: "Cardio Vascular & Thoracic Surgeon",
    exp: "Once in Month · 10AM-1PM",
    rating: 4.9,
    reviews: 189,
    initials: "NT",
    gradFrom: "from-healing",
    gradTo: "to-primary",
    tags: ["Newborn Care", "Vaccination", "PICU"],
  },
  {
    name: "Dr. Amol Mahajan",
    specialty: "Neurologist",
    exp: "Sunday · 12PM-2PM",
    rating: 4.7,
    reviews: 267,
    initials: "AM",
    gradFrom: "from-primary",
    gradTo: "to-primary-dark",
    tags: ["Joint Replacement", "Spine", "Sports"],
  },
  {
    name: "Dr. Satish Dere",
    specialty: "Neurologist",
    exp: "Saturday · 4PM-6PM",
    rating: 4.8,
    reviews: 198,
    initials: "SD",
    gradFrom: "from-medical",
    gradTo: "to-primary",
    tags: ["Stroke", "Epilepsy", "Migraine"],
  },
  {
    name: "Dr. Vipul Doshi",
    specialty: "Medical Oncologist",
    exp: "Once in Month · 1PM-5PM",
    rating: 4.9,
    reviews: 345,
    initials: "VD",
    gradFrom: "from-primary",
    gradTo: "to-healing",
    tags: ["Trauma", "Critical Care", "ICU"],
  },
];

export default function Doctors() {
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
    <section id="doctors" className="py-16 lg:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Our Specialists
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            Meet Our <span className="gradient-text">Expert Doctors</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto">
            Our team of highly qualified specialists brings decades of experience
            and a commitment to delivering exceptional healthcare.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={doc.name}
              className="reveal service-card card bg-white rounded-xl border border-gray-100 overflow-hidden group shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Card Top */}
              <div className={`bg-gradient-to-br ${doc.gradFrom} ${doc.gradTo} p-6 relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10" />

                <div className="flex items-start justify-between relative z-10">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-xl bg-white/25 backdrop-blur flex items-center justify-center text-white font-display font-extrabold text-xl shadow-card">
                    {doc.initials}
                  </div>
                  {/* Rating */}
                  <div className="bg-white/25 backdrop-blur rounded-xl px-3 py-1.5 text-white">
                    <div className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm font-bold">{doc.rating}</span>
                    </div>
                    <p className="text-white/70 text-[10px] text-center">{doc.reviews} reviews</p>
                  </div>
                </div>

                <div className="mt-4 relative z-10">
                  <h3 className="font-display font-bold text-lg text-white">{doc.name}</h3>
                  <p className="text-white/80 text-sm font-medium">{doc.specialty}</p>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-xs font-semibold text-muted">{doc.exp}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-primary/8 text-primary px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Book Button */}
                <Link href="/book-appointment" className="w-full btn-primary text-sm py-2.5 text-center">
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10 reveal">
          <a href="#contact" className="btn-outline text-sm px-6 py-3 inline-flex items-center gap-2">
            View All 500+ Doctors
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


