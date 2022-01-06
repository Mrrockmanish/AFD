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
      'white': '#FFFFFF',
      '#16': '#16795F',
      '#F4': '#F4F4F4'
    },

    extend: {
      dropShadow: {
        'btn': '0 13px 12px rgba(18, 67, 54, 0.5)',
      }
    },
  },
  plugins: [],
}
