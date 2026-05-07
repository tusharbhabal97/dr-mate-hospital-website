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

const categorySectionOverviewBySlug: Record<string, string> = {
  "emergency-critical-care":
    "Our Emergency and Critical Care service provides immediate assessment, stabilization, and continuous monitoring for patients with severe illness or injury. A trained triage team prioritizes life-threatening conditions such as stroke, sepsis, respiratory failure, and major trauma to reduce treatment delays. Critical care specialists coordinate ventilatory support, hemodynamic management, and rapid diagnostics in real time. The unit follows evidence-based emergency protocols, infection-control standards, and structured handovers, ensuring safe transition from emergency admission to ICU, operation theatre, or specialty wards for uninterrupted, high-quality care.",
  "cardiac-monitoring":
    "Cardiac and Monitoring services provide comprehensive evaluation of heart rhythm, structure, and functional capacity for patients with chest discomfort, breathlessness, palpitations, syncope, hypertension, or known cardiac disease. Using standardized diagnostic pathways, clinicians combine ECG, echocardiography, stress testing, and clinical risk assessment to identify ischemia, conduction abnormalities, valvular disorders, and ventricular dysfunction. Reports are interpreted by experienced physicians and correlated with symptoms, laboratory findings, and comorbidities to guide treatment planning. The focus is early detection, evidence-based intervention, and reliable follow-up for prevention of acute cardiac events and long-term complications.",
  "diagnostics-imaging":
    "Diagnostics and Imaging services provide timely, high-quality radiological evaluation across emergency, outpatient, and inpatient care pathways. Advanced modalities are used to assess trauma, neurological symptoms, abdominal conditions, vascular disease, infections, and oncologic concerns with precision and safety. Imaging protocols are selected according to clinical indication to optimize diagnostic yield while minimizing unnecessary exposure. Radiologists deliver structured, clinically relevant reports and collaborate with treating teams for urgent communication of critical findings. This integrated approach supports early diagnosis, treatment planning, procedural guidance, and objective monitoring of disease progression or therapeutic response.",
  "laboratory-services":
    "Laboratory Services provide essential diagnostic support through accurate analysis of blood, urine, body fluids, and tissue samples. Our facility performs routine and specialized testing across hematology, biochemistry, microbiology, immunology, and pathology to assist early diagnosis and risk assessment. Standardized pre-analytical, analytical, and post-analytical workflows are followed to maintain specimen integrity, precision, and turnaround reliability. Results are reviewed with quality-control checkpoints and communicated in clinically actionable formats, enabling physicians to monitor disease progression, evaluate treatment response, and plan preventive or therapeutic interventions with confidence.",
  "surgical-procedures":
    "Surgical and Procedures services provide coordinated care from pre-operative assessment to post-operative recovery for a broad range of elective and emergency conditions. Our team follows evidence-based perioperative protocols covering anesthesia safety, sterile technique, infection prevention, pain control, and complication surveillance. Depending on indication, treatment may include minimally invasive interventions or conventional open procedures to achieve the best clinical outcome. Surgeons, anesthetists, nurses, and rehabilitation professionals work together to ensure informed planning, procedural precision, and continuity of care, helping patients recover safely with clear guidance at every stage.",
  "urology-renal-care":
    "Urology and Renal Care services address disorders of the urinary tract and kidney function through integrated diagnostics, procedural support, and long-term management. Care pathways cover recurrent urinary symptoms, bladder dysfunction, obstructive conditions, renal impairment, and chronic kidney disease progression. Functional tests and imaging are combined with specialist consultation to define diagnosis and personalize treatment. For advanced renal failure, dialysis support is provided with strict infection-control and hemodynamic monitoring standards. Ongoing follow-up emphasizes symptom control, complication prevention, medication adherence, and coordinated nephrology-urology care to protect quality of life.",
  "specialized-care":
    "Specialized Care brings together women's health, pediatric-neonatal services, and rehabilitation support to address age- and condition-specific clinical needs under one coordinated framework. Multidisciplinary teams provide preventive, acute, and follow-up care with emphasis on early diagnosis, safety, and continuity. Pathways include maternal health monitoring, newborn and child assessment, developmental support, and structured physiotherapy for recovery after illness or surgery. Care plans are individualized, culturally sensitive, and clearly explained to families. This integrated model helps improve outcomes, reduces fragmentation, and supports long-term wellness across different life stages.",
  "cardiology-support":
    "Cardiology Support services provide coordinated diagnostic and interventional pathways for patients with suspected or established coronary and structural heart disease. Clinical evaluation is integrated with non-invasive testing and catheter-based procedures to enable timely, evidence-driven treatment decisions. The team is equipped to manage acute coronary presentations, complex risk profiles, and post-procedure monitoring with standardized safety protocols. Close collaboration between cardiologists, critical care specialists, nurses, and rehabilitation staff ensures continuity from diagnosis through recovery. This comprehensive approach supports improved cardiac outcomes, complication prevention, and long-term secondary prevention planning.",
};

const serviceSectionOverviewBySlug: Record<string, string> = {
  "emergency-critical-care/emergency-trauma-care":
    "Emergency and Trauma Care delivers rapid medical attention for road traffic injuries, fractures, head trauma, burns, poisoning, acute chest pain, and sudden neurological symptoms. Patients are triaged on arrival, resuscitated when needed, and stabilized using standardized trauma and emergency protocols. Bedside imaging, point-of-care testing, and specialist consultation are integrated to accelerate diagnosis and treatment decisions. Our team coordinates immediate pain control, hemorrhage management, airway protection, and referral to surgery or critical care, helping improve outcomes during the most time-sensitive and clinically complex situations.",
  "emergency-critical-care/icu-iccu":
    "ICU and ICCU services provide high-dependency care for critically ill patients requiring minute-to-minute observation and organ-support therapies. The unit manages severe infections, shock, respiratory compromise, post-operative instability, acute coronary syndromes, and rhythm disturbances using advanced monitoring systems. Intensivists, cardiologists, nurses, and respiratory therapists collaborate on individualized treatment plans that include ventilatory support, vasoactive medications, fluid balance, and renal monitoring. Strict asepsis, early complication detection, and protocol-driven escalation help reduce risk, while regular family communication supports transparency and confidence throughout critical recovery.",
  "emergency-critical-care/ventilator":
    "Our ventilator support service manages patients with acute or chronic respiratory failure who need assisted breathing in monitored settings. Care includes invasive and non-invasive modes, oxygen titration, lung-protective ventilation strategies, and frequent blood-gas assessment to maintain adequate oxygenation and carbon dioxide clearance. Critical care physicians and respiratory therapists adjust parameters based on evolving clinical status, underlying diagnosis, and weaning readiness. The team emphasizes prevention of ventilator-associated complications through suction protocols, sedation review, and early mobilization planning, enabling safer stabilization and progressive transition to spontaneous breathing whenever possible.",
  "emergency-critical-care/defibrillator":
    "Defibrillator-enabled emergency response is essential for treating sudden cardiac arrest and life-threatening arrhythmias such as ventricular fibrillation and pulseless ventricular tachycardia. Our team follows advanced cardiac life support protocols with immediate rhythm recognition, high-quality CPR, and timely electrical defibrillation when indicated. Defibrillation support is available across emergency, ICU, and procedural areas to minimize response time during code situations. Continuous post-resuscitation monitoring, hemodynamic stabilization, and neurologic assessment are integrated after rhythm restoration, helping improve survival and recovery outcomes for critically unstable cardiac patients.",
  "emergency-critical-care/bipap":
    "BiPAP therapy offers non-invasive ventilatory support for patients with breathing difficulty due to COPD exacerbation, cardiogenic pulmonary edema, obesity hypoventilation, or selected sleep-related respiratory disorders. By delivering two levels of positive airway pressure, BiPAP reduces work of breathing, improves gas exchange, and may prevent the need for intubation in appropriate cases. Patients are closely monitored for respiratory effort, oxygen saturation, blood-gas trends, and comfort tolerance. Our clinicians regularly reassess response and escalate or de-escalate support safely, ensuring timely transition to definitive treatment and recovery-focused respiratory care.",
  "emergency-critical-care/ambulance-service":
    "Our Ambulance Service provides medically supervised transport for emergency pickups, inter-facility transfers, and planned movement of patients requiring observation en route. Vehicles are equipped with oxygen, resuscitation equipment, monitoring devices, and essential emergency medicines to maintain continuity of care during transit. Trained paramedics coordinate with emergency and specialty teams before arrival so treatment can continue without delay. The service supports trauma, cardiac, respiratory, and high-risk medical cases, with clear communication and structured handover processes that prioritize patient safety, stabilization, and rapid access to definitive hospital care.",
  "cardiac-monitoring/ecg":
    "ECG is a rapid, non-invasive test that records the heart's electrical activity and helps detect rhythm disturbances, ischemic changes, conduction defects, and chamber strain patterns. It is commonly used for evaluation of chest pain, palpitations, dizziness, breathlessness, and pre-operative cardiac screening. Our technicians ensure proper lead placement and high-quality tracings, while physicians provide clinical interpretation in the context of symptoms and risk factors. ECG findings support immediate triage decisions in emergencies and establish important baselines for ongoing management, medication monitoring, and follow-up cardiac assessment.",
  "cardiac-monitoring/2d-echo":
    "2D Echocardiography uses ultrasound to visualize cardiac chambers, wall motion, ejection fraction, valvular morphology, and pericardial status in real time. It is essential for diagnosing heart failure, valvular heart disease, cardiomyopathies, congenital abnormalities, and complications after myocardial infarction. The examination is painless, radiation-free, and suitable for repeated follow-up when monitoring disease progression or treatment response. Our cardiology team correlates echo findings with clinical examination and other tests to provide accurate functional assessment, risk stratification, and individualized treatment planning for both acute and chronic cardiovascular conditions.",
  "cardiac-monitoring/tmt":
    "TMT evaluates cardiac response to graded physical exertion and is used to assess exercise tolerance, inducible ischemia, and functional capacity in selected patients. Continuous ECG tracing, blood pressure monitoring, and symptom assessment are performed throughout protocol-driven treadmill stages under medical supervision. The test helps investigate exertional chest pain, unexplained shortness of breath, and known coronary artery disease, and may support fitness assessment before rehabilitation planning. Interpretation considers age, baseline ECG, comorbidities, and medication profile to provide clinically meaningful guidance for further diagnostics, lifestyle modification, and treatment.",
  "diagnostics-imaging/ct-scan":
    "CT Scan provides fast, cross-sectional imaging that is especially valuable for trauma, stroke evaluation, thoracic disease, abdominal emergencies, and complex anatomical assessment. Multidetector acquisition enables high-resolution visualization of bones, soft tissues, lungs, and blood vessels, with contrast enhancement when clinically indicated. Our team follows strict screening and safety protocols, including renal-risk assessment and contrast precautions, to ensure appropriate use. Radiologists deliver comprehensive interpretation with urgent escalation of critical abnormalities, helping clinicians make timely decisions for surgery, intensive care, interventional procedures, or targeted medical treatment.",
  "diagnostics-imaging/usg-doppler":
    "USG and Doppler studies offer real-time, radiation-free imaging for abdominal organs, pelvic pathology, obstetric evaluation, thyroid, soft tissue lesions, and vascular blood-flow assessment. Doppler analysis is particularly useful for detecting arterial narrowing, venous thrombosis, and perfusion abnormalities. These examinations are safe across age groups and can be repeated for serial monitoring when clinically required. Sonologists perform focused protocols based on symptoms and referrals, while reports emphasize actionable findings for diagnosis and follow-up. The modality supports bedside decision-making and plays a key role in preventive, acute, and chronic care pathways.",
  "diagnostics-imaging/digital-x-ray":
    "Digital X-Ray delivers quick, high-clarity radiographic imaging for fractures, joint disorders, chest infections, pleural disease, spinal conditions, and device-position verification. Compared with older film systems, digital workflow improves image processing, reduces repeat exposures, and enables faster reporting for urgent clinical decisions. Examinations are performed by trained radiographers using positioning protocols that improve diagnostic accuracy and patient comfort. Radiologists review images in conjunction with clinical history to provide precise interpretation, supporting emergency care, routine screening, and treatment follow-up across multiple specialties.",
  "diagnostics-imaging/mammography":
    "Mammography is a dedicated breast imaging modality used for early detection of breast cancer, evaluation of palpable abnormalities, and follow-up of suspicious lesions. High-resolution digital techniques help identify microcalcifications, architectural distortion, and subtle masses that may not be clinically apparent. Examinations are performed with attention to positioning quality and patient comfort to maximize diagnostic reliability. Reports are structured using standardized breast imaging terminology, and suspicious findings are correlated with ultrasound or biopsy recommendations when indicated. Early, accurate detection through mammography significantly improves treatment options and long-term outcomes.",
  "laboratory-services/laboratory-pathology":
    "Laboratory and Pathology services play a central role in diagnosis, prognosis, and therapeutic monitoring across acute and chronic conditions. We offer a broad test menu including complete blood profiles, metabolic panels, cultures, hormonal assays, cytology, and histopathology. Experienced pathologists and technologists follow stringent internal and external quality standards to ensure analytical accuracy and reproducibility. Timely reporting supports rapid clinical decision-making in emergency and routine practice. Correlation between laboratory findings and patient symptoms helps clinicians confirm diagnoses early, track response to treatment, and optimize individualized care plans safely and effectively.",
  "surgical-procedures/operation-theatre":
    "Operation Theatre services are designed to support safe, efficient, and sterile surgical care for both planned and urgent procedures. Theatres are equipped for multidisciplinary surgeries with anesthesia workstations, patient monitoring, and emergency resuscitation readiness. Strict aseptic protocols, instrument traceability, and surgical safety checklists are implemented to reduce infection and perioperative risk. Coordination between surgeons, anesthesiologists, nursing teams, and recovery staff ensures smooth case flow from induction to post-anesthesia transfer. This structured environment enables precise operative care, timely intervention, and improved outcomes across general and specialty surgical disciplines.",
  "surgical-procedures/endoscopy":
    "Endoscopy enables direct visualization of the gastrointestinal tract to diagnose and manage conditions such as ulcers, bleeding, inflammation, strictures, and early neoplastic changes. Using flexible, high-definition scopes, specialists can perform biopsy sampling, foreign-body retrieval, polyp removal, and selected therapeutic interventions during the same session when indicated. Procedures are conducted with appropriate sedation, cardiorespiratory monitoring, and infection-control standards to maintain patient safety and comfort. Detailed findings are documented with clear follow-up recommendations, allowing earlier diagnosis, reduced need for exploratory surgery, and targeted treatment planning in digestive disorders.",
  "surgical-procedures/laparoscopy":
    "Laparoscopy is a minimally invasive surgical technique performed through small incisions using a camera-guided system to treat selected abdominal and pelvic conditions. It is commonly used in gallbladder disease, appendicitis, hernia repair, gynecologic procedures, and diagnostic evaluation of unexplained symptoms. Compared with conventional open surgery, laparoscopy may reduce blood loss, postoperative pain, wound complications, and hospital stay while supporting faster mobilization. Surgical candidacy is assessed carefully based on clinical status and procedural complexity. Our perioperative team provides complete pre-operative counseling and post-operative follow-up for safe recovery.",
  "surgical-procedures/laser-surgery":
    "Laser Surgery uses focused energy delivery for precise tissue treatment in carefully selected clinical indications across surgical specialties. The technique can improve operative accuracy, reduce collateral tissue trauma, and support better hemostasis compared with conventional approaches in suitable cases. Depending on condition, laser-assisted procedures may shorten recovery time and lower postoperative discomfort. Patient selection, safety checks, and informed consent are emphasized because outcomes depend on pathology, anatomy, and procedural goals. Our specialists integrate laser technology within standardized surgical protocols to ensure controlled intervention, complication prevention, and evidence-based post-procedure monitoring.",
  "surgical-procedures/eswl-lithotripsy":
    "ESWL Lithotripsy is a non-invasive treatment for selected kidney and upper ureteric stones, using externally generated shockwaves to fragment calculi into passable particles. The procedure is typically performed without surgical incision and is guided by imaging to target stone location accurately. Suitability depends on stone size, composition, anatomy, and clinical symptoms, with pre-procedure evaluation to optimize success rates. Post-treatment follow-up includes hydration advice, pain management, and imaging review for fragment clearance. ESWL can reduce the need for invasive surgery while providing effective stone management in appropriate patients.",
  "urology-renal-care/urodynamic-study":
    "Urodynamic Study is a specialized evaluation of bladder storage and emptying function, used to investigate urinary incontinence, urgency, retention, neurogenic bladder, and complex lower urinary tract symptoms. The test measures bladder pressure, compliance, sensation, detrusor activity, and coordination between bladder and sphincter during filling and voiding phases. Findings help distinguish functional causes from obstruction and guide treatment choices such as behavioral therapy, medication, catheter strategies, or surgery. Procedures are performed in a controlled setting with clear patient instruction and interpretation by trained specialists for accurate, clinically useful decision support.",
  "urology-renal-care/uroflowmetry":
    "Uroflowmetry is a simple, non-invasive test that measures urine flow rate and voided volume to evaluate lower urinary tract function. It is helpful in men and women with weak stream, hesitancy, incomplete emptying, frequency, or suspected outlet obstruction. The test provides objective parameters such as peak flow and flow pattern, which are interpreted alongside symptom history, examination, and residual urine assessment. Because it is quick and repeatable, uroflowmetry is valuable for baseline evaluation and for monitoring response to medical or procedural treatment in chronic voiding disorders.",
  "urology-renal-care/dialysis-unit":
    "The Dialysis Unit provides renal replacement therapy for patients with acute kidney injury and chronic kidney disease requiring hemodialysis support. Treatment sessions are delivered by trained nephrology teams using standardized protocols for vascular access care, ultrafiltration control, anticoagulation safety, and infection prevention. Continuous monitoring of blood pressure, fluid balance, electrolytes, and treatment tolerance helps reduce intradialytic complications. Individualized dialysis prescriptions are aligned with laboratory trends and clinical goals, while counseling on diet, medication, and access maintenance supports long-term disease management and quality-of-life improvement.",
  "specialized-care/pediatric-care-nicu":
    "Pediatric Care and NICU services provide comprehensive management for newborns, infants, children, and adolescents, including routine illness care and high-acuity neonatal support. The unit addresses prematurity, low birth weight, neonatal jaundice, sepsis risk, respiratory distress, feeding difficulties, and pediatric infections with evidence-based protocols. Continuous monitoring, thermoregulation, nutrition planning, and developmental support are integrated into daily care. Pediatricians, neonatologists, nurses, and allied professionals collaborate closely with families, ensuring clear communication and safe transitions from intensive care to home follow-up for sustained growth and recovery.",
  "specialized-care/gynecology-obstetrics":
    "Gynecology and Obstetrics services cover preventive women's health, menstrual and hormonal disorders, fertility-related evaluation, antenatal supervision, and safe childbirth management. Care includes screening, ultrasound-guided pregnancy monitoring, high-risk obstetric assessment, labor-room readiness, and postnatal follow-up for mother and newborn. Clinicians also manage gynecologic infections, fibroids, ovarian conditions, and menopause concerns with individualized treatment options. Emphasis is placed on respectful communication, informed decision-making, and maternal safety protocols. Coordinated multidisciplinary support ensures timely intervention and continuity of care throughout reproductive and pregnancy-related health journeys.",
  "specialized-care/physiotherapy":
    "Physiotherapy services focus on restoring movement, strength, balance, and functional independence after injury, surgery, stroke, orthopedic conditions, and chronic pain syndromes. Detailed assessment identifies biomechanical limitations, pain generators, and activity restrictions to create personalized rehabilitation plans. Treatment may include therapeutic exercise, manual techniques, posture correction, gait training, pulmonary rehabilitation, and electrotherapy when indicated. Therapists monitor progress with measurable functional goals and adapt programs as recovery advances. Patient education on ergonomics and home exercises is integral, helping prevent recurrence and supporting safe return to daily activities.",
  "cardiology-support/cath-lab":
    "The Cath Lab performs image-guided cardiac catheterization procedures for diagnosis and treatment of coronary artery and selected structural heart conditions. Common services include coronary angiography, angioplasty, and stent placement, with continuous hemodynamic and rhythm monitoring throughout the procedure. Strict sterile protocols, contrast-safety screening, and emergency preparedness are maintained to reduce procedural risk. After intervention, patients receive observation, medication optimization, and follow-up planning for recovery and secondary prevention. Timely Cath Lab access is critical in acute coronary syndromes, where rapid reperfusion can significantly preserve heart muscle and improve survival.",
};

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

export function getCategorySectionOverview(categorySlug: string) {
  return categorySectionOverviewBySlug[categorySlug];
}

export function getServiceSectionOverview(categorySlug: string, serviceSlug: string) {
  return serviceSectionOverviewBySlug[`${categorySlug}/${serviceSlug}`];
}

export const allServiceCategories = categoryDefinitions.map((category) => ({
  title: category.title,
  slug: category.slug,
}));
