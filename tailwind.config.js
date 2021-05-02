module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#3F4E59',
        danger: '#EF4444',
        light: '#9CA3AF',
        lighter: '#D1D5DB',
        lightest: '#F3F4F6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
