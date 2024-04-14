const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		nextui({
			themes: {
				"little-lemon": {
					// extend: "dark", // <- inherit default values from dark theme
					colors: {
						background: "#495E57",
						foreground: "#f7db52",
						primary: {
							50: "#fffadc",
							100: "#fdf0b0",
							200: "#f9e682",
							300: "#f7db52",
							400: "#f5d124",
							500: "#dbb80a",
							600: "#ab8f03",
							700: "#7a6600",
							800: "#493d00",
							900: "#1a1400",
							DEFAULT: "#f7db52",
							foreground: "#ffffff",
						},
						focus: "#f5d124",
					},
					layout: {
						disabledOpacity: "0.3",
						radius: {
							small: "4px",
							medium: "6px",
							large: "8px",
						},
						borderWidth: {
							small: "1px",
							medium: "2px",
							large: "3px",
						},
					},
				},
			},
		}),
	],
};
