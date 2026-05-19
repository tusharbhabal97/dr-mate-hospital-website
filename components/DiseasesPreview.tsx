import Link from "next/link";
import { getDiseasesIndex } from "@/lib/diseases-server";

export default async function DiseasesPreview() {
  const diseases = await getDiseasesIndex();
  const preview = diseases.slice(0, 8);

  return (
    <section id="diseases" className="bg-surface py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card bg-white border border-gray-100 rounded-xl p-6 lg:p-8 shadow-card">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            Disease Directory
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dark">
            Diseases &amp; Conditions
          </h2>
          <p className="text-muted text-sm mt-2">
            Access the complete A-Z disease and condition directory.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Link href="/diseases" className="btn-primary text-sm px-5 py-2.5">
              View All Diseases
            </Link>
            <span className="text-xs text-muted">{diseases.length} conditions available</span>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {preview.map((disease) => (
              <Link
                key={disease.slug}
                href={`/diseases/${disease.slug}`}
                className="bg-white card rounded-xl border border-gray-100 px-4 py-3 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <p className="text-sm font-semibold text-dark leading-snug">{disease.name}</p>
                {disease.h1_titles[0] && (
                  <p className="text-xs text-muted mt-1">{disease.h1_titles[0]}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

