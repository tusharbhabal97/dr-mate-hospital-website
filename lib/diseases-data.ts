import type {
  DiseaseEntry,
  DiseaseIndexEntry,
  DiseaseSection,
  GroupedDiseasesPayload,
} from "@/lib/diseases-types";

export const DISEASE_LETTERS = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  "Other",
] as const;

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const normalizeSection = (section: DiseaseSection): DiseaseSection | null => {
  const heading = asText(section?.heading);
  const level = asText(section?.level);
  const content = Array.isArray(section?.content)
    ? section.content.map(asText).filter(Boolean)
    : [];

  if (!heading && content.length === 0) return null;
  return { heading, level, content };
};

const contentRichness = (entry: DiseaseEntry) => {
  const sections = Array.isArray(entry?.content?.sections)
    ? entry.content.sections
    : [];
  const sectionScore = sections.reduce(
    (sum, section) => sum + (section.content?.join(" ").length ?? 0),
    0,
  );
  return sections.length * 1000 + sectionScore + (entry.content?.full_text?.length ?? 0);
};

export const flattenGroupedDiseases = (
  grouped: GroupedDiseasesPayload,
): Array<DiseaseEntry & { letter: string }> => {
  const all: Array<DiseaseEntry & { letter: string }> = [];
  for (const letter of DISEASE_LETTERS) {
    const entries = Array.isArray(grouped[letter]) ? grouped[letter] : [];
    for (const entry of entries) {
      all.push({ ...entry, letter });
    }
  }
  return all;
};

export const dedupeBySlug = (
  diseases: Array<DiseaseEntry & { letter: string }>,
): Array<DiseaseEntry & { letter: string }> => {
  const bySlug = new Map<string, DiseaseEntry & { letter: string }>();
  for (const item of diseases) {
    const slug = asText(item.slug);
    if (!slug) continue;
    const current = bySlug.get(slug);
    if (!current || contentRichness(item) > contentRichness(current)) {
      bySlug.set(slug, item);
    }
  }
  return Array.from(bySlug.values());
};

export const sortDiseasesByName = <T extends { name: string }>(diseases: T[]) =>
  [...diseases].sort((a, b) => asText(a.name).localeCompare(asText(b.name)));

export const toDiseaseIndex = (
  diseases: Array<DiseaseEntry & { letter: string }>,
): DiseaseIndexEntry[] =>
  sortDiseasesByName(diseases).map((disease) => {
    const sections = (disease.content?.sections ?? [])
      .map(normalizeSection)
      .filter(Boolean) as DiseaseSection[];
    return {
      name: asText(disease.name),
      slug: asText(disease.slug),
      letter: asText(disease.letter) || "Other",
      url: asText(disease.url),
      meta_title: asText(disease.content?.meta_title),
      h1_titles: Array.isArray(disease.content?.h1_titles)
        ? disease.content.h1_titles.map(asText).filter(Boolean)
        : [],
      section_headings: sections.map((section) => section.heading).filter(Boolean),
      sections_count: sections.length,
    };
  });

export const findDiseaseBySlug = (
  diseases: Array<DiseaseEntry & { letter: string }>,
  slug: string,
) => diseases.find((disease) => disease.slug === slug);

export const getDisplaySections = (disease: DiseaseEntry): DiseaseSection[] => {
  const normalized = (disease.content?.sections ?? [])
    .map(normalizeSection)
    .filter(Boolean) as DiseaseSection[];

  if (normalized.length > 0) return normalized;

  const fullText = asText(disease.content?.full_text);
  if (!fullText) return [];

  return [{ heading: "Full Content", level: "h2", content: [fullText] }];
};

export const getDescriptionFromSections = (disease: DiseaseEntry) => {
  const sections = getDisplaySections(disease);
  const intro = sections.find((section) =>
    /introduction|overview/i.test(section.heading || ""),
  );
  const first = intro?.content?.[0] || sections[0]?.content?.[0] || "";
  return asText(first).slice(0, 180);
};

export const getTableOfContents = (sections: DiseaseSection[]) =>
  sections
    .map((section, index) => ({
      id: `section-${index + 1}`,
      heading: asText(section.heading) || `Section ${index + 1}`,
      level: asText(section.level).toLowerCase(),
    }))
    .filter((section) => section.heading);

export const shouldRenderAsList = (items: string[]) => {
  if (items.length <= 1) return false;
  const shortItems = items.filter((item) => item.length <= 220).length;
  return shortItems >= Math.ceil(items.length * 0.6);
};
