import Link from "next/link";

type ServiceDetailSectionsProps = {
  overview: string;
  featureTitle: string;
  features: readonly string[];
};

export default function ServiceDetailSections({
  overview,
  featureTitle,
  features,
}: ServiceDetailSectionsProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
        <h2 className="font-display text-2xl font-bold text-dark mb-3">Overview</h2>
        <p className="text-sm leading-relaxed text-muted">{overview}</p>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
        <h2 className="font-display text-2xl font-bold text-dark mb-4">{featureTitle}</h2>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-primary/15 bg-primary/5 p-6 shadow-card">
        <h2 className="font-display text-2xl font-bold text-dark mb-3">Take the Next Step</h2>
        <p className="text-sm leading-relaxed text-muted mb-5">
          Our care team is ready to guide you with appointments, treatment planning, and support.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/book-appointment" className="btn-primary px-5 py-2.5 text-sm font-bold">
            Book Appointment
          </Link>
          <Link
            href="/contact"
            className="btn-outline px-5 py-2.5 text-sm font-bold cursor-pointer"
          >
            Contact Now
          </Link>
        </div>
      </section>
    </div>
  );
}
