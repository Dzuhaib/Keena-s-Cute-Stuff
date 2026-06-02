import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          ivory: "#F9F8F6",
          white: "#FFFFFF",
          black: "#1A1A1A",
          charcoal: "#2D2D2D",
          gold: "#D4AF37",
          roseGold: "#f850b8",
          beige: "#E5D3B3",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      transitionTimingFunction: {
        "luxury-out": "cubic-bezier(0.23, 1, 0.32, 1)",
        "luxury-in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
