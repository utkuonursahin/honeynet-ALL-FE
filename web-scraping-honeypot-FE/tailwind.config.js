/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#ffffff'
      },
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
