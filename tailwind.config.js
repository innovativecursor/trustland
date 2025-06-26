/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'], // Correct placement
  theme: {
    extend: {
      colors: {
        mdcTheme: '#282828', // Define a reusable color
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      albertSans: ['var(--font-albert-sans)'],
    },
  },
  plugins: [],
}
