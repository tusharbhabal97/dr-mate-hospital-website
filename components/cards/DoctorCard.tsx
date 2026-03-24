import Link from "next/link";
import Image from "next/image";

type DoctorCardProps = {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
};

export default function DoctorCard({
  id,
  name,
  specialization,
  experience,
  bio,
  image,
}: DoctorCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all">
      <div className="relative h-52 w-full">
        <Image src={image} alt={name} fill className="object-cover" sizes="400px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-primary">
            {specialization}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-dark">{name}</h3>
        <p className="text-xs font-semibold text-muted mt-1">{experience} experience</p>
        <p className="text-sm text-muted leading-relaxed mt-3 mb-5">{bio}</p>
        <Link
          href={`/doctors/${id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary"
          aria-label={`View profile for ${name}`}
        >
          View Profile
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
