/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'hero-pattern': "url('public/Naama..svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
