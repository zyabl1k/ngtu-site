/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'roboto-flex': ['RobotoFlex', 'sans-serif'],
      },
      colors: {
        root: {
          main: '#f6f9fb',
          'red-main': '#c23030',
        },
      },
      keyframes: {
        'scale-min': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'scale-min': 'scale-min .6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
