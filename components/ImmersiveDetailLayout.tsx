import Link from "next/link";
import { ReactNode } from "react";
import ThemedHeroSection from "@/components/layouts/ThemedHeroSection";
import Navbar from "@/components/Navbar";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type HeroStat = {
  label: string;
  value: string | number;
};

type ImmersiveDetailLayoutProps = {
  badge: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  stats: HeroStat[];
  children: ReactNode;
  afterContent?: ReactNode;
};

export default function ImmersiveDetailLayout({
  badge,
  title,
  description,
  breadcrumbs,
  stats,
  children,
  afterContent,
}: ImmersiveDetailLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <ThemedHeroSection className="pt-24 pb-20">
        <div className="relative max-w-6xl mx-auto">
          <nav className="mb-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-sm shadow-card backdrop-blur-md">
            {breadcrumbs.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-primary/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary font-semibold">{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <svg
                    className="w-4 h-4 text-primary/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </nav>

          <div className="grid lg:grid-cols-[1.25fr,1fr] gap-8 items-end">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {badge}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-3 leading-tight">
                {title}
              </h1>
              <p className="text-muted text-lg max-w-3xl">{description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.slice(0, 4).map((stat, index) => (
                <div
                  key={stat.label}
                  className={`min-w-0 bg-white/85 border border-primary/25 backdrop-blur-md p-4 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] ${
                    index % 2 === 0
                      ? "rounded-[1.4rem] translate-y-2"
                      : "rounded-[1.8rem] -translate-y-1"
                  }`}
                >
                  <p className="text-xl sm:text-2xl font-display font-extrabold text-primary leading-tight break-all [overflow-wrap:anywhere]">
                    {stat.value}
                  </p>
                  <p className="text-muted text-xs mt-1 break-words">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ThemedHeroSection>

      <section className="max-w-6xl mx-auto px-4 py-12">{children}</section>
      {afterContent}
    </main>
  );
}
