/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0a",
        lightText: "#ffffff",
        accent: "#f97316",
      },
    },
  },
  plugins: [],
};
