import Link from "next/link";
import type { ReactNode } from "react";
import ThemedHeroSection from "./ThemedHeroSection";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  badge?: string;
  actions?: ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  badge,
  actions,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <ThemedHeroSection className="pt-28 pb-16">
      <div className="relative max-w-6xl mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-sm shadow-card backdrop-blur-md">
            {breadcrumbs.map((crumb, index) => (
              <div key={`${crumb.label}-${index}`} className="flex items-center gap-2">
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
        <div className="flex flex-col lg:flex-row lg:items-end gap-10">
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {eyebrow}
              </div>
            )}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-4">
              {title}
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 lg:ml-auto lg:max-w-[24rem] lg:flex-none">
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
