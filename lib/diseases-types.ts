export type DiseaseSection = {
  heading: string;
  level: string;
  content: string[];
};

export type DiseaseContent = {
  meta_title: string;
  h1_titles: string[];
  sections: DiseaseSection[];
  full_text: string;
};

export type DiseaseEntry = {
  name: string;
  slug: string;
  url: string;
  content: DiseaseContent;
};

export type DiseaseLetter = string;

export type GroupedDiseasesPayload = {
  [key: DiseaseLetter]: DiseaseEntry[];
};

export type DiseaseIndexEntry = {
  name: string;
  slug: string;
  letter: string;
  url: string;
  meta_title: string;
  h1_titles: string[];
  section_headings: string[];
  searchable_text: string;
  sections_count: number;
};
