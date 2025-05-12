/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // importante incluir .astro
  ],
  theme: {
    extend: {
      colors: {
        'gold-200': '#FFF7CD', //Color dorado 20%
        'gold-400': '#FFEF9A', //Color dorado 40%
        'gold-600': '#FFE766', //Color dorado 60%
        'gold-800': '#FFD800', //Color dorado 80%
      },
      brightness: {
        40: '.40',
      }
    },
  },
  plugins: [],
}
