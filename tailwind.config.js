/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Didot', 'Bodoni MT', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // High Fashion Dark Editorial Palette
        espresso: {
          950: '#110D0B',
          900: '#17120F', // Primary dark background
          850: '#1A1411', // Dark surface
          800: '#221B17', // Dark card
          700: '#2E2520',
          600: '#3D322B',
        },
        oxblood: {
          DEFAULT: '#5A2028', // Restrained luxury fashion accent
          hover: '#6E2530',
          dark: '#42141A',
          muted: '#5A2028',
          light: '#8B3844',
          subtle: 'rgba(90, 32, 40, 0.12)',
        },
        ivory: {
          DEFAULT: '#F3EFE7', // Editorial light spread background
          50: '#FAF8F4',
          100: '#F3EFE7',
          200: '#EBE5DC',
        },
        stone: {
          DEFAULT: '#C8C0B5', // Secondary neutral
          light: '#E2DBD0',
          muted: '#B5ACA0',
          dark: '#8C8275',
        },
        charcoal: {
          DEFAULT: '#24201D', // Dark typography
          muted: '#5C544E',
          soft: '#3A332E',
        },
        champagne: {
          DEFAULT: '#A99578', // Restrained tiny accent
          light: '#C4B49B',
          dark: '#8A775C',
        }
      },
      letterSpacing: {
        'widest-editorial': '0.3em',
        'loose-editorial': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
