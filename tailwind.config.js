/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      zIndex: {
        100: "100",
        120: "120",
      },
      inset: {
        151: "151px",
        148: "148px",
      },
      spacing: {
        85: "85px",
      },
      margin: {
        88: "88px",
        110: "110px",
        160: "160px",
        220: "220px",
      },
      sizing: {
        30: "30px",
      },
      height: {
        212: "212px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
      },
      width: {
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
      },
      letterSpacing: {
        widest: ".15em",
      },
      fontFamily: {
        "pt-sans-narrow": ["PT Sans Narrow", "sans-serif"],
      },
      fontWeight: {
        400: 400,
        700: 700,
      },
      colors: {
        primary1: "#c33764 ",
        primary2: "#7b4397  ",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
