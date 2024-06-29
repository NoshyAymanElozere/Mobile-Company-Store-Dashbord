/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
      },

      backgroundImage: {
        pattern: "url('/src/assets/patern.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
