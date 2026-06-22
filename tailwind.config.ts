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
        bg: {
          DEFAULT: "#0A0F2C",
          elevated: "#0F1438",
          deeper: "#060924",
        },
        text: {
          DEFAULT: "#F6F8FF",
          muted: "rgba(246, 248, 255, 0.6)",
          faint: "rgba(246, 248, 255, 0.35)",
        },
        aurora: "#00F5FF",
        gold: "#FFD700",
        ember: "#FF4D00",
        rule: {
          DEFAULT: "rgba(246, 248, 255, 0.08)",
          strong: "rgba(246, 248, 255, 0.16)",
        },
        purple: "#9B4DFF",
      },
      fontFamily: {
        display: ["var(--font-tenor)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jet)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.15em",
        display: "0.02em",
      },
      fontSize: {
        "hero": "clamp(48px, 8vw, 128px)",
        "section": "clamp(32px, 5vw, 72px)",
        "label": ["11px", { lineHeight: "1.4", letterSpacing: "0.15em" }],
      },
      maxWidth: {
        "shell": "1280px",
        "reading": "62ch",
      },
      transitionTimingFunction: {
        "cineora": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
