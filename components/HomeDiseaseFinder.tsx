"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DISEASE_LETTERS } from "@/lib/diseases-data";
import type { DiseaseLetter } from "@/lib/diseases-types";

type HomeDiseaseSuggestion = {
  name: string;
  slug: string;
  h1_titles: string[];
};

type Props = {
  availableLetters: DiseaseLetter[];
};

export default function HomeDiseaseFinder({ availableLetters }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<HomeDiseaseSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const availableLetterSet = useMemo(() => new Set(availableLetters), [availableLetters]);

  useEffect(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      setSuggestions([]);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/diseases/suggest?q=${encodeURIComponent(normalized)}`, {
          method: "GET",
          signal: controller.signal,
          cache: "no-store",
        });
        const payload = (await response.json()) as { suggestions?: HomeDiseaseSuggestion[] };
        setSuggestions(Array.isArray(payload.suggestions) ? payload.suggestions : []);
      } catch {
        if (!controller.signal.aborted) {
          setSuggestions([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }, 180);

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [query]);

  const onSubmitSearch = () => {
    const normalized = query.trim();
    if (!normalized) return;
    router.push(`/diseases?q=${encodeURIComponent(normalized)}`);
  };

  return (
    <section id="diseases" className="bg-surface py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#e6edf4] bg-white p-4 sm:p-6 lg:p-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
            <div className="rounded-[1.5rem] border border-[#ebf1f5] bg-[#f9fbfc] p-5 sm:p-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark">
                Find Diseases &amp; Conditions By Alphabet
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {DISEASE_LETTERS.filter((letter) => letter !== "Other").map((letter) => {
                  const enabled = availableLetterSet.has(letter);
                  const active = activeLetter === letter;
                  return (
                    <button
                      key={letter}
                      type="button"
                      disabled={!enabled}
                      aria-label={`Browse diseases starting with ${letter}`}
                      aria-pressed={active}
                      onClick={() => {
                        if (!enabled) return;
                        setActiveLetter(letter);
                        router.push(`/diseases?letter=${letter}`);
                      }}
                      className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full border text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#75b7d4] focus:ring-offset-2 ${
                        active
                          ? "bg-[#0f5f86] text-white border-[#0f5f86]"
                          : enabled
                            ? "border-[#0f5f86] text-[#0d4868] hover:bg-[#e8f5fb]"
                            : "border-slate-200 text-slate-300 cursor-not-allowed"
                      }`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#ebf1f5] bg-white p-5 sm:p-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-dark">
                Search Diseases and Conditions
              </h3>

              <div className="mt-6 relative">
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      onSubmitSearch();
                    }
                  }}
                  placeholder="Search"
                  aria-label="Search diseases and conditions"
                  className="w-full rounded-full border border-[#a8d2e4] py-3 pl-5 pr-16 text-base text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#75b7d4]"
                />
                <button
                  type="button"
                  aria-label="Submit disease search"
                  onClick={onSubmitSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#2b8db7] text-white flex items-center justify-center hover:bg-[#20779d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#75b7d4] focus:ring-offset-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20L16.65 16.65" />
                  </svg>
                </button>
              </div>

              <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                Quickly find the information you need. Search our database to explore detailed
                information on diseases and conditions, including symptoms, causes, and treatment
                options.
              </p>

              {query.trim() ? (
                <div className="mt-4 space-y-2">
                  {isLoading ? (
                    <p className="text-sm text-slate-600 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      Searching...
                    </p>
                  ) : suggestions.length === 0 ? (
                    <p className="text-sm text-slate-600 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      No matching disease or condition found.
                    </p>
                  ) : (
                    suggestions.map((disease) => (
                      <Link
                        key={disease.slug}
                        href={`/diseases/${disease.slug}`}
                        className="block rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-[#8ec6dc] hover:bg-[#f7fcff] transition-colors"
                      >
                        <p className="text-sm font-semibold text-slate-900">{disease.name}</p>
                        {disease.h1_titles[0] ? (
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                            {disease.h1_titles[0]}
                          </p>
                        ) : null}
                      </Link>
                    ))
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
