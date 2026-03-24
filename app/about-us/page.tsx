import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemedHeroSection from "@/components/layouts/ThemedHeroSection";

const highlights = [
  "NABH Accredited Multi-Specialty Hospital",
  "500+ Doctors and Clinical Experts",
  "Advanced Diagnostics and Critical Care",
  "Patient-First, Evidence-Based Treatment",
];

const historyMilestones = [
  { year: "1980", text: "Dr. Mate Hospital founded in Pune with a core focus on ethical and affordable care." },
  { year: "2008", text: "Expanded into a multi-specialty facility with emergency and ICU capabilities." },
  { year: "2016", text: "Introduced advanced diagnostics and specialist-led treatment pathways." },
  { year: "2024", text: "Scaled integrated care teams and digital-first patient support workflows." },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />

      <ThemedHeroSection className="pt-24 pb-20">
        <div className="relative max-w-6xl mx-auto">
          <nav className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-sm shadow-card backdrop-blur-md">
            <Link href="/" className="text-primary/70 hover:text-primary transition-colors">
              Home
            </Link>
            <svg
              className="w-4 h-4 text-primary/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-primary font-semibold">About Us</span>
          </nav>

          <div className="grid lg:grid-cols-[1.25fr,1fr] gap-8 items-end">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Dr. Mate Hospital
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-3 leading-tight">
                About Us
              </h1>
              <p className="text-muted text-lg max-w-3xl">
                Trusted multi-specialty care in Pune with a strong foundation in
                clinical excellence, compassion, and long-term patient outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[1.4rem] bg-white/85 border border-primary/25 backdrop-blur-md p-4 translate-y-2 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]">
                <p className="text-2xl font-display font-extrabold text-primary">25+</p>
                <p className="text-muted text-xs mt-1">Years of Service</p>
              </div>
              <div className="rounded-[1.8rem] bg-white/85 border border-primary/25 backdrop-blur-md p-4 -translate-y-1 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]">
                <p className="text-2xl font-display font-extrabold text-primary">500+</p>
                <p className="text-muted text-xs mt-1">Clinical Experts</p>
              </div>
              <div className="rounded-[1.8rem] bg-white/85 border border-primary/25 backdrop-blur-md p-4 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]">
                <p className="text-2xl font-display font-extrabold text-primary">50K+</p>
                <p className="text-muted text-xs mt-1">Patients Served</p>
              </div>
              <div className="rounded-[1.4rem] bg-white/85 border border-primary/25 backdrop-blur-md p-4 -translate-y-1 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]">
                <p className="text-2xl font-display font-extrabold text-primary">24/7</p>
                <p className="text-muted text-xs mt-1">Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </ThemedHeroSection>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-6">
          <article className="lg:col-span-8 relative overflow-hidden bg-white rounded-[2rem] border border-slate-100 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <span className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-primary/10" />
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
              About Hospital
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-2xl">
              Dr. Mate Hospital is a multi-specialty healthcare center built to
              deliver high-quality treatment through coordinated specialist care.
              Our model combines emergency readiness, advanced diagnostics, and
              personalized treatment plans to support every stage of patient care.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-[1rem] border border-slate-100 bg-slate-50/70 px-3 py-2.5"
                >
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/80 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-[#1a237e] rounded-[2rem] p-6 text-white relative overflow-hidden">
            <span className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/10" />
            <h2 className="font-display font-bold text-2xl mb-3">Genesis</h2>
            <p className="text-white/75 text-sm leading-relaxed">
              The hospital began with a simple goal: provide dependable
              specialist care without compromising dignity, safety, or
              transparency. This founding principle still drives our clinical
              protocols, team culture, and patient communication today.
            </p>
          </article>

          <article className="lg:col-span-5 bg-white rounded-[2rem] border border-slate-100 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-5">
              History
            </h2>
            <div className="space-y-5">
              {historyMilestones.map((item, index) => (
                <div key={item.year} className="relative flex gap-4">
                  {index !== historyMilestones.length - 1 && (
                    <span className="absolute left-[15px] top-7 h-[calc(100%+6px)] w-px bg-slate-200" />
                  )}
                  <span className="relative w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-display font-extrabold flex items-center justify-center flex-shrink-0">
                    {item.year.slice(-2)}
                  </span>
                  <div>
                    <p className="font-display font-bold text-primary text-sm mb-1">
                      {item.year}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="lg:col-span-7 relative overflow-hidden bg-white rounded-[2rem] border border-slate-100 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <span className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/5 rounded-bl-[3rem]" />
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
              Success Story
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
              Over the years, Dr. Mate Hospital has grown into a trusted center
              for complex care across cardiology, orthopedics, pediatrics,
              neurology, and emergency medicine. Our success is measured by
              consistent patient trust, clinical outcomes, and long-term care
              relationships.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                Trusted Care
              </span>
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                Proven Outcomes
              </span>
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700">
                Patient First
              </span>
            </div>
          </article>
        </div>

        <div className="mt-8">
          <article className="bg-white rounded-[2rem] border border-slate-100 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-5">
              Founding Team Members
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50/70 p-4">
                <div className="relative h-64 rounded-[1.1rem] overflow-hidden mb-4">
                  <Image
                    src="/images/doctors/doctor-1.jpg"
                    alt="Dr. Swapnil D. Mate"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Dr. Swapnil D. Mate
                </h3>
                <p className="text-slate-600 text-sm mt-1">Founding Team Member</p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50/70 p-4">
                <div className="relative h-64 rounded-[1.1rem] overflow-hidden mb-4">
                  <Image
                    src="/images/doctors/doctor-2.jpg"
                    alt="Dr. Ajay D. Mate"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Dr. Ajay D. Mate
                </h3>
                <p className="text-slate-600 text-sm mt-1">Founding Team Member</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
