import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AppointmentProcess from "@/components/AppointmentProcess";
import Footer from "@/components/Footer";
import ThemedHeroSection from "@/components/layouts/ThemedHeroSection";
import AuthClient from "./AuthClient";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";

export default function AuthPage({
  searchParams,
}: {
  searchParams?: { next?: string };
}) {
  const nextPath = searchParams?.next || "/book-appointment";
  const token = cookies().get(AUTH_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  if (session) {
    redirect(nextPath);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-surface-gradient">
      <Navbar />

      <ThemedHeroSection className="pt-28 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-sm shadow-card backdrop-blur-md">
            <Link href="/" className="text-primary/70 transition-colors hover:text-primary">
              Home
            </Link>
            <span className="text-primary/40">›</span>
            <span className="font-semibold text-primary">Patient Portal</span>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[1.05fr,0.95fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Secure Access
              </p>
              <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-dark md:text-5xl">
                Patient Login & Registration
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                Access your appointments, visit updates, and care journey with a
                secure OTP-based sign in.
              </p>

              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  { value: "10k+", label: "Patients Helped" },
                  { value: "24/7", label: "Support Desk" },
                  { value: "2-Step", label: "Secure OTP Login" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-primary/25 bg-white/85 px-4 py-4 shadow-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] backdrop-blur-sm"
                  >
                    <p className="font-display text-2xl font-bold text-primary">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-2">
              <AuthClient nextPath={nextPath} />
            </div>
          </div>
        </div>
      </ThemedHeroSection>

      <section className="relative z-20 px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-7">
              <h2 className="font-display text-2xl font-bold text-dark">
                Better Patient Experience
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted">
                Use your account for a faster, smoother experience each time you
                visit Dr. Mate Hospital.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Book and track upcoming appointments",
                  "Secure account verification with OTP",
                  "One account for all future visits",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-healing" />
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                Privacy Note
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Your login is secured and we only use your details for
                appointment and care communication.
              </p>
            </div>
          </aside>

          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-card sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">
              Need Immediate Help?
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold">
              Contact Patient Support
            </h3>
            <p className="mt-2 text-sm text-white/80">
              If you are unable to login or receive OTP, call our support desk.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="tel:+911800MEDICARE"
                className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-slate-100"
              >
                Call 1800-MEDICARE
              </a>
              <a
                href="mailto:care@drmatehospital.com"
                className="rounded-xl border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                care@drmatehospital.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <AppointmentProcess />
      <Footer />
    </main>
  );
}
