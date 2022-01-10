module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1440px'
    },

    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      '#16': '#16795F',
      '#F4': '#F4F4F4',
      '#81': '#818181',
      '#99': '#999999',
      '#87': '#87CB94',
      '#C5': '#C5C5C5',
      '#EC': '#ECECEC'
    },

    extend: {
      dropShadow: {
        'btn': '0 13px 12px rgba(18, 67, 54, 0.5)',
      }
    },
  },
  plugins: [],
}
