"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s-7.2-4.6-9.4-9.1C0.7 7.7 3.2 4 7 4c2.2 0 3.6 1.1 4.5 2.4C12.4 5.1 13.8 4 16 4c3.8 0 6.3 3.7 4.4 7.9C19.2 16.4 12 21 12 21z"
          fill="white"
        />
      </svg>
    ),
    title: "Cardiology Care",
    description:
      "Comprehensive heart care with advanced diagnostics, interventional cardiology, and preventive cardiac programs.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="9" r="3.2" fill="white" />
        <path
          d="M6 19c0-3.1 2.7-5.4 6-5.4s6 2.3 6 5.4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M11.2 6.6c-.4-1.3.6-2.4 2-2.4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Pediatrics & Neonatal",
    description:
      "Specialized care for infants, children, and adolescents with a gentle, family-centered approach.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M7.5 7.5c.9-.9 2.4-.9 3.3 0l.8.8 1.8-1.8c.9-.9 2.4-.9 3.3 0s.9 2.4 0 3.3l-1.8 1.8.8.8c.9.9.9 2.4 0 3.3s-2.4.9-3.3 0l-.8-.8-1.8 1.8c-.9.9-2.4.9-3.3 0s-.9-2.4 0-3.3l1.8-1.8-.8-.8c-.9-.9-.9-2.4 0-3.3z"
          fill="white"
        />
      </svg>
    ),
    title: "Orthopedics & Joint Care",
    description:
      "Advanced bone, spine, and joint treatments including minimally invasive procedures and rehabilitation.",
  },
];

type FloatingHealthcareIcon = "cross" | "heart" | "capsule" | "shield" | "pulse";

// Floating healthcare icon positions around the doctor image
const healthcareIconPositions: Array<
  {
    top: string;
    left?: string;
    right?: string;
    size: number;
    icon: FloatingHealthcareIcon;
  }
> = [
  { top: "10%", left: "18%", size: 44, icon: "cross" },
  { top: "28%", left: "2%", size: 52, icon: "heart" },
  { top: "60%", left: "6%", size: 44, icon: "capsule" },
  { top: "12%", right: "8%", size: 44, icon: "shield" },
  { top: "48%", right: "2%", size: 52, icon: "pulse" },
];

function HealthcareIcon({ size = 44, icon = "cross" }: { size?: number; icon?: FloatingHealthcareIcon }) {
  const iconSize = size * 0.52;

  return (
    <div
      className="rounded-full bg-primary flex items-center justify-center shadow-btn"
      style={{ width: size, height: size }}
    >
      {icon === "cross" && (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <path d="M10 5h4v5h5v4h-5v5h-4v-5H5v-4h5V5z" fill="white" />
        </svg>
      )}
      {icon === "heart" && (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 20.5s-6.5-4.1-8.8-8.2C1.2 8.7 3.1 5 6.8 5c2.1 0 3.4 1.1 4.2 2.2C11.8 6.1 13.1 5 15.2 5c3.7 0 5.6 3.7 3.6 7.3C18.5 16.4 12 20.5 12 20.5z"
            fill="white"
          />
        </svg>
      )}
      {icon === "capsule" && (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <path
            d="M7.6 6.2a4.6 4.6 0 0 1 6.5 0l3.7 3.7a4.6 4.6 0 0 1-6.5 6.5l-3.7-3.7a4.6 4.6 0 0 1 0-6.5z"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M8.8 14.1l5.3-5.3" stroke="white" strokeWidth="2" />
        </svg>
      )}
      {icon === "shield" && (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3l7 3v5c0 5.3-3.4 8.5-7 10-3.6-1.5-7-4.7-7-10V6l7-3z"
            fill="white"
          />
          <path d="M12 8v7M8.5 11.5h7" stroke="#1f3c88" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
      {icon === "pulse" && (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 13h4l2-4 3 8 2-4h7"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white flex flex-col">
      {/* Top hero area */}
      <div className="relative flex-1">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,60,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,60,136,0.1) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
            backgroundPosition: "top left",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-end">
          {/* LEFT: Text content */}
          <div className="flex flex-col justify-center pb-0 lg:pb-12">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark leading-tight mb-5">
              Get Ready For Your Best Ever{" "}
              <span className="relative inline-block text-dark">
                Advanced Care!
                <span className="absolute left-0 -bottom-1 w-full h-[4px] rounded-full bg-primary" />
              </span>
            </h1>

            <p className="text-muted text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              We use only the best quality materials on the market in order to
              provide the best care to our patients. So don't worry about
              anything and book yourself.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/book-appointment"
                className="btn-primary text-sm px-7 py-3.5"
              >
                Book an appointment
              </Link>

              <a
                href="tel:+910900786011"
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors text-primary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-primary font-bold text-xs leading-none mb-0.5">
                    Medical 24H Emergency
                  </p>
                  <p className="text-dark font-semibold text-sm">
                    +91 0900-786011
                  </p>
                </div>
              </a>
            </div>

            {/* Testimonial card */}
            <div className="bg-white card rounded-xl shadow-card border border-primary/10 p-4 max-w-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src="/images/hero-testimonial-avatar.jpg"
                      alt="Dr. Ajay D. Mate — Senior Medical Consultant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm leading-none">
                      Dr. Ajay D. Mate
                    </p>
                    <p className="text-muted text-xs mt-0.5">Sr. Medical Consultant</p>
                  </div>
                </div>
                {/* Profile icon */}
                <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                    <path d="M10 5h4v5h5v4h-5v5h-4v-5H5v-4h5V5z" />
                  </svg>
                </div>
              </div>
              <p className="text-muted text-xs leading-relaxed">
                Top Quality medical treatment done by field experts, Highly
                Recommended for everyone
              </p>
            </div>
          </div>

          {/* RIGHT: Doctor image with floating icons + dashed circle */}
          <div className="relative flex items-end justify-center lg:justify-end h-[360px] sm:h-[460px] lg:h-[520px]">
            {/* Dashed circular ring */}
            <div
              className="absolute"
              style={{
                width: 420,
                height: 420,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg width="420" height="420" viewBox="0 0 420 420" fill="none">
                <circle
                  cx="210"
                  cy="210"
                  r="200"
                  stroke="#1E3A8A"
                  strokeWidth="2"
                  strokeDasharray="12 10"
                  opacity="0.3"
                />
              </svg>
            </div>

          {/* Floating healthcare icons */}
          {healthcareIconPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute animate-float z-10"
              style={{
                ...pos,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <HealthcareIcon size={pos.size} icon={pos.icon} />
            </div>
          ))}

            {/* Doctor image — no background, cut out */}
            <div className="relative z-20 h-full flex items-end">
              <Image
                src="/images/doctor2.png"
                alt="Expert doctor at Dr. Mate Hospital"
                width={480}
                height={520}
                className="object-contain object-bottom h-full w-auto max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom services strip */}
      <div className="bg-surface mt-0 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white card rounded-xl p-8 flex flex-col items-center text-center shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Solid blue icon circle */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-dark text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-1.5 text-dark font-semibold text-sm underline underline-offset-2 hover:text-primary transition-colors"
                >
                  Learn More
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.17L7.83 12l1.41-1.41L11 13.34l4.76-4.76 1.41 1.42L11 16.17z" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
