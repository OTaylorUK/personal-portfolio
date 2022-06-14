/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': 'var(--custom-primary)',
        'custom-secondary': 'var(--custom-secondary)',
        'custom-accent': 'var(--custom-accent)',
        'custom-highlight': 'var(--custom-highlight)',
        'custom-text': 'var(--custom-text)',
        'custom-faded': 'var(--custom-faded)',
      },
      fontFamily: {
        'sans': ['"Metropolis"', ...defaultTheme.fontFamily.sans],
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans],
        // 'serif': ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
        // 'handwriting': ['"Comforter Brush"', ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
}
