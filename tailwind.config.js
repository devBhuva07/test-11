/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary dark surfaces
        ink: {
          50: '#1a1a1a',
          100: '#161616',
          200: '#121212',
          300: '#0f0f0f',
          400: '#0c0c0c',
          500: '#0A0A0A',
          600: '#080808',
          700: '#060606',
          800: '#040404',
          900: '#020202',
          950: '#000000',
        },
        // Gold accent
        gold: {
          50: '#fdf8e8',
          100: '#f9edc7',
          200: '#f2d98a',
          300: '#e9c44d',
          400: '#D4AF37',
          500: '#b8932a',
          600: '#9a7a22',
          700: '#7c6119',
          800: '#5e4910',
          900: '#403108',
          950: '#221904',
        },
        // Warm gold hover
        warmgold: {
          400: '#F2C94C',
          500: '#e9b832',
        },
        // Neutral dark tones
        sand: {
          50: '#1a1a1a',
          100: '#141414',
          200: '#111111',
          300: '#0e0e0e',
          400: '#0a0a0a',
          500: '#080808',
        },
        // Status
        success: { 50: '#0a1a0e', 500: '#3bbd6b', 700: '#1f8a4d' },
        warning: { 50: '#1a1408', 500: '#f0a830', 700: '#b9740a' },
        error: { 50: '#1a0a0a', 500: '#e54b4b', 700: '#b02020' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-1': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'display-3': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.2em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '28px',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.4)',
        'card': '0 2px 4px rgba(0,0,0,0.3), 0 12px 32px rgba(0,0,0,0.5)',
        'lift': '0 8px 24px rgba(0,0,0,0.4), 0 24px 64px rgba(0,0,0,0.6)',
        'gold': '0 8px 32px rgba(212,175,55,0.3)',
        'inner-gold': 'inset 0 0 0 1px rgba(212,175,55,0.35)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #b8932a 100%)',
        'gold-sheen': 'linear-gradient(110deg, transparent 30%, rgba(242,201,76,0.5) 50%, transparent 70%)',
      },
      transitionTimingFunction: {
        'lux': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'slow-zoom': 'slow-zoom 25s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
