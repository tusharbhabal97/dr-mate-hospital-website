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
