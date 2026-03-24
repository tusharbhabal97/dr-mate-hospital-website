import type { ReactNode } from "react";

type ThemedHeroSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function ThemedHeroSection({
  children,
  className = "",
}: ThemedHeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-slate-100 bg-surface-gradient px-4 ${className}`}
    >
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-healing/10 blur-3xl" />
      <div className="absolute top-24 -left-16 h-56 w-56 rotate-12 rounded-[2.5rem] border border-primary/15" />
      <div className="absolute bottom-10 -right-20 h-64 w-64 -rotate-12 rounded-[3rem] border border-healing/20" />
      {children}
    </section>
  );
}

