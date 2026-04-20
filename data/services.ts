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
    title: "Emergency, Critical & Core Medicine",
    description:
      "24x7 acute care coverage with Internal Medicine, ICU support, and emergency stabilization pathways.",
    items: [
      {
        name: "Internal Medicine",
        description:
          "Diagnosis and treatment for fever, diabetes, hypertension, infections, poisoning, and complex adult illnesses.",
        icon: "shield",
      },
      {
        name: "ICU (Intensive Care Unit)",
        description:
          "High-acuity monitoring and life-support care for critically ill medical and post-surgical patients.",
        icon: "lab",
      },
      {
        name: "24x7 Emergency & Trauma Care",
        description:
          "Round-the-clock emergency triage, trauma response, and rapid specialist escalation.",
        icon: "shield",
      },
    ],
  },
  {
    title: "Interventional & Organ Specialities",
    description:
      "Advanced diagnostics and minimally invasive interventional care across heart, vascular, kidney, and GI systems.",
    items: [
      {
        name: "Cardiology",
        description:
          "Cath Lab, angiography, angioplasty, pacemaker implantation, device closure, TMT, 2D Echo, and stress echo.",
        icon: "heart",
      },
      {
        name: "Interventional Radiology",
        description:
          "Limb, kidney, and brain angiography/angioplasty with chemo port and dialysis permcath insertion.",
        icon: "scan",
      },
      {
        name: "Nephrology",
        description:
          "Kidney care with dialysis and AV fistula surgery backed by renal monitoring protocols.",
        icon: "lab",
      },
      {
        name: "Gastroenterology & Endoscopy",
        description:
          "Gastroscopy, colonoscopy, ERCP with biopsy, lesion/stone removal, and therapeutic stenting.",
        icon: "scan",
      },
      {
        name: "Urology",
        description:
          "Kidney stone treatment and endoscopic surgery (RIRS, URS, PCNL, ESWL) with uroflowmetry and urodynamic study.",
        icon: "lab",
      },
      {
        name: "Neurology & Neurosurgery",
        description:
          "Comprehensive medical and surgical care for brain, nerve, and spinal disorders.",
        icon: "scan",
      },
    ],
  },
  {
    title: "Surgical Specialities",
    description:
      "Comprehensive operative care from general surgery to organ-specific and minimally invasive procedures.",
    items: [
      {
        name: "General Surgery & Laparoscopy",
        description:
          "Equipped operation theatre with open and minimal-access surgery for abdominal and soft tissue conditions.",
        icon: "dental",
      },
      {
        name: "GI Surgery",
        description:
          "Liver, intestine, and pancreas surgery with coordinated pre- and post-operative planning.",
        icon: "dental",
      },
      {
        name: "Oncosurgery & Oncology",
        description:
          "Cancer surgery and chemotherapy services with multidisciplinary treatment planning.",
        icon: "heart",
      },
      {
        name: "Orthopedics",
        description:
          "Fracture management, joint replacement, and arthroscopy for trauma and degenerative joint disease.",
        icon: "bone",
      },
      {
        name: "Plastic, Pediatric, ENT & Proctology",
        description:
          "Reconstructive and child surgery, ENT procedures, and laser treatment for anorectal conditions.",
        icon: "baby",
      },
      {
        name: "Obstetrics & Gynecology with NICU",
        description:
          "Comprehensive women's health, maternity support, and intensive neonatal care.",
        icon: "women",
      },
    ],
  },
  {
    title: "Clinics, Rehab & Preventive Programs",
    description:
      "Specialized outpatient clinics for chronic disease prevention, wound care, vascular health, and functional recovery.",
    items: [
      {
        name: "Diabetes & Diabetic Foot Clinics",
        description:
          "Integrated sugar-control, complication screening, and focused diabetic foot prevention and treatment.",
        icon: "shield",
      },
      {
        name: "VAC Therapy (Wound Care)",
        description:
          "Advanced negative-pressure wound care for difficult and non-healing ulcers.",
        icon: "lab",
      },
      {
        name: "Varicose Vein Clinic",
        description:
          "EVLA laser treatment and foam sclerotherapy for chronic venous disease.",
        icon: "scan",
      },
      {
        name: "Breast Clinic",
        description:
          "Breast health assessment with mammography-based screening and follow-up pathways.",
        icon: "women",
      },
      {
        name: "Obesity & Weight Loss Clinic",
        description:
          "Medical weight-management with bariatric surgery evaluation for eligible patients.",
        icon: "shield",
      },
      {
        name: "Physiotherapy & Rehabilitation",
        description:
          "Post-injury and post-surgery rehabilitation with mobility restoration and pain management plans.",
        icon: "bone",
      },
    ],
  },
];
