/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aptos: ['"Segoe UI"', 'system-ui', '-apple-system', 'BlinkMacFont', '"Helvetica Neue"', 'sans-serif'],
        aptosText: ['"Segoe UI"', 'system-ui', '-apple-system', 'BlinkMacFont', '"Helvetica Neue"', 'sans-serif'],
      },
     colors: {
        whiteC: '#ffffff',
        blackC: '#000000',
        grayLightC: '#f5f5f5',
        grayDarkC: '#1f1f1f',
        textC: '#111111',
        accentC: '#333333',
        purpleDarkC: '#4B0082', 
      },
      screens: {
        '2xl': '1540px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'colorCard': 'linear-gradient(to bottom right, #000000, #222222)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1, h2, h3, h4, h5, h6, ul, li, a': {
          fontFamily: theme('fontFamily.aptos'),
        },
        'p, span, blockquote, img': {
          fontFamily: theme('fontFamily.aptosText'),
        },
        'body': {
          backgroundColor: theme('colors.whiteC'),
          color: theme('colors.textC'),
        },
        
      });
    }),
  ],
};
