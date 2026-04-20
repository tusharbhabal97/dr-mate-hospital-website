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
    short_description: "Comprehensive adult medical care focused on prevention, diagnosis, and chronic disease management.",
    overview:
      "Internal Medicine provides holistic care for adults with common and complex conditions. Our physicians focus on accurate diagnosis, long-term health planning, and coordinated specialist referrals when required.",
    services: ["General physician consultation", "Chronic disease follow-up", "Preventive health screening", "Fever and infection management"],
    symptoms: ["Persistent fever", "Fatigue", "Unexplained weight changes", "General weakness"],
    treatments: ["Medication optimization", "Lifestyle and risk counseling", "Diagnostic workup", "Specialist care coordination"],
    icon: "clinic",
  },
  {
    name: "ICU",
    slug: "icu",
    short_description: "Critical care support for patients requiring close monitoring and advanced life-support management.",
    overview:
      "Our Intensive Care Unit is equipped for high-acuity care with 24/7 specialist supervision, advanced monitoring, and multidisciplinary support for serious medical and post-surgical cases.",
    services: ["Ventilator support", "Hemodynamic monitoring", "Critical infection management", "Post-operative critical care"],
    symptoms: ["Severe breathing difficulty", "Altered consciousness", "Sepsis", "Critical instability"],
    treatments: ["Advanced life support", "Organ support protocols", "Critical medication infusions", "Round-the-clock supervision"],
    icon: "icu",
  },
  {
    name: "Cardiology",
    slug: "cardiology",
    short_description: "Comprehensive heart care with advanced diagnostics and interventional pathways.",
    overview:
      "Cardiology services cover preventive, diagnostic, and interventional heart care. Our team manages both acute and chronic cardiac conditions with evidence-based protocols and long-term follow-up.",
    services: ["Cath Lab", "Angiography", "Angioplasty", "Pacemaker", "TMT", "2D Echo", "Stress Echo"],
    symptoms: ["Chest pain", "Shortness of breath", "Palpitations", "Dizziness"],
    treatments: ["Medication management", "Interventional procedures", "Cardiac risk reduction", "Rehabilitation planning"],
    icon: "heart",
  },
  {
    name: "Interventional Radiology",
    slug: "interventional-radiology",
    short_description: "Image-guided minimally invasive procedures for diagnosis and treatment.",
    overview:
      "Interventional Radiology uses advanced imaging to perform precise, minimally invasive procedures that reduce recovery time and improve outcomes across multiple specialties.",
    services: ["Advanced Angiography", "Angioplasty", "Chemo Port", "Permcath"],
    symptoms: ["Vascular pain", "Need for guided access", "Complex blockages", "Procedure planning needs"],
    treatments: ["Image-guided interventions", "Targeted vascular procedures", "Catheter-based treatment", "Procedure follow-up"],
    icon: "scan",
  },
  {
    name: "Nephrology",
    slug: "nephrology",
    short_description: "Specialized kidney care for acute and chronic renal disorders.",
    overview:
      "Nephrology focuses on early detection and management of kidney disease. Our team supports dialysis care, kidney function stabilization, and long-term renal health planning.",
    services: ["Dialysis", "AV Fistula Surgery", "Kidney function monitoring", "Renal consultation"],
    symptoms: ["Swelling", "Reduced urine output", "Uncontrolled blood pressure", "Fatigue"],
    treatments: ["Renal medication plans", "Dialysis support", "Fluid and electrolyte correction", "Long-term kidney management"],
    icon: "kidney",
  },
  {
    name: "Gastroenterology & Endoscopy",
    slug: "gastroenterology-endoscopy",
    short_description: "Digestive system care with advanced endoscopic diagnosis and treatment.",
    overview:
      "This specialty evaluates and treats disorders of the esophagus, stomach, intestines, liver, and pancreas with modern endoscopy support and patient-focused plans.",
    services: ["Gastroscopy", "Colonoscopy", "ERCP", "Digestive disorder consultation"],
    symptoms: ["Persistent acidity", "Abdominal pain", "Bloating", "Changes in bowel habits"],
    treatments: ["Endoscopic procedures", "Medication therapy", "Dietary planning", "Follow-up care"],
    icon: "endo",
  },
  {
    name: "Emergency & Trauma Care",
    slug: "emergency-trauma-care",
    short_description: "24/7 emergency response for accidents, acute illness, and critical stabilization.",
    overview:
      "Emergency and Trauma Care provides rapid triage, stabilization, and specialist escalation for life-threatening and urgent medical conditions.",
    services: ["24/7 emergency triage", "Trauma response", "Resuscitation support", "Critical transfer coordination"],
    symptoms: ["Severe injury", "Acute chest pain", "Breathing distress", "Sudden neurological deficits"],
    treatments: ["Immediate stabilization", "Emergency procedures", "Critical monitoring", "Specialist handover"],
    icon: "emergency",
  },
  {
    name: "General Surgery",
    slug: "general-surgery",
    short_description: "Comprehensive surgical care for common and complex abdominal and soft tissue conditions.",
    overview:
      "General Surgery offers safe and protocol-driven surgical treatment with pre-operative planning, minimally invasive options, and structured post-operative recovery.",
    services: ["Abdominal surgery", "Hernia repair", "Appendix surgery", "Minor and major procedure care"],
    symptoms: ["Localized pain", "Hernia swelling", "Acute abdominal symptoms", "Surgical condition indicators"],
    treatments: ["Open and laparoscopic surgery", "Perioperative care", "Post-operative monitoring", "Recovery guidance"],
    icon: "surgery",
  },
  {
    name: "GI Surgery",
    slug: "gi-surgery",
    short_description: "Specialized gastrointestinal surgeries for liver, pancreas, and intestinal conditions.",
    overview:
      "GI Surgery manages operative treatment of digestive tract disorders with advanced planning and multidisciplinary support.",
    services: ["Liver surgery", "Intestine surgery", "Pancreas surgery", "GI surgical consultation"],
    symptoms: ["Severe abdominal pain", "GI bleeding", "Persistent digestive complications", "Surgical GI diagnosis"],
    treatments: ["Targeted GI surgery", "Post-surgical nutrition planning", "Complication prevention", "Long-term follow-up"],
    icon: "surgery",
  },
  {
    name: "Laparoscopy",
    slug: "laparoscopy",
    short_description: "Minimally invasive surgery with faster recovery and reduced post-operative discomfort.",
    overview:
      "Laparoscopic procedures are performed through small incisions with precision instrumentation, enabling shorter hospital stays and quicker return to routine activity.",
    services: ["Diagnostic laparoscopy", "Laparoscopic abdominal procedures", "Day-care compatible procedures", "Minimally invasive surgical planning"],
    symptoms: ["Surgical abdominal conditions", "Recurrent pain", "Gallbladder and hernia symptoms", "Procedure indications"],
    treatments: ["Keyhole surgery", "Enhanced recovery protocols", "Pain-minimized procedures", "Post-op surveillance"],
    icon: "surgery",
  },
  {
    name: "Urology",
    slug: "urology",
    short_description: "Advanced urinary and male reproductive health care with endourology support.",
    overview:
      "Urology services manage kidney stones, urinary tract issues, and prostate-related concerns using modern diagnostics and minimally invasive treatment pathways.",
    services: ["Kidney Stone Treatment", "RIRS", "URS", "PCNL", "ESWL", "Urodynamic Study"],
    symptoms: ["Burning urination", "Flank pain", "Frequent urination", "Blood in urine"],
    treatments: ["Medical stone management", "Endoscopic urology", "Laser procedures", "Functional bladder therapy"],
    icon: "urology",
  },
  {
    name: "Oncology",
    slug: "oncology",
    short_description: "Evidence-based cancer care focused on diagnosis, treatment planning, and supportive therapy.",
    overview:
      "Oncology services provide personalized cancer management with multidisciplinary review, systemic therapies, and close follow-up.",
    services: ["Chemotherapy", "Cancer staging support", "Treatment response monitoring", "Supportive oncology care"],
    symptoms: ["Unexplained weight loss", "Persistent lumps", "Abnormal bleeding", "Chronic fatigue"],
    treatments: ["Systemic therapy", "Symptom control", "Nutritional and supportive care", "Coordinated oncology pathways"],
    icon: "oncology",
  },
  {
    name: "Oncosurgery",
    slug: "oncosurgery",
    short_description: "Surgical oncology care for safe tumor removal and cancer-focused operative management.",
    overview:
      "Oncosurgery combines surgical precision with cancer treatment protocols to deliver stage-appropriate operative care and recovery planning.",
    services: ["Tumor surgery", "Cancer surgical planning", "Lymph node assessment", "Post-surgical oncology coordination"],
    symptoms: ["Detected mass", "Persistent localized pain", "Cancer diagnosis requiring surgery", "Progressive tissue changes"],
    treatments: ["Curative and palliative surgery", "Oncology pathway integration", "Post-op rehabilitation", "Surveillance protocols"],
    icon: "oncology",
  },
  {
    name: "Orthopedics",
    slug: "orthopedics",
    short_description: "Bone, joint, and spine care for injuries, degeneration, and mobility restoration.",
    overview:
      "Orthopedics offers complete musculoskeletal care including non-surgical therapy, trauma treatment, and advanced surgical options.",
    services: ["Fracture management", "Joint replacement planning", "Sports injury care", "Spine and joint consultation"],
    symptoms: ["Joint pain", "Swelling", "Reduced mobility", "Trauma-related pain"],
    treatments: ["Medication and physiotherapy", "Arthroscopic options", "Joint reconstruction", "Rehabilitation protocols"],
    icon: "bone",
  },
  {
    name: "Neurosurgery",
    slug: "neurosurgery",
    short_description: "Surgical treatment for brain, spine, and nerve conditions requiring operative intervention.",
    overview:
      "Neurosurgery services focus on precise diagnosis, careful surgical planning, and intensive post-operative neurological recovery.",
    services: ["Brain surgery evaluation", "Spine surgery", "Neuro-trauma surgery", "Operative neuro consultations"],
    symptoms: ["Severe neurological deficits", "Persistent severe headaches", "Spine compression symptoms", "Traumatic neuro injury"],
    treatments: ["Microsurgical procedures", "Spine decompression", "Critical neuro care", "Recovery and follow-up"],
    icon: "brain",
  },
  {
    name: "Neurology",
    slug: "neurology",
    short_description: "Comprehensive medical care for disorders of the brain, nerves, and spinal cord.",
    overview:
      "Neurology evaluates and manages stroke, seizure disorders, neuropathies, and movement disorders through clinical and diagnostic expertise.",
    services: ["Stroke evaluation", "Seizure care", "Neuropathy management", "Headache and migraine clinic"],
    symptoms: ["Headache", "Weakness", "Numbness", "Seizure episodes"],
    treatments: ["Medical neurology protocols", "Risk-factor control", "Neuro-rehabilitation referrals", "Long-term monitoring"],
    icon: "brain",
  },
  {
    name: "Plastic Surgery",
    slug: "plastic-surgery",
    short_description: "Reconstructive and corrective surgical procedures focused on function and aesthetics.",
    overview:
      "Plastic Surgery provides reconstruction after trauma or surgery and selected aesthetic corrections with patient-centered planning.",
    services: ["Reconstructive surgery", "Scar revision", "Soft tissue correction", "Post-trauma repair"],
    symptoms: ["Post-injury deformity", "Functional tissue loss", "Complex wounds", "Corrective needs"],
    treatments: ["Reconstructive procedures", "Skin and soft tissue repair", "Revision surgery", "Post-op care"],
    icon: "surgery",
  },
  {
    name: "Pediatric Surgery",
    slug: "pediatric-surgery",
    short_description: "Specialized surgical care for infants, children, and adolescents.",
    overview:
      "Pediatric Surgery addresses congenital and acquired surgical conditions in children with child-safe anesthesia and dedicated perioperative support.",
    services: ["Congenital condition surgery", "Child abdominal surgery", "Pediatric minor procedures", "Post-op pediatric follow-up"],
    symptoms: ["Childhood surgical anomalies", "Persistent abdominal complaints", "Hernia in children", "Procedure-requiring pediatric conditions"],
    treatments: ["Child-focused surgery", "Pain-controlled pediatric recovery", "Parental counseling", "Structured follow-up"],
    icon: "surgery",
  },
  {
    name: "Obstetrics & Gynecology",
    slug: "obstetrics-gynecology",
    short_description: "Integrated women's health services covering reproductive, pregnancy, and gynecologic care.",
    overview:
      "Obstetrics and Gynecology provides preventive, medical, and procedural care across all stages of women's health with compassionate guidance.",
    services: ["Antenatal care", "Gynecology consultation", "Menstrual disorder management", "Postnatal follow-up"],
    symptoms: ["Pelvic pain", "Irregular cycles", "Pregnancy concerns", "Hormonal symptoms"],
    treatments: ["Medical therapy", "Procedure-based gynecology", "Maternity planning", "Preventive screening"],
    icon: "woman",
  },
  {
    name: "NICU",
    slug: "nicu",
    short_description: "Specialized neonatal intensive care for critically ill and premature newborns.",
    overview:
      "NICU supports high-risk newborns with continuous monitoring, specialist supervision, and family-informed neonatal care.",
    services: ["Premature newborn care", "Neonatal monitoring", "Respiratory support", "Feeding and growth support"],
    symptoms: ["Prematurity", "Low birth weight", "Breathing distress in newborn", "Neonatal infections"],
    treatments: ["Intensive neonatal protocols", "Incubator and respiratory support", "Infection control", "Discharge planning"],
    icon: "nicu",
  },
  {
    name: "ENT",
    slug: "ent",
    short_description: "Ear, nose, and throat care for infections, airway, and voice-related conditions.",
    overview:
      "ENT evaluates and treats acute and chronic conditions of the ear, nose, throat, and related head-neck structures.",
    services: ["ENT consultation", "Sinus and allergy evaluation", "Hearing-related assessment", "Throat and voice care"],
    symptoms: ["Ear pain", "Nasal blockage", "Throat discomfort", "Hearing changes"],
    treatments: ["Medical ENT therapy", "Minor ENT procedures", "Endoscopic assessment", "Recurrent issue management"],
    icon: "ent",
  },
  {
    name: "Proctology",
    slug: "proctology",
    short_description: "Focused care for anorectal disorders with modern minimally invasive solutions.",
    overview:
      "Proctology services address piles, fissures, fistula, and related anorectal concerns with privacy, comfort, and rapid recovery planning.",
    services: ["Anorectal consultation", "Laser proctology pathways", "Pain-relief management", "Procedure-based treatment"],
    symptoms: ["Rectal bleeding", "Pain during passing stool", "Swelling", "Itching and discomfort"],
    treatments: ["Medical management", "Laser interventions", "Minor surgical correction", "Post-procedure follow-up"],
    icon: "clinic",
  },
  {
    name: "Varicose Vein Clinic",
    slug: "varicose-vein-clinic",
    short_description: "Targeted management for varicose veins and chronic venous insufficiency.",
    overview:
      "This clinic offers evaluation and minimally invasive treatment options for painful or progressive varicose vein disease.",
    services: ["Venous Doppler assessment", "Compression therapy planning", "Laser vein treatment support", "Procedure follow-up"],
    symptoms: ["Leg heaviness", "Visible twisted veins", "Leg swelling", "Night cramps"],
    treatments: ["Conservative therapy", "Endovenous treatment pathways", "Lifestyle modification", "Recurrence prevention"],
    icon: "clinic",
  },
  {
    name: "Diabetes Clinic",
    slug: "diabetes-clinic",
    short_description: "Comprehensive diabetes management with monitoring, counseling, and complication prevention.",
    overview:
      "Diabetes Clinic provides individualized sugar-control plans integrating diet, medication, and regular risk assessment.",
    services: ["Blood sugar management", "HbA1c monitoring", "Diet and lifestyle counseling", "Complication screening"],
    symptoms: ["Frequent urination", "Excessive thirst", "Fatigue", "Slow wound healing"],
    treatments: ["Medication titration", "Insulin planning", "Nutritional therapy", "Preventive follow-up"],
    icon: "clinic",
  },
  {
    name: "Diabetic Foot Clinic",
    slug: "diabetic-foot-clinic",
    short_description: "Preventive and advanced care for diabetic foot ulcers and infection risk.",
    overview:
      "The Diabetic Foot Clinic focuses on early detection, wound management, and limb preservation through multidisciplinary care.",
    services: ["Foot risk assessment", "Wound dressing protocols", "Infection management", "Footwear guidance"],
    symptoms: ["Foot numbness", "Non-healing wounds", "Swelling", "Skin discoloration"],
    treatments: ["Advanced wound care", "Offloading strategies", "Infection control", "Preventive foot-care planning"],
    icon: "clinic",
  },
  {
    name: "VAC Therapy",
    slug: "vac-therapy",
    short_description: "Advanced negative pressure wound therapy for complex and slow-healing wounds.",
    overview:
      "VAC Therapy helps promote faster healing by controlling wound moisture, reducing infection risk, and improving tissue recovery.",
    services: ["Negative pressure wound therapy", "Chronic wound monitoring", "Dressing protocol optimization", "Surgical wound support"],
    symptoms: ["Non-healing ulcers", "Post-surgical wound delay", "Deep tissue wounds", "Wound infection risk"],
    treatments: ["VAC-assisted healing", "Wound bed preparation", "Infection management", "Recovery tracking"],
    icon: "therapy",
  },
  {
    name: "Breast Clinic",
    slug: "breast-clinic",
    short_description: "Specialized breast health evaluation, screening, and treatment guidance.",
    overview:
      "Breast Clinic offers structured assessment for breast symptoms with imaging support, early detection pathways, and specialist referral when needed.",
    services: ["Breast consultation", "Clinical examination", "Screening coordination", "Follow-up and counseling"],
    symptoms: ["Breast lump", "Pain or tenderness", "Nipple discharge", "Skin changes"],
    treatments: ["Diagnostic pathway planning", "Medical management", "Surgical referral when required", "Long-term monitoring"],
    icon: "clinic",
  },
  {
    name: "Obesity & Weight Loss Clinic",
    slug: "obesity-weight-loss-clinic",
    short_description: "Medical weight management with lifestyle, metabolic, and procedure-based pathways.",
    overview:
      "This clinic supports sustainable weight reduction through evidence-based nutrition, activity planning, and specialist-guided interventions.",
    services: ["Metabolic assessment", "Diet planning", "Lifestyle coaching", "Procedure referral pathways"],
    symptoms: ["Weight gain", "Low stamina", "Metabolic risk factors", "Obesity-related complications"],
    treatments: ["Structured weight-loss plans", "Medical therapy", "Behavioral coaching", "Long-term follow-up"],
    icon: "clinic",
  },
  {
    name: "Physiotherapy & Rehabilitation",
    slug: "physiotherapy-rehabilitation",
    short_description: "Movement restoration and pain recovery through personalized rehabilitation programs.",
    overview:
      "Physiotherapy and Rehabilitation improves strength, mobility, and function after injury, surgery, and chronic musculoskeletal conditions.",
    services: ["Pain rehabilitation", "Post-operative physiotherapy", "Sports rehab", "Mobility and gait training"],
    symptoms: ["Joint stiffness", "Back pain", "Post-surgical weakness", "Reduced movement"],
    treatments: ["Manual therapy", "Exercise-based recovery", "Electrotherapy support", "Functional rehabilitation"],
    icon: "therapy",
  },
  {
    name: "Bariatric Surgery",
    slug: "bariatric-surgery",
    short_description: "Specialized surgical solutions for obesity and metabolic risk reduction.",
    overview:
      "Bariatric Surgery supports eligible patients with clinically guided weight-loss procedures and structured pre- and post-operative care.",
    services: ["Bariatric evaluation", "Procedure planning", "Nutritional counseling", "Post-surgery follow-up"],
    symptoms: ["Severe obesity", "Metabolic complications", "Sleep-related breathing issues", "Weight-related joint stress"],
    treatments: ["Surgical weight-loss procedures", "Lifestyle integration", "Nutritional monitoring", "Long-term outcome tracking"],
    icon: "surgery",
  },
  {
    name: "24x7 Emergency & Trauma Care",
    slug: "24x7-emergency-trauma-care",
    short_description: "Round-the-clock acute emergency and trauma care with rapid response.",
    overview:
      "This service ensures immediate access to emergency stabilization, trauma protocols, and specialist escalation at any hour.",
    services: ["24-hour triage", "Trauma stabilization", "Critical monitoring", "Emergency procedure support"],
    symptoms: ["Acute injuries", "Sudden severe symptoms", "Critical breathing or cardiac distress", "Loss of consciousness"],
    treatments: ["Rapid emergency intervention", "Life-support protocols", "Critical pathway activation", "Inpatient transfer coordination"],
    icon: "emergency",
  },
  {
    name: "Interventional Radiology Diagnostics",
    slug: "interventional-radiology-diagnostics",
    short_description: "Advanced diagnostic imaging support for vascular and procedure-led evaluation.",
    overview:
      "Interventional Radiology Diagnostics provides high-precision imaging and procedural diagnostics to guide targeted treatment decisions.",
    services: ["Vascular imaging", "Procedure planning diagnostics", "Intervention guidance imaging", "Targeted radiology assessment"],
    symptoms: ["Vascular complications", "Diagnostic uncertainty", "Complex organ findings", "Need for image-guided evaluation"],
    treatments: ["Image-led diagnosis", "Procedure roadmap preparation", "Clinical decision support", "Follow-up imaging plans"],
    icon: "diagnostics",
  },
  {
    name: "Cardiac Diagnostics",
    slug: "cardiac-diagnostics",
    short_description: "Heart-focused diagnostic testing for accurate risk and function assessment.",
    overview:
      "Cardiac Diagnostics helps detect and monitor heart disease early with non-invasive and stress-based testing.",
    services: ["TMT", "2D Echo", "Stress Echo", "Cardiac profile screening"],
    symptoms: ["Chest discomfort", "Reduced exercise tolerance", "Palpitations", "Breathlessness"],
    treatments: ["Risk stratification", "Diagnostic reporting", "Clinical pathway referral", "Monitoring plans"],
    icon: "diagnostics",
  },
  {
    name: "Endoscopy Diagnostics",
    slug: "endoscopy-diagnostics",
    short_description: "Endoscopic diagnostic support for upper and lower gastrointestinal disorders.",
    overview:
      "Endoscopy Diagnostics allows detailed visualization of digestive tract conditions and supports timely treatment planning.",
    services: ["Gastroscopy", "Colonoscopy", "ERCP", "Diagnostic biopsy support"],
    symptoms: ["Persistent acidity", "GI bleeding", "Chronic abdominal discomfort", "Altered bowel patterns"],
    treatments: ["Diagnostic endoscopy", "Procedure-guided findings", "Condition staging support", "Targeted referral"],
    icon: "diagnostics",
  },
  {
    name: "Mammography",
    slug: "mammography",
    short_description: "Breast imaging for early detection, screening, and focused diagnostic evaluation.",
    overview:
      "Mammography supports early identification of breast abnormalities and strengthens preventive breast health programs.",
    services: ["Screening mammography", "Diagnostic mammography", "Follow-up imaging", "Clinical reporting"],
    symptoms: ["Breast lump", "Screening requirement", "Breast pain with risk profile", "Follow-up imaging need"],
    treatments: ["Early detection pathway", "Further diagnostic referral", "Clinical review coordination", "Monitoring and follow-up"],
    icon: "diagnostics",
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

