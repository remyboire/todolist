/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			boxShadow: {
				custom:
					' 0px 2.4px 1.9px rgba(70,130,210, 0.02), 0px 5.7px 4.3px rgba(70,130,210, 0.06), 0px 10.2px 7.7px rgba(70,130,210, 0.083), 0px 16.9px 12.8px rgba(70,130,210, 0.157), 0px 27.8px 21.2px rgba(70,130,210, 0.17), 0px 48.5px 37px rgba(70,130,210, 0.12), 0px 105px 80px rgba(70,130,210, 0.15)',
				customdark:
					' 0px 2.4px 1.9px rgba(0, 0, 0, 0.08), 0px 5.7px 4.3px rgba(0, 0, 0, 0.116), 0px 10.2px 7.7px rgba(0, 0, 0, 0.143), 0px 16.9px 12.8px rgba(0, 0, 0, 0.167), 0px 27.8px 21.2px rgba(0, 0, 0, 0.194), 0px 48.5px 37px rgba(0, 0, 0, 0.23), 0px 105px 80px rgba(0, 0, 0, 0.31)',
			},
			colors: {
				accent: '#7c6df3',
			},
		},
	},
	plugins: [],
}
