import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";
import DoctorCard from "@/components/cards/DoctorCard";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Our Doctors"
          title="Meet the Specialists You Can Trust"
          subtitle="A multidisciplinary team of doctors, surgeons, and consultants delivering evidence-based care with compassion."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
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