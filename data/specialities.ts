export type Speciality = {
  name: string;
  slug: string;
  short_description: string;
  overview: string;
  services: string[];
  symptoms: string[];
  treatments: string[];
  icon: string;
};

export const specialities: Speciality[] = [
  {
    name: "Internal Medicine",
    slug: "internal-medicine",
    short_description:
      "Comprehensive adult medical care for fever, diabetes, hypertension, infections, and other complex illnesses.",
    overview:
      "Internal Medicine is our primary clinical pillar for diagnosing and treating a wide range of acute and chronic illnesses. The team handles infection care, metabolic disease control, and early specialist coordination for high-risk cases.",
    services: [
      "General physician consultation",
      "Fever, diabetes, and hypertension management",
      "Infection care including severe bacterial and viral illness",
      "Poisoning and snake-bite stabilization support",
    ],
    symptoms: ["Persistent fever", "Fatigue and weakness", "Uncontrolled blood sugar", "Blood pressure fluctuations"],
    treatments: ["Medication optimization", "Targeted diagnostics", "Inpatient medical management", "Specialist referral coordination"],
    icon: "clinic",
  },
  {
    name: "ICU",
    slug: "icu",
    short_description:
      "Critical care support with advanced monitoring and life-support management for unstable patients.",
    overview:
      "Our ICU provides 24x7 physician-led critical care for respiratory, cardiac, septic, and post-operative emergencies with strict monitoring protocols.",
    services: ["Ventilator support", "Hemodynamic monitoring", "Sepsis and shock management", "Post-operative critical care"],
    symptoms: ["Severe breathing distress", "Altered consciousness", "Critical instability", "Multi-organ risk"],
    treatments: ["Advanced life-support protocols", "Organ support therapy", "Intensive medication infusions", "Continuous multidisciplinary supervision"],
    icon: "icu",
  },
  {
    name: "Cardiology",
    slug: "cardiology",
    short_description:
      "Advanced heart care including diagnostics, catheter-based interventions, and emergency cardiac treatment.",
    overview:
      "Cardiology services combine preventive care and high-end interventional procedures through an integrated heart team and Cath Lab support.",
    services: [
      "Cath Lab",
      "Angiography",
      "Angioplasty",
      "Pacemaker implantation",
      "Device closure for selected structural defects",
      "TMT (stress test)",
      "2D Echo (adult and pediatric)",
      "Stress Echo",
    ],
    symptoms: ["Chest pain", "Breathlessness", "Palpitations", "Dizziness or syncope"],
    treatments: ["Medication management", "Interventional procedures", "Cardiac risk reduction plans", "Long-term follow-up and rehabilitation"],
    icon: "heart",
  },
  {
    name: "Interventional Radiology",
    slug: "interventional-radiology",
    short_description:
      "Image-guided minimally invasive procedures for vascular and access-related interventions.",
    overview:
      "Interventional Radiology delivers precision vascular and access procedures with reduced recovery time and lower surgical burden.",
    services: [
      "Angiography and angioplasty for limb, kidney, and brain vessels",
      "Chemo port insertion",
      "Permcath insertion for dialysis",
      "Image-guided vascular procedure planning",
    ],
    symptoms: ["Peripheral vascular symptoms", "Dialysis access requirements", "Complex vessel narrowing", "Need for guided line placement"],
    treatments: ["Catheter-based interventions", "Targeted angioplasty", "Access device placement", "Post-procedure imaging follow-up"],
    icon: "scan",
  },
  {
    name: "Nephrology",
    slug: "nephrology",
    short_description:
      "Specialized kidney care for chronic kidney disease, dialysis support, and vascular access surgery.",
    overview:
      "Nephrology manages kidney disease progression with structured dialysis pathways, fluid-electrolyte control, and procedural support.",
    services: ["Dialysis", "AV fistula surgery", "Renal function monitoring", "Kidney disease consultation"],
    symptoms: ["Swelling", "Reduced urine output", "Uncontrolled blood pressure", "Uremic fatigue"],
    treatments: ["Dialysis planning", "Renal medication protocols", "Electrolyte correction", "Long-term CKD management"],
    icon: "kidney",
  },
  {
    name: "Gastroenterology & Endoscopy",
    slug: "gastroenterology-endoscopy",
    short_description:
      "Advanced digestive care with endoscopic diagnosis and therapeutic procedures.",
    overview:
      "The GI and Endoscopy unit handles upper and lower GI conditions through evidence-based consultation and therapeutic endoscopy.",
    services: [
      "Gastroscopy",
      "Colonoscopy",
      "ERCP",
      "Endoscopic biopsy, polyp/mass removal, stone extraction, and stenting",
    ],
    symptoms: ["Persistent acidity", "Abdominal pain", "GI bleeding signs", "Bowel habit changes"],
    treatments: ["Endoscopic therapy", "Medical GI management", "Procedure-led condition control", "Follow-up digestive care"],
    icon: "endo",
  },
  {
    name: "24x7 Emergency & Trauma Care",
    slug: "24x7-emergency-trauma-care",
    short_description:
      "Round-the-clock emergency and trauma response with rapid triage and immediate stabilization.",
    overview:
      "Emergency and trauma services run continuously with direct escalation to ICU, OT, and super-specialty teams for critical cases.",
    services: ["24x7 emergency triage", "Trauma stabilization", "Resuscitation support", "Critical care transfer coordination"],
    symptoms: ["Acute injuries", "Sudden severe chest pain", "Breathing distress", "Loss of consciousness"],
    treatments: ["Immediate stabilization", "Emergency procedures", "Critical monitoring", "Specialist handover pathways"],
    icon: "emergency",
  },
  {
    name: "General Surgery",
    slug: "general-surgery",
    short_description:
      "Comprehensive surgical care supported by a fully equipped operation theatre.",
    overview:
      "General Surgery provides elective and emergency operations with strong perioperative protocols and recovery planning.",
    services: ["Equipped operation theatre support", "Abdominal surgery", "Hernia and appendix surgery", "Emergency surgical care"],
    symptoms: ["Acute abdominal pain", "Hernia swelling", "Procedure-requiring conditions", "Surgical infection complications"],
    treatments: ["Open and minimally invasive procedures", "Pre-operative optimization", "Post-operative monitoring", "Recovery counseling"],
    icon: "surgery",
  },
  {
    name: "GI Surgery",
    slug: "gi-surgery",
    short_description:
      "Specialized surgical management for liver, intestine, and pancreas-related conditions.",
    overview:
      "GI Surgery handles complex hepatobiliary and intestinal disorders with multidisciplinary planning and advanced operative care.",
    services: ["Liver surgery", "Intestine surgery", "Pancreas surgery", "Complex GI surgical consultation"],
    symptoms: ["Severe digestive pain", "GI obstruction signs", "Surgical liver or pancreas disease", "Recurrent complicated GI episodes"],
    treatments: ["Targeted GI surgery", "Complication prevention protocols", "Nutritional recovery planning", "Long-term surgical follow-up"],
    icon: "surgery",
  },
  {
    name: "Laparoscopy",
    slug: "laparoscopy",
    short_description:
      "Minimal access surgery through keyhole techniques for faster recovery and less pain.",
    overview:
      "Laparoscopy enables precision surgery through small incisions, reducing hospital stay and helping faster functional recovery.",
    services: ["Minimal access abdominal surgery", "Diagnostic laparoscopy", "Laparoscopic procedure planning", "Early recovery pathways"],
    symptoms: ["Gallbladder symptoms", "Hernia-related discomfort", "Recurrent abdominal pain", "Surgical indication for keyhole approach"],
    treatments: ["Keyhole surgery", "Pain-minimized protocols", "Short-stay recovery care", "Post-op follow-up"],
    icon: "surgery",
  },
  {
    name: "Urology",
    slug: "urology",
    short_description:
      "Modern urinary tract and prostate care with advanced endoscopic and laser procedures.",
    overview:
      "Urology services cover stone disease, prostate issues, and lower urinary tract disorders using minimally invasive techniques.",
    services: [
      "Kidney stone treatment",
      "Endoscopic surgery (RIRS, URS, PCNL, ESWL)",
      "Uroflowmetry",
      "Urodynamic study",
    ],
    symptoms: ["Burning urination", "Flank pain", "Frequent urination", "Blood in urine"],
    treatments: ["Medical urology management", "Endoscopic stone removal", "Laser procedures", "Bladder function optimization"],
    icon: "urology",
  },
  {
    name: "Oncosurgery",
    slug: "oncosurgery",
    short_description:
      "Cancer-focused surgical care with stage-appropriate operative planning.",
    overview:
      "Oncosurgery delivers planned tumor resections with strict oncology pathways and coordinated post-operative care.",
    services: ["Tumor surgery", "Cancer operative planning", "Lymph node evaluation", "Post-surgical oncology coordination"],
    symptoms: ["Detected mass", "Cancer requiring surgery", "Persistent localized pain", "Progressive tissue changes"],
    treatments: ["Curative and palliative surgery", "Oncology pathway integration", "Rehabilitation guidance", "Surveillance planning"],
    icon: "oncology",
  },
  {
    name: "Oncology",
    slug: "oncology",
    short_description:
      "Comprehensive cancer treatment with chemotherapy and supportive oncology care.",
    overview:
      "Oncology services provide patient-specific treatment plans with chemotherapy, symptom control, and continuous treatment monitoring.",
    services: ["Chemotherapy", "Cancer staging and planning support", "Treatment response monitoring", "Supportive oncology care"],
    symptoms: ["Unexplained weight loss", "Persistent fatigue", "Abnormal bleeding", "Suspicious lumps or lesions"],
    treatments: ["Systemic therapy", "Side-effect management", "Nutritional support", "Long-term oncology follow-up"],
    icon: "oncology",
  },
  {
    name: "Orthopedics",
    slug: "orthopedics",
    short_description:
      "Bone and joint care including fracture treatment, replacement surgery, and arthroscopy.",
    overview:
      "Orthopedics delivers trauma, degenerative joint, and sports injury care through integrated surgical and rehabilitation pathways.",
    services: ["Fracture management", "Joint replacement", "Arthroscopy", "Spine and musculoskeletal consultation"],
    symptoms: ["Joint pain", "Swelling", "Movement restriction", "Injury-related pain"],
    treatments: ["Conservative pain care", "Arthroscopic surgery", "Joint reconstruction", "Rehabilitation protocols"],
    icon: "bone",
  },
  {
    name: "Neurosurgery",
    slug: "neurosurgery",
    short_description:
      "Surgical care for brain and spinal cord disorders requiring operative intervention.",
    overview:
      "Neurosurgery manages complex cranial and spinal conditions with focused diagnostics, operative precision, and intensive recovery support.",
    services: ["Brain surgery evaluation", "Spine surgery", "Neuro-trauma surgery", "Operative neuro consultation"],
    symptoms: ["Severe neurologic deficit", "Spinal compression signs", "Progressive neuro weakness", "Traumatic brain/spine injury"],
    treatments: ["Microsurgical procedures", "Spinal decompression", "Post-op neuro-critical care", "Structured follow-up"],
    icon: "brain",
  },
  {
    name: "Neurology",
    slug: "neurology",
    short_description:
      "Medical management of brain, nerve, and spinal disorders including stroke and paralysis care.",
    overview:
      "Neurology provides non-surgical diagnosis and treatment for stroke, paralysis, seizures, neuropathy, and movement disorders.",
    services: ["Stroke and paralysis evaluation", "Seizure and epilepsy care", "Neuropathy management", "Headache and migraine clinic"],
    symptoms: ["Sudden weakness", "Numbness", "Seizure episodes", "Persistent headache"],
    treatments: ["Medical neuro protocols", "Risk-factor control", "Rehabilitation referrals", "Long-term neurologic monitoring"],
    icon: "brain",
  },
  {
    name: "Plastic Surgery",
    slug: "plastic-surgery",
    short_description:
      "Reconstructive and corrective surgery for functional and cosmetic restoration.",
    overview:
      "Plastic Surgery supports trauma reconstruction, post-surgical repair, and corrective procedures with careful tissue planning.",
    services: ["Reconstructive surgery", "Scar revision", "Soft tissue correction", "Post-trauma repair"],
    symptoms: ["Post-injury deformity", "Tissue defects", "Complex wounds", "Corrective surgical need"],
    treatments: ["Reconstructive procedures", "Tissue repair", "Functional correction", "Post-op cosmetic and wound care"],
    icon: "surgery",
  },
  {
    name: "Pediatric Surgery",
    slug: "pediatric-surgery",
    short_description:
      "Specialized surgical management for infants and children with child-safe protocols.",
    overview:
      "Pediatric Surgery treats congenital and acquired surgical conditions in children through dedicated perioperative support.",
    services: ["Congenital anomaly surgery", "Pediatric abdominal procedures", "Day-care child surgery", "Post-op pediatric follow-up"],
    symptoms: ["Surgical anomalies in children", "Persistent pediatric abdominal symptoms", "Pediatric hernia signs", "Procedure-needed childhood conditions"],
    treatments: ["Child-focused surgical care", "Pediatric anesthesia safety pathways", "Pain-controlled recovery", "Parental counseling"],
    icon: "surgery",
  },
  {
    name: "Obstetrics & Gynecology",
    slug: "obstetrics-gynecology",
    short_description:
      "Integrated women's health and maternity care from adolescence to postnatal recovery.",
    overview:
      "Obstetrics and Gynecology offers preventive, medical, and procedural care for reproductive health and safe pregnancy management.",
    services: ["Gynecology consultation", "Antenatal and postnatal care", "Menstrual and hormonal disorder management", "Family planning counseling"],
    symptoms: ["Pelvic pain", "Irregular cycles", "Pregnancy concerns", "Hormonal symptoms"],
    treatments: ["Medical gynecology treatment", "Procedure-led care", "Maternity planning", "Preventive screening support"],
    icon: "woman",
  },
  {
    name: "NICU",
    slug: "nicu",
    short_description:
      "Neonatal intensive care for premature and critically ill newborns.",
    overview:
      "NICU offers continuous monitoring and specialist neonatal support for high-risk newborns requiring advanced intensive care.",
    services: ["Premature baby care", "Neonatal monitoring", "Respiratory support", "Feeding and growth management"],
    symptoms: ["Prematurity", "Low birth weight", "Neonatal respiratory distress", "Neonatal infection risk"],
    treatments: ["Incubator support", "Neonatal intensive protocols", "Infection control", "Discharge and follow-up planning"],
    icon: "nicu",
  },
  {
    name: "ENT",
    slug: "ent",
    short_description:
      "Comprehensive ear, nose, and throat care including surgical and endoscopic management.",
    overview:
      "ENT manages acute and chronic disorders of ear, nose, throat, and airway pathways with medical and minimally invasive intervention.",
    services: ["ENT consultation", "Sinus and allergy evaluation", "Hearing and throat care", "ENT procedural support"],
    symptoms: ["Ear pain", "Nasal blockage", "Throat discomfort", "Hearing disturbance"],
    treatments: ["Medical ENT treatment", "Endoscopic assessment", "Minor ENT surgery", "Long-term recurrent issue control"],
    icon: "ent",
  },
  {
    name: "Proctology",
    slug: "proctology",
    short_description:
      "Advanced treatment of piles and anorectal disease including laser procedures.",
    overview:
      "Proctology services provide focused treatment for hemorrhoids and anorectal disorders with privacy, comfort, and quicker recovery options.",
    services: ["Piles and fissure consultation", "Laser treatment for selected anorectal conditions", "Anorectal procedure planning", "Post-procedure follow-up"],
    symptoms: ["Rectal bleeding", "Painful defecation", "Perianal swelling", "Persistent anorectal discomfort"],
    treatments: ["Medical management", "Laser-based intervention", "Minor surgical correction", "Recovery and bowel-care guidance"],
    icon: "clinic",
  },
  {
    name: "Varicose Vein Clinic",
    slug: "varicose-vein-clinic",
    short_description:
      "Focused varicose vein treatment with minimally invasive endovenous procedures.",
    overview:
      "The Varicose Vein Clinic evaluates chronic venous disease and delivers modern procedure-based care to reduce pain and recurrence risk.",
    services: ["EVLA laser treatment", "Foam sclerotherapy", "Venous Doppler assessment", "Compression and lifestyle planning"],
    symptoms: ["Leg heaviness", "Visible tortuous veins", "Leg swelling", "Night cramps"],
    treatments: ["Conservative therapy", "Endovenous laser procedures", "Foam-based vein treatment", "Recurrence prevention plans"],
    icon: "clinic",
  },
  {
    name: "Diabetes Clinic",
    slug: "diabetes-clinic",
    short_description:
      "Structured diabetes care for blood sugar control and long-term complication prevention.",
    overview:
      "Diabetes Clinic provides physician-led metabolic management with tailored medication, diet planning, and routine risk screening.",
    services: ["Sugar profile monitoring", "HbA1c tracking", "Medication and insulin optimization", "Diet and lifestyle counseling"],
    symptoms: ["Excessive thirst", "Frequent urination", "Fatigue", "Slow wound healing"],
    treatments: ["Medical diabetes management", "Nutritional therapy", "Lifestyle correction", "Complication screening follow-up"],
    icon: "clinic",
  },
  {
    name: "Diabetic Foot Clinic",
    slug: "diabetic-foot-clinic",
    short_description:
      "Early detection and specialized wound care for diabetic foot complications.",
    overview:
      "Diabetic Foot Clinic combines vascular assessment, wound care, and pressure-offloading strategies to prevent serious limb complications.",
    services: ["Foot risk assessment", "Ulcer and wound care", "Infection management", "Footwear and offloading guidance"],
    symptoms: ["Foot numbness", "Non-healing ulcer", "Swelling or redness", "Skin color change"],
    treatments: ["Advanced dressings", "Infection control", "Pressure-offloading plans", "Preventive foot-care programs"],
    icon: "clinic",
  },
  {
    name: "VAC Therapy",
    slug: "vac-therapy",
    short_description:
      "Negative pressure wound therapy for difficult, non-healing, and complex wounds.",
    overview:
      "VAC Therapy accelerates wound healing in chronic and post-surgical wounds by optimizing wound environment and reducing infection burden.",
    services: ["Negative pressure wound therapy", "Complex wound monitoring", "Dressing protocol optimization", "Surgical wound support"],
    symptoms: ["Non-healing wound", "Chronic ulcer", "Deep tissue wound", "Delayed post-op healing"],
    treatments: ["VAC-assisted healing protocols", "Wound-bed preparation", "Infection control", "Regular healing progression review"],
    icon: "therapy",
  },
  {
    name: "Breast Clinic",
    slug: "breast-clinic",
    short_description:
      "Specialized breast health evaluation with screening, diagnosis, and mammography support.",
    overview:
      "Breast Clinic offers structured assessment for breast symptoms and preventive screening with timely referral and follow-up pathways.",
    services: ["Breast consultation", "Clinical breast examination", "Mammography", "Screening and follow-up coordination"],
    symptoms: ["Breast lump", "Pain or tenderness", "Nipple discharge", "Skin changes over breast"],
    treatments: ["Diagnostic pathway planning", "Medical treatment guidance", "Surgical referral when required", "Long-term surveillance"],
    icon: "clinic",
  },
  {
    name: "Obesity & Weight Loss Clinic",
    slug: "obesity-weight-loss-clinic",
    short_description:
      "Comprehensive weight-management program with medical and bariatric surgery pathways.",
    overview:
      "This clinic supports sustained weight reduction with metabolic assessment, lifestyle restructuring, and bariatric surgery evaluation for eligible cases.",
    services: ["Metabolic risk assessment", "Personalized diet and activity planning", "Medical weight-loss therapy", "Bariatric surgery referral and planning"],
    symptoms: ["Progressive weight gain", "Low exercise tolerance", "Metabolic syndrome indicators", "Obesity-related joint stress"],
    treatments: ["Structured weight-loss plans", "Behavioral and nutritional coaching", "Medical therapy", "Bariatric surgery pathway support"],
    icon: "clinic",
  },
  {
    name: "Physiotherapy & Rehabilitation",
    slug: "physiotherapy-rehabilitation",
    short_description:
      "Personalized rehabilitation for pain relief, strength recovery, and functional mobility.",
    overview:
      "Physiotherapy and Rehabilitation helps patients recover after injuries, surgeries, and chronic musculoskeletal disorders through guided therapy plans.",
    services: ["Pain rehabilitation", "Post-operative physiotherapy", "Sports injury rehab", "Mobility and gait training"],
    symptoms: ["Joint stiffness", "Back and neck pain", "Post-surgery weakness", "Reduced functional movement"],
    treatments: ["Manual therapy", "Exercise-based protocols", "Electrotherapy support", "Functional rehabilitation plans"],
    icon: "therapy",
  },
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const bySlug = new Map(specialities.map((item) => [item.slug, item]));
const byName = new Map(specialities.map((item) => [normalize(item.name), item]));

export const getSpecialityBySlug = (slug: string) => bySlug.get(slug);

export const getSpecialitySlugByName = (name: string) =>
  byName.get(normalize(name))?.slug;

export const getRelatedSpecialities = (slug: string, limit = 4) =>
  specialities.filter((item) => item.slug !== slug).slice(0, limit);
