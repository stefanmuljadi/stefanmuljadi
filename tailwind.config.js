/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#C55FFC'
      },
      fontFamily: {
        'allenoire': ['Allenoire', 'sans-serif']
      }
    },
  },
  plugins: [],
}
