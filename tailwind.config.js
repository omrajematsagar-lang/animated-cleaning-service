/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#07090e',
          darker: '#030508',
          card: '#0e131f',
          surface: '#131b2e',
          navy: '#0b162c',
          blue: '#0284c7',
          sky: '#38bdf8',
          green: '#10b981',
          emerald: '#059669',
          mint: '#34d399',
          charcoal: '#1e293b',
          light: '#f8fafc',
          offwhite: '#f1f5f9',
          border: 'rgba(255, 255, 255, 0.08)',
          borderLight: 'rgba(0, 0, 0, 0.08)',
        }
      },
      fontFamily: {
        display: ['Syne', 'Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
