
import typography from '@tailwindcss/typography'
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */


export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				sans: ['Figtree', 'sans-serif'],
			},
      colors: {
        accent: {
          DEFAULT: "#6ab0ff",
          '50': '#eef6ff',
          '100': '#daebff',
          '200': '#bddcff',
          '300': '#90c7ff',
          '400': '#6ab0ff',
          '500': '#3585fc',
          '600': '#1f66f1',
          '700': '#174fde',
          '800': '#1941b4',
          '900': '#1a3b8e',
          '950': '#152556',
        },
      },
    },
  },
  plugins: [
    typography,
  ],
})

