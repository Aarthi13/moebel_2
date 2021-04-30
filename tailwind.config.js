module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      outline: ['hover', 'active'],
      listStyleType: ['hover', 'focus'],
    },
  },
  plugins: [],
}
