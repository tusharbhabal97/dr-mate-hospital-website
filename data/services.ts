export type ServiceItem = {
  name: string;
  description: string;
  icon: "heart" | "scan" | "shield" | "baby" | "bone" | "lab" | "women" | "dental";
};

export type ServiceCategory = {
  title: string;
  description: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Critical & Emergency Care",
    description:
      "Round-the-clock support for urgent conditions with rapid triage and immediate stabilization.",
    items: [
      {
        name: "Emergency Response",
        description:
          "24/7 emergency bay with trauma-ready teams and priority access to ICU.",
        icon: "shield",
      },
      {
        name: "Cardiac Emergency",
        description:
          "Rapid chest-pain evaluation, thrombolysis, and critical cardiac support.",
        icon: "heart",
      },
      {
        name: "Neuro Emergency",
        description:
          "Fast-track stroke pathways and neurological stabilization protocols.",
        icon: "scan",
      },
    ],
  },
  {
    title: "Diagnostics & Preventive Care",
    description:
      "Advanced imaging, lab testing, and preventive screening to support accurate care.",
    items: [
      {
        name: "Advanced Imaging",
        description:
          "CT, MRI, X-ray, and ultrasound with rapid reporting for urgent cases.",
        icon: "scan",
      },
      {
        name: "Laboratory Services",
        description:
          "Comprehensive pathology and biochemistry with quality-controlled results.",
        icon: "lab",
      },
      {
        name: "Preventive Health Checks",
        description:
          "Customized screening packages for early detection and wellness tracking.",
        icon: "shield",
      },
    ],
  },
  {
    title: "Specialty Care",
    description:
      "Dedicated specialty clinics with experienced consultants and modern treatment plans.",
    items: [
      {
        name: "Orthopedic Care",
        description:
          "Joint, spine, and sports injury care with structured rehab support.",
        icon: "bone",
      },
      {
        name: "Pediatric Services",
        description:
          "Child-friendly care, vaccinations, and neonatal support by pediatric experts.",
        icon: "baby",
      },
      {
        name: "Women's Health",
        description:
          "Gynecology, maternity, and reproductive health services with privacy-first care.",
        icon: "women",
      },
      {
        name: "Dental Care",
        description:
          "Preventive dentistry, restorative care, and smile correction treatments.",
        icon: "dental",
      },
    ],
  },
];
