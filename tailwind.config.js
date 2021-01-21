module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      colors: {
        'app-black-1': '#0B090A',
        'app-black-2': '#161A1D',
        'app-red-1': '#660708',
        'app-red-2': '#A4161A',
        'app-red-3': '#E5383B',
        'app-gray-1': '#B1A7A6',
        'app-gray-2': '#F5F3F4',
      },
      minWidth: {
        96: '24rem',
        192: '48rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
