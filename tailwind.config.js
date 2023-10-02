/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgBasic: '#1a1f29ff',
        textBasic: '#e9e0daff',
        point: '#c9ab78ff'
      },
      fontFamily: {
        point: ['Cinzel', 'serif'],
        title: ['Montserrat', 'sans-serif'],
        basic: ['Lato', 'sans-serif']
      },
      height: {
        196: '48rem',
        160: '40rem',
        128: '32rem'
      },
      backgroundImage: {
        main: 'url("/src/images/img1.jpg")',
        mainSub: 'url("/src/images/img2.JPG")'
      },
      keyframes: {
        categorySlide: {
          '100%': {
            opacity: 0.8,
            transform: 'translateX(10px)'
          }
        },
        textSlide: {
          '0%': { top: 0 },
          '25%': { top: '-2.25rem' },
          '50%': { top: '-4.5rem' },
          '100%': { top: 0 }
        }
      },
      animation: {
        categorySlide: 'categorySlide 1s linear forwards',
        textSlide: 'textSlide 5s infinite',
        menuSlide: 'menuSlide 3s ease-in'
      }
    }
  },
  plugins: []
}
