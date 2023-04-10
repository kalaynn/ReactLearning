/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          'cyan': '61DAFB',
          'dark': '282D35',
          'dark-highlight': '21222A',
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
    plugins: [],
  }