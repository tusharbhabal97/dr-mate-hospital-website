import DiseasesPageClient from "@/components/diseases/DiseasesPageClient";
import { getDiseasesIndex } from "@/lib/diseases-server";

type DiseasesPageProps = {
  searchParams?: {
    q?: string;
    letter?: string;
  };
};

export default async function DiseasesPage({ searchParams }: DiseasesPageProps) {
  const diseases = await getDiseasesIndex();
  return (
    <DiseasesPageClient
      diseases={diseases}
      initialQuery={searchParams?.q ?? ""}
      initialLetter={searchParams?.letter ?? ""}
    />
  );
}
