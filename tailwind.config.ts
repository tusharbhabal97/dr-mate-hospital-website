import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Medical Blue
        primary: {
          DEFAULT: "#1F3C88",
          light: "#2A4AA6",
          dark: "#162F6F",
          50: "#EEF2FF",
          100: "#E1E8FF",
          200: "#C7D3FF",
          300: "#A4B3F4",
          400: "#7E94DE",
          500: "#1F3C88",
          600: "#1C3476",
          700: "#162B5E",
          800: "#112248",
          900: "#0B172F",
        },
        // Medical Red
        medical: {
          DEFAULT: "#E53935",
          light: "#EF5350",
          dark: "#C62828",
          50: "#FFF1F1",
          100: "#FFE1E0",
          200: "#FFC7C5",
          300: "#FFA9A7",
          400: "#FF8482",
          500: "#E53935",
          600: "#CF2E2A",
          700: "#B32623",
        },
        // Healthcare Green
        healing: {
          DEFAULT: "#1FA971",
          light: "#2DB57C",
          dark: "#17895C",
          50: "#EEF9F4",
          100: "#D8F3E7",
          200: "#B5E7D4",
          300: "#86D7B8",
          400: "#53C79A",
          500: "#1FA971",
          600: "#1A8E5F",
          700: "#15744E",
        },
        // Accent and neutrals
        accent: "#FFFFFF",
        dark: "#1E2A38",
        muted: "#607188",
        surface: "#F5F7FA",
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        // Navy-to-deep-blue hero gradient
        "hero-gradient":
          "linear-gradient(135deg, #1F3C88 0%, #162F6F 55%, #112248 100%)",
        // Subtle navy radial for sections
        "navy-radial":
          "radial-gradient(ellipse at center, #1F3C8820 0%, transparent 70%)",
        // Tri-color gradient matching logo
        "logo-gradient":
          "linear-gradient(135deg, #E53935 0%, #1F3C88 50%, #1FA971 100%)",
        // Light surface gradient
        "surface-gradient":
          "linear-gradient(160deg, #F5F7FA 0%, #EEF2F6 50%, #EEF9F4 100%)",
        // Card shimmer
        "card-shine":
          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
      },
      boxShadow: {
        card: "0 10px 25px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 16px 32px rgba(0, 0, 0, 0.08)",
        btn: "0 10px 24px rgba(31, 60, 136, 0.2)",
        "btn-red": "0 10px 24px rgba(229, 57, 53, 0.25)",
        "btn-green": "0 10px 24px rgba(31, 169, 113, 0.25)",
        glow: "0 0 32px rgba(31, 60, 136, 0.22)",
        "glow-red": "0 0 32px rgba(229, 57, 53, 0.18)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "spin-slow": "spin 8s linear infinite",
        "hex-rotate": "hexRotate 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        hexRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
