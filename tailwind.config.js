/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f3f6f1",
          100: "#e4ebde",
          200: "#c9d7bd",
          300: "#a7bf94",
          400: "#87a973",
          500: "#6b9256",
          600: "#547641",
          700: "#3f5a30", // primary brand green
          800: "#334a28",
          900: "#2b3d22",
        },
        cream: "#f8f6f0",
        sand: "#efe9dd",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
}
