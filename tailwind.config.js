/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'stack-x-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'stack-x-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'stack-x-left-48': 'stack-x-left 48s linear infinite',
        'stack-x-left-52': 'stack-x-left 52s linear infinite',
        'stack-x-right-54': 'stack-x-right 54s linear infinite',
      },
    },
  },
  plugins: [],
};
