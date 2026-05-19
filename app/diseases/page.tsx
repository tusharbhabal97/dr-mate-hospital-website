import DiseasesPageClient from "@/components/diseases/DiseasesPageClient";
import { getDiseasesIndex } from "@/lib/diseases-server";

export default async function DiseasesPage() {
  const diseases = await getDiseasesIndex();
  return <DiseasesPageClient diseases={diseases} />;
}

