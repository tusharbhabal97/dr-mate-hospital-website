import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";
import HeroInfoCards from "@/components/layouts/HeroInfoCards";
import ServicesCatalog from "@/components/services/ServicesCatalog";

const serviceHeroCards = [
  {
    title: "Complete",
    subtitle: "Treatments",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 8h-3V5a4 4 0 00-8 0v3H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2v-9a2 2 0 00-2-2zm-9-3a2 2 0 114 0v3h-4V5zm3 9h3v2h-3v3h-2v-3H8v-2h3v-3h2v3z" />
      </svg>
    ),
  },
  {
    title: "Modern",
    subtitle: "Infrastructure",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 21h18v-2H3v2zm2-4h4V7H5v10zm5 0h4V3h-4v14zm5 0h4V10h-4v7z" />
      </svg>
    ),
  },
  {
    title: "Personal",
    subtitle: "Care Plans",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 00-2 2v16l4-3 4 3 4-3 4 3V8l-6-6zm0 2.5L18.5 9H14V4.5zM8 11h8v2H8v-2zm0 4h6v2H8v-2z" />
      </svg>
    ),
  },
  {
    title: "OPD &",
    subtitle: "Preventive Care",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Services"
          title="Comprehensive Hospital Services"
          subtitle="From emergency response to specialty care, we provide end-to-end medical services with modern infrastructure and compassionate teams."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          actions={<HeroInfoCards items={serviceHeroCards} />}
        />
      }
    >
      <ServicesCatalog />
    </PageShell>
  );
}
