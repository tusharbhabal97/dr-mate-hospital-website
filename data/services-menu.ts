export type ServiceCategoryDefinition = {
  title: string;
  slug: string;
  overview: string;
  features: string[];
  items: Array<{
    name: string;
    slug: string;
    overview: string;
    features: string[];
  }>;
};

const categoryDefinitions: ServiceCategoryDefinition[] = [
  {
    title: "Emergency & Critical Care",
    slug: "emergency-critical-care",
    overview:
      "24x7 emergency response, critical stabilization, and monitored in-hospital support for urgent and life-threatening conditions.",
    features: [
      "Immediate triage and escalation protocols",
      "Critical monitoring and rapid intervention support",
      "Integrated emergency-to-admission pathways",
    ],
    items: [
      {
        name: "Emergency & Trauma Care",
        slug: "emergency-trauma-care",
        overview:
          "Rapid-response emergency and trauma support for accidents, acute illness episodes, and time-sensitive conditions.",
        features: [
          "Round-the-clock emergency response",
          "Trauma-first stabilization workflow",
          "Coordinated specialist escalation",
        ],
      },
      {
        name: "ICU & ICCU",
        slug: "icu-iccu",
        overview:
          "Dedicated intensive and coronary critical care monitoring for unstable medical, cardiac, and post-procedure patients.",
        features: [
          "Continuous high-acuity monitoring",
          "Cardiac and critical-care readiness",
          "Multidisciplinary bedside support",
        ],
      },
      {
        name: "Ventilator",
        slug: "ventilator",
        overview:
          "Advanced ventilatory support for patients requiring respiratory stabilization and controlled breathing assistance.",
        features: [
          "Invasive and assisted ventilation support",
          "Close oxygenation monitoring",
          "Critical respiratory management protocols",
        ],
      },
      {
        name: "Defibrillator",
        slug: "defibrillator",
        overview:
          "Emergency cardiac rhythm correction support for life-threatening arrhythmias and sudden collapse scenarios.",
        features: [
          "Immediate rhythm restoration readiness",
          "Emergency cardiac response workflows",
          "Integrated code-response support",
        ],
      },
      {
        name: "BiPAP",
        slug: "bipap",
        overview:
          "Non-invasive breathing support for acute respiratory distress and monitored pulmonary recovery.",
        features: [
          "Non-invasive positive pressure support",
          "Targeted respiratory stabilization",
          "Monitored transition and recovery pathways",
        ],
      },
      {
        name: "Ambulance Service",
        slug: "ambulance-service",
        overview:
          "Prompt patient transport and emergency transfer assistance for critical and urgent medical needs.",
        features: [
          "Emergency pick-up and transfer coordination",
          "Monitored transport support",
          "Rapid admission handoff preparedness",
        ],
      },
    ],
  },
  {
    title: "Cardiac & Monitoring",
    slug: "cardiac-monitoring",
    overview:
      "Core cardiac assessment and monitoring services to evaluate heart function, rhythm, and stress response.",
    features: [
      "Non-invasive cardiac diagnostics",
      "Routine and advanced heart monitoring",
      "Clinician-guided interpretation and follow-up",
    ],
    items: [
      {
        name: "ECG",
        slug: "ecg",
        overview:
          "Electrocardiogram evaluation to assess heart rhythm, rate, and conduction abnormalities.",
        features: [
          "Quick rhythm assessment",
          "Baseline and follow-up cardiac tracing",
          "Supports early cardiac risk detection",
        ],
      },
      {
        name: "2D Echo",
        slug: "2d-echo",
        overview:
          "Echocardiography imaging to evaluate cardiac structure, pumping function, and valve performance.",
        features: [
          "Real-time heart structure imaging",
          "Valve and function evaluation",
          "Non-invasive cardiac assessment",
        ],
      },
      {
        name: "TMT",
        slug: "tmt",
        overview:
          "Treadmill stress testing to observe heart performance under controlled exertion.",
        features: [
          "Exercise-based cardiac response analysis",
          "Stress-induced symptom evaluation",
          "Supports ischemia risk stratification",
        ],
      },
    ],
  },
  {
    title: "Diagnostics & Imaging",
    slug: "diagnostics-imaging",
    overview:
      "Radiology and diagnostic imaging support for rapid, accurate, and clinically guided evaluation.",
    features: [
      "Modern imaging workflows",
      "Support for screening and diagnostic pathways",
      "Timely reporting for treatment planning",
    ],
    items: [
      {
        name: "CT Scan",
        slug: "ct-scan",
        overview:
          "Cross-sectional imaging support for detailed evaluation of internal organs, vessels, and trauma conditions.",
        features: [
          "High-resolution diagnostic imaging",
          "Supports acute and planned investigations",
          "Comprehensive anatomical visualization",
        ],
      },
      {
        name: "USG & Doppler",
        slug: "usg-doppler",
        overview:
          "Ultrasound and Doppler-based evaluation for soft tissue, abdominal, obstetric, and vascular assessments.",
        features: [
          "Radiation-free imaging support",
          "Blood-flow and vascular assessment",
          "Broad clinical diagnostic utility",
        ],
      },
      {
        name: "Digital X-Ray",
        slug: "digital-x-ray",
        overview:
          "Fast digital radiography for bone, chest, and targeted diagnostic investigations.",
        features: [
          "Quick image capture and review",
          "Supports emergency and routine diagnostics",
          "Digitally enhanced reporting workflow",
        ],
      },
      {
        name: "Mammography",
        slug: "mammography",
        overview:
          "Dedicated breast imaging support for screening, early detection, and diagnostic follow-up.",
        features: [
          "Breast health screening support",
          "Focused diagnostic imaging workflow",
          "Guided next-step clinical planning",
        ],
      },
    ],
  },
  {
    title: "Laboratory Services",
    slug: "laboratory-services",
    overview:
      "Pathology-backed laboratory investigations that support diagnosis, treatment monitoring, and preventive health planning.",
    features: [
      "Routine and specialized test support",
      "Clinically relevant reporting pipeline",
      "Integrated physician follow-up readiness",
    ],
    items: [
      {
        name: "Laboratory & Pathology",
        slug: "laboratory-pathology",
        overview:
          "End-to-end lab and pathology diagnostics supporting accurate disease detection and treatment tracking.",
        features: [
          "Broad test menu support",
          "Reliable sample-to-report workflow",
          "Supports acute and chronic care decisions",
        ],
      },
    ],
  },
  {
    title: "Surgical & Procedures",
    slug: "surgical-procedures",
    overview:
      "Procedure and operation-focused services across minimally invasive and conventional surgical care pathways.",
    features: [
      "Elective and emergency procedure support",
      "Modern operation workflow readiness",
      "Post-procedure continuity planning",
    ],
    items: [
      {
        name: "Operation Theatre",
        slug: "operation-theatre",
        overview:
          "Dedicated operation theatre support for planned and emergency surgical procedures.",
        features: [
          "Procedure-ready sterile environment",
          "Multispecialty surgical support",
          "Structured perioperative coordination",
        ],
      },
      {
        name: "Endoscopy",
        slug: "endoscopy",
        overview:
          "Minimally invasive internal evaluation procedures for gastrointestinal diagnostic and therapeutic needs.",
        features: [
          "Targeted internal visual assessment",
          "Diagnostic and therapeutic support",
          "Short recovery procedural pathways",
        ],
      },
      {
        name: "Laparoscopy",
        slug: "laparoscopy",
        overview:
          "Minimal-access surgical approach designed to reduce recovery time and optimize procedural outcomes.",
        features: [
          "Small-incision surgical techniques",
          "Reduced post-operative discomfort pathway",
          "Faster recovery-focused planning",
        ],
      },
      {
        name: "Laser Surgery",
        slug: "laser-surgery",
        overview:
          "Precision laser-assisted procedures for select conditions requiring targeted intervention.",
        features: [
          "Targeted tissue precision support",
          "Controlled procedural approach",
          "Condition-specific minimally invasive options",
        ],
      },
      {
        name: "ESWL Lithotripsy",
        slug: "eswl-lithotripsy",
        overview:
          "Non-invasive shockwave treatment support for selected urinary stone conditions.",
        features: [
          "Stone fragmentation without open surgery",
          "Short-stay procedural suitability",
          "Integrated urology pathway support",
        ],
      },
    ],
  },
  {
    title: "Urology & Renal Care",
    slug: "urology-renal-care",
    overview:
      "Focused urinary and renal diagnostic support with functional testing and dialysis-backed care pathways.",
    features: [
      "Urology-focused functional assessments",
      "Renal support and dialysis readiness",
      "Structured follow-up care coordination",
    ],
    items: [
      {
        name: "Urodynamic Study",
        slug: "urodynamic-study",
        overview:
          "Functional urinary system assessment to support diagnosis of bladder and voiding disorders.",
        features: [
          "Bladder pressure and flow analysis",
          "Symptom-focused urology workup",
          "Supports tailored treatment planning",
        ],
      },
      {
        name: "Uroflowmetry",
        slug: "uroflowmetry",
        overview:
          "Non-invasive urine flow testing for assessment of lower urinary tract function.",
        features: [
          "Quick outpatient flow-rate assessment",
          "Supports obstruction and voiding evaluation",
          "Helps monitor treatment progress",
        ],
      },
      {
        name: "Dialysis Unit",
        slug: "dialysis-unit",
        overview:
          "Renal replacement therapy support for chronic and acute kidney function management.",
        features: [
          "Scheduled and monitored dialysis sessions",
          "Renal-care continuity support",
          "Integrated nephrology pathway coordination",
        ],
      },
    ],
  },
  {
    title: "Specialized Care",
    slug: "specialized-care",
    overview:
      "Focused women’s, child, and rehabilitation support through specialty-led care pathways.",
    features: [
      "Specialty-focused outpatient and in-patient support",
      "Age and condition-sensitive care pathways",
      "Continuity-driven follow-up planning",
    ],
    items: [
      {
        name: "Pediatric Care & NICU",
        slug: "pediatric-care-nicu",
        overview:
          "Comprehensive child health and neonatal intensive support for newborn and pediatric care needs.",
        features: [
          "Pediatric consultation and monitoring",
          "Neonatal intensive support readiness",
          "Growth and recovery-focused follow-up",
        ],
      },
      {
        name: "Gynecology & Obstetrics",
        slug: "gynecology-obstetrics",
        overview:
          "Women’s health, pregnancy care, and obstetric management through coordinated clinical pathways.",
        features: [
          "Routine and high-risk pregnancy support",
          "Women’s health consultation pathways",
          "Integrated maternal care continuity",
        ],
      },
      {
        name: "Physiotherapy",
        slug: "physiotherapy",
        overview:
          "Rehabilitation and mobility-focused therapy for recovery after injury, surgery, and chronic pain conditions.",
        features: [
          "Movement and pain management support",
          "Post-surgical recovery planning",
          "Function restoration-focused sessions",
        ],
      },
    ],
  },
  {
    title: "Cardiology Support",
    slug: "cardiology-support",
    overview:
      "Advanced cardiac support infrastructure for interventional and diagnostic heart care pathways.",
    features: [
      "Procedure-ready cardiac support",
      "Integrated diagnostic and intervention pathway",
      "Cardiology-led follow-up continuity",
    ],
    items: [
      {
        name: "Cath Lab",
        slug: "cath-lab",
        overview:
          "Catheterization laboratory support for diagnostic and interventional cardiology procedures.",
        features: [
          "Interventional cardiology infrastructure",
          "Diagnostic and therapeutic cardiac workflows",
          "Procedure-to-recovery pathway support",
        ],
      },
    ],
  },
];

export const allServicesCategory = {
  title: "All Our Services",
  slug: "",
  overview:
    "Explore the complete service portfolio grouped category-wise for easy navigation and care planning.",
  features: [
    "Unified view of all service categories",
    "Quick access to category and service pages",
    "Structured navigation for patient convenience",
  ],
} as const;

export const serviceCategoriesForMenu = [allServicesCategory, ...categoryDefinitions] as const;

export const serviceCategoriesForPages = categoryDefinitions;

export const getCategoryHref = (slug: string) => (slug ? `/services/${slug}` : "/services/");

export const getServiceHref = (categorySlug: string, serviceSlug: string) =>
  `/services/${categorySlug}/${serviceSlug}`;

export function getServiceCategoryBySlug(slug: string) {
  return categoryDefinitions.find((category) => category.slug === slug);
}

export function getServiceBySlugs(categorySlug: string, serviceSlug: string) {
  const category = getServiceCategoryBySlug(categorySlug);
  if (!category) return null;
  const service = category.items.find((item) => item.slug === serviceSlug);
  if (!service) return null;
  return { category, service };
}

export const allServiceCategories = categoryDefinitions.map((category) => ({
  title: category.title,
  slug: category.slug,
}));
