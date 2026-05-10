import type { Speciality } from "@/data/specialities";

type SpecialityHighlightVisualPanelProps = {
  speciality: Speciality;
  relatedItems?: readonly string[];
};

type IconProps = {
  className?: string;
};

type VisualConfig = {
  badge: string;
  headline: string;
  trust: string;
  Icon: (props: IconProps) => JSX.Element;
};

const normalizeItems = (values: readonly string[]) =>
  values
    .map((value) => value.trim())
    .filter(Boolean)
    .filter((value, index, list) => list.indexOf(value) === index);

const getCategoryConfig = (source: string): VisualConfig => {
  const value = source.toLowerCase();

  if (/(icu|critical|emergency|trauma|life support|ventilator|sepsis|shock)/.test(value)) {
    return {
      badge: "Critical Care Support",
      headline: "Advanced ICU Care",
      trust: "Advanced Care",
      Icon: MonitorIcon,
    };
  }

  if (/(cardio|heart|ecg|echo|angiography|angioplasty|cath)/.test(value)) {
    return {
      badge: "Cardiac Specialty",
      headline: "Precision Heart Care",
      trust: "Evidence-Based Care",
      Icon: HeartPulseIcon,
    };
  }

  if (/(neuro|brain|stroke|seizure|neurology|neurosurgery)/.test(value)) {
    return {
      badge: "Neuro Specialty",
      headline: "Comprehensive Neuro Care",
      trust: "Patient-Focused Care",
      Icon: BrainIcon,
    };
  }

  if (/(nephro|kidney|renal|dialysis|urology|uro)/.test(value)) {
    return {
      badge: "Renal Specialty",
      headline: "Focused Kidney Care",
      trust: "Continuous Monitoring",
      Icon: KidneyIcon,
    };
  }

  if (/(gastro|endoscopy|gi|liver|stomach|pancreas|colonoscopy|ercp)/.test(value)) {
    return {
      badge: "Digestive Specialty",
      headline: "Advanced GI Care",
      trust: "Clinical Precision",
      Icon: StomachIcon,
    };
  }

  if (/(onco|cancer|tumor)/.test(value)) {
    return {
      badge: "Oncology Specialty",
      headline: "Comprehensive Cancer Care",
      trust: "Specialist Team",
      Icon: OncologyIcon,
    };
  }

  if (/(ortho|bone|joint|fracture|spine|arthro)/.test(value)) {
    return {
      badge: "Ortho Specialty",
      headline: "Advanced Bone & Joint Care",
      trust: "Recovery-Centered Care",
      Icon: BoneIcon,
    };
  }

  if (/(gyn|obstetric|nicu|neonatal|pediatric|mother|baby)/.test(value)) {
    return {
      badge: "Speciality Care",
      headline: "Compassionate Family Care",
      trust: "Patient-Focused Care",
      Icon: CareIcon,
    };
  }

  return {
    badge: "Speciality Care",
    headline: "Trusted Hospital Support",
    trust: "Trusted Clinical Care",
    Icon: MedicalCrossIcon,
  };
};

const getChipIcon = (label: string) => {
  const value = label.toLowerCase();
  if (/(monitor|icu|critical|life support|ventilator|trauma|emergency)/.test(value)) return MonitorIcon;
  if (/(heart|cardio|ecg|echo|angiography|angioplasty)/.test(value)) return HeartPulseIcon;
  if (/(neuro|brain|stroke|seizure)/.test(value)) return BrainIcon;
  if (/(kidney|renal|dialysis|uro)/.test(value)) return KidneyIcon;
  if (/(gastro|endoscopy|stomach|liver|pancreas|ercp)/.test(value)) return StomachIcon;
  if (/(onco|cancer|tumor)/.test(value)) return OncologyIcon;
  if (/(ortho|bone|joint|fracture|spine)/.test(value)) return BoneIcon;
  if (/(nicu|obstetric|gyn|mother|baby|pediatric)/.test(value)) return CareIcon;
  return MedicalCrossIcon;
};

const getHighlightChips = (speciality: Speciality, relatedItems: readonly string[]) => {
  const pool = normalizeItems([...speciality.services, ...speciality.treatments, ...relatedItems]);
  const scoped = pool.filter((value) => value.length >= 6).slice(0, 5);
  if (scoped.length >= 3) return scoped;

  return normalizeItems([
    ...scoped,
    "Specialist Team",
    "Advanced Monitoring",
    "Integrated Care",
    "Patient Safety",
    "Clinical Excellence",
  ]).slice(0, 5);
};

export default function SpecialityHighlightVisualPanel({
  speciality,
  relatedItems = [],
}: SpecialityHighlightVisualPanelProps) {
  const chips = getHighlightChips(speciality, relatedItems);
  const { badge, headline, trust, Icon } = getCategoryConfig(
    `${speciality.name} ${speciality.short_description} ${chips.join(" ")}`,
  );

  return (
    <aside
      aria-label={`${speciality.name} speciality highlights`}
      className="service-highlight-panel relative isolate mx-auto w-full min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-white/70 bg-white/82 p-4 shadow-[0_18px_44px_rgba(31,60,136,0.14)] backdrop-blur-xl sm:max-w-md lg:mx-0"
    >
      <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-100/65" />
      <span className="pointer-events-none absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-healing-100/70" />
      <span className="service-highlight-panel__ring pointer-events-none absolute right-7 top-9 h-24 w-24 rounded-full border border-primary/15" />

      <div className="relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white via-cyan-50/85 to-healing-50/80 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-healing" />
            {badge}
          </span>
          <span className="service-highlight-panel__support-badge hidden rounded-full bg-healing/10 px-2.5 py-1 text-[10px] font-bold text-healing-700 sm:inline-flex">
            {trust}
          </span>
        </div>

        <div className="mt-5 flex min-w-0 items-center gap-4">
          <div className="service-highlight-panel__float flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-white text-primary shadow-[0_12px_28px_rgba(31,60,136,0.12)]">
            <Icon className="h-8 w-8" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-healing-700">
              Speciality Highlight
            </p>
            <h2 className="mt-1 font-display text-lg font-bold leading-snug text-dark sm:text-xl">
              {headline}
            </h2>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/75 bg-white/70 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
          <svg className="h-12 w-full" viewBox="0 0 320 64" role="img" aria-label="Subtle ECG pulse line">
            <path
              d="M0 34 H52 L66 34 L78 15 L95 50 L110 29 L124 34 H162 L176 34 L188 22 L202 44 L216 34 H320"
              fill="none"
              stroke="rgba(31,60,136,0.14)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <path
              className="service-highlight-panel__ecg"
              d="M0 34 H52 L66 34 L78 15 L95 50 L110 29 L124 34 H162 L176 34 L188 22 L202 44 L216 34 H320"
              fill="none"
              stroke="url(#speciality-highlight-ecg)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <defs>
              <linearGradient id="speciality-highlight-ecg" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#1F3C88" />
                <stop offset="58%" stopColor="#1FA971" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {chips.map((chip, index) => {
            const ChipIcon = getChipIcon(chip);
            return (
              <span
                key={chip}
                className="service-highlight-panel__chip flex min-w-0 items-center gap-2 rounded-2xl border border-primary/10 bg-white/82 px-3 py-2 text-xs font-semibold text-slate-700 shadow-[0_8px_18px_rgba(31,60,136,0.07)] transition duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white"
                style={{ animationDelay: `${index * 120}ms` }}
                title={chip}
              >
                <ChipIcon className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{chip}</span>
              </span>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function MonitorIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16v11H4V5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 19h6M12 16v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.5 11h2.5l1.4-2.2 2.1 4 1.7-2H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartPulseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 13h4l1.2-2.5 2.2 5 1.5-3H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrainIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9.5 6a3 3 0 0 1 5 2.2 2.7 2.7 0 0 1 3 2.7 2.8 2.8 0 0 1-1.6 2.5 3.2 3.2 0 0 1-3.3 4.6H10a3.2 3.2 0 0 1-3.1-4.4A2.8 2.8 0 0 1 5.5 11a2.7 2.7 0 0 1 3-2.7A3 3 0 0 1 9.5 6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 9.2v5.6M14 9.2v5.6M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function KidneyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9.5 4C6.8 4 5 6.5 5 10.5S6.6 20 9.7 20c1.8 0 2.8-1.4 2.8-3.2V7.2C12.5 5.4 11.2 4 9.5 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14.5 4c2.7 0 4.5 2.5 4.5 6.5S17.4 20 14.3 20c-1.8 0-2.8-1.4-2.8-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function StomachIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 4v6.5c0 2.5 1.5 4.5 4 4.5h2.2a2.8 2.8 0 0 1 2.8 2.8V20h-3.5a7.5 7.5 0 0 1-7.5-7.5V4H10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 6v3a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function OncologyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 8a2.5 2.5 0 1 1 2.4 3.2l5.2 1.6A2.5 2.5 0 1 1 17 16a2.5 2.5 0 1 1-2.4-3.2l-5.2-1.6A2.5 2.5 0 1 1 7 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function CareIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s-6.5-3.9-6.5-9.2A4 4 0 0 1 12 7a4 4 0 0 1 6.5 3.8C18.5 16.1 12 20 12 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 11h4M12 9v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MedicalCrossIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
