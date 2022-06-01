import { TippyProps } from '@tippyjs/react';

import Tooltiped from '../tooltiped/index';

export const Button = ({
  type = 'button',
  className,
  onClick,
  children,
  tooltip = '',
  tooltipPosition,
  color,
}: ButtonProps) => (
  <Tooltiped label={tooltip} visible={tooltip ? undefined : false} position={tooltipPosition}>
    <button
      type={type}
      onClick={onClick}
      style={color ? { backgroundColor: color } : {}}
      className={`
        flex items-center justify-center 
        px-5 py-2.5 rounded-xl cursor-pointer
        focus:outline-none
       ${className}
      `}
    >
      {children}
    </button>
  </Tooltiped>
);

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  tooltip?: string;
  color?: string;
  tooltipPosition?: TippyProps['placement'];
  onClick?: () => void;
  className?: string;
}

export default Button;
