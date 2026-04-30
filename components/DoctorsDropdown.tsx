"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { doctors } from "@/data/doctors";

const doctorCategoriesForMenu = [
  {
    title: "All Doctors",
    slug: "all",
    doctorIds: doctors.map((doctor) => doctor.id),
  },
  {
    title: "Cardiology & Cardiothoracic Surgery",
    slug: "cardio-ctvs",
    doctorIds: [
      "dr-swapnil-dhondibhau-mate",
      "dr-surajkumar-patil",
      "dr-nitin-thakare",
    ],
  },
  {
    title: "Neurology & Neurosurgery",
    slug: "neuro-neurosurgery",
    doctorIds: ["dr-amol-mahajan", "dr-satish-dere"],
  },
  {
    title: "Oncology (Cancer Care)",
    slug: "oncology",
    doctorIds: ["dr-vipul-doshi", "dr-anup-tamhanakar"],
  },
  {
    title: "Gastro, Renal & Urology",
    slug: "gastro-renal-urology",
    doctorIds: [
      "dr-akshay-kulkarni",
      "dr-aditya-kulkarni",
      "dr-sharad-garudkar",
      "dr-sudarshan-daga",
    ],
  },
  {
    title: "General & Specialized Surgery",
    slug: "general-specialized-surgery",
    doctorIds: ["dr-deepak-patil", "dr-ajay-naik"],
  },
  {
    title: "Interventional Radiology",
    slug: "interventional-radiology",
    doctorIds: ["dr-yogesh-thube"],
  },
] as const;

export const doctorsList = doctorCategoriesForMenu
  .slice(1)
  .flatMap((category) =>
    category.doctorIds
      .map((id) => doctors.find((doctor) => doctor.id === id))
      .filter((doctor): doctor is (typeof doctors)[number] => Boolean(doctor))
      .map((doctor) => ({
        title: doctor.name,
        href: `/doctors/${doctor.id}`,
      })),
  );

type DoctorsDropdownProps = {
  isOpen?: boolean;
  onDoctorClick?: () => void;
};

type ActiveCategory = (typeof doctorCategoriesForMenu)[number]["title"];

export default function DoctorsDropdown({ isOpen = false, onDoctorClick }: DoctorsDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All Doctors");
  const [subPanelSide, setSubPanelSide] = useState<"right" | "left">("right");
  const [subPanelTop, setSubPanelTop] = useState(0);

  const leftPanelRef = useRef<HTMLElement>(null);
  const subPanelRef = useRef<HTMLDivElement>(null);
  const selectedCategory = doctorCategoriesForMenu.find(
    (category) => category.title === activeCategory,
  );
  const showSubPanel = Boolean(selectedCategory && selectedCategory.slug !== "all");

  const updateSubPanelPlacement = (anchorEl?: HTMLElement | null) => {
    const leftPanelRect = leftPanelRef.current?.getBoundingClientRect();
    if (!leftPanelRect) return;

    const viewportPadding = 12;
    const leftPanelWidth = 250;
    const subPanelWidth = 390;
    const panelHeight = subPanelRef.current?.offsetHeight ?? 340;

    const fitsRight =
      leftPanelRect.left + leftPanelWidth + subPanelWidth <=
      window.innerWidth - viewportPadding;
    const fitsLeft = leftPanelRect.left - subPanelWidth >= viewportPadding;

    if (!fitsRight && fitsLeft) {
      setSubPanelSide("left");
    } else {
      setSubPanelSide("right");
    }

    const desiredTop = anchorEl ? Math.max(0, anchorEl.offsetTop - 8) : 0;
    const maxTop = Math.max(
      0,
      window.innerHeight - viewportPadding - leftPanelRect.top - panelHeight,
    );
    setSubPanelTop(Math.min(desiredTop, maxTop));
  };

  useEffect(() => {
    if (isOpen) {
      setActiveCategory("All Doctors");
      setSubPanelTop(0);
      updateSubPanelPlacement();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onViewportChange = () => updateSubPanelPlacement();
    window.addEventListener("resize", onViewportChange);
    window.addEventListener("scroll", onViewportChange, true);
    return () => {
      window.removeEventListener("resize", onViewportChange);
      window.removeEventListener("scroll", onViewportChange, true);
    };
  }, [isOpen]);

  const categoryDoctors = selectedCategory
    ? selectedCategory.doctorIds
        .map((id) => doctors.find((doctor) => doctor.id === id))
        .filter((doctor): doctor is (typeof doctors)[number] => Boolean(doctor))
    : [];

  return (
    <div className="relative">
      <aside
        ref={leftPanelRef}
        className="relative w-[250px] bg-[#132130] border border-slate-600/60 shadow-[0_14px_36px_rgba(2,6,23,0.48)] p-5"
      >
        <ul role="tablist" aria-label="Doctor categories" className="space-y-1">
          {doctorCategoriesForMenu.map((category) => {
            const selected = activeCategory === category.title;
            return (
              <li key={category.slug}>
                <Link
                  href="/doctors"
                  onMouseEnter={(e) => {
                    setActiveCategory(category.title);
                    updateSubPanelPlacement(e.currentTarget);
                  }}
                  onFocus={(e) => {
                    setActiveCategory(category.title);
                    updateSubPanelPlacement(e.currentTarget);
                  }}
                  onClick={() => setActiveCategory(category.title)}
                  className={`w-full text-left px-2 py-2.5 text-sm transition-all duration-300 border-l-0 ${
                    selected
                      ? "text-white"
                      : "text-slate-200/90 hover:text-white"
                  } cursor-pointer block`}
                >
                  <span className="relative inline-block">
                    {category.title}
                    {selected ? (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#2f9cff]" />
                    ) : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      <div
        ref={subPanelRef}
        role="tabpanel"
        aria-label={selectedCategory?.title}
        style={{ top: `${subPanelTop}px` }}
        className={`absolute w-[390px] bg-[#142230] border border-slate-600/60 shadow-[0_14px_36px_rgba(2,6,23,0.48)] p-5 min-h-[310px] transition-all duration-300 ${
          subPanelSide === "right" ? "left-full ml-0" : "right-full mr-0"
        } ${
          showSubPanel
            ? "opacity-100 visible translate-x-0 pointer-events-auto"
            : "opacity-0 invisible -translate-x-1 pointer-events-none"
        }`}
      >
        {showSubPanel ? (
          <>
            <div className="grid grid-cols-1 gap-1">
              {categoryDoctors.map((doctor) => (
                <div key={doctor.id}>
                  <Link
                    href={`/doctors/${doctor.id}`}
                    onClick={onDoctorClick}
                    className="inline-flex items-start px-1 py-1.5 text-sm text-slate-100 hover:text-white hover:translate-x-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <span>{doctor.name}</span>
                  </Link>
                </div>
              ))}
            </div>
            <Link
              href="/doctors"
              onClick={onDoctorClick}
              className="mt-6 inline-flex text-sm font-semibold text-slate-100 hover:text-[#7CC5FF] transition-colors cursor-pointer"
            >
              Know More {"->"}
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
