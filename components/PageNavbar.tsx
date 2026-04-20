"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Specialities", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function PageNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  useEffect(() => {
    if (!pathname || pathname === "/") {
      setActiveLink("Home");
      return;
    }
    if (pathname === "/specialities" || pathname.startsWith("/specialities/")) {
      setActiveLink("Specialities");
      return;
    }
    const matched = navLinks.find(
      (link) =>
        link.href !== "/" &&
        (pathname === link.href || pathname.startsWith(`${link.href}/`)),
    );
    setActiveLink(matched?.label ?? "Home");
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-0">
      <div className="w-full max-w-7xl relative">
        <Link
          href="/"
          className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 items-center group"
          aria-label="Dr. Mate Hospital Home"
        >
          <Image
            src="/images/doctors/LOGO-removebg.png"
            alt="Dr. Mate Hospital logo"
            width={520}
            height={180}
            className="h-12 min-[380px]:h-14 sm:h-20 md:h-28 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="w-full rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-card transition-all duration-300">
          <div className="flex items-center justify-between lg:justify-between pl-3 sm:pl-[12rem] md:pl-[14rem] pr-3 py-2 sm:pr-6 sm:py-2">
            <div className="sm:hidden flex items-center">
              <Link href="/" aria-label="Dr. Mate Hospital Home" className="flex items-center">
                <Image
                  src="/images/doctors/LOGO-removebg.png"
                  alt="Dr. Mate Hospital logo"
                  width={520}
                  height={180}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = activeLink === link.label;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`text-sm font-sans transition-all duration-200 relative group ${
                      active
                        ? "font-bold text-primary"
                        : "font-medium text-muted hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-200 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/auth"
                className="btn-outline text-sm px-5 py-2.5 font-bold whitespace-nowrap"
              >
                Patient Login
              </Link>
              <Link
                href="/book-appointment"
                className="btn-primary text-sm px-6 py-2.5 font-bold whitespace-nowrap"
              >
                Book Now
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white shadow-card flex-shrink-0">
                <Image
                  src="/images/nav-avatar.png"
                  alt="Doctor"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>

              <button
                className="w-9 h-9 flex flex-col justify-center items-center gap-[5px] focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <span
                  className={`w-5 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-primary rounded-full transition-all duration-200 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-[calc(100svh-96px)] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="relative z-30 mx-3 mb-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 flex flex-col gap-1 border border-white/50 max-h-[calc(100svh-120px)] overflow-y-auto overscroll-contain">
              {navLinks.map((link) => {
                const active = activeLink === link.label;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMenuOpen(false);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                      active
                        ? "font-bold text-primary bg-primary/8"
                        : "font-medium text-muted hover:text-primary hover:bg-white/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/auth"
                className="btn-outline mt-1 text-sm py-3 rounded-xl text-center font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Patient Login
              </Link>
              <Link
                href="/book-appointment"
                className="btn-primary mt-1 text-sm py-3 rounded-xl text-center font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
