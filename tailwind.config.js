const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      ...colors,
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9fa6b4',
        500: '#696e7a',
        600: '#505863',
        700: '#3c414a',
        800: '#272a30',
        900: '#1f2127',
        925: '#12151b',
        950: '#0a0c11',
      },
    },
  },
  plugins: [],
}
