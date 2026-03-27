import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";
import HeroInfoCards from "@/components/layouts/HeroInfoCards";

const contactHeroCards = [
  {
    title: "Easy",
    subtitle: "Appointment Booking",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v13a3 3 0 003 3h12a3 3 0 003-3V6a2 2 0 00-2-2zm0 15a1 1 0 01-1 1H6a1 1 0 01-1-1V10h14v9zm-9-5h4v4h-4v-4z" />
      </svg>
    ),
  },
  {
    title: "Quick",
    subtitle: "Response Support",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 5.58 2 10c0 2.39 1.32 4.53 3.41 6 .1.07.16.18.16.3V21l4.11-2.06c.09-.05.2-.06.3-.03.65.09 1.33.14 2.02.14 5.52 0 10-3.58 10-8s-4.48-9-10-9zm1 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
      </svg>
    ),
  },
  {
    title: "Central",
    subtitle: "Pune Location",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
      </svg>
    ),
  },
  {
    title: "24/7",
    subtitle: "Assistance",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1l3 6 6 .87-4.5 4.38L17.56 19 12 16.27 6.44 19l1.06-6.75L3 7.87 9 7l3-6z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Contact"
          title="Get in Touch with Dr. Mate Hospital"
          subtitle="We are here to help you with appointments, referrals, and general inquiries. Reach out anytime."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          actions={<HeroInfoCards items={contactHeroCards} />}
        />
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr]">
        <section className="bg-white rounded-3xl border border-slate-100 p-7 shadow-card">
          <h2 className="font-display font-bold text-2xl text-dark mb-4">
            Contact Information
          </h2>
          <div className="space-y-4 text-sm text-muted">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Phone
              </p>
              <p className="text-dark font-semibold">+91 20-1234-5678</p>
              <p className="text-xs">24/7 Emergency: +91 1800-MEDICARE</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Email
              </p>
              <p className="text-dark font-semibold">care@drmatehospital.com</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Address
              </p>
              <p className="text-dark font-semibold">
                Dr. Mate Hospital, Sinhgad Road, Pune, Maharashtra
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-slate-100">
            <iframe
              title="Dr. Mate Hospital Map"
              src="https://www.google.com/maps?q=Pune%2C%20Maharashtra&output=embed"
              className="w-full h-64"
              loading="lazy"
            />
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-100 p-7 shadow-card">
          <h2 className="font-display font-bold text-2xl text-dark mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-dark mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
                placeholder="+91 98xxxxxx"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
                placeholder="How can we help you"
              />
            </div>
            <button
              type="submit"
              className="btn-primary text-sm px-6 py-3 rounded-xl"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
