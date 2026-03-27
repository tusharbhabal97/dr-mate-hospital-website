import type { ReactNode } from "react";

type HeroInfoCardItem = {
  title: string;
  subtitle: string;
  icon?: ReactNode;
};

type HeroInfoCardsProps = {
  items: HeroInfoCardItem[];
};

const cardShellClasses = [
  "rounded-[1.4rem] bg-white/85 border border-primary/25 backdrop-blur-md p-4 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]",
  "rounded-[1.8rem] bg-white/85 border border-primary/25 backdrop-blur-md p-4 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] sm:-translate-y-1",
  "rounded-[1.8rem] bg-white/85 border border-primary/25 backdrop-blur-md p-4 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]",
  "rounded-[1.4rem] bg-white/85 border border-primary/25 backdrop-blur-md p-4 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] sm:-translate-y-1",
];

export default function HeroInfoCards({ items }: HeroInfoCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={`${item.title}-${item.subtitle}`}
          className={`relative overflow-hidden ${cardShellClasses[index % cardShellClasses.length]}`}
        >
          {item.icon && (
            <span className="absolute right-4 top-4 text-primary/15" aria-hidden="true">
              {item.icon}
            </span>
          )}
          <p className="pr-8 text-xl font-display font-extrabold text-primary sm:text-2xl">
            {item.title}
          </p>
          <p className="mt-1 text-xs text-muted sm:text-sm">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
