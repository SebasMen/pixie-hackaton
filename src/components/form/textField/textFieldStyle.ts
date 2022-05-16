import { style } from 'typestyle';
import { vertical, fillParent } from 'csstips';

export const TextFieldStyle = style(vertical, fillParent, {
  margin: '5px 0px',
  $nest: {
    label: {
      margin: '5px 0px',
    },
    input: {
      // Layout
      border: 'none',
      padding: '8px',
      borderRadius: '5px',
      outlineWidth: '2px',
      outlineStyle: 'solid',
      fontSize: '16px',

      // Colors
      outlineColor: 'lightgray',
    },
  },
});
