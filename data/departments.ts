export type Department = {
  id: string;
  name: string;
  category: string;
  summary: string;
  overview: string;
  keyServices: string[];
  conditionsTreated: string[];
  diagnostics: string[];
  treatments: string[];
  highlights: string[];
};

export const departments: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    category: "Heart & Vascular Care",
    summary:
      "Comprehensive heart care with advanced diagnostics, interventional procedures, and long-term preventive support.",
    overview:
      "Our cardiology team manages common to complex heart conditions with a coordinated approach across outpatient, emergency, and critical care services.",
    keyServices: [
      "Cardiac consultation and risk screening",
      "ECG, 2D Echo, stress testing, and Holter monitoring",
      "Preventive cardiology for hypertension and cholesterol",
      "24/7 support for acute cardiac emergencies",
    ],
    conditionsTreated: [
      "Coronary artery disease",
      "Heart failure",
      "Arrhythmias",
      "Hypertension and cardiac risk disorders",
    ],
    diagnostics: [
      "Electrocardiogram (ECG)",
      "Echocardiography",
      "Treadmill stress test",
      "Cardiac biomarker panels",
    ],
    treatments: [
      "Medication and lifestyle optimization",
      "Interventional cardiology pathways",
      "Post-cardiac event rehabilitation planning",
      "Long-term follow-up and recurrence prevention",
    ],
    highlights: [
      "Rapid triage for chest pain",
      "Experienced cardiac specialists",
      "Integrated ICU and emergency care",
    ],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    category: "Bone, Joint & Spine",
    summary:
      "Specialized orthopedic care for fractures, sports injuries, arthritis, and joint disorders with focus on pain relief and mobility.",
    overview:
      "We provide end-to-end orthopedic care, from diagnosis and conservative treatment to surgical planning and rehabilitation.",
    keyServices: [
      "Fracture and trauma management",
      "Joint pain and arthritis clinics",
      "Spine assessment and treatment planning",
      "Sports injury rehabilitation",
    ],
    conditionsTreated: [
      "Osteoarthritis and rheumatoid arthritis",
      "Ligament and tendon injuries",
      "Back and neck pain syndromes",
      "Fractures and dislocations",
    ],
    diagnostics: [
      "Digital X-ray and imaging support",
      "Joint function assessment",
      "Bone health evaluation",
      "Pre-surgical orthopedic workup",
    ],
    treatments: [
      "Medication and guided physiotherapy",
      "Joint injections and pain procedures",
      "Arthroscopic and open surgeries",
      "Post-operative recovery protocols",
    ],
    highlights: [
      "Fast-track trauma response",
      "Minimally invasive options where suitable",
      "Structured rehab coordination",
    ],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    category: "Child Health",
    summary:
      "Compassionate pediatric care for newborns, infants, children, and adolescents in a child-friendly environment.",
    overview:
      "Our pediatric team supports preventive, acute, and chronic child health needs with emphasis on early diagnosis and family-centered care.",
    keyServices: [
      "Routine child health checkups",
      "Growth and developmental monitoring",
      "Infection and fever management",
      "Nutritional and vaccination guidance",
    ],
    conditionsTreated: [
      "Respiratory and gastrointestinal infections",
      "Allergic disorders",
      "Nutritional deficiencies",
      "Common developmental concerns",
    ],
    diagnostics: [
      "Pediatric blood and urine tests",
      "Child-focused imaging protocols",
      "Growth percentile tracking",
      "Specialist referral coordination",
    ],
    treatments: [
      "Age-appropriate medication plans",
      "Day-care pediatric support",
      "Parental counselling and home-care plans",
      "Follow-up for chronic pediatric conditions",
    ],
    highlights: [
      "Child-friendly consultation areas",
      "Evidence-based pediatric protocols",
      "Close parent communication",
    ],
  },
  {
    id: "neurology",
    name: "Neurology",
    category: "Brain & Nervous System",
    summary:
      "Neurology services for headaches, seizures, stroke, neuropathy, and other disorders of the brain, spine, and nerves.",
    overview:
      "We combine clinical neurology with advanced investigations to identify root causes and provide individualized treatment pathways.",
    keyServices: [
      "Stroke and neuro-emergency evaluation",
      "Epilepsy and seizure management",
      "Headache and migraine clinics",
      "Neuropathy and movement disorder care",
    ],
    conditionsTreated: [
      "Stroke and transient ischemic attacks",
      "Epilepsy",
      "Peripheral neuropathy",
      "Parkinsonian and movement disorders",
    ],
    diagnostics: [
      "Neuro imaging coordination (CT/MRI)",
      "Nerve conduction and related tests",
      "Detailed neurological examination",
      "Risk-factor screening",
    ],
    treatments: [
      "Medication-based neuro care",
      "Acute stroke stabilization pathways",
      "Long-term neurological follow-up",
      "Rehabilitation referral planning",
    ],
    highlights: [
      "Time-sensitive stroke workflows",
      "Multidisciplinary neurologic care",
      "Continuity from emergency to recovery",
    ],
  },
  {
    id: "emergency-care",
    name: "Emergency Care",
    category: "24/7 Critical Response",
    summary:
      "Round-the-clock emergency services with rapid triage, trauma response, and critical stabilization support.",
    overview:
      "Our emergency department is designed for immediate assessment and treatment, with direct pathways to ICU, surgery, and specialist teams.",
    keyServices: [
      "24/7 emergency triage and resuscitation",
      "Trauma and accident care",
      "Cardiac and stroke emergency pathways",
      "Poisoning and acute illness management",
    ],
    conditionsTreated: [
      "Severe injuries and trauma",
      "Chest pain and breathing distress",
      "Acute stroke symptoms",
      "High fever, dehydration, and shock",
    ],
    diagnostics: [
      "Rapid point-of-care testing",
      "Urgent imaging access",
      "Continuous vital monitoring",
      "Emergency lab panels",
    ],
    treatments: [
      "Immediate stabilization and life support",
      "Emergency procedures and interventions",
      "Critical care admission when required",
      "Specialist handover and continuity",
    ],
    highlights: [
      "High-priority critical response team",
      "Quick decision and treatment windows",
      "Integrated emergency-to-inpatient flow",
    ],
  },
  {
    id: "diagnostics-lab",
    name: "Diagnostics & Lab",
    category: "Pathology & Imaging",
    summary:
      "Comprehensive diagnostic support including pathology, radiology, and imaging for accurate and timely clinical decisions.",
    overview:
      "Our diagnostics unit supports all departments with reliable test processing, standardized reporting, and fast turnaround for urgent cases.",
    keyServices: [
      "Routine and advanced pathology tests",
      "Imaging support across specialties",
      "Preventive health screening packages",
      "Urgent and stat test reporting",
    ],
    conditionsTreated: [
      "Infectious diseases requiring lab confirmation",
      "Metabolic and endocrine abnormalities",
      "Cardiac and renal risk profiling",
      "General diagnostic follow-up needs",
    ],
    diagnostics: [
      "Blood, urine, and microbiology panels",
      "Biochemistry and hormonal profiles",
      "Digital radiology and ultrasound support",
      "Quality-controlled result validation",
    ],
    treatments: [
      "Clinical decision support for treating teams",
      "Trend-based monitoring reports",
      "Follow-up diagnostic scheduling",
      "Preventive screening advisory",
    ],
    highlights: [
      "Fast turnaround for emergency tests",
      "Quality and calibration protocols",
      "Cross-department diagnostic integration",
    ],
  },
  {
    id: "gynecology",
    name: "Gynecology",
    category: "Womenâ€™s Health",
    summary:
      "Dedicated womenâ€™s healthcare for reproductive health, menstrual disorders, pregnancy support, and preventive gynecologic care.",
    overview:
      "Our gynecology department provides confidential, evidence-based care across all stages of womenâ€™s health with specialist-led consultations.",
    keyServices: [
      "Routine and preventive gynecologic checkups",
      "Menstrual and hormonal disorder management",
      "Prenatal and postnatal consultation support",
      "Family planning and counseling",
    ],
    conditionsTreated: [
      "PCOS and cycle irregularities",
      "Pelvic pain and infections",
      "Menopause-related symptoms",
      "High-risk pregnancy monitoring coordination",
    ],
    diagnostics: [
      "Pelvic examination and ultrasound support",
      "Hormonal and reproductive health tests",
      "Cervical screening pathways",
      "Pregnancy monitoring protocols",
    ],
    treatments: [
      "Medication and hormonal therapy plans",
      "Minimally invasive gynecologic procedures",
      "Fertility and conception counselling",
      "Post-treatment follow-up care",
    ],
    highlights: [
      "Confidential and respectful consultations",
      "Integrated maternity coordination",
      "Preventive womenâ€™s health focus",
    ],
  },
  {
    id: "dental-care",
    name: "Dental Care",
    category: "Oral & Dental Health",
    summary:
      "Complete dental care from routine oral hygiene and fillings to cosmetic dentistry, root canal treatments, and implants.",
    overview:
      "Our dental team provides modern preventive and restorative care with patient-focused treatment plans for long-term oral health.",
    keyServices: [
      "Routine dental checkups and cleaning",
      "Root canal and restorative care",
      "Cosmetic dentistry and smile correction",
      "Implants and prosthodontic consultation",
    ],
    conditionsTreated: [
      "Tooth decay and sensitivity",
      "Gum disease and oral infections",
      "Impacted teeth and bite issues",
      "Tooth loss and cosmetic concerns",
    ],
    diagnostics: [
      "Oral examination and dental imaging",
      "Periodontal assessment",
      "Bite and alignment evaluation",
      "Pre-procedure treatment planning",
    ],
    treatments: [
      "Fillings and restorative dentistry",
      "Root canal therapy",
      "Crowns, bridges, and dentures",
      "Implant and smile design pathways",
    ],
    highlights: [
      "Comfort-focused dental experience",
      "Modern tools for precise treatment",
      "Preventive oral care guidance",
    ],
  },
  {
    id: "oncology",
    name: "Oncology (Cancer Care)",
    category: "Cancer Care",
    summary:
      "Specialist oncology care covering medical and surgical cancer treatment with coordinated support.",
    overview:
      "Our oncology team provides consultation, treatment planning, and continuity care for cancer patients.",
    keyServices: [
      "Medical oncology consultation",
      "Surgical oncology consultation",
      "Cancer treatment planning",
      "Follow-up and continuity care",
    ],
    conditionsTreated: [
      "Solid organ cancers",
      "Blood-related malignancies",
      "Early and advanced-stage cancer conditions",
      "Post-treatment surveillance cases",
    ],
    diagnostics: [
      "Clinical oncology assessment",
      "Cancer screening and staging coordination",
      "Pathology review support",
      "Treatment response monitoring",
    ],
    treatments: [
      "Medical oncology management",
      "Surgical oncology pathways",
      "Integrated supportive care",
      "Scheduled follow-up protocols",
    ],
    highlights: [
      "Multidisciplinary oncology guidance",
      "Evidence-based cancer protocols",
      "Compassion-focused patient support",
    ],
  },
  {
    id: "gastro-nephro-urology",
    name: "Gastroenterology, Nephrology & Urology",
    category: "Digestive, Kidney & Urinary Care",
    summary:
      "Integrated specialist care for digestive, kidney, and urinary system disorders under one category.",
    overview:
      "This unit combines gastroenterology, nephrology, and urology consultations for coordinated care planning.",
    keyServices: [
      "Gastroenterology consultation",
      "Nephrology consultation",
      "Urology consultation",
      "GI surgery consultation",
    ],
    conditionsTreated: [
      "Digestive tract disorders",
      "Kidney function disorders",
      "Urinary tract and prostate disorders",
      "GI and uro-surgical conditions",
    ],
    diagnostics: [
      "Specialist clinical assessment",
      "GI, renal, and urology diagnostic coordination",
      "Procedure planning workup",
      "Follow-up and monitoring pathways",
    ],
    treatments: [
      "Medical gastroenterology management",
      "Renal care management",
      "Urology intervention planning",
      "GI surgical opinion and treatment pathways",
    ],
    highlights: [
      "Combined multispecialty clinic approach",
      "Coordinated care planning",
      "Continuity from consultation to follow-up",
    ],
  },
  {
    id: "general-specialized-surgery",
    name: "General & Specialized Surgery",
    category: "Advanced Surgical Care",
    summary:
      "Specialized surgery services including plastic and pediatric surgery consultations.",
    overview:
      "Our specialized surgical team provides consultation-led planning for reconstructive and pediatric surgical needs.",
    keyServices: [
      "Plastic and reconstructive surgery consultation",
      "Pediatric surgery consultation",
      "Pre-operative planning",
      "Post-operative follow-up",
    ],
    conditionsTreated: [
      "Reconstructive surgical conditions",
      "Pediatric surgical conditions",
      "Complex elective surgical cases",
      "Referral-based surgical evaluations",
    ],
    diagnostics: [
      "Surgical clinical evaluation",
      "Pre-operative diagnostic workup",
      "Procedure suitability assessment",
      "Post-surgical progress monitoring",
    ],
    treatments: [
      "Specialized surgical intervention planning",
      "Reconstructive surgery pathways",
      "Pediatric surgery pathways",
      "Structured follow-up care",
    ],
    highlights: [
      "Specialized surgeon-led evaluation",
      "Patient-specific treatment plans",
      "Continuity through recovery",
    ],
  },
  {
    id: "interventional-radiology",
    name: "Interventional Radiology",
    category: "Image-Guided Procedures",
    summary:
      "Image-guided minimally invasive interventional radiology consultation and procedure planning.",
    overview:
      "Our interventional radiology service supports targeted treatment approaches through image-guided interventions.",
    keyServices: [
      "Interventional radiology consultation",
      "Image-guided procedure planning",
      "Cross-specialty referral support",
      "Procedure follow-up monitoring",
    ],
    conditionsTreated: [
      "Vascular and non-vascular interventional conditions",
      "Referral-based image-guided treatment cases",
      "Complex procedure planning cases",
      "Condition-specific interventional support",
    ],
    diagnostics: [
      "Imaging-based case assessment",
      "Procedure suitability evaluation",
      "Interventional planning workup",
      "Follow-up imaging coordination",
    ],
    treatments: [
      "Image-guided minimally invasive interventions",
      "Condition-targeted interventional therapy",
      "Cross-disciplinary treatment coordination",
      "Post-procedure care pathways",
    ],
    highlights: [
      "Minimally invasive treatment focus",
      "Precision image guidance",
      "Integrated specialist coordination",
    ],
  },
];

