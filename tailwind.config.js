module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        116: '26rem',
        120: '28rem',
        124: '30rem',
        128: '32rem',
      },
      zIndex: {
        100: '100',
        1000: '1000',
      },
      colors: {
        grayText: '#4A4A4A',
        primary: '#DF2F44',
        primaryOpacity: '#f9d5da',
        secondary: '#F9D864',
        secondaryOpacity: '#fade7f',
        third: '#CBEEEE',
        thirdOpacity: '#E3F3F3',
        fourth: '#7AC5BE',
        fourthOpacity: '#BEE0E1',
        fifth: '#f0f8f9',
        sixth: '#FFF6EC',
      },
    },
  },
  plugins: [],
};
