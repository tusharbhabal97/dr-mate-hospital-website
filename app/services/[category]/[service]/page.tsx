import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layouts/PageHero";
import PageShell from "@/components/layouts/PageShell";
import ServiceDetailSections from "@/components/services/ServiceDetailSections";
import { getServiceBySlugs, serviceCategoriesForPages } from "@/data/services-menu";

type ServicePageProps = {
  params: {
    category: string;
    service: string;
  };
};

export function generateStaticParams() {
  return serviceCategoriesForPages.flatMap((category) =>
    category.items.map((service) => ({
      category: category.slug,
      service: service.slug,
    })),
  );
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const resolved = getServiceBySlugs(params.category, params.service);

  if (!resolved) {
    notFound();
  }

  const { category, service } = resolved;
  const relatedServices = category.items.filter((item) => item.slug !== service.slug);

  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Services"
          title={service.name}
          subtitle={service.overview}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: category.title, href: `/services/${category.slug}` },
            { label: service.name },
          ]}
        />
      }
    >
      <div className="space-y-8">
        {relatedServices.length > 0 && (
          <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">
              More in {category.title}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {relatedServices.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${category.slug}/${item.slug}`}
                    className="inline-flex text-sm font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <ServiceDetailSections
          overview={service.overview}
          featureTitle="Services / Features"
          features={service.features}
        />
      </div>
    </PageShell>
  );
}
