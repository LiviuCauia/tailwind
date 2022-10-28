module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed','Open sans','Helvetica','Arial', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em',
      },
      colors: {
        primary: '#00566b',
        secondary: '#296578',
        border: 'rgba(255,255,255,.3)',
        purple: '#45235e',
      },
      backgroundImage: {
        'masterhead': "url(https://hrp.imgix.net/https%3A%2F%2Fhistoricroyalpalaces.picturepark.com%2FGo%2FSOu4DO7V%2FV%2F45376%2F1?auto=format&s=48ac294ec04eecca46e95c9e0d5fc8a0)",
      },
    },
  },
  plugins: [],
}

