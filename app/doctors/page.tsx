import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";
import HeroInfoCards from "@/components/layouts/HeroInfoCards";
import DoctorCard from "@/components/cards/DoctorCard";
import { doctors } from "@/data/doctors";

const doctorHeroCards = [
  {
    title: "Expert",
    subtitle: "Specialists",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
      </svg>
    ),
  },
  {
    title: "Multi",
    subtitle: "Disciplinary Team",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 3-1.79 3-4s-1.34-4-3-4-3 1.79-3 4 1.34 4 3 4zM8 11c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm8 0c-.29 0-.62.02-.97.05 1.57.8 2.97 1.97 2.97 3.95v2h6v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    title: "Patient",
    subtitle: "Centered Care",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21s-6.72-4.39-9.19-8.31C.94 9.2 2.4 5.5 5.7 4.5c1.97-.6 4.1.1 5.3 1.7 1.2-1.6 3.33-2.3 5.3-1.7 3.3 1 4.76 4.7 2.89 8.19C18.72 16.61 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: "Trusted",
    subtitle: "Medical Expertise",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l7 4v6c0 5.25-3.44 9.9-7 10-3.56-.1-7-4.75-7-10V6l7-4zm-1 14h2v-2h-2v2zm0-9v5h2V7h-2z" />
      </svg>
    ),
  },
];

export default function DoctorsPage() {
  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Our Doctors"
          title="Meet the Specialists You Can Trust"
          subtitle="A multidisciplinary team of doctors, surgeons, and consultants delivering evidence-based care with compassion."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
          actions={<HeroInfoCards items={doctorHeroCards} />}
        />
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            specialization={doctor.specialization}
            experience={doctor.experience}
            bio={doctor.bio}
            image={doctor.image}
          />
        ))}
      </div>
    </PageShell>
  );
}
