import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Mate Hospital | Best Multi-Specialty Hospital in Pune",
  description:
    "Dr. Mate Hospital is a leading multi-specialty hospital in Pune offering advanced healthcare services including Cardiology, Orthopedics, Pediatrics, Neurology, and 24/7 Emergency Care. Book your appointment today.",
  keywords:
    "best hospital in pune, multi specialty hospital, emergency care, best doctors near me, hospital in Maharashtra, cardiology treatment, orthopedic hospital, pediatric care, diagnostic center, ICU and emergency care, 24/7 hospital services, advanced healthcare hospital",
  openGraph: {
    title: "Dr. Mate Hospital | Best Multi-Specialty Hospital in Pune",
    description:
      "Advanced healthcare with compassionate care. Book appointments with top doctors in Cardiology, Orthopedics, Pediatrics & more.",
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Mate Hospital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Mate Hospital | Best Multi-Specialty Hospital in Pune",
    description:
      "Advanced healthcare with compassionate care. 24/7 emergency services available.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
