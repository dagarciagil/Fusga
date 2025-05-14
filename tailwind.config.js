/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // Ajusta según tu framework
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ['Marcellus', 'serif'], // Fuene principal
        ptSerif: ['PT Serif', 'serif'] // Fuente secundaria
      },
      colors: {
        whiteC: '#F5FFF9',
        sweetPinkC: '#F7F1FC',
        pinkC: '#CDB2E2',
        greenC: '#226663',
        purpleC: '#6E5084'
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px', // Ejemplo personalizado
      }
    },
  },
  plugins: [
    // Plugin para la fuente
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1, h2, h3, h4, h5, h6, ul, li, link': {
          fontFamily: theme('fontFamily.marcellus'),
        },
        'p, span, blockquote': {
          fontFamily: theme('fontFamily.ptSerif'),
        }
      });
    })
    // 
  ],
}