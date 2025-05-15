/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'], // Correct placement
  theme: {
    extend: {
      colors: {
        mdcTheme: '#282828', // Define a reusable color
      },
    },
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      albertSans: ['var(--font-albert-sans)'],
    },
  },
  plugins: [],
}
