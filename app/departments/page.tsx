import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";
import HeroInfoCards from "@/components/layouts/HeroInfoCards";
import DepartmentCard from "@/components/cards/DepartmentCard";
import { departments } from "@/data/departments";

const departmentIcons: Record<string, JSX.Element> = {
  cardiology: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-6.716-4.393-9.192-8.306C.944 9.201 2.399 5.5 5.7 4.5c1.97-.6 4.1.1 5.3 1.7 1.2-1.6 3.33-2.3 5.3-1.7 3.3 1 4.76 4.7 2.892 8.194C18.716 16.607 12 21 12 21z" />
    </svg>
  ),
  orthopedics: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V7c0-.55.45-1 1-1z" />
    </svg>
  ),
  pediatrics: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  ),
  neurology: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V12h2v4.5zm0-6h-2V7h2v3.5z" />
    </svg>
  ),
  "emergency-care": (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 21h2v-2h-2v2zm0-16h2V3h-2v2zm7.36 2.64l1.42 1.41-1.41 1.41-1.41-1.41 1.4-1.41zM4.22 7.64l1.41 1.41L4.22 10.46 2.81 9.05l1.41-1.41zM19 11h2v2h-2v-2zM3 11h2v2H3v-2zm14.36 6.36l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41zM4.22 16.95l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z" />
    </svg>
  ),
  "diagnostics-lab": (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2h12v2l-4 6v4.5l3.5 5V22h-11v-2.5l3.5-5V10L6 4V2z" />
    </svg>
  ),
  gynecology: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a5 5 0 0 0-1 9.9V14H9v2h2v2h2v-2h2v-2h-2v-2.1A5 5 0 0 0 12 2zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  ),
  "dental-care": (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.5 2.5 1 4l1 4c.2.8.8 1.5 1.5 1.5s1.3-.7 1.5-1.5l.5-2 .5 2c.2.8.8 1.5 1.5 1.5s1.3-.7 1.5-1.5l1-4c.5-1.5 1-2.5 1-4C17.5 4 15.5 2 12 2z" />
    </svg>
  ),
};

const departmentHeroCards = [
  {
    title: "25+",
    subtitle: "Specialties",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v4h4v2h-6V7h2z" />
      </svg>
    ),
  },
  {
    title: "Expert",
    subtitle: "Medical Teams",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.79 2.99-4S17.66 3 16 3s-3 1.79-3 4 1.34 4 3 4zm-8 0c1.66 0 2.99-1.79 2.99-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.98 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Advanced",
    subtitle: "Diagnostics",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 2h6v2l-2 3v4.38l4.45 6.68A2 2 0 0115.79 21H8.21a2 2 0 01-1.66-2.94L11 11.38V7L9 4V2zm1.87 11l-2.8 4.2h7.86l-2.8-4.2h-2.26z" />
      </svg>
    ),
  },
  {
    title: "24/7",
    subtitle: "Emergency Support",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
];

export default function DepartmentsPage() {
  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Departments"
          title="Explore Our Medical Departments"
          subtitle="Each department is staffed with specialists and supported by modern diagnostics to provide safe, accurate, and compassionate care."
          badge="25+ specialties · 24/7 emergency support"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Departments" }]}
          actions={<HeroInfoCards items={departmentHeroCards} />}
        />
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <DepartmentCard
            key={department.id}
            id={department.id}
            name={department.name}
            summary={department.summary}
            icon={departmentIcons[department.id]}
          />
        ))}
      </div>
    </PageShell>
  );
}
