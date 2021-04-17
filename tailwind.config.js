module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#3F4E59',
        light: '#E2E4E6',
        lightest: '#F7F7F7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
