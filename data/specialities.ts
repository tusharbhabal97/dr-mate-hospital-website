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
      "Internal Medicine focuses on adult health, covering both day-to-day medical concerns and complex multisystem illness. Our physicians provide diagnosis and treatment for acute infections, fever, dehydration, and exacerbations of chronic conditions such as diabetes, hypertension, thyroid disorders, and respiratory disease. Evaluation includes detailed clinical assessment, laboratory testing, imaging when indicated, and risk-factor review. Care plans combine evidence-based medication, lifestyle guidance, and close follow-up to support long-term disease management. When needed, we coordinate specialty services to ensure seamless care, with emphasis on prevention, early intervention, and continuity across outpatient and inpatient settings.",
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
      "ICU services focus on life-threatening illness requiring continuous monitoring and organ support. The team manages acute respiratory failure, sepsis, shock, severe cardiac events, post-operative instability, and other critical conditions, including patients with chronic diseases who deteriorate suddenly. Diagnosis is guided by bedside assessment, advanced monitoring, blood investigations, imaging, and serial clinical reassessment. Treatment includes ventilatory support, hemodynamic management, targeted medications, infection control, nutrition, and protocol-based critical care. Our ICU care philosophy emphasizes timely intervention, multidisciplinary coordination, and family communication, with structured daily review to support recovery, prevent complications, and plan safe transfer to step-down care.",
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
      "Cardiology focuses on prevention, diagnosis, and treatment of heart and blood vessel disorders across emergency and elective care. Our cardiology services manage chest pain, heart attack, heart failure, arrhythmia, hypertension, and chronic ischemic heart disease. Evaluation includes clinical examination, ECG, echocardiography, stress testing, cardiac biomarkers, and angiography when indicated. Treatment plans range from medication optimization and risk-factor control to catheter-based procedures such as angioplasty and device therapy. We provide coordinated cardiac care with lifestyle counseling, follow-up monitoring, and rehabilitation support to improve symptoms, reduce recurrence risk, and strengthen long-term cardiovascular management.",
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
      "Interventional Radiology focuses on diagnosis and treatment through image-guided, minimally invasive procedures. Our interventional radiology services address acute and chronic vascular narrowing, dialysis access needs, difficult line placement, and selected organ-related conditions that benefit from catheter-based care. Diagnostic planning uses ultrasound, CT, fluoroscopy, and angiographic evaluation to define anatomy and procedural strategy. Treatment may include angioplasty, stenting, embolization, and image-guided access procedures such as chemo port or dialysis catheter placement. We emphasize precision, safety, and shorter recovery, with post-procedure monitoring and multidisciplinary coordination to support durable outcomes and comprehensive disease management.",
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
      "Nephrology focuses on kidney health, from early renal dysfunction to advanced chronic kidney disease and dialysis-dependent states. Our nephrology services provide diagnosis and treatment for acute kidney injury, diabetic and hypertensive kidney disease, fluid overload, electrolyte imbalance, and resistant blood pressure. Evaluation includes renal function tests, urine studies, imaging, blood pressure profiling, and medication review. Treatment combines kidney-protective therapy, dialysis planning, access care, anemia and mineral-bone management, and dietary counseling. We deliver coordinated renal care with regular monitoring, complication prevention, and collaboration with cardiology, endocrinology, and critical care teams for long-term kidney disease management.",
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
      "Gastroenterology and Endoscopy focuses on digestive system disorders involving the esophagus, stomach, intestines, liver, pancreas, and biliary tract. Our gastroenterology services provide diagnosis and treatment for acute abdominal pain, gastrointestinal bleeding, infections, reflux disease, inflammatory bowel conditions, chronic liver disorders, and pancreatobiliary disease. Evaluation includes clinical assessment, laboratory testing, ultrasound or CT when needed, and endoscopic procedures such as gastroscopy, colonoscopy, and ERCP. Treatment combines medication, therapeutic endoscopy, nutrition guidance, and surveillance plans. We emphasize patient-centered digestive care with follow-up monitoring, prevention strategies, and multidisciplinary management for complex GI conditions.",
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
      "24x7 Emergency and Trauma Care focuses on rapid assessment, stabilization, and definitive treatment of urgent medical and injury-related conditions. Our emergency services manage chest pain, stroke symptoms, breathing distress, severe infections, poisoning, road traffic trauma, fractures, bleeding, and altered consciousness in both acute and chronic disease patients. Diagnosis begins with triage, focused examination, bedside monitoring, ECG, imaging, and urgent laboratory evaluation. Treatment prioritizes airway, breathing, circulation, pain control, resuscitation, and timely procedures, with direct transfer to ICU, operating theatre, or specialty care when required. We provide coordinated emergency care with continuous observation and safe transition planning after stabilization.",
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
      "General Surgery focuses on operative and perioperative management of abdominal, soft tissue, and selected emergency surgical conditions. Our general surgery services provide diagnosis and treatment for appendicitis, hernia, gallbladder disease, abscess, intestinal obstruction, and other acute or chronic disorders requiring surgical care. Evaluation includes clinical examination, laboratory workup, ultrasound or CT, and anesthesia fitness assessment. Treatment may involve open or minimally invasive surgery, supported by infection prevention, pain control, and early mobilization protocols. We follow a patient-centered care model with clear counseling, postoperative monitoring, and coordinated follow-up to promote safe recovery and reduce complications.",
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
      "GI Surgery focuses on diagnosis and treatment of complex disorders of the liver, pancreas, gallbladder, bile ducts, stomach, and intestines. Our GI surgery services manage acute abdominal emergencies as well as chronic structural disease, obstruction, tumors, inflammatory complications, and recurrent biliary conditions. Diagnostic planning includes clinical evaluation, endoscopy correlation, contrast imaging, and laboratory assessment to define disease extent and surgical strategy. Treatment may involve elective or emergency procedures using open or minimally invasive techniques, with nutrition support and enhanced recovery pathways. We provide multidisciplinary surgical care, close postoperative monitoring, and long-term follow-up for functional recovery and complication prevention.",
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
      "Laparoscopy focuses on minimally invasive surgery performed through small incisions using a camera-guided approach. Our laparoscopy services provide diagnosis and treatment for gallbladder disease, hernia, appendicular pathology, selected gynecologic conditions, and other abdominal disorders in acute and chronic settings. Evaluation includes clinical assessment, laboratory testing, and imaging to confirm suitability for keyhole surgery. Treatment emphasizes precise operative technique, reduced postoperative pain, lower wound complications, and earlier return to activity compared with conventional approaches in appropriate cases. We deliver patient-centered surgical care with anesthesia safety, structured monitoring, and follow-up guidance to support durable recovery and long-term health management.",
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
      "Urology focuses on diagnosis and treatment of kidney, ureter, bladder, prostate, and male urinary-reproductive disorders. Our urology services manage acute renal colic, urinary infection, urinary retention, hematuria, and chronic conditions such as recurrent stones, prostate enlargement, and bladder dysfunction. Evaluation includes urine and blood tests, ultrasound, uroflowmetry, urodynamic study, and endoscopic assessment when indicated. Treatment may involve medication, dietary and hydration guidance, laser or endoscopic stone procedures, and functional bladder management plans. We provide coordinated urology care with follow-up monitoring, recurrence prevention, and individualized long-term management to improve urinary health and quality of life.",
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
      "Oncosurgery focuses on surgical diagnosis and treatment of solid tumors with intent tailored to cancer stage and overall health status. Our oncosurgery services manage operable cancers, suspicious masses, nodal disease, and selected urgent complications requiring timely operative care. Preoperative evaluation includes imaging review, histopathology correlation, staging workup, and multidisciplinary tumor board discussion to guide treatment planning. Surgery is combined with principles of oncologic clearance, organ preservation where feasible, and complication prevention. We coordinate perioperative cancer care with medical oncology, pathology, radiology, and rehabilitation teams, alongside structured surveillance and follow-up for recurrence monitoring and long-term management.",
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
      "Oncology focuses on non-surgical cancer diagnosis, treatment planning, and long-term disease management across different tumor types. Our oncology services care for newly diagnosed and recurrent cancers, treatment-related complications, and symptom burden in both acute and chronic phases. Evaluation includes pathology confirmation, staging investigations, laboratory monitoring, and performance status assessment to individualize therapy. Treatment may include chemotherapy, targeted protocols when appropriate, supportive medications, nutrition guidance, and symptom-control care. We follow a multidisciplinary approach with regular response assessment, toxicity monitoring, and coordinated follow-up to optimize treatment continuity, quality of life, and evidence-based cancer management.",
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
      "Orthopedics focuses on diagnosis and treatment of bone, joint, ligament, tendon, and spine-related musculoskeletal conditions. Our orthopedic services manage acute fractures, sports injuries, dislocations, and chronic disorders such as osteoarthritis, back pain, and degenerative joint disease. Evaluation includes clinical examination, X-ray and advanced imaging when needed, functional assessment, and perioperative risk review. Treatment ranges from splintage, medication, and physiotherapy to arthroscopy, fracture fixation, and joint replacement based on individual need. We provide integrated orthopedic care with rehabilitation planning, mobility restoration, and long-term monitoring to reduce pain, improve function, and prevent recurrence or disability.",
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
      "Neurosurgery focuses on diagnosis and treatment of brain, spine, and peripheral nerve disorders requiring operative intervention. Our neurosurgery services manage head injury, intracranial hemorrhage, tumors, hydrocephalus, spinal compression, disc disease, and trauma-related neurologic deficits in acute and chronic settings. Evaluation includes neurologic examination, CT or MRI imaging, and risk stratification to define urgency and surgical approach. Treatment may involve cranial or spinal decompression, tumor surgery, stabilization procedures, and intensive postoperative monitoring. We provide coordinated neurosurgical care with neurology, ICU, rehabilitation, and pain teams to support recovery, functional outcomes, and long-term neurologic management.",
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
      "Neurology focuses on non-surgical diagnosis and treatment of disorders of the brain, spinal cord, peripheral nerves, and muscles. Our neurology services manage acute stroke symptoms, seizures, severe headache, dizziness, and chronic conditions such as epilepsy, neuropathy, movement disorders, and dementia-related concerns. Evaluation includes detailed neurologic examination, imaging, electrophysiologic testing when indicated, and targeted laboratory assessment. Treatment combines medication optimization, risk-factor control, stroke prevention, and symptom-directed care plans. We emphasize continuous neurologic care with rehabilitation linkage, caregiver education, and regular follow-up monitoring to improve function, reduce recurrence, and support long-term disease management.",
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
      "Plastic Surgery focuses on reconstruction and corrective procedures that restore form, function, and tissue integrity. Our plastic surgery services address acute trauma defects, burns, complex wounds, scar contracture, post-surgical tissue loss, and selected elective corrective conditions. Diagnosis and planning involve detailed structural assessment, vascular viability evaluation, and discussion of functional goals and expected recovery. Treatment may include flap or graft reconstruction, scar revision, soft tissue repair, and staged procedures when required. We deliver patient-centered surgical care with wound monitoring, infection prevention, rehabilitation support, and coordinated follow-up to optimize healing and long-term functional outcomes.",
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
      "Pediatric Surgery focuses on diagnosis and treatment of surgical conditions in newborns, infants, children, and adolescents. Our pediatric surgery services manage congenital anomalies, hernias, appendicitis, undescended testis, abdominal emergencies, and selected urologic or soft tissue conditions in both acute and chronic settings. Evaluation includes age-appropriate clinical assessment, imaging, laboratory workup, and anesthesia planning tailored to pediatric safety. Treatment may involve open or minimally invasive surgery with careful pain control and child-focused perioperative care. We emphasize family-centered communication, postoperative monitoring, nutrition and growth support, and coordinated follow-up for healthy recovery and long-term development.",
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
      "Obstetrics and Gynecology focuses on women’s reproductive health, pregnancy care, and gynecologic diagnosis and treatment across life stages. Our obstetrics and gynecology services manage acute problems such as bleeding, pelvic pain, and pregnancy-related complications, along with chronic conditions including menstrual disorders, fibroids, PCOS, and menopausal concerns. Evaluation includes clinical examination, ultrasound, laboratory testing, and preventive screening tailored to age and risk. Treatment may involve medication, minimally invasive procedures, fertility and contraception counseling, and structured antenatal-postnatal care. We provide respectful, patient-centered women’s care with monitoring, health education, and multidisciplinary support for long-term wellbeing.",
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
      "NICU focuses on intensive diagnosis, treatment, and continuous care for premature, low-birth-weight, and critically ill newborns. Our NICU services manage respiratory distress, neonatal sepsis, birth asphyxia, jaundice requiring advanced support, feeding intolerance, and complications related to prematurity. Evaluation relies on specialized neonatal examination, continuous vital monitoring, laboratory testing, imaging, and developmental risk assessment. Treatment includes thermal regulation, respiratory support, infection management, nutrition optimization, and protocol-based neonatal critical care. We follow a family-inclusive care model with regular counseling, discharge readiness planning, and follow-up monitoring to support safe transition, growth, and neurodevelopmental outcomes.",
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
      "ENT focuses on diagnosis and treatment of disorders affecting the ear, nose, throat, and related head-neck airway pathways. Our ENT services manage acute ear pain, throat infection, epistaxis, sinusitis, vertigo, and chronic conditions such as allergic rhinitis, hearing loss, tonsillar disease, and voice complaints. Evaluation includes focused ENT examination, endoscopic assessment, audiology testing, and imaging where required. Treatment may involve medication, allergy and infection control, minor procedures, and surgery for selected structural or recurrent disease. We deliver patient-centered ENT care with follow-up monitoring, preventive guidance, and coordinated management for long-term symptom control.",
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
      "Proctology focuses on diagnosis and treatment of disorders of the rectum and anal canal with emphasis on comfort, privacy, and function. Our proctology services manage acute pain, bleeding, thrombosed hemorrhoids, fissure, fistula, and chronic anorectal symptoms that affect bowel habits and quality of life. Evaluation includes careful clinical examination, anoscopic assessment, and investigation for associated bowel disease when indicated. Treatment may involve medication, dietary and bowel-regulation advice, office procedures, or minimally invasive surgery such as laser-based approaches in selected cases. We provide compassionate anorectal care with pain control, wound monitoring, and recurrence prevention through long-term bowel health management.",
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
      "Varicose Vein Clinic services focus on diagnosis and treatment of chronic venous insufficiency affecting leg veins and circulation. We manage acute symptoms such as pain, swelling, heaviness, and skin irritation, as well as chronic venous disease with visible varicosities, pigmentation, eczema, or ulcer risk. Evaluation includes clinical examination and venous Doppler mapping to assess reflux patterns and treatment suitability. Care options include compression therapy, exercise and limb-elevation guidance, endovenous laser ablation, and sclerotherapy based on disease stage. Our approach emphasizes symptom relief, recurrence prevention, skin protection, and follow-up monitoring for sustained vein health and functional recovery.",
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
      "Diabetes Clinic focuses on diagnosis, treatment, and long-term care of type 1, type 2, and gestational or secondary diabetes. Our diabetes services manage acute hyperglycemia or hypoglycemia and chronic metabolic issues, including obesity, hypertension, lipid disorders, and early organ complications. Evaluation includes blood glucose profiling, HbA1c, kidney and liver parameters, cardiovascular risk assessment, and lifestyle review. Treatment combines individualized medication or insulin plans, nutrition counseling, physical activity guidance, and regular complication screening for eyes, kidneys, nerves, and feet. We provide continuous diabetes management with patient education, preventive care, and multidisciplinary follow-up to support safer long-term outcomes.",
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
      "Diabetic Foot Clinic services focus on diagnosis, treatment, and prevention of foot complications related to diabetes and neuropathy. We manage acute infections, ulcers, callus-related breakdown, and chronic non-healing wounds that increase limb risk. Evaluation includes vascular and neurologic foot assessment, wound depth grading, infection screening, pressure-point analysis, and glycemic review to guide care. Treatment includes advanced dressings, debridement when required, targeted antibiotics, offloading techniques, footwear modification, and vascular referral for compromised circulation. Our care model emphasizes close monitoring, patient education, and multidisciplinary diabetes management to prevent recurrence, protect mobility, and reduce amputation risk.",
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
      "VAC Therapy focuses on advanced wound management using controlled negative pressure to support healing in complex acute and chronic wounds. Our VAC therapy services are used for post-operative wounds, diabetic ulcers, traumatic tissue loss, pressure injuries, and wounds with delayed granulation. Diagnosis and treatment planning include wound-bed assessment, infection status review, vascular adequacy, and underlying disease control. Therapy promotes exudate removal, tissue perfusion, edema reduction, and granulation formation while protecting surrounding skin. We provide structured wound care with dressing protocol monitoring, pain management, and multidisciplinary follow-up to improve healing trajectory and reduce complications.",
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
      "Breast Clinic services focus on breast health diagnosis, treatment planning, and preventive care for women across age groups. We evaluate acute concerns such as painful swelling or infection and chronic symptoms including persistent lumps, nipple discharge, skin changes, or cyclical pain. Diagnostic assessment includes clinical breast examination, imaging such as mammography or ultrasound, and biopsy referral when indicated. Treatment may involve reassurance and surveillance, medical management of benign conditions, or coordinated surgical and oncology referral for suspicious findings. Our breast care approach emphasizes early detection, patient counseling, regular monitoring, and multidisciplinary management for safe and timely outcomes.",
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
      "Obesity and Weight Loss Clinic services focus on diagnosis and treatment of obesity as a chronic metabolic condition with medical complications. We manage acute functional concerns such as breathlessness or joint strain and chronic risks including diabetes, fatty liver disease, sleep apnea, and hypertension. Evaluation includes body composition and anthropometric assessment, metabolic laboratory tests, dietary pattern review, activity profiling, and psychological readiness screening. Treatment combines structured nutrition planning, behavior modification, supervised exercise, pharmacotherapy when indicated, and bariatric surgery evaluation for eligible patients. We provide long-term obesity care with regular monitoring, relapse prevention, and multidisciplinary management for sustainable health improvement.",
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
      "Physiotherapy and Rehabilitation focuses on restoring movement, reducing pain, and improving function after injury, surgery, neurologic illness, or chronic musculoskeletal disease. Our rehabilitation services manage acute sprains, postoperative stiffness, and chronic back, neck, and joint conditions, as well as gait or balance impairment. Assessment includes posture and movement analysis, strength and range-of-motion testing, pain evaluation, and functional goal setting. Treatment may include manual therapy, therapeutic exercise, electrotherapy, neuromuscular retraining, and home program guidance. We deliver goal-oriented rehabilitative care with progress monitoring, prevention education, and multidisciplinary coordination to support safe recovery and long-term independence.",
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
