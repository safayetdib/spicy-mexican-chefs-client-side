/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			caveat: ['Caveat', 'cursive'],
			main: ['Cabin', 'sans-serif'],
		},
		extend: {
			colors: {
				'red-accent': '#f40000',
				'red-hover': '#e60000',
				'red-active': '#d40000',
			},
		},
	},
	plugins: [],
};
