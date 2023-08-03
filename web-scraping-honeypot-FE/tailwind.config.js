/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#ffffff',
        'gray-white':'#F3F4F6',
        'dark-red':'#A6001B',
        'light-red':'#E80022'
      },
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
        'serif':['Garamond']
      }
    },
  },
  plugins: [],
}
