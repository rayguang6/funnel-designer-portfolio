/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#1479FF', // Main blue color
          600: '#1061d6',
          700: '#0c49ad',
          800: '#083184',
          900: '#04185b',
        },
      },
    },
  },
  plugins: [],
}; 