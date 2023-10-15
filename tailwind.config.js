/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#ffe998',
        secondaryColor: '#EE9322',
        neutralColor1: '',
        neutralColor2: '#eaeaed',
        textPrimary: '#0c0e16',
        textSecondary: '#fff8de',
      },

      fontFamily: {
        montserrat: [' "Montserrat" ', 'sans-serif'],
        openSans: [' "Open Sans" ', 'sans-serif'],
        clashDisplay: [' "Clash Display" ', 'sans-serif'],
        // unicaOne: [' "Unica One" ', 'cursive'],
      },
    },
  },
  plugins: [],
};
