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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  "gradient-custom": "linear-gradient(to bottom, #93c5fd, #f5d0fe)"
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
