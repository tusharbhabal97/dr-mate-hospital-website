import Link from "next/link";
import type { ReactNode } from "react";
import ThemedHeroSection from "./ThemedHeroSection";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  badge?: string;
  actions?: ReactNode;
  contentAlignment?: "start" | "end";
  compactMobileTitle?: boolean;
  breadcrumbs?: Array<{ label: string; href?: string }>;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  badge,
  actions,
  contentAlignment = "end",
  compactMobileTitle = false,
  breadcrumbs,
}: PageHeroProps) {
  const alignmentClass = contentAlignment === "start" ? "lg:items-start" : "lg:items-end";
  const serviceHeroClass = contentAlignment === "start" ? "service-page-hero-row" : "";
  const titleClass = compactMobileTitle
    ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
    : "text-4xl md:text-5xl lg:text-6xl";

  return (
    <ThemedHeroSection className="pt-28 pb-16">
      <div className="relative max-w-6xl mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 inline-flex max-w-[calc(100vw-2rem)] flex-wrap items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-sm shadow-card backdrop-blur-md">
            {breadcrumbs.map((crumb, index) => (
              <div key={`${crumb.label}-${index}`} className="flex min-w-0 items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="text-primary/70 hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary font-semibold">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-primary/40">›</span>
                )}
              </div>
            ))}
          </nav>
        )}
        <div className={`flex flex-col lg:flex-row ${alignmentClass} ${serviceHeroClass} gap-10`}>
          <div className="w-full min-w-0 max-w-[calc(100vw-2rem)] lg:max-w-2xl">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {eyebrow}
              </div>
            )}
            <h1 className={`font-display ${titleClass} font-bold text-dark leading-tight mb-4 break-words [overflow-wrap:anywhere]`}>
              {title}
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed break-words">
              {subtitle}
            </p>
          </div>

          <div className="flex w-full min-w-0 max-w-[calc(100vw-2rem)] flex-col gap-4 lg:ml-auto lg:max-w-[24rem] lg:flex-none">
            {badge && (
              <div className="rounded-xl border border-primary/20 bg-white/80 px-4 py-2 text-xs font-semibold text-primary shadow-card">
                {badge}
              </div>
            )}
            {actions}
          </div>
        </div>
      </div>
    </ThemedHeroSection>
  );
}
