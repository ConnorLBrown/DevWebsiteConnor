/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "url('/public/grid.png')",
      },
      backgroundOpacity: {
        '50': '0.5',
      },
      backgroundColor: {
        'black': '#000000',
        'opcacity-80': 'rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      primary: colors.cyan,
      secondary: colors.purple,
    },
  },
  plugins: [],
};
