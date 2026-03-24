export type NewsArticle = {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  publishedOn: string;
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    id: "preventive-health-checkups",
    image: "/images/news/news-1.jpg",
    category: "Preventive Care",
    title: "Why Regular Health Checkups Matter",
    excerpt:
      "Early screening helps detect issues before symptoms worsen and supports better long-term outcomes.",
    author: "Dr. Anita Jackson",
    publishedOn: "2026-01-12",
    content: [
      "Preventive health checkups are one of the most reliable ways to maintain long-term wellness. Regular assessments help identify early warning signs for conditions such as hypertension, diabetes, and heart disease.",
      "At Dr. Mate Hospital, routine screening plans are designed around age, risk profile, and personal medical history. This allows doctors to recommend timely interventions and lifestyle adjustments.",
      "Patients who follow periodic checkups often benefit from earlier treatment, reduced complications, and improved quality of life.",
    ],
  },
  {
    id: "heart-healthy-lifestyle",
    image: "/images/news/news-2.jpg",
    category: "Cardiology",
    title: "5 Daily Habits for a Healthier Heart",
    excerpt:
      "Small lifestyle changes can significantly reduce cardiovascular risk over time.",
    author: "Dr. Rohan Mehta",
    publishedOn: "2026-01-19",
    content: [
      "Heart health is influenced by everyday choices. A consistent sleep routine, balanced diet, and regular physical activity are foundational to reducing cardiac risk.",
      "Reducing processed food intake, limiting salt, and maintaining healthy blood pressure levels are key preventive actions. Regular stress-management practices can also protect cardiovascular function.",
      "Consulting specialists for periodic cardiac evaluation is especially important for patients with family history or pre-existing risk factors.",
    ],
  },
  {
    id: "child-immunity-guide",
    image: "/images/news/news-3.jpg",
    category: "Pediatrics",
    title: "Building Strong Immunity in Children",
    excerpt:
      "Nutrition, sleep, hygiene, and timely vaccinations play a major role in child immunity.",
    author: "Dr. Neha Kulkarni",
    publishedOn: "2026-01-28",
    content: [
      "A child’s immune health depends on a combination of factors, including nutrition, regular physical play, and proper sleep patterns.",
      "Parents should prioritize vaccination schedules, balanced meals with fruits and proteins, and daily hydration habits. Hand hygiene and regular pediatric checkups are equally important.",
      "If recurrent infections are observed, early consultation can help identify any underlying nutritional or medical concerns.",
    ],
  },
  {
    id: "orthopedic-pain-management",
    image: "/images/news/news-4.jpg",
    category: "Orthopedics",
    title: "Managing Joint Pain Without Delay",
    excerpt:
      "Early orthopedic consultation improves mobility outcomes and reduces chronic pain progression.",
    author: "Dr. Kavita Shah",
    publishedOn: "2026-02-03",
    content: [
      "Joint discomfort is often ignored until pain begins affecting routine movement. Early diagnosis is critical for managing inflammation and preventing structural damage.",
      "Non-surgical care, physiotherapy, and guided exercises can significantly improve function in many cases. Advanced imaging and specialist review help personalize treatment.",
      "If pain persists for several weeks, timely assessment can avoid long-term mobility complications.",
    ],
  },
  {
    id: "women-health-screening",
    image: "/images/news/news-5.jpg",
    category: "Gynecology",
    title: "Women’s Health Screening: What to Track",
    excerpt:
      "Routine gynecologic screening supports early diagnosis and safer long-term reproductive health.",
    author: "Dr. Priya Nair",
    publishedOn: "2026-02-10",
    content: [
      "Women’s health needs change across life stages, making regular screening essential. Menstrual irregularity, hormonal concerns, and reproductive wellness should be reviewed periodically.",
      "Preventive gynecology includes cervical health screening, PCOS evaluation, and menopause-related monitoring where applicable.",
      "Consistent follow-up helps ensure early diagnosis, proactive treatment, and better reproductive health outcomes.",
    ],
  },
  {
    id: "emergency-care-awareness",
    image: "/images/news/news-6.jpg",
    category: "Emergency Care",
    title: "When to Visit Emergency Immediately",
    excerpt:
      "Recognizing red-flag symptoms early can be life-saving in emergency situations.",
    author: "Dr. Sandeep Rao",
    publishedOn: "2026-02-18",
    content: [
      "Symptoms such as chest pain, severe breathlessness, sudden weakness, uncontrolled bleeding, or high fever with confusion require urgent medical attention.",
      "Immediate response in emergency medicine improves survival and recovery, especially for heart attacks, strokes, and major trauma.",
      "Dr. Mate Hospital’s emergency unit is operational 24/7 with rapid triage protocols for critical cases.",
    ],
  },
  {
    id: "diagnostic-tests-explained",
    image: "/images/news/news-7.jpg",
    category: "Diagnostics",
    title: "Understanding Common Diagnostic Tests",
    excerpt:
      "Know why doctors prescribe blood work, scans, and monitoring tests during treatment.",
    author: "Dr. Karan Joshi",
    publishedOn: "2026-02-25",
    content: [
      "Diagnostic tests are critical for accurate clinical decisions. They help determine disease severity, monitor progression, and evaluate treatment response.",
      "Routine blood panels, imaging scans, and specialized diagnostics are selected based on symptoms and medical history.",
      "Patients are encouraged to understand test purpose and discuss results with treating doctors for informed care planning.",
    ],
  },
  {
    id: "post-consultation-care-tips",
    image: "/images/news/news-8.jpg",
    category: "Self Care",
    title: "Post-Consultation Care: What Patients Should Follow",
    excerpt:
      "Following discharge and medication instructions improves recovery and reduces readmissions.",
    author: "Dr. Anita Jackson",
    publishedOn: "2026-03-04",
    content: [
      "Care after consultation is as important as diagnosis itself. Medication adherence, hydration, rest, and scheduled follow-ups directly impact recovery speed.",
      "Patients should keep track of warning signs and report symptom changes promptly. Maintaining a written care plan helps avoid missed doses and confusion.",
      "For chronic conditions, continuity of care through regular review visits is essential for stable long-term outcomes.",
    ],
  },
];

