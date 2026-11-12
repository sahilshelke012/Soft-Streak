/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060913',
          900: '#0A0F24',
          850: '#0E1630',
          800: '#141E3D',
          700: '#1D2A54',
          600: '#2A3C74',
          500: '#3D5299',
        },
        brand: {
          purple: {
            DEFAULT: '#7C3AED',
            light: '#9353D3',
            glow: '#8B5CF6',
            hover: '#6D28D9',
            subtle: 'rgba(124, 58, 237, 0.1)',
          },
          accent: {
            cyan: '#06B6D4',
            emerald: '#10B981',
            amber: '#F59E0B',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(124, 58, 237, 0.3)',
        'glow': '0 0 35px -5px rgba(124, 58, 237, 0.35)',
        'glow-lg': '0 0 50px -5px rgba(139, 92, 246, 0.45)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px -5px rgba(124, 58, 237, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

