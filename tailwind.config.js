/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Jost', 'sans']
      },
      colors: {
        primary: '#ffffff',
        secondary: '#555555'
      }
    },
  },
  plugins: [],
}