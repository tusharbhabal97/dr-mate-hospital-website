"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { appointmentDepartments, appointmentSlots } from "@/lib/appointments";

type PrefillData = {
  name?: string;
  phone?: string;
  email?: string;
};

type ContactProps = {
  prefillData?: PrefillData;
  redirectOnSuccessTo?: string;
};

export default function Contact({ prefillData, redirectOnSuccessTo }: ContactProps) {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState(() => ({
    name: prefillData?.name ?? "",
    phone: prefillData?.phone ?? "",
    email: prefillData?.email ?? "",
    department: "",
    date: "",
    slot: "",
    message: "",
  }));
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!prefillData) return;
    setFormData((prev) => ({
      ...prev,
      name: prev.name || prefillData.name || "",
      phone: prev.phone || prefillData.phone || "",
      email: prev.email || prefillData.email || "",
    }));
  }, [prefillData?.name, prefillData?.phone, prefillData?.email]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.status === 401) {
        const nextPath = typeof window !== "undefined" ? window.location.pathname : "/book-appointment";
        router.push(`/auth?next=${encodeURIComponent(nextPath)}`);
        return;
      }
      if (!res.ok) {
        throw new Error(data?.error || "Failed to save appointment.");
      }

      if (redirectOnSuccessTo) {
        router.push(redirectOnSuccessTo);
        router.refresh();
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: prefillData?.name ?? "",
          phone: prefillData?.phone ?? "",
          email: prefillData?.email ?? "",
          department: "",
          date: "",
          slot: "",
          message: "",
        });
      }, 4000);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Unable to submit appointment.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-16 lg:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto">
            Fill out the form below and our team will contact you within 30 minutes to
            confirm your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-6 reveal-left">
            {/* Contact Cards */}
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                ),
                title: "Phone",
                lines: ["+91 20-1234-5678", "+91 98765-43210"],
                tag: "24/7 Available",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                ),
                title: "Email",
                lines: ["info@drmatehospital.com", "emergency@drmatehospital.com"],
                tag: "Reply in 1 hour",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                ),
                title: "Address",
                lines: [
                  "Dr. Mate Hospital, Narayangaon Taluka, behind Hotel Tukson,",
                  "opposite ST (Bus) stand, Narayangaon, Junnar, Maharashtra 410504",
                ],
                tag: "Narayangaon",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 bg-white card rounded-xl p-5 border border-gray-100 shadow-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  {card.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-dark text-sm">{card.title}</p>
                    <span className="text-[10px] bg-primary/8 text-primary font-bold px-2 py-0.5 rounded-full">
                      {card.tag}
                    </span>
                  </div>
                  {card.lines.map((line) => (
                    <p key={line} className="text-muted text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-card h-44 relative bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.803484733309!2d73.984482!3d19.111966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd3b98625bfc81%3A0xca23d00a0d913a0b!2sDr.%20Mate%20Hospital%2C%20Narayangaon!5e0!3m2!1sen!2sin!4v1774189439654!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Mate Hospital Location"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="bg-white card rounded-xl shadow-card border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#10B981">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-dark mb-2">
                    Appointment Requested!
                  </h3>
                  <p className="text-muted text-sm">
                    We'll call you within 30 minutes to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-xl text-dark mb-6">
                    Book Your Appointment
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-dark mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-dark placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-dark mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 XXXXX"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-dark placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-dark placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-dark mb-1.5">
                        Department *
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select Department</option>
                        {appointmentDepartments.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-dark mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark mb-1.5">
                      Preferred Slot *
                    </label>
                    <select
                      name="slot"
                      value={formData.slot}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Slot</option>
                      {appointmentSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark mb-1.5">
                      Message / Symptoms
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your symptoms or reason for visit..."
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-dark placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving Appointment..." : "Confirm Appointment Request"}
                  </button>

                  {submitError && (
                    <p className="text-center text-xs text-red-600">{submitError}</p>
                  )}

                  <p className="text-center text-xs text-muted">
                    Our team will call you within 30 minutes to confirm.
                    Your data is 100% secure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
