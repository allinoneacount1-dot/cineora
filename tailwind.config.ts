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
        // Aurora palette — bridged from globals.css CSS vars
        bg: "var(--bg)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-elevated-hover": "var(--bg-elevated-hover)",
        "bg-deeper": "var(--bg-deeper)",
        overlay: "var(--bg-overlay)",
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          faint: "var(--text-faint)",
        },
        aurora: "var(--accent-aurora)",
        gold: "var(--accent-gold)",
        ember: "var(--accent-ember)",
        purple: "var(--accent-purple)",
        teal: "var(--accent-teal, #00B4A8)",
        danger: "var(--danger)",
        rule: "var(--border)",
        "rule-strong": "var(--border-strong)",
      },
      transitionTimingFunction: {
        cineora: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      letterSpacing: {
        display: "0.02em",
      },
      fontFamily: {
        display: ["var(--font-tenor)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jet)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-sm": ["22px", { lineHeight: "1.1", letterSpacing: "0.02em" }],
        "display-md": ["28px", { lineHeight: "1.1", letterSpacing: "0.02em" }],
        "display-md-lg": ["34px", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        "display-md-xl": ["30px", { lineHeight: "1.1", letterSpacing: "0.02em" }],
      },
      spacing: {
        "section-sm": "clamp(72px, 10vh, 120px)",
        "section-md": "clamp(120px, 18vh, 200px)",
        "section-lg": "clamp(160px, 24vh, 260px)",
      },
      boxShadow: {
        modal: "var(--shadow-modal)",
        overlay: "var(--shadow-overlay)",
      },
    },
  },
  plugins: [],
};
export default config;