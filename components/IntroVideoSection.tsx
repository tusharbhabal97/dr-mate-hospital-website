"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function IntroVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      {/* Part 1 — Leave Your Worries */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark leading-tight mb-5">
                Leave Your Worries At The Door And Enjoy A Healthier, More{" "}
                <span className="relative inline-block">
                  Precise Care
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-primary" />
                </span>
              </h2>
              <p className="text-muted text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                We use only the best quality medical equipment and practices on
                the market in order to provide the best care to our patients. So
                don't worry about anything and book yourself.
              </p>
              <Link href="/book-appointment" className="btn-primary text-sm sm:text-base px-7 py-3.5">
                Book an appointment
              </Link>
            </div>

            {/* Right: Image with blue accent */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-4 right-4 lg:right-0 w-[75%] h-[85%] rounded-2xl bg-primary/15 z-0" />
              <div className="relative z-10 w-full max-w-md">
                <Image
                  src="/images/intro-care.jpg"
                  alt="Advanced medical care at Dr. Mate Hospital"
                  width={540}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[300px] sm:h-[360px] lg:h-[400px] shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2 — Video Section */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark leading-tight mb-4">
            We're{" "}
            <span className="relative inline-block">
              Welcoming
              <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-primary" />
            </span>{" "}
            New Patients And Can't Wait To Meet You.
          </h2>
          <p className="text-muted text-base lg:text-lg leading-relaxed max-w-lg mx-auto mb-10">
            We use only the best quality materials on the market in order to
            provide the best care to our patients.
          </p>

          {/* Video Thumbnail */}
          <div className="relative rounded-2xl overflow-hidden shadow-card group cursor-pointer mb-8">
            <Image
              src="/images/video-thumbnail.jpg"
              alt="Watch Dr. Mate Hospital in action — advanced medical care video"
              width={900}
              height={480}
              className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors duration-300" />

            {/* Play Button */}
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play hospital video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-white/30 animate-ping scale-125" />
                <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 text-primary"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* Watch Playlist CTA */}
          
        </div>
      </section>
    </>
  );
}
