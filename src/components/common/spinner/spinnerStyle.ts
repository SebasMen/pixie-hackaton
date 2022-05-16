import { keyframes, style } from 'typestyle';

export const SpinnerStyle = style({
  // Basics
  width: '24px',
  height: '24px',
  borderRadius: '100%',
  margin: '5px',

  // Loader BG Stroke
  border: '2px',
  borderStyle: 'solid',
  borderColor: '#f3f3f3',

  // Loader Stroke
  borderTop: '2px',
  borderTopStyle: 'solid',
  borderTopColor: '#3498db',

  // Animation
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  animationName: keyframes({
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  }),
});
