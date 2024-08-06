/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': 'var(--text)',
				'background': 'var(--background)',
				'primary': 'var(--primary)',
				'secondary': 'var(--secondary)',
				'accent': 'var(--accent)',
			},
			fontFamily: {
				base: 'var(--base)',
				headings: 'var(--headings)'
			},
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: 'var(--secondary)',
							'&:hover': {
								color: 'brightness(var(--secondary), 99%)'
							}
						},
						strong: {
							color: 'var(--primary)'
						}
					}
				}
			}
		},
	},
	plugins: [
		require('tailwindcss-animated'),
		require('@tailwindcss/typography'),
	],
}
