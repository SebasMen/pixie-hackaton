import { style } from 'typestyle';

export const ButtonStyle = style({
  // Layout
  marginTop: '10px',
  padding: '8px 10px',
  width: 'max-content',
  outline: 'none',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',

  // Colors
  backgroundColor: '#2196f3',
  color: 'white',
  boxShadow: '0px 0px 0px 0px #2196f3',

  // Animation
  transitionProperty: 'all',
  transitionDuration: '0.1s',

  // Hover
  $nest: {
    '&:hover': {
      backgroundColor: '#1e88e5',
      boxShadow: '0px 0px 0px 2px #1e88e5',
    },
  },
});
