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
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#151515',
        bone: '#F4F1EB',
        paper: '#FAF9F6',
        warmgrey: '#B7B1A8',
        mutedgrey: '#77736D',
        oxblood: '#5A2427',
        editorial: {
          ink: '#151515',
          bone: '#F4F1EB',
          paper: '#FAF9F6',
          warmgrey: '#B7B1A8',
          mutedgrey: '#77736D',
          oxblood: '#5A2427',
          surfaceDark: '#1C1C1C',
          borderDark: '#282828',
          borderLight: '#E5E1D8',
          surfaceLight: '#EFECE5',
        },
      },
      letterSpacing: {
        'widest-editorial': '0.3em',
        'loose-editorial': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'mask-reveal': 'maskReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        maskReveal: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
