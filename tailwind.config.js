/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: '#E52430',
            secondary: '#D71926',
            hover: '#D71926',
            light: '#FDECEE',
            subtle: 'rgba(229, 36, 48, 0.06)',
            border: 'rgba(229, 36, 48, 0.25)',
          },
          dark: '#171923',
          heading: '#171923',
          text: '#626773',
          darkText: '#171923',
          bg: '#F7F7F8',
          gray: '#F0F1F3',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgba(23, 25, 35, 0.05), 0 1px 2px 0 rgba(23, 25, 35, 0.03)',
        'soft': '0 4px 20px -2px rgba(23, 25, 35, 0.05), 0 2px 6px -1px rgba(23, 25, 35, 0.03)',
        'soft-lg': '0 10px 30px -4px rgba(23, 25, 35, 0.08), 0 4px 12px -2px rgba(23, 25, 35, 0.03)',
        'card-hover': '0 14px 28px rgba(23, 25, 35, 0.08), 0 8px 10px rgba(23, 25, 35, 0.03)',
        'red-sm': '0 4px 14px 0 rgba(229, 36, 48, 0.28)',
      }
    },
  },
  plugins: [],
}
