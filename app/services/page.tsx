import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";
import HeroInfoCards from "@/components/layouts/HeroInfoCards";
import ServiceCard from "@/components/cards/ServiceCard";
import { serviceCategories } from "@/data/services";

const serviceIcons: Record<string, JSX.Element> = {
  heart: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-6.716-4.393-9.192-8.306C.944 9.201 2.399 5.5 5.7 4.5c1.97-.6 4.1.1 5.3 1.7 1.2-1.6 3.33-2.3 5.3-1.7 3.3 1 4.76 4.7 2.892 8.194C18.716 16.607 12 21 12 21z" />
    </svg>
  ),
  scan: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2h4v2H7v4H5V4a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4h-2V4h-4V2h4zM5 16h2v4h4v2H7a2 2 0 0 1-2-2v-4zm14 0h2v4a2 2 0 0 1-2 2h-4v-2h4v-4zM8 11h8v2H8v-2z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l7 4v6c0 5.25-3.438 9.9-7 10-3.562-.1-7-4.75-7-10V6l7-4z" />
    </svg>
  ),
  baby: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 3a3 3 0 0 1 6 0v1h2a4 4 0 0 1 4 4v1a7 7 0 1 1-14 0V8a4 4 0 0 1 4-4h2V3z" />
    </svg>
  ),
  bone: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 7a2 2 0 1 1 3.6-1.2l6 6a2 2 0 1 1-1.2 3.6l-6-6A2 2 0 0 1 5 7zm11 10a2 2 0 1 1 3.6-1.2 2 2 0 0 1-3.6 1.2z" />
    </svg>
  ),
  lab: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2h12v2l-4 6v4.5l3.5 5V22h-11v-2.5l3.5-5V10L6 4V2z" />
    </svg>
  ),
  women: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a5 5 0 0 0-1 9.9V14H9v2h2v2h2v-2h2v-2h-2v-2.1A5 5 0 0 0 12 2z" />
    </svg>
  ),
  dental: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.5 2.5 1 4l1 4c.2.8.8 1.5 1.5 1.5s1.3-.7 1.5-1.5l.5-2 .5 2c.2.8.8 1.5 1.5 1.5s1.3-.7 1.5-1.5l1-4c.5-1.5 1-2.5 1-4C17.5 4 15.5 2 12 2z" />
    </svg>
  ),
};

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
      <div className="space-y-10">
        {serviceCategories.map((category) => (
          <section key={category.title} className="space-y-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-2">
                {category.title}
              </h2>
              <p className="text-sm text-muted max-w-2xl">{category.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <ServiceCard
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  icon={serviceIcons[item.icon]}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
