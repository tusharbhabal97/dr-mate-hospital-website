"use client";

import { useRouter } from "next/navigation";

export default function PatientPortalLink({
  className,
}: {
  className: string;
}) {
  const router = useRouter();

  async function handleClick() {
    try {
      const res = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
      });

      const data = await res.json().catch(() => null);

      if (data?.authenticated) {
        router.push("/patient-dashboard");
        return;
      }

      if (res.status === 401) {
        alert("Please login first to access the Patient Portal.");
        router.push("/auth?next=%2Fpatient-dashboard");
        return;
      }
    } catch {
      // fall through to alert and auth redirect
    }

    // If auth check fails for non-auth reasons, let server guard decide.
    router.push("/patient-dashboard");
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      Patient Portal
    </button>
  );
}
