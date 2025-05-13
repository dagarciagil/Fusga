/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // Ajusta según tu framework
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Marcellus', 'serif'], // Esto hace que Marcellus sea la fuente predeterminada
      },
    },
  },
  plugins: [],
}