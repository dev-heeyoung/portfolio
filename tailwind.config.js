/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgBasic: '#1a1f29ff',
        textBasic: '#e9e0daff'
      },
      fontFamily: {
        point: ['Cinzel', 'serif'],
        title: ['Montserrat', 'sans-serif'],
        basic: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: []
}
