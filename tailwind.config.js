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
      backgroundColor: {
        'black': '#000000',
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
