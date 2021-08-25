module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'celular': {'max': '400px'},
        // => @media (orientation: portrait) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
