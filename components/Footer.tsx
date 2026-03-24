import Image from "next/image";
import Link from "next/link";
import PatientPortalLink from "./PatientPortalLink";

const footerLinks = {
  Hospital: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Facilities", href: "#facilities" },
    // { label: "Careers", href: "#" },
    { label: "News & Events", href: "/news" },
  ],
  Services: [
    { label: "Cardiology", href: "/departments/cardiology" },
    { label: "Orthopedics", href: "/departments/orthopedics" },
    { label: "Pediatrics", href: "/departments/pediatrics" },
    { label: "Emergency Care", href: "/departments/emergency-care" },
    { label: "Diagnostics & Lab", href: "/departments/diagnostics-lab" },
  ],
  Support: [
    { label: "Book Appointment", href: "/book-appointment" },
    { label: "Patient Portal", href: "/patient-dashboard" },
    // { label: "Insurance Info", href: "#" },
    // { label: "Health Packages", href: "#" },
    // { label: "Contact Us", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V7c0-.55.45-1 1-1z" />
                </svg>
              </div>
              <p className="text-white font-bold text-sm">
                24/7 Emergency Services — Always Available for Critical Care
              </p>
            </div>
            <a
              href="tel:+911800MEDICARE"
              className="bg-white text-primary font-extrabold text-sm px-5 py-2 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              🚑 Call Emergency: 1800-MEDICARE
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <Image
                  src="/images/logo_cropped.png"
                  alt="Dr. Mate Hospital logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="font-display font-800 text-lg text-white leading-none">
                  Dr. Mate Hospital
                </span>
                <p className="text-[10px] text-white/40 font-medium leading-none mt-0.5 tracking-wider uppercase">
                  Multi-Specialty Hospital
                </p>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Pune's most trusted multi-specialty hospital providing world-class
              healthcare with compassionate care since 1980. NABH Accredited.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {[
                {
                  name: "Facebook",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V12H8v3h2v6h3v-6h2.4l.6-3H13v-2c0-.6.4-1 1-1z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.9 3H21l-6.7 7.6L22 21h-6.4l-4.9-6.4L5 21H3l7.2-8.2L2 3h6.6l4.5 5.9L18.9 3zm-2.2 16h1.6L7.4 5h-1.7l11 14z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
                      <circle cx="16.5" cy="7.5" r="1.2" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.5 9.5H9V19H6.5V9.5zm1.2-4A1.7 1.7 0 1 0 7.7 9a1.7 1.7 0 0 0 0-3.5zM11 9.5h2.4v1.3h.1c.3-.6 1.2-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.3V19h-2.6v-4.8c0-1.2 0-2.7-1.7-2.7-1.7 0-2 1.3-2 2.6V19H11V9.5z" />
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.6 8.2a2.7 2.7 0 0 0-1.9-2C17.9 5.7 12 5.7 12 5.7s-5.9 0-7.7.5a2.7 2.7 0 0 0-1.9 2A28 28 0 0 0 2 12a28 28 0 0 0 .4 3.8 2.7 2.7 0 0 0 1.9 2c1.8.5 7.7.5 7.7.5s5.9 0 7.7-.5a2.7 2.7 0 0 0 1.9-2A28 28 0 0 0 22 12a28 28 0 0 0-.4-3.8zM10 15.5v-7l6 3.5-6 3.5z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary transition-colors flex items-center justify-center text-white/60 hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#1B6BF0"
                  className="flex-shrink-0"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="text-white/60 text-sm">+91 20-1234-5678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#1B6BF0"
                  className="flex-shrink-0"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-white/60 text-sm">
                  info@drmatehospital.com
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#1B6BF0"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-white/60 text-sm">
                  FC Road, Shivajinagar, Pune 411005
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.label === "Patient Portal" ? (
                      <PatientPortalLink className="text-white/50 hover:text-white text-sm transition-colors hover:pl-1 duration-200" />
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors hover:pl-1 duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center">
            © {new Date().getFullYear()} Dr. Mate Hospital, Pune. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/40 hover:text-white/70 text-xs transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
