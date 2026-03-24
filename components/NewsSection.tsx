"use client";

import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/data/news";

function ArticleCard({ article }: { article: (typeof newsArticles)[0] }) {
  return (
    <Link
      href={`/news/${article.id}`}
      className="bg-white card rounded-xl overflow-hidden flex flex-col shadow-card hover:shadow-card-hover transition-all duration-300 group"
    >
      {/* Image */}
      <div
        className="relative w-full h-[180px] overflow-hidden rounded-xl m-3 mb-0"
        style={{ width: "calc(100% - 24px)" }}
      >
        <Image
          src={article.image}
          alt={`${article.title} — Dr. Mate Hospital Health Article`}
          fill
          className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category badge */}
        <span className="inline-flex items-center self-start bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-md mb-3">
          {article.category}
        </span>

        <h3 className="font-display font-bold text-dark text-base mb-1.5 group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed flex-1">
          {article.excerpt}
        </p>

        <p className="text-muted text-xs mt-3 text-right font-medium">
          ~{article.author}
        </p>
      </div>
    </Link>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-white py-16 lg:py-24" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
          <div className="max-w-sm">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-dark leading-tight mb-3">
              News &amp; Articles
            </h2>
            <p className="text-muted text-sm lg:text-base leading-relaxed mt-4">
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>

          <Link
            href="/news"
            className="btn-primary text-sm px-6 py-3 whitespace-nowrap"
          >
            View All
          </Link>
        </div>

        {/* Row 1 — 4 cards in a dashed border container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {newsArticles.slice(0, 8).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Check out more CTA */}
        <div className="flex justify-center">
          <Link
            href="/news"
            className="btn-primary text-sm sm:text-base px-8 py-3.5"
          >
            Check out more
          </Link>
        </div>
      </div>
    </section>
  );
}
