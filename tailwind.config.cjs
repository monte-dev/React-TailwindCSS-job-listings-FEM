/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#5ba4a4',
			background: '#effafa',
			accent: '#eef6f6',
			'dark-200': '#2c3a3a',
			'dark-100': '#7b8e8e',
		},
		fontFamily: {
			main: ['"League Spartan"', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
