import "server-only";

import { cache } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  dedupeBySlug,
  flattenGroupedDiseases,
  toDiseaseIndex,
} from "@/lib/diseases-data";
import type {
  DiseaseEntry,
  DiseaseIndexEntry,
  DiseaseLetter,
  GroupedDiseasesPayload,
} from "@/lib/diseases-types";

const groupedDiseasesPath = path.join(
  process.cwd(),
  "data",
  "combined_disease_final.json",
);

export const getGroupedDiseases = cache(async (): Promise<GroupedDiseasesPayload> => {
  const raw = await readFile(groupedDiseasesPath, "utf-8");
  return JSON.parse(raw) as GroupedDiseasesPayload;
});

export const getAllDiseases = cache(
  async (): Promise<Array<DiseaseEntry & { letter: string }>> => {
    const grouped = await getGroupedDiseases();
    const flattened = flattenGroupedDiseases(grouped);
    return dedupeBySlug(flattened);
  },
);

export const getDiseasesIndex = cache(async (): Promise<DiseaseIndexEntry[]> => {
  const all = await getAllDiseases();
  return toDiseaseIndex(all);
});

export type HomeDiseaseSuggestion = Pick<DiseaseIndexEntry, "name" | "slug" | "h1_titles">;

export const getAvailableDiseaseLetters = cache(async (): Promise<DiseaseLetter[]> => {
  const all = await getAllDiseases();
  const letters = new Set<string>();
  for (const disease of all) {
    if (disease.letter && disease.letter !== "Other") {
      letters.add(disease.letter);
    }
  }
  return Array.from(letters);
});

export const searchDiseaseSuggestions = cache(
  async (normalizedQuery: string): Promise<HomeDiseaseSuggestion[]> => {
    if (!normalizedQuery) return [];
    const index = await getDiseasesIndex();
    return index
      .filter((disease) => disease.searchable_text.includes(normalizedQuery))
      .slice(0, 6)
      .map(({ name, slug, h1_titles }) => ({ name, slug, h1_titles }));
  },
);
