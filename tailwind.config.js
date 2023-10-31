/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgBasic: '#1a1f29ff',
        textBasic: '#e9e0daff',
        point: '#c9ab78ff',
        bgSkill: '#a8a29e',
        lightG: '#e4e4e4',
        customBlue: '#007acc'
      },
      fontFamily: {
        point: ['Cinzel', 'serif'],
        title: ['Montserrat', 'sans-serif'],
        basic: ['Lato', 'sans-serif']
      },
      width: {
        1: '1px'
      },
      height: {
        196: '48rem',
        160: '40rem',
        128: '32rem',
        15: '15vh'
      },
      backgroundImage: {
        main: 'url("/src/images/img1.jpg")',
        mainSub: 'url("/src/images/img2.JPG")',
        sample: 'url("/src/images/sample.png")',
        about: 'url("/src/images/about.jpg")',
        about1: 'url("/src/images/about1.jpg")',
        about2: 'url("/src/images/about2.jpg")',
        about3: 'url("/src/images/about3.jpg")',
        about4: 'url("/src/images/about4.jpg")',
        about5: 'url("/src/images/about5.jpg")',
        about6: 'url("/src/images/about6.jpg")',
        about7: 'url("/src/images/about7.jpg")'
      },
      animationDelay: {
        2000: '2s',
        3000: '3s'
      },
      keyframes: {
        categorySlide: {
          to: {
            opacity: 0.8,
            transform: 'translateX(10px)'
          }
        },
        textSlide: {
          '0%': { top: 0 },
          '25%': { top: '-2.25rem' },
          '50%': { top: '-4.5rem' },
          '100%': { top: 0 }
        },
        textMoving: {
          '50%': {
            transform: 'translateX(10px)'
          }
        },
        scrolling: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translatex(-50%)'
          }
        },
        scrollingReverse: {
          '0%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translatex(0)'
          }
        },
        drop: {
          '0%': {
            top: '-50%'
          },
          '100%': {
            top: '110%'
          }
        }
      },
      animation: {
        categorySlide: 'categorySlide 1s linear forwards',
        textSlide: 'textSlide 5s infinite',
        menuSlide: 'menuSlide 3s ease-in',
        textMoving: 'textMoving 1s infinite',
        scrolling: 'scrolling 50s linear infinite',
        scrollingReverse: 'scrollingReverse 30s linear infinite',
        drop: 'drop 7s infinite cubic-bezier(0.4, 0.26, 0, 0.97)',
        dropDelay1: 'drop 7s 2s infinite cubic-bezier(0.4, 0.26, 0, 0.97)',
        dropDelay2: 'drop 7s 3s infinite cubic-bezier(0.4, 0.26, 0, 0.97)'
      }
    }
  },
  plugins: [require('tailwindcss-animation-delay')]
}
