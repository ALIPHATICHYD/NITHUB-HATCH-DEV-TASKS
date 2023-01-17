const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', './WEEK-12/tailwind/public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:  '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
