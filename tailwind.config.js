module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        md: '720px',
        lg2: '1100px',
        xl1: '1280px ',
        xl2: '1400px',
        '2xl1': '1536px',
        '3xl': '1800px',
        tall: {
          raw: '(min-width: 720px) and (min-height: 800px) and (orientation: portrait)',
        },
        taller: {
          raw: '(min-width: 900px) and (min-height: 800px) and (orientation: portrait)'
        },
      },
      height: {
        116: '26rem',
        120: '28rem',
        124: '30rem',
        128: '32rem',
      },
      with: {
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
        pixieGreen: 'rgba(122, 197, 190, 0.7)',
        pixieGreenOpacity: 'rgba(122, 197, 190, 0.3)',
        pixieGreenSemiOpacity: 'rgba(122, 197, 190, 0.5)',
        pixieLightBlue: '#33B5A9',
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
        seventh: '#c1d4ae',
        seventhOpacity: '#d3dec0',
        seventhLight: '#dce3c9'
      },
      fontFamily: {
        titles: ['RNS Camelia'],
        subTitles: ['RNS Sanz'],
        paragraph: ['Arial', 'calibri'],
        sanzSemiBold: ['RNS Sanz Semi Bold'],
        sanzBold: ['RNS Sanz Bold'],
        sanzExtraBold: ['RNS Sanz Extra Bold'],
        publicSans: ['Public Sans'],
        montserrat: ['Montserrat']
      }
    },
  },
  plugins: [
  ],
};
