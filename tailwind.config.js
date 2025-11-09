/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,svelte,js,ts}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "var(--primary-50)",
					100: "var(--primary-100)",
					200: "var(--primary-200)",
					300: "var(--primary-300)",
					400: "var(--primary-400)",
					500: "var(--primary-500)",
					600: "var(--primary-600)",
					700: "var(--primary-700)",
					800: "var(--primary-800)",
					900: "var(--primary-900)",
				},
				secondary: {
					50: "var(--secondary-50)",
					100: "var(--secondary-100)",
					200: "var(--secondary-200)",
					300: "var(--secondary-300)",
					400: "var(--secondary-400)",
					500: "var(--secondary-500)",
					600: "var(--secondary-600)",
					700: "var(--secondary-700)",
					800: "var(--secondary-800)",
					900: "var(--secondary-900)",
				},
				neutral: {
					50: "var(--neutral-50)",
					100: "var(--neutral-100)",
					200: "var(--neutral-200)",
					300: "var(--neutral-300)",
					400: "var(--neutral-400)",
					500: "var(--neutral-500)",
					600: "var(--neutral-600)",
					700: "var(--neutral-700)",
					800: "var(--neutral-800)",
					900: "var(--neutral-900)",
				},
				// Semantic colors
				background: "var(--background)",
				surface: "var(--surface)",
				"text-primary": "var(--text-primary)",
				"text-secondary": "var(--text-secondary)",
				"text-muted": "var(--text-muted)",
				"accent-primary": "var(--accent-primary)",
				"accent-secondary": "var(--accent-secondary)",
			},
			fontFamily: {
				sans: [
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					'"Helvetica Neue"',
					"Arial",
					"sans-serif",
				],
			},
			animation: {
				"gradient-shift": "gradient-shift 3s ease infinite",
				floaty: "floaty 6s ease-in-out infinite",
				"fade-in": "fade-in 0.8s ease-out",
			},
			keyframes: {
				"gradient-shift": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				floaty: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["garden"],
	},
};
