"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { getSpecialitySlugByName } from "@/data/specialities";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Specialities", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

type MegaCategoryId = "all" | "super" | "broad" | "aux" | "diag";

type MegaCategory = {
  id: MegaCategoryId;
  label: string;
  links: Array<{ label: string; href: string }>;
};

const megaCategories: MegaCategory[] = [
  {
    id: "all",
    label: "All Our Services",
    links: [
      { label: "Internal Medicine", href: "/departments" },
      { label: "Cardiology", href: "/departments" },
      { label: "Urology", href: "/departments" },
      { label: "Orthopedics", href: "/departments" },
      { label: "Oncology", href: "/departments" },
      { label: "Neurosurgery", href: "/departments" },
      { label: "Obstetrics & Gynecology", href: "/departments" },
      { label: "24x7 Emergency & Trauma Care", href: "/departments" },
      { label: "Physiotherapy & Rehabilitation", href: "/departments" },
    ],
  },
  {
    id: "super",
    label: "Super Specialities",
    links: [
      { label: "Cardiology", href: "/departments" },
      { label: "Interventional Radiology", href: "/departments" },
      { label: "Nephrology", href: "/departments" },
      { label: "Gastroenterology & Endoscopy", href: "/departments" },
      { label: "GI Surgery", href: "/departments" },
      { label: "Urology", href: "/departments" },
      { label: "Oncology", href: "/departments" },
      { label: "Oncosurgery", href: "/departments" },
    ],
  },
  {
    id: "broad",
    label: "Broad Specialities",
    links: [
      { label: "Internal Medicine", href: "/departments" },
      { label: "ICU", href: "/departments" },
      { label: "24x7 Emergency & Trauma Care", href: "/departments" },
      { label: "General Surgery", href: "/departments" },
      { label: "Laparoscopy", href: "/departments" },
      { label: "Orthopedics", href: "/departments" },
      { label: "Obstetrics & Gynecology", href: "/departments" },
      { label: "Pediatric Surgery", href: "/departments" },
      { label: "Plastic Surgery", href: "/departments" },
      { label: "ENT", href: "/departments" },
    ],
  },
  {
    id: "aux",
    label: "Auxiliary Services",
    links: [
      { label: "Physiotherapy & Rehabilitation", href: "/departments" },
      { label: "Diabetes Clinic", href: "/departments" },
      { label: "Diabetic Foot Clinic", href: "/departments" },
      { label: "VAC Therapy", href: "/departments" },
      { label: "Varicose Vein Clinic", href: "/departments" },
      { label: "Breast Clinic", href: "/departments" },
      { label: "Obesity & Weight Loss Clinic", href: "/departments" },
    ],
  },
  {
    id: "diag",
    label: "Procedures & Diagnostics",
    links: [
      { label: "Cardiology", href: "/departments" },
      { label: "Interventional Radiology", href: "/departments" },
      { label: "Gastroenterology & Endoscopy", href: "/departments" },
      { label: "Urology", href: "/departments" },
      { label: "Breast Clinic", href: "/departments" },
    ],
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState<MegaCategoryId | null>(null);
  const [subPanelSide, setSubPanelSide] = useState<"right" | "left">("right");
  const [subPanelTop, setSubPanelTop] = useState(48);

  const accountRef = useRef<HTMLDivElement>(null);
  const megaTriggerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLElement>(null);
  const subPanelRef = useRef<HTMLDivElement>(null);
  const megaCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!pathname || pathname === "/") {
      setActiveLink("Home");
      return;
    }

    if (
      pathname === "/specialities" ||
      pathname.startsWith("/specialities/") ||
      pathname === "/departments" ||
      pathname.startsWith("/departments/")
    ) {
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

  useEffect(() => {
    let isMounted = true;

    async function loadSession() {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data?.authenticated && data?.user?.email) {
          setUserEmail(data.user.email);
        }
      } catch {
        // no-op
      }
    }

    loadSession();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!accountRef.current) return;
      if (!accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (megaCloseTimerRef.current) clearTimeout(megaCloseTimerRef.current);
    };
  }, []);

  const clearMegaCloseTimer = () => {
    if (megaCloseTimerRef.current) {
      clearTimeout(megaCloseTimerRef.current);
      megaCloseTimerRef.current = null;
    }
  };

  const updateSubPanelPlacement = (anchorEl?: HTMLElement | null) => {
    const triggerRect = megaTriggerRef.current?.getBoundingClientRect();
    const leftPanelRect = leftPanelRef.current?.getBoundingClientRect();
    if (!triggerRect || !leftPanelRect) return;

    const viewportPadding = 12;
    const leftPanelWidth = 250;
    const subPanelWidth = 390;
    const panelHeight = subPanelRef.current?.offsetHeight ?? 340;

    const fitsRight =
      triggerRect.left + leftPanelWidth + subPanelWidth <=
      window.innerWidth - viewportPadding;
    const fitsLeft = triggerRect.left - subPanelWidth >= viewportPadding;

    if (!fitsRight && fitsLeft) {
      setSubPanelSide("left");
    } else {
      setSubPanelSide("right");
    }

    const desiredTop = anchorEl
      ? Math.max(0, anchorEl.offsetTop - 8)
      : 48;

    const dropdownTop = triggerRect.bottom + 8;
    const maxTop = Math.max(
      0,
      window.innerHeight - viewportPadding - dropdownTop - panelHeight,
    );
    setSubPanelTop(Math.min(desiredTop, maxTop));
  };

  const handleMegaEnter = () => {
    clearMegaCloseTimer();
    setMegaOpen(true);
    setActiveMegaCategory(null);
    updateSubPanelPlacement();
  };

  const handleMegaLeave = () => {
    clearMegaCloseTimer();
    megaCloseTimerRef.current = setTimeout(() => {
      setMegaOpen(false);
      setActiveMegaCategory(null);
    }, 200);
  };

  useEffect(() => {
    if (!megaOpen) return;
    const onResize = () => updateSubPanelPlacement();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [megaOpen]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUserEmail(null);
    setAccountOpen(false);
    setMenuOpen(false);
    router.replace("/");
    router.refresh();
  }

  const selectedMegaCategory = megaCategories.find(
    (category) => category.id === activeMegaCategory,
  );
  const showSubPanel = Boolean(selectedMegaCategory && selectedMegaCategory.id !== "all");

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

        <nav
          className={`w-full rounded-xl transition-all duration-300 ${
            scrolled
              ? "bg-white/70 backdrop-blur-md border border-white/60 shadow-card"
              : "bg-white/55 backdrop-blur-md border border-white/50"
          }`}
        >
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
                const isActive = activeLink === link.label;

                if (link.label === "Specialities") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      ref={megaTriggerRef}
                      onMouseEnter={handleMegaEnter}
                      onMouseLeave={handleMegaLeave}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setActiveLink(link.label)}
                        className={`inline-flex items-center gap-1.5 text-sm font-sans transition-all duration-200 relative group ${
                          isActive
                            ? "font-bold text-primary"
                            : "font-medium text-muted hover:text-primary"
                        }`}
                      >
                        {link.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            megaOpen ? "rotate-180 text-primary" : "text-primary/80"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        <span
                          className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-200 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 rounded-full transition-all duration-300 group-hover:w-full" />
                      </Link>

                      <div
                        className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                          megaOpen
                            ? "opacity-100 visible translate-y-0 pointer-events-auto"
                            : "opacity-0 invisible translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="flex items-start gap-0">
                          <aside
                            ref={leftPanelRef}
                            className="relative w-[250px] bg-[#132130] border border-slate-600/60 shadow-[0_14px_36px_rgba(2,6,23,0.48)] p-5"
                          >
                              <ul className="space-y-1">
                                {megaCategories.map((category) => {
                                  const selected = activeMegaCategory === category.id;
                                  return (
                                    <li key={category.id}>
                                      <Link
                                        href={`/departments?tab=${category.id}`}
                                        onMouseEnter={(e) => {
                                          setActiveMegaCategory(category.id);
                                          updateSubPanelPlacement(e.currentTarget);
                                        }}
                                        onFocus={(e) => {
                                          setActiveMegaCategory(category.id);
                                          updateSubPanelPlacement(e.currentTarget);
                                        }}
                                        className={`w-full text-left px-2 py-2.5 text-sm transition-all duration-300 border-l-0 ${
                                          selected
                                            ? "text-white"
                                            : "text-slate-200/90 hover:text-white"
                                        }`}
                                      >
                                        <span className="relative inline-block">
                                          {category.label}
                                          {selected ? (
                                            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#2f9cff]" />
                                          ) : null}
                                        </span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            <div
                              ref={subPanelRef}
                              style={{ top: `${subPanelTop}px` }}
                              className={`absolute w-[390px] bg-[#142230] border border-slate-600/60 shadow-[0_14px_36px_rgba(2,6,23,0.48)] p-5 transition-all duration-300 ${
                                subPanelSide === "right"
                                  ? "left-full ml-0"
                                  : "right-full mr-0"
                              } ${
                              showSubPanel
                                ? "opacity-100 visible translate-x-0"
                                : "opacity-0 invisible -translate-x-1 pointer-events-none"
                            }`}
                            >
                              {showSubPanel && selectedMegaCategory ? (
                                <div className="min-h-[310px]">
                                  <div className="grid grid-cols-1 gap-1">
                                    {selectedMegaCategory.links.map((item) => {
                                      const specialitySlug = getSpecialitySlugByName(item.label);
                                      const href = specialitySlug
                                        ? `/specialities/${specialitySlug}`
                                        : item.href;
                                      return (
                                        <Link
                                          key={item.label}
                                          href={href}
                                          className="inline-flex items-start px-1 py-1.5 text-sm text-slate-100 hover:text-white hover:translate-x-0.5 transition-all duration-300"
                                        >
                                          <span>{item.label}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>

                                  <Link
                                    href="/departments"
                                    className="mt-6 inline-flex text-sm font-semibold text-slate-100 hover:text-[#7CC5FF] transition-colors"
                                  >
                                    Know More {"->"}
                                  </Link>
                                </div>
                              ) : null}
                            </div>
                          </aside>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`text-sm font-sans transition-all duration-200 relative group ${
                      isActive
                        ? "font-bold text-primary"
                        : "font-medium text-muted hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {userEmail ? (
                <div className="relative" ref={accountRef}>
                  <button
                    type="button"
                    onClick={() => setAccountOpen((v) => !v)}
                    className="btn-outline text-sm px-5 py-2.5 font-bold whitespace-nowrap inline-flex items-center gap-2"
                  >
                    <span className="max-w-[190px] truncate">{userEmail}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${accountOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {accountOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden z-30">
                      <Link
                        href="/patient-dashboard"
                        className="block px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                        onClick={() => setAccountOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/auth"
                  className="btn-outline text-sm px-5 py-2.5 font-bold whitespace-nowrap"
                >
                  Patient Login
                </Link>
              )}

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
                onClick={() => setMenuOpen((prev) => !prev)}
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                    activeLink === link.label
                      ? "font-bold text-primary bg-primary/8"
                      : "font-medium text-muted hover:text-primary hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href={userEmail ? "/patient-dashboard" : "/auth"}
                className="btn-outline mt-1 text-sm py-3 rounded-xl text-center font-bold"
                onClick={() => setMenuOpen(false)}
              >
                {userEmail ? "Dashboard" : "Patient Login"}
              </Link>

              {userEmail && (
                <button
                  type="button"
                  className="btn-outline mt-1 text-sm py-3 rounded-xl text-center font-bold text-red-600 border-red-200 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}

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
