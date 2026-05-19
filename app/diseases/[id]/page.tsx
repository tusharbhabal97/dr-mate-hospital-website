import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  findDiseaseBySlug,
  getDescriptionFromSections,
  getDisplaySections,
  getTableOfContents,
  shouldRenderAsList,
} from "@/lib/diseases-data";
import { getAllDiseases } from "@/lib/diseases-server";

type PageProps = {
  params: { id: string };
};

const headingTag = (level: string) => {
  const normalized = (level || "").toLowerCase();
  if (normalized === "h3") return "h3";
  if (normalized === "h4") return "h4";
  return "h2";
};

const extractLink = (text: string) => text.match(/https?:\/\/[^\s)]+/i)?.[0] ?? null;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const diseases = await getAllDiseases();
  const disease = findDiseaseBySlug(diseases, params.id);
  if (!disease) {
    return { title: "Disease Not Found" };
  }

  return {
    title: disease.content?.meta_title || disease.name,
    description: getDescriptionFromSections(disease) || disease.name,
  };
}

export default async function DiseaseDetailPage({ params }: PageProps) {
  const diseases = await getAllDiseases();
  const disease = findDiseaseBySlug(diseases, params.id);

  if (!disease) notFound();

  const sections = getDisplaySections(disease);
  const toc = getTableOfContents(sections);
  const subtitle = disease.content?.h1_titles?.[0] || "";

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="pt-24 pb-10 px-4 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <Link href="/diseases" className="text-sm text-blue-700 hover:text-blue-800">
            Back to Diseases &amp; Conditions
          </Link>
          <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold text-slate-900">
            {disease.name}
          </h1>
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
          {disease.url && (
            <a
              href={disease.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-4 text-sm text-blue-700 hover:text-blue-800"
            >
              Source: {disease.url}
            </a>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8 space-y-6">
          {sections.map((section, index) => {
            const id = `section-${index + 1}`;
            const Tag = headingTag(section.level);
            const isList = shouldRenderAsList(section.content);

            if (!section.content.length) return null;

            return (
              <section key={id} id={id} className="bg-white border border-slate-200 rounded-2xl p-6">
                {section.heading ? (
                  <Tag className="font-display font-bold text-xl text-slate-900 mb-4">
                    {section.heading}
                  </Tag>
                ) : null}

                {isList ? (
                  <ul className="space-y-2 text-slate-700">
                    {section.content.map((item, itemIndex) => {
                      const url = extractLink(item);
                      return (
                        <li key={`${id}-item-${itemIndex}`} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                          <span>
                            {item}
                            {url && (
                              <>
                                {" "}
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-blue-700 underline"
                                >
                                  {url}
                                </a>
                              </>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="space-y-4 text-slate-700 leading-7">
                    {section.content.map((item, itemIndex) => {
                      const url = extractLink(item);
                      return (
                        <p key={`${id}-p-${itemIndex}`}>
                          {item}
                          {url && (
                            <>
                              {" "}
                              <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-700 underline"
                              >
                                {url}
                              </a>
                            </>
                          )}
                        </p>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </article>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h2 className="font-display font-bold text-lg text-slate-900 mb-3">On This Page</h2>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-slate-700 hover:text-blue-700">
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {disease.url && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h2 className="font-display font-bold text-lg text-slate-900 mb-2">Medical Source</h2>
                <a
                  href={disease.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-700 break-all"
                >
                  {disease.url}
                </a>
              </div>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}

