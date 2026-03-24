"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Mode = "login" | "register";

export default function AuthClient({ nextPath }: { nextPath: string }) {
  const router = useRouter();

  const [mode, setMode] = useState<Mode>("login");
  const [step, setStep] = useState<"details" | "otp">("details");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const title = useMemo(
    () => (mode === "login" ? "Welcome Back" : "Create Patient Account"),
    [mode],
  );

  async function handleRequestOtp(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (mode === "register" && (!fullName.trim() || !phone.trim())) {
      setError("Full name and phone are required for registration.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, fullName, phone, mode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setStep("otp");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOtp(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, fullName, phone, otp, mode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to verify OTP");
      router.replace(nextPath);
    } catch (err) {
      setError(err instanceof Error ? err.message : "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
      <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => {
            setMode("login");
            setStep("details");
            setError("");
          }}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
            mode === "login"
              ? "bg-white text-dark shadow-sm"
              : "text-muted hover:text-dark"
          }`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("register");
            setStep("details");
            setError("");
          }}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
            mode === "register"
              ? "bg-white text-dark shadow-sm"
              : "text-muted hover:text-dark"
          }`}
        >
          Register
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <div
          className={`flex h-7 min-w-7 items-center justify-center rounded-full text-xs font-bold ${
            step === "details"
              ? "bg-primary text-white"
              : "bg-primary/10 text-primary"
          }`}
        >
          1
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Details
        </p>
        <div className="h-px flex-1 bg-slate-200" />
        <div
          className={`flex h-7 min-w-7 items-center justify-center rounded-full text-xs font-bold ${
            step === "otp" ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
          2
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          OTP Verification
        </p>
      </div>

      <h2 className="mt-6 font-display text-3xl font-bold text-dark">{title}</h2>
      <p className="mt-2 text-sm text-muted">
        {step === "details"
          ? "Enter your details to receive a one-time passcode by email."
          : `We sent a 6-digit code to ${email || "your email"}.`}
      </p>

      {step === "details" ? (
        <form onSubmit={handleRequestOtp} className="mt-7 space-y-4">
          {mode === "register" && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-dark">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter full name"
                  required={mode === "register"}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-dark">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+91 98xxxxxx"
                  required={mode === "register"}
                />
              </div>
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-dark">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="you@example.com"
              required
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-primary to-healing px-4 py-3 text-sm font-semibold text-white shadow-btn transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending OTP..." : "Continue with OTP"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="mt-7 space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-dark">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
              disabled
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-dark">
              6-digit OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm tracking-[0.35em] transition focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="123456"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setStep("details")}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Edit Details
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-primary to-healing px-4 py-3 text-sm font-semibold text-white shadow-btn transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Verifying..." : "Verify & Continue"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
