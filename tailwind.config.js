/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['"Caveat"', 'cursive'],
        oswald: ['"Oswald"', 'sans-serif'],
      },
    },
  },
  
}








