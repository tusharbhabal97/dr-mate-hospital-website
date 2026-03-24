"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiologist.",
    image: "/images/doctors/doctor-1.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Priya Mehta",
    specialty: "Neurologist.",
    image: "/images/doctors/doctor-2.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Anika Verma",
    specialty: "Periodontist.",
    image: "/images/doctors/doctor-3.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Arjun Patel",
    specialty: "Pediatric Dentist.",
    image: "/images/doctors/doctor-4.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Suresh Nair",
    specialty: "Orthopedist.",
    image: "/images/doctors/doctor-5.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Meera Joshi",
    specialty: "Gynecologist.",
    image: "/images/doctors/doctor-6.jpg",
    linkedin: "https://linkedin.com",
  },
];

export default function DoctorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 300;

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  return (
    <section className="bg-surface py-16 lg:py-24" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark leading-tight mb-4">
            Meet Our{" "}
            <span className="relative inline-block">
              Specialists
              <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-primary" />
            </span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-lg mx-auto leading-relaxed">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="relative flex-shrink-0 w-[260px] sm:w-[280px] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
              style={{ height: "340px" }}
            >
              {/* Doctor Image */}
              <Image
                src={doctor.image}
                alt={`${doctor.name} — ${doctor.specialty} at Dr. Mate Hospital`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* LinkedIn badge — top right */}
              <a
                href={doctor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${doctor.name} LinkedIn`}
                className="absolute top-3 right-3 w-9 h-9 bg-white/90 text-primary rounded-md flex items-center justify-center z-10 hover:bg-primary hover:text-white transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>

              {/* Name / Specialty overlay — bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10">
                <div
                  className="mx-3 mb-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(30, 58, 138, 0.75)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p className="text-white font-bold text-base leading-tight">
                    {doctor.name}
                  </p>
                  <p className="text-white/80 text-sm mt-0.5">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              canScrollLeft
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-muted/30 text-muted/30 cursor-not-allowed"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              canScrollRight
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-muted/30 text-muted/30 cursor-not-allowed"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
