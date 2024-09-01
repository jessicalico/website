/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['sparkystones', 'sans-serif'], // Ensure 'sans-serif' as a fallback
        customtwo: ['behindninety', 'sans-serif'],
      },
    },
  },
  plugins: [],
};