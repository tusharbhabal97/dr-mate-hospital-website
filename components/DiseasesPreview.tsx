"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import diseasesData from "@/data/disease.json";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Disease = {
  id: string;
  name: string;
  description: string;
  category: string;
  letter?: string;
  symptoms?: string[];
};

const getDiseaseLetter = (disease: Disease) => {
  const letter = disease.letter?.trim().charAt(0).toUpperCase();
  if (letter && ALPHABET.includes(letter)) return letter;
  const fromName = disease.name.trim().charAt(0).toUpperCase();
  return ALPHABET.includes(fromName) ? fromName : "#";
};

export default function DiseasesPreview() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

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
          d.category.toLowerCase().includes(q) ||
          d.symptoms?.some((symptom) => symptom.toLowerCase().includes(q)),
      );
    }
    return result;
  }, [search, activeLetter, diseases]);

  const preview = filtered.slice(0, 8);

  return (
    <section id="diseases" className="bg-surface py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card bg-white border border-gray-100 rounded-xl p-6 lg:p-8 shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Alphabet Filter */}
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                Disease Directory
              </p>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dark">
                Find Diseases &amp; Conditions by Alphabet
              </h2>
              <div className="flex flex-wrap gap-2 mt-5">
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
                      aria-pressed={isActive}
                      aria-label={`Filter diseases by ${letter}`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search */}
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                Search Directory
              </p>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-dark">
                Search Diseases and Conditions
              </h3>
              <div className="relative mt-4">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setActiveLetter(null);
                  }}
                  placeholder="Search by disease, symptom, or category..."
                  className="w-full bg-white border border-gray-200 rounded-full py-3.5 pl-5 pr-14 text-dark text-sm shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-btn">
                  <svg
                    className="w-4.5 h-4.5"
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
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed mt-3">
                Quickly find reliable information on symptoms, causes, and
                treatments across our disease database.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/diseases"
                  className="btn-primary text-sm px-5 py-2.5"
                >
                  View All Diseases
                </Link>
                <span className="text-xs text-muted">
                  {filtered.length} conditions found
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Results */}
        {preview.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {preview.map((disease) => (
              <Link
                key={disease.id}
                href={`/diseases/${disease.id}`}
                className="bg-white card rounded-xl border border-gray-100 px-4 py-3 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <p className="text-sm font-semibold text-dark leading-snug">
                  {disease.name}
                </p>
                <p className="text-xs text-muted mt-1">
                  {disease.category.split("/")[0]}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
