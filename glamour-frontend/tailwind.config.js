/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#faf9f7', // lightest beige
          100: '#f5f2ec', // very light beige
          200: '#e8e2d5', // soft beige
          300: '#dcd1bc', // champagne
          400: '#d0c0a3', // warm gold/beige
          500: '#c5a059', // DEFAULT: Soft Gold
          600: '#b08d4f', // darker gold
          DEFAULT: '#c5a059',
          700: '#947642', // light brown
          800: '#755c32', // medium brown
          900: '#5c4826', // dark brown
          950: '#4a3b2c', // deepest brown
          light: '#fcfbf9', // Soft Ivory background
          dark:  '#4a3b2c', // Deep Brown text
        },
        surface: {
          50:  '#ffffff',
          100: '#fcfbf9', // warm ivory
          200: '#faf8f5', // softest warm cream
          300: '#f3efe6', // light warm beige
          400: '#e7e0d0', // neutral beige
          500: '#bfb39c', // warm taupe
          600: '#9c8f77', // muted olive-taupe
          700: '#796d57', // medium dark warm brown
          800: '#574c3a', // dark warm chocolate
          900: '#362e24', // deepest warm cocoa/charcoal
        },
      },
      fontFamily: {
        sans:  ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1.5',   letterSpacing: '0.05em'  }],
        'sm':   ['0.875rem', { lineHeight: '1.5715', letterSpacing: '0.02em'  }],
        'base': ['1rem',     { lineHeight: '1.5',   letterSpacing: '-0.01em' }],
        'lg':   ['1.125rem', { lineHeight: '1.5',   letterSpacing: '-0.01em' }],
        'xl':   ['1.25rem',  { lineHeight: '1.5',   letterSpacing: '-0.01em' }],
        '2xl':  ['1.5rem',   { lineHeight: '1.415', letterSpacing: '-0.02em' }],
        '3xl':  ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.02em' }],
        '4xl':  ['2.25rem',  { lineHeight: '1.222', letterSpacing: '-0.02em' }],
        '5xl':  ['3rem',     { lineHeight: '1.2',   letterSpacing: '-0.02em' }],
        '6xl':  ['3.75rem',  { lineHeight: '1.2',   letterSpacing: '-0.02em' }],
        '7xl':  ['4.5rem',   { lineHeight: '1.1',   letterSpacing: '-0.02em' }],
        '8xl':  ['6rem',     { lineHeight: '1.05',  letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'soft':  '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in':  'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
