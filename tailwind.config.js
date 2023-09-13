/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary' : '#C55FFC'
        'primary': '#F28500',
      },
      fontFamily: {
        'allenoire': ['Allenoire', 'sans-serif']
      }
    },
  },
  plugins: [],
}
