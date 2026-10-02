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
        // Strict Black / Off-White / Grey Fashion Editorial Palette
        editorial: {
          black: '#0D0D0D',       // PRIMARY DARK
          dark: '#161616',        // SECONDARY DARK
          surface: '#1F1F1F',     // Dark border/card surface
          borderDark: '#262626',  // Hairline dark border
          light: '#F5F4F0',       // PRIMARY LIGHT (Off-White)
          lightAlt: '#E8E7E3',    // SECONDARY LIGHT
          borderLight: '#D9D7D2', // Hairline light border
          muted: '#96938D',       // MUTED GREY
          textDark: '#111111',    // Off-white spread body text
          accent: '#6B2737',      // OPTIONAL ACCENT (rarely used)
        },
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
