/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'galaxy-dark': '#0a0e27',
        'galaxy-blue': '#1a2f6d',
        'galaxy-light': '#e0e7ff',
        'sakura-pink': '#ffc0cb',
        'sakura-light': '#fff5f7',
        'ocean-dark': '#001f3f',
        'ocean-blue': '#0074d9',
        'ocean-cyan': '#7fdbca',
        'forest-dark': '#1a3a2a',
        'forest-green': '#2d5a3d',
        'academia-dark': '#1a1a1a',
        'academia-gold': '#d4af37',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.8)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
