/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
      colors:{
        'custom-gray':'#525252',
        'dark-gray':'#404040',
      },

      keyframes: {
        slide: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-1692px, 0, 0)'},
        }
      },
      animation: {
        'slide': 'slide 60s linear infinite alternate',
      },
      backgroundImage:{
        'world-map': "url('/assets/world-map.svg')",
      },
			fontFamily: {
				'Rubik': ['Rubik','sans-serif'],
				'Poppins': ['Poppins', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
