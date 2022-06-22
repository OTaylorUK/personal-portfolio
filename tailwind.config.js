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
        'custom-tertiary': 'var(--custom-tertiary)',
        'custom-white': 'var(--custom-white)',
        'custom-faded-dark': 'var(--custom-faded-dark)',
        'custom-faded-light': 'var(--custom-faded-light)',
        'custom-accent-primary': 'var(--custom-accent-primary)',
        'custom-accent-secondary': 'var(--custom-accent-secondary)',

      },
      fontFamily: {
        'sans': ['"SpaceGrotesk"', ...defaultTheme.fontFamily.sans],
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans],
        // 'serif': ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
        // 'handwriting': ['"Comforter Brush"', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        'text':'text 5s ease infinite',
        'bg':'bg 8s ease infinite',
      },
      keyframes: {
          'text': {
              '0%, 100%': {
                'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'bg': {
            '0%, 100%': {
              'background-size':'240% 240%',
              'background-position': '0% 50%'
            },
            '50%': {
              'background-size':'240% 240%',
              'background-position': '0% 50%'

            }
        },
      }
    },
  },
  plugins: [],
}
