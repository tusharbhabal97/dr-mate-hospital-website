import { getDiseasesIndex } from "@/lib/diseases-server";
import HomeDiseaseFinder from "@/components/HomeDiseaseFinder";

export default async function DiseasesPreview() {
  const diseases = await getDiseasesIndex();
  return <HomeDiseaseFinder diseases={diseases} />;
}
