const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors: {
      rose: colors.rose,
      yellow: colors.yellow,
      coolGray: colors.coolGray,
      red: colors.red,
      green: colors.green,
      gold: colors.gold,
      black: colors.black
    },
  },
  variants: {
    extend: {
      borderWidth:['last']
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
