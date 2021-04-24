const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.coolGray,
        green: colors.green,
        red: colors.red,
        lightBlue: colors.lightBlue,
        blue: colors.blue,
        yellow: colors.amber,
        orange: colors.orange,
      },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
