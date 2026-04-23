"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  getCategoryHref,
  getServiceHref,
  serviceCategoriesForMenu,
  serviceCategoriesForPages,
} from "@/data/services-menu";

export const servicesList = serviceCategoriesForPages.flatMap((category) =>
  category.items.map((item) => ({
    title: item.name,
    href: getServiceHref(category.slug, item.slug),
  })),
);

type ServicesDropdownProps = {
  isOpen?: boolean;
  onServiceClick?: () => void;
};

type ActiveCategory = (typeof serviceCategoriesForMenu)[number]["title"];

export default function ServicesDropdown({ isOpen = false, onServiceClick }: ServicesDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>(
    "All Our Services",
  );
  const [subPanelSide, setSubPanelSide] = useState<"right" | "left">("right");
  const [subPanelTop, setSubPanelTop] = useState(0);

  const leftPanelRef = useRef<HTMLElement>(null);
  const subPanelRef = useRef<HTMLDivElement>(null);
  const selectedCategory = serviceCategoriesForMenu.find(
    (category) => category.title === activeCategory,
  );
  const showSubPanel = Boolean(selectedCategory?.slug);

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
      setActiveCategory("All Our Services");
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

  return (
    <div className="relative">
      <aside
        ref={leftPanelRef}
        className="relative w-[250px] bg-[#132130] border border-slate-600/60 shadow-[0_14px_36px_rgba(2,6,23,0.48)] p-5"
      >
        <ul role="tablist" aria-label="Service categories" className="space-y-1">
          {serviceCategoriesForMenu.map((category) => {
            const selected = activeCategory === category.title;
            return (
              <li key={category.title}>
                <Link
                  href={getCategoryHref(category.slug)}
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
        id="services-category-panel"
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
            <div key={selectedCategory?.title ?? "services"} className="grid grid-cols-1 gap-1">
              {serviceCategoriesForPages
                .find((category) => category.slug === selectedCategory?.slug)
                ?.items.map((service) => (
                  <div key={service.name}>
                    <Link
                      href={getServiceHref(selectedCategory!.slug, service.slug)}
                      onClick={onServiceClick}
                      className="inline-flex items-start px-1 py-1.5 text-sm text-slate-100 hover:text-white hover:translate-x-0.5 transition-all duration-300 cursor-pointer"
                    >
                      <span>{service.name}</span>
                    </Link>
                  </div>
                ))}
            </div>
            <Link
              href={getCategoryHref(selectedCategory?.slug ?? "")}
              onClick={onServiceClick}
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
