const { heroui } = require("@heroui/theme");

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
        marquee: 'marquee 5s linear infinite',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        zoomIn: 'zoomIn 0.3s ease-out forwards',
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      colors: {
        surface: {
          dark: "#212121",
          light: "#ffffff",
        },
        background: {
          dark: "#313131",
          light: "#f2f1f6",
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

module.exports = config;
