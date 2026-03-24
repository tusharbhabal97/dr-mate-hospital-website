import type { ReactNode } from "react";

type ServiceCardProps = {
  name: string;
  description: string;
  icon: ReactNode;
};

export default function ServiceCard({ name, description, icon }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover transition-all">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-display font-bold text-base text-dark mb-2">{name}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </article>
  );
}
