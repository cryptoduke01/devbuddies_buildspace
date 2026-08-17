/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Regenerates brand palette (semantic tokens)
        brand: {
          DEFAULT: "#83B71B", // primary green
          lime: "#D9DB2A", // accent lime
          mint: "#EFFCF1", // near-white headings
          dark: "#121212", // panel background
          ink: "#0a0a0a", // deep background
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-ring": "pulseRing 2.5s ease-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
