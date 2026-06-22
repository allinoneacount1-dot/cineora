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
        "bg-deeper": "var(--bg-deeper)",
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
    },
  },
  plugins: [],
};
export default config;