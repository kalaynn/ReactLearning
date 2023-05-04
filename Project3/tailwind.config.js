/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          karla: ["Karla", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          impact: ["Impact", "sans-serif"],
        }
      }
    },
    plugins: [],
  }