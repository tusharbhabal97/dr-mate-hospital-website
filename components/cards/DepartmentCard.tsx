import Link from "next/link";
import type { ReactNode } from "react";

type DepartmentCardProps = {
  id: string;
  name: string;
  summary: string;
  icon: ReactNode;
};

export default function DepartmentCard({
  id,
  name,
  summary,
  icon,
}: DepartmentCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover transition-all">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg text-dark mb-2">{name}</h3>
      <p className="text-sm text-muted leading-relaxed mb-5">{summary}</p>
      <Link
        href={`/departments/${id}`}
        className="inline-flex items-center justify-center gap-2 btn-outline text-sm px-4 py-2"
        aria-label={`View details for ${name}`}
      >
        View Details
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
        </svg>
      </Link>
    </article>
  );
}
