"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  "Top quality medical team",
  "State of the art healthcare services",
  "Affordable treatment & insurance support",
  "Enrollment is quick and easy",
];

export default function WelcomeSection() {
  return (
    <>
      {/* Part 1 — Welcoming New Patients */}
      <section className="bg-white py-16 lg:py-24" id="welcome">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text + Phone CTA */}
            <div className="order-2 lg:order-1">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark leading-tight mb-5">
                We're Welcoming{" "}
                <span className="relative inline-block">
                  New Patients
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full" />
                </span>{" "}
                And Can't Wait To Meet You.
              </h2>
              <p className="text-muted text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                We use only the best quality medical practices on the market in
                order to provide the best care to our patients. So don't worry
                about anything and book yourself.
              </p>

              {/* Phone Input CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:flex-nowrap gap-3 w-full max-w-sm">
                {/* <div className="w-full sm:flex-1 min-w-0 flex items-center gap-2.5 bg-white border border-gray-300 rounded-lg px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0 text-muted"
                  >
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                  <input
                    type="tel"
                    placeholder="Enter your Phone Number"
                    className="flex-1 min-w-0 bg-transparent text-sm text-dark placeholder:text-muted/70 outline-none font-medium"
                  />
                </div> */}
                {/* <button className="btn-primary text-sm px-5 py-3 whitespace-nowrap w-full sm:w-auto sm:flex-none">
                  Submit
                </button> */}
              </div>
            </div>

            {/* Right: Image with decorative accent */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
              {/* Blue accent block behind image */}
              <div className="absolute top-4 right-4 lg:right-0 w-[75%] h-[85%] rounded-2xl bg-primary/10 z-0" />
              <div className="relative z-10 w-full max-w-md">
                <Image
                  src="/images/welcome-patients.jpg"
                  alt="Happy patient with medical staff at Dr. Mate Hospital"
                  width={540}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[300px] sm:h-[360px] lg:h-[400px] shadow-card"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2 — Why Choose Us */}
      <section className="bg-surface py-16 lg:py-24" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Doctor Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative z-10 w-full max-w-md">
                <Image
                  src="/images/why-choose-doctor.jpg"
                  alt="Expert doctor providing advanced medical treatment at Dr. Mate Hospital"
                  width={540}
                  height={420}
                  className="rounded-2xl object-cover w-full h-[320px] sm:h-[380px] lg:h-[420px] shadow-card"
                />
              </div>
            </div>

            {/* Right: Why Choose Content */}
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark leading-tight mb-5">
                Why Choose{" "}
                <span className="relative inline-block text-primary">
                  Dr. Mate
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-primary" />
                </span>{" "}
                For All Your Medical Treatments?
              </h2>
              <p className="text-muted text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                We use only the best quality medical equipment and technology in
                order to provide the best care to our patients.
              </p>

              {/* Feature List */}
              <ul className="flex flex-col gap-3 mb-9">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-dark font-semibold text-sm sm:text-base"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/book-appointment"
                className="btn-primary text-sm sm:text-base px-7 py-3.5"
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
