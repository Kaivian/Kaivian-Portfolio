import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        blink: "blink 0.75s steps(10, start) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      colors: {
        background: {
          light: "#f2f1f6",
          dark: "#313131",
        },
        surface: {
          light: "#ffffff",
          dark: "#212121",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [heroui()],
};

export default config;
