export type SourceFlags = {
  from_disease_json: boolean;
  from_apollo_offline: boolean;
};

export type ApolloSection = {
  heading: string;
  level: string;
  content: string[];
};

export type ApolloContent = {
  meta_title: string;
  h1_titles: string[];
  sections: ApolloSection[];
};

export type CombinedDisease = {
  id: string;
  slug: string;
  name: string;
  letter: string;
  category: string;
  description: string;
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatment: string[];
  risk_factors: string[];
  prevention: string[];
  prevalence: string;
  niams_url: string;
  apollo_url: string;
  apollo_slug: string;
  apollo_name: string;
  apollo_content: ApolloContent | null;
  source_flags: SourceFlags;
};

export type DiseaseIndexEntry = {
  id: string;
  slug: string;
  name: string;
  letter: string;
  category: string;
  description: string;
  symptoms: string[];
  source_flags: SourceFlags;
};
