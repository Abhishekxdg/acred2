import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // ACRED palette — light mode (ink = warm white bg, bone = near-black text)
        ink: {
          DEFAULT: "#F8F5EF",
          soft: "#FFFFFF",
          line: "#E4DDD4",
          muted: "#EDE7DE",
        },
        bone: {
          DEFAULT: "#0E0D0B",
          soft: "#3A3732",
          muted: "#706B62",
          dim: "#A09891",
        },
        gold: {
          DEFAULT: "#B8925A",
          soft: "#D4B284",
          deep: "#8A6A3E",
        },
        forest: {
          DEFAULT: "#2D4A3E",
          soft: "#4A6B5C",
          muted: "#7A9B8C",
          light: "#D4E0DA",
          bg: "#1E3329",
        },
        night: {
          DEFAULT: "#0F0F0D",
          soft: "#1C1C1A",
          muted: "#2E2E2B",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "30%": { transform: "translate(3%, -10%)" },
          "50%": { transform: "translate(-10%, 5%)" },
          "70%": { transform: "translate(7%, 8%)" },
          "90%": { transform: "translate(-3%, 3%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "grain": "grain 8s steps(6) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
