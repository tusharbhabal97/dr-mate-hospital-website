import diseasesIndexData from "@/data/combined_diseases_conditions_index.json";
import type { DiseaseIndexEntry } from "@/lib/diseases-types";

type DiseaseIndexPayload = {
  diseases?: DiseaseIndexEntry[];
};

export const diseasesIndex =
  (diseasesIndexData as DiseaseIndexPayload).diseases ?? [];
