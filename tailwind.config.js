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
        primary: '#DF2F44',
        secondary: '#BEE0E1',
        third: '#D9EEEF',
        fourth: '#7AC5BE',
        fourthOpacity: '#bcddd5',
        fifth: '#fcebd8',
        sixth: '#FFF6EC',
      },
    },
  },
  plugins: [],
};
