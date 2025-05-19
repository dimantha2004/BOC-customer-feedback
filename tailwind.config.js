/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#0f3b7c', // Bank of Ceylon primary blue
          900: '#082b5c'  // Darker shade
        },
        yellow: {
          400: '#f6b522', // Bank of Ceylon gold
          500: '#e7a612'  // Darker gold
        },
        // Additional color palette for UI
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          700: '#047857'
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309'
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'star-pulse': 'star-pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        'star-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
};