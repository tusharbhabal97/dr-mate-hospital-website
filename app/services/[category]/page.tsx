import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layouts/PageHero";
import PageShell from "@/components/layouts/PageShell";
import ServiceDetailSections from "@/components/services/ServiceDetailSections";
import {
  getServiceCategoryBySlug,
  getServiceHref,
  serviceCategoriesForPages,
} from "@/data/services-menu";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export function generateStaticParams() {
  return serviceCategoriesForPages.map((category) => ({
    category: category.slug,
  }));
}

export default function ServiceCategoryPage({ params }: CategoryPageProps) {
  const category = getServiceCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Services"
          title={category.title}
          subtitle={category.overview}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: category.title },
          ]}
        />
      }
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
          <h2 className="font-display text-2xl font-bold text-dark mb-4">Services</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {category.items.map((service) => (
              <li key={service.slug}>
                <Link
                  href={getServiceHref(category.slug, service.slug)}
                  className="inline-flex text-sm font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ServiceDetailSections
          overview={category.overview}
          featureTitle="Services / Features"
          features={category.features}
        />
      </div>
    </PageShell>
  );
}
