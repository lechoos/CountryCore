/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontSize: {
			xs: ['1.2rem', { lineHeight: '1.6rem' }],
			sm: ['1.4rem', { lineHeight: '2rem' }],
			base: ['1.6rem', { lineHeight: '2.4rem' }],
			lg: ['1.8rem', { lineHeight: '2.8rem' }],
			xl: ['2rem', { lineHeight: '3rem' }],
			'2xl': ['2.4rem', { lineHeight: '3.2rem' }],
			'3xl': ['3rem', { lineHeight: '3.6rem' }],
			'4xl': ['3.6rem', { lineHeight: '4rem' }],
			'5xl': ['4.8rem', { lineHeight: '1' }],
			'6xl': ['6rem', { lineHeight: '1' }],
			'7xl': ['7.2rem', { lineHeight: '1' }],
			'8xl': ['9.6rem', { lineHeight: '1' }],
			'9xl': ['12.8rem', { lineHeight: '1' }],
		},
		extend: {
			screens: {
				sm: '576px',
			},
			fontFamily: {
				display: 'Raleway, sans-serif',
			},
			colors: {
				primary: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				},
				secondary: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
				},
				accent: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
			},
			spacing: {
				0: '0',
				0.5: '0.5rem',
				1: '1rem',
				1.5: '1.5rem',
				2: '2rem',
				2.5: '2.5rem',
				3: '3rem',
				3.5: '3.5rem',
				4: '4rem',
				5: '5rem',
				6: '6rem',
				7: '7rem',
				8: '8rem',
				9: '9rem',
				10: '10rem',
				11: '11rem',
				12: '12rem',
				14: '14rem',
				16: '16rem',
				20: '20rem',
				24: '24rem',
				28: '28rem',
				32: '32rem',
				36: '36rem',
				40: '40rem',
				44: '44rem',
				48: '48rem',
				52: '52rem',
				56: '56rem',
				60: '60rem',
				64: '64rem',
				72: '72rem',
				80: '80rem',
				96: '96rem',
			},
			borderRadius: {
				none: '0',
				sm: '0.2rem',
				DEFAULT: '0.4rem',
				md: '0.6rem',
				lg: '0.8rem',
				xl: '1.2rem',
				'2xl': '1.6rem',
				'3xl': '2.4rem',
				full: '100%',
			},
			translate: {
				'150': '150%',
			}
		},
	},
	plugins: [],
};
