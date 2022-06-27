/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: 'true',
    },
    extend: {
      colors: {
        primary: '#E9D5CA',
        secondary: '#827397',
        accent1: '#4D4C7D',
        accent2: '#363062',
        light: '#F5F5F5',
        dark: '#00000',
      },
    },

    screens: {
      '2xl': '1320px',
    },
  },
  plugins: [],
};