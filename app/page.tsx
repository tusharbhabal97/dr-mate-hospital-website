import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiseasesPreview from "@/components/DiseasesPreview";
import Services from "@/components/Services";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import AppointmentProcess from "@/components/AppointmentProcess";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WelcomeSection from "@/components/WelcomeSection";
import IntroVideoSection from "@/components/IntroVideoSection";
import DoctorsSection from "@/components/DoctorsSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <DiseasesPreview />
      <WelcomeSection />
      <IntroVideoSection />
      <DoctorsSection />
      <NewsSection />
      <Services />
      <About />
      <Facilities />
      <AppointmentProcess />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating Emergency Button */}
      <a
        href="tel:+911800MEDICARE"
        className="fixed bottom-6 right-6 z-50 bg-medical hover:bg-medical-dark text-white font-bold text-xs px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Emergency Hotline"
      >
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        Emergency
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="group-hover:rotate-12 transition-transform"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>
    </main>
  );
}
