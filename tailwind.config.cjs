/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"nunito": "\"Nunito\", sans-serif",
			"poppins": "\"Poppins\", sans-serif",
			"montserrat": "\"Montserrat\", sans-serif"
		},

		extend: {
			colors: {
				"brown": "#ba3b0a"
			},
		},
	},
	plugins: [],
}
