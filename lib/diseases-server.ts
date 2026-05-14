import "server-only";

import { cache } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { CombinedDisease } from "@/lib/diseases-types";

type CombinedPayload = {
  diseases?: CombinedDisease[];
};

const combinedDiseasesPath = path.join(
  process.cwd(),
  "data",
  "combined_diseases_conditions.json",
);

export const getCombinedDiseases = cache(async (): Promise<CombinedDisease[]> => {
  const raw = await readFile(combinedDiseasesPath, "utf-8");
  const payload = JSON.parse(raw) as CombinedPayload;
  return payload.diseases ?? [];
});
