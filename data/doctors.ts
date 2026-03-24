export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  departmentId: string;
  experience: string;
  bio: string;
  image: string;
  qualification: string;
  timings: string;
};

export const doctors: Doctor[] = [
  {
    id: "dr-ananya-shah",
    name: "Dr. Ananya Shah",
    specialization: "Interventional Cardiologist",
    departmentId: "cardiology",
    experience: "12+ years",
    bio: "Focuses on minimally invasive cardiac interventions with patient-first care and evidence-based protocols.",
    image: "/images/doctors/doctor-1.jpg",
    qualification: "MD, DM (Cardiology)",
    timings: "Mon-Sat · 10:00 AM - 4:00 PM",
  },
  {
    id: "dr-rahul-patil",
    name: "Dr. Rahul Patil",
    specialization: "Orthopedic Surgeon",
    departmentId: "orthopedics",
    experience: "15+ years",
    bio: "Specialist in joint replacement and sports injuries with a focus on fast recovery programs.",
    image: "/images/doctors/doctor-2.jpg",
    qualification: "MS (Orthopedics), Fellowship in Joint Replacement",
    timings: "Mon-Sat · 11:00 AM - 5:30 PM",
  },
  {
    id: "dr-meera-deshmukh",
    name: "Dr. Meera Deshmukh",
    specialization: "Consultant Pediatrician",
    departmentId: "pediatrics",
    experience: "10+ years",
    bio: "Passionate about child health with expertise in neonatal care and preventive pediatrics.",
    image: "/images/doctors/doctor-3.jpg",
    qualification: "MD (Pediatrics)",
    timings: "Mon-Sat · 9:30 AM - 2:30 PM",
  },
  {
    id: "dr-arjun-nair",
    name: "Dr. Arjun Nair",
    specialization: "Neurologist",
    departmentId: "neurology",
    experience: "13+ years",
    bio: "Provides comprehensive neuro care with a focus on stroke management and neuro-rehab planning.",
    image: "/images/doctors/doctor-4.jpg",
    qualification: "MD, DM (Neurology)",
    timings: "Mon-Fri · 12:00 PM - 6:00 PM",
  },
  {
    id: "dr-kavita-iyer",
    name: "Dr. Kavita Iyer",
    specialization: "Emergency Medicine Specialist",
    departmentId: "emergency-care",
    experience: "9+ years",
    bio: "Leads rapid-response teams with expertise in trauma stabilization and critical care pathways.",
    image: "/images/doctors/doctor-5.jpg",
    qualification: "MD (Emergency Medicine)",
    timings: "Rotational Shifts · 24/7",
  },
  {
    id: "dr-siddharth-patil",
    name: "Dr. Siddharth Patil",
    specialization: "Radiologist",
    departmentId: "diagnostics-lab",
    experience: "11+ years",
    bio: "Focused on advanced imaging and precise diagnostics for faster, accurate treatment decisions.",
    image: "/images/doctors/doctor-6.jpg",
    qualification: "MD (Radiology)",
    timings: "Mon-Sat · 10:00 AM - 4:30 PM",
  },
  {
    id: "dr-neha-vaidya",
    name: "Dr. Neha Vaidya",
    specialization: "Gynecologist",
    departmentId: "gynecology",
    experience: "14+ years",
    bio: "Expert in women's health with a focus on prenatal care and minimally invasive procedures.",
    image: "/images/doctors/doctor-2.jpg",
    qualification: "MS (Obstetrics & Gynecology)",
    timings: "Mon-Sat · 9:00 AM - 1:00 PM",
  },
  {
    id: "dr-rohan-kulkarni",
    name: "Dr. Rohan Kulkarni",
    specialization: "Dental Surgeon",
    departmentId: "dental-care",
    experience: "8+ years",
    bio: "Delivering comprehensive dental care with a patient-friendly, pain-minimized approach.",
    image: "/images/doctors/doctor-1.jpg",
    qualification: "BDS, MDS (Oral Surgery)",
    timings: "Mon-Sat · 4:00 PM - 8:00 PM",
  },
];
