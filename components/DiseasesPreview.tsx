import { getAvailableDiseaseLetters } from "@/lib/diseases-server";
import HomeDiseaseFinder from "@/components/HomeDiseaseFinder";

export default async function DiseasesPreview() {
  const availableLetters = await getAvailableDiseaseLetters();
  return <HomeDiseaseFinder availableLetters={availableLetters} />;
}
