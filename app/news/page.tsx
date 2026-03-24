import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import AppointmentProcess from "@/components/AppointmentProcess";
import ImmersiveDetailLayout from "@/components/ImmersiveDetailLayout";
import { newsArticles } from "@/data/news";

export default function NewsPage() {
  return (
    <ImmersiveDetailLayout
      badge="News & Articles"
      title="Latest Health News"
      description="Read hospital updates, health tips, and expert articles from our medical teams."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      stats={[
        { label: "Published Articles", value: newsArticles.length },
        { label: "Medical Categories", value: "8+" },
        { label: "Expert Contributors", value: "12+" },
        { label: "Updated", value: "Weekly" },
      ]}
      afterContent={
        <>
          <AppointmentProcess />
          <Footer />
        </>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.id}`}
            className="group overflow-hidden rounded-[1.7rem] border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {article.category}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-slate-900">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{article.author}</span>
                <span>{new Date(article.publishedOn).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ImmersiveDetailLayout>
  );
}
