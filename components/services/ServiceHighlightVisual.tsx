type ServiceHighlightVisualProps = {
  title: string;
  items: readonly string[];
};

type IconProps = {
  className?: string;
};

type VisualConfig = {
  badge: string;
  headline: string;
  Icon: (props: IconProps) => JSX.Element;
};

const getUniqueChips = (items: readonly string[]) =>
  Array.from(new Set(items.map((item) => item.trim()).filter(Boolean))).slice(0, 5);

function getVisualConfig(title: string): VisualConfig {
  const value = title.toLowerCase();

  if (/(emergency|trauma|ambulance|critical|icu)/.test(value)) {
    return {
      badge: "Emergency Support",
      headline: "Rapid Response Care",
      Icon: EmergencyIcon,
    };
  }

  if (/(cardio|heart|cath|ecg|echo|tmt|angiography)/.test(value)) {
    return {
      badge: "Cardiac Focus",
      headline: "Advanced Heart Care",
      Icon: HeartIcon,
    };
  }

  if (/(diagnostic|imaging|scan|x-ray|xray|mammography|doppler|radiology|usg)/.test(value)) {
    return {
      badge: "Precision Diagnostics",
      headline: "Clear Clinical Insight",
      Icon: ScanIcon,
    };
  }

  if (/(laboratory|pathology|lab)/.test(value)) {
    return {
      badge: "Reliable Testing",
      headline: "Accurate Lab Support",
      Icon: LabIcon,
    };
  }

  if (/(surgery|surgical|operation|laparoscopy|laser|procedure)/.test(value)) {
    return {
      badge: "Procedure Ready",
      headline: "Safe Surgical Care",
      Icon: SurgeryIcon,
    };
  }

  if (/(renal|kidney|dialysis|urology|urinary|uro|lithotripsy)/.test(value)) {
    return {
      badge: "Renal Support",
      headline: "Focused Kidney Care",
      Icon: KidneyIcon,
    };
  }

  if (/(gynecology|obstetric|pediatric|nicu|baby|mother|physiotherapy|rehab)/.test(value)) {
    return {
      badge: "Specialist Team",
      headline: "Patient-Focused Care",
      Icon: CareIcon,
    };
  }

  return {
    badge: "Advanced Care",
    headline: "Trusted Hospital Support",
    Icon: MedicalCrossIcon,
  };
}

function getChipIcon(label: string) {
  const value = label.toLowerCase();

  if (/(emergency|trauma|ambulance)/.test(value)) return EmergencyIcon;
  if (/(icu|critical|monitor|defibrillator|cardio|heart|ecg|echo|tmt|cath)/.test(value)) {
    return HeartIcon;
  }
  if (/(ventilator|bipap|oxygen|respiratory)/.test(value)) return OxygenIcon;
  if (/(diagnostic|imaging|scan|x-ray|xray|mammography|doppler|usg)/.test(value)) return ScanIcon;
  if (/(lab|pathology|laboratory)/.test(value)) return LabIcon;
  if (/(surgery|operation|laparoscopy|laser|procedure|endoscopy)/.test(value)) return SurgeryIcon;
  if (/(renal|kidney|dialysis|urology|uro|lithotripsy)/.test(value)) return KidneyIcon;
  if (/(gynecology|obstetric|pediatric|nicu|physiotherapy|rehab)/.test(value)) return CareIcon;

  return MedicalCrossIcon;
}

export default function ServiceHighlightVisual({ title, items }: ServiceHighlightVisualProps) {
  const chips = getUniqueChips(items);
  const { badge, headline, Icon } = getVisualConfig(`${title} ${chips.join(" ")}`);

  return (
    <aside
      aria-label={`${title} service highlights`}
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
            24x7 Support
          </span>
        </div>

        <div className="mt-5 flex min-w-0 items-center gap-4">
          <div className="service-highlight-panel__float flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-white text-primary shadow-[0_12px_28px_rgba(31,60,136,0.12)]">
            <Icon className="h-8 w-8" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-healing-700">
              Service Highlight
            </p>
            <h3 className="mt-1 font-display text-lg font-bold leading-snug text-dark sm:text-xl">
              {headline}
            </h3>
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
              stroke="url(#service-highlight-ecg)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <defs>
              <linearGradient id="service-highlight-ecg" x1="0" x2="1" y1="0" y2="0">
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

function EmergencyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h10v10H4V7Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 11h3.6l2.4 2.5V17h-6v-6Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10v4M6 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 13h4l1.2-2.5 2.2 5 1.5-3H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OxygenIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 11c-2-1.8-4-3-6-3-1.2 2-2 5.1-2 8.3 0 1.5.9 2.7 2.3 2.7 2.5 0 4.2-2.1 5.7-5.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 11c2-1.8 4-3 6-3 1.2 2 2 5.1 2 8.3 0 1.5-.9 2.7-2.3 2.7-2.5 0-4.2-2.1-5.7-5.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function ScanIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 4h14v16H5V4Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8h8M8 12h5M8 16h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 6.5h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function LabIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3h6M10 3v5l-4.5 8A3.4 3.4 0 0 0 8.5 21h7a3.4 3.4 0 0 0 3-5L14 8V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SurgeryIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 19 9.5-9.5 2 2L7 21H5v-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m14 7 3-3 3 3-3 3-3-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 5h5M6.5 2.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
