"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import diseasesData from "@/data/disease.json";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Disease = {
  id: string;
  name: string;
  description: string;
  category: string;
  letter?: string;
  symptoms: string[];
};

const getDiseaseLetter = (disease: { letter?: string; name: string }) => {
  const letter = disease.letter?.trim().charAt(0).toUpperCase();
  if (letter && ALPHABET.includes(letter)) return letter;
  const fromName = disease.name.trim().charAt(0).toUpperCase();
  return ALPHABET.includes(fromName) ? fromName : "#";
};

export default function DiseasesPage() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const resultsRef = useRef<HTMLElement>(null);

  const diseases = (diseasesData as { diseases: Disease[] }).diseases ?? [];
  const availableLetters = useMemo(
    () => new Set(diseases.map((d) => getDiseaseLetter(d))),
    [diseases],
  );

  const filtered = useMemo(() => {
    let result = diseases;
    if (activeLetter) {
      result = result.filter((d) => getDiseaseLetter(d) === activeLetter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q),
      );
    }
    return result;
  }, [search, activeLetter, diseases]);

  const grouped = useMemo(() => {
    const map: Record<string, Disease[]> = {};
    filtered.forEach((d) => {
      const letter = getDiseaseLetter(d);
      if (!map[letter]) map[letter] = [];
      map[letter].push(d);
    });
    return map;
  }, [filtered]);

  const sortedLetters = Object.keys(grouped).sort();

  useEffect(() => {
    const section = resultsRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [filtered]);

  return (
    <main className="min-h-screen bg-surface">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#162f6f] via-[#1f3c88] to-[#162f6f] pt-28 pb-14 px-4 relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30" />

        <div className="relative max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 mb-6 text-sm">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <svg
              className="w-4 h-4 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white/80 font-semibold">
              Diseases and Conditions
            </span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Diseases &amp; Conditions
          </h1>
          <p className="text-white/70 text-lg mb-8 font-body max-w-2xl">
            Explore detailed information on symptoms, causes, diagnosis, and
            treatment options.
          </p>

          <div className="relative max-w-2xl">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveLetter(null);
              }}
              placeholder="Search for diseases & conditions..."
              className="w-full bg-white rounded-full py-4 pl-6 pr-16 text-dark font-body text-base shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shadow-btn">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Alphabet Filter */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h2 className="font-display font-bold text-dark text-lg mb-4">
            Find Diseases &amp; Conditions By First Letter
          </h2>
          <div className="flex flex-wrap gap-2">
            {ALPHABET.map((letter) => {
              const isAvailable = availableLetters.has(letter);
              const isActive = activeLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => {
                    if (!isAvailable) return;
                    setActiveLetter(isActive ? null : letter);
                    setSearch("");
                  }}
                  disabled={!isAvailable}
                  className={`w-10 h-10 rounded-full border text-sm font-bold font-display transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary border-primary text-white shadow-btn"
                        : isAvailable
                          ? "border-primary/30 text-primary hover:bg-primary hover:text-white"
                          : "border-gray-200 text-gray-300 cursor-not-allowed"
                    }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className="max-w-6xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-dark text-xl mb-2">
              No results found
            </h3>
            <p className="text-muted font-body">
              Try a different search term or letter.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {sortedLetters.map((letter) => (
              <div key={letter} className="reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-btn flex-shrink-0">
                    <span className="font-display font-bold text-white text-xl">
                      {letter}
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {grouped[letter].map((disease) => (
                    <Link
                      key={disease.id}
                      href={`/diseases/${disease.id}`}
                      className="group"
                    >
                      <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-card service-card cursor-pointer">
                        <span className="tag-navy mb-3 inline-block">
                          {disease.category.split("/")[0]}
                        </span>

                        <h3 className="font-display font-bold text-dark text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                          {disease.name}
                        </h3>

                        <p className="text-muted font-body text-sm leading-relaxed line-clamp-2 mb-4">
                          {disease.description.slice(0, 100)}...
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs text-muted">
                            <svg
                              className="w-3.5 h-3.5 text-medical"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {disease.symptoms?.length ?? 0} symptoms
                          </div>
                          <span className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                            Learn more
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <p className="text-center text-muted font-body text-sm mt-10">
            Showing{" "}
            <span className="font-bold text-primary">{filtered.length}</span>{" "}
            of {diseases.length} conditions
          </p>
        )}
      </section>
    </main>
  );
}
