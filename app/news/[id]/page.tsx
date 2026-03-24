import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import AppointmentProcess from "@/components/AppointmentProcess";
import ImmersiveDetailLayout from "@/components/ImmersiveDetailLayout";
import { newsArticles } from "@/data/news";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = newsArticles.find((item) => item.id === params.id);

  if (!article) {
    notFound();
  }

  const related = newsArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <ImmersiveDetailLayout
      badge={article.category}
      title={article.title}
      description={article.excerpt}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "News", href: "/news" },
        { label: "Article" },
      ]}
      stats={[
        { label: "Author", value: article.author.replace("Dr. ", "") },
        {
          label: "Published",
          value: new Date(article.publishedOn).toLocaleDateString(),
        },
        { label: "Category", value: article.category },
        { label: "Read Time", value: "4 min" },
      ]}
      afterContent={
        <>
          <AppointmentProcess />
          <Footer />
        </>
      }
    >
      <article className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card">
        <div className="relative h-72 w-full sm:h-96">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-7 sm:p-9">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
              {article.category}
            </span>
            <span>{article.author}</span>
            <span>{new Date(article.publishedOn).toLocaleDateString()}</span>
          </div>

          <div className="space-y-4 text-sm leading-7 text-slate-700">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-5">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
            >
              Back to All News
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 font-display text-2xl font-bold text-slate-900">
            Related Articles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="rounded-[1.4rem] border border-slate-100 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                  {item.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </ImmersiveDetailLayout>
  );
}
