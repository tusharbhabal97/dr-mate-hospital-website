"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DISEASE_LETTERS } from "@/lib/diseases-data";
import type { DiseaseIndexEntry } from "@/lib/diseases-types";

type Props = {
  diseases: DiseaseIndexEntry[];
};

export default function DiseasesPageClient({ diseases }: Props) {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const availableLetters = useMemo(
    () => new Set(diseases.map((disease) => disease.letter || "Other")),
    [diseases],
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return diseases.filter((disease) => {
      const matchesLetter = activeLetter ? disease.letter === activeLetter : true;
      if (!matchesLetter) return false;
      if (!query) return true;
      return (
        disease.name.toLowerCase().includes(query) ||
        disease.slug.toLowerCase().includes(query) ||
        disease.section_headings.some((heading) => heading.toLowerCase().includes(query))
      );
    });
  }, [activeLetter, diseases, search]);

  const grouped = useMemo(() => {
    const map: Record<string, DiseaseIndexEntry[]> = {};
    for (const disease of filtered) {
      const key = disease.letter || "Other";
      if (!map[key]) map[key] = [];
      map[key].push(disease);
    }
    return map;
  }, [filtered]);

  const orderedLetters = DISEASE_LETTERS.filter((letter) => grouped[letter]?.length);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-[#0d3f80] via-[#1352a0] to-[#0d3f80] pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Diseases &amp; Conditions
          </h1>
          <p className="text-blue-100 max-w-3xl">
            Browse our complete disease and condition library, organized alphabetically for
            quick reference.
          </p>
          <div className="mt-6">
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setActiveLetter(null);
              }}
              placeholder="Search by disease name, slug, or section heading..."
              className="w-full max-w-2xl bg-white rounded-xl px-4 py-3 border border-blue-100 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <p className="mt-4 text-sm text-blue-50">
            Showing {filtered.length} of {diseases.length} diseases
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-wrap gap-2">
          {DISEASE_LETTERS.map((letter) => {
            const available = availableLetters.has(letter);
            const active = activeLetter === letter;
            return (
              <button
                key={letter}
                disabled={!available}
                onClick={() => {
                  if (!available) return;
                  setActiveLetter(active ? null : letter);
                  setSearch("");
                }}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                  active
                    ? "bg-blue-600 text-white border-blue-600"
                    : available
                      ? "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
                      : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        {filtered.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-600">
            No diseases found for your current filter.
          </div>
        ) : (
          <div className="space-y-8">
            {orderedLetters.map((letter) => (
              <div key={letter}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 min-w-10 px-3 rounded-lg bg-blue-700 text-white font-semibold flex items-center justify-center">
                    {letter}
                  </div>
                  <div className="h-px flex-1 bg-blue-100" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {grouped[letter].map((disease) => (
                    <Link
                      key={disease.slug}
                      href={`/diseases/${disease.slug}`}
                      className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h2 className="font-display text-lg font-semibold text-slate-900">
                        {disease.name}
                      </h2>
                      {disease.h1_titles[0] && (
                        <p className="text-sm text-slate-600 mt-1">{disease.h1_titles[0]}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

