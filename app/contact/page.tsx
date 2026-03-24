import PageShell from "@/components/layouts/PageShell";
import PageHero from "@/components/layouts/PageHero";

export default function ContactPage() {
  return (
    <PageShell
      hero={
        <PageHero
          eyebrow="Contact"
          title="Get in Touch with Dr. Mate Hospital"
          subtitle="We are here to help you with appointments, referrals, and general inquiries. Reach out anytime."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
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