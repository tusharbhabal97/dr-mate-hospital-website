"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Anita Deshmukh",
    location: "Pune, Maharashtra",
    rating: 5,
    dept: "Cardiology",
    initials: "AD",
    gradient: "from-primary to-healing",
    text: "Dr. Kulkarni performed my bypass surgery with exceptional skill. The entire team was incredibly supportive throughout my recovery. I can't thank Dr. Mate Hospital enough for giving me a second chance at life.",
  },
  {
    name: "Rohit Sharma",
    location: "Nashik, Maharashtra",
    rating: 5,
    dept: "Orthopedics",
    initials: "RS",
    gradient: "from-primary to-primary-light",
    text: "Had my knee replacement surgery done here. The facilities are world-class and Dr. Patil is simply the best orthopedic surgeon I've encountered. Back to walking normally within 6 weeks!",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai, Maharashtra",
    rating: 5,
    dept: "Pediatrics",
    initials: "PM",
    gradient: "from-healing to-primary",
    text: "Brought my newborn here for treatment. Dr. Meera Joshi is wonderful with babies and very reassuring for anxious parents. The NICU team worked miracles. Forever grateful.",
  },
  {
    name: "Suresh Kumar",
    location: "Thane, Maharashtra",
    rating: 5,
    dept: "Emergency",
    initials: "SK",
    gradient: "from-medical to-primary",
    text: "Rushed to Dr. Mate Hospital after an accident at 2 AM. The emergency team was ready and professional. Quick diagnosis, immediate treatment. They truly provide 24/7 excellence.",
  },
  {
    name: "Lakshmi Rao",
    location: "Pune, Maharashtra",
    rating: 5,
    dept: "Neurology",
    initials: "LR",
    gradient: "from-medical to-healing",
    text: "Dr. Nair diagnosed my chronic migraine correctly after years of incorrect treatments elsewhere. With the right medication and therapy plan, my quality of life has improved dramatically.",
  },
  {
    name: "Vijay Patkar",
    location: "Kolhapur, Maharashtra",
    rating: 5,
    dept: "Diagnostics",
    initials: "VP",
    gradient: "from-primary to-healing",
    text: "The diagnostic lab here is exceptional. Got all my reports within the same day and the doctor explained everything clearly. Clean facilities, professional staff, and very affordable.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleNav = (idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setIsAnimating(false);
    }, 200);
  };

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      handleNav((activeIdx + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  const visibleCards = [
    testimonials[activeIdx],
    testimonials[(activeIdx + 1) % testimonials.length],
    testimonials[(activeIdx + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Patient Stories
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto">
            Real stories from real patients who experienced our commitment to
            excellence in healthcare.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex justify-center mb-12 reveal">
          <div className="glass card rounded-xl px-8 py-5 shadow-card border border-primary/10 flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <p className="font-display font-extrabold text-4xl text-dark">4.9</p>
              <div className="flex gap-1 my-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted text-xs font-medium">Overall Rating</p>
            </div>
            <div className="w-px h-12 bg-primary/10 hidden sm:block" />
            <div className="text-center">
              <p className="font-display font-extrabold text-4xl text-dark">50K+</p>
              <p className="text-muted text-xs font-medium mt-1">Patient Reviews</p>
            </div>
            <div className="w-px h-12 bg-primary/10 hidden sm:block" />
            <div className="text-center">
              <p className="font-display font-extrabold text-4xl text-dark">98%</p>
              <p className="text-muted text-xs font-medium mt-1">Recommend Us</p>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-3 gap-6 reveal">
          {visibleCards.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className={`bg-white card rounded-xl p-6 shadow-card border border-gray-100 transition-all duration-300 hover:shadow-card-hover ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              } ${idx === 0 ? "lg:scale-105 shadow-card-hover z-10" : ""}`}
            >
              {/* Quote */}
              <div className="text-4xl text-primary/20 font-display font-extrabold leading-none mb-3">"</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-muted text-sm leading-relaxed mb-5 italic">{t.text}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-dark">{t.name}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
                <span className="ml-auto text-xs font-semibold bg-primary/8 text-primary px-2.5 py-1 rounded-lg">
                  {t.dept}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8 reveal">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleNav(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === activeIdx
                  ? "w-8 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-primary/25 hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
