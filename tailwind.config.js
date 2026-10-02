/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        cream: '#F5EEE3',
        mochaCream: '#E8DCC6',
        cosmicLatte: '#B7A89A',
        espresso: '#2C2421',
        burgundy: '#722F37',
        dustyRose: '#A56A70',
        warmTaupe: '#8F8177',
        mutedBlush: '#D8B6AE',
        borderWarm: '#E2D5C3',
        surfaceWarm: '#FAF6EE',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
