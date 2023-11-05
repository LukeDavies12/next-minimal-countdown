/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/common/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
      },
      plugins: [],
    }
  }