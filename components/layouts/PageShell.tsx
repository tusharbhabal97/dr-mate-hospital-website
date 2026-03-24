import type { ReactNode } from "react";
import AppointmentProcess from "@/components/AppointmentProcess";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type PageShellProps = {
  hero: ReactNode;
  children: ReactNode;
};

export default function PageShell({ hero, children }: PageShellProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      {hero}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
      <AppointmentProcess />
      <Footer />
    </main>
  );
}
