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
      },
      colors: {
        editorial: {
          bg: '#FAF9F6',         // Warm alabaster / ecru
          card: '#FFFFFF',       // Pure white card
          surface: '#F4F2EC',    // Soft sand surface
          surfaceDark: '#121212',// Deep onyx
          border: '#E8E5DC',     // Subtle border
          borderDark: '#262626', // Dark subtle border
          text: '#1C1B19',       // Charcoal black
          muted: '#6E6B65',      // Warm muted gray
          accent: '#9C7A4A',     // Refined gold / brass
          accentLight: '#E8DEC8',// Pale champagne
          champagne: '#D4AF37',  // Fashion gold
        }
      },
      letterSpacing: {
        'widest-editorial': '0.25em',
        'loose-editorial': '0.18em',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
