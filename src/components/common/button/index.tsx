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
  rounded,
  padding
}: ButtonProps) => (
  <Tooltiped label={tooltip} visible={tooltip ? undefined : false} position={tooltipPosition}>
    <button
      type={type}
      onClick={onClick}
      style={color ? { backgroundColor: color } : {}}
      className={`
        flex items-center justify-center 
        ${padding ? padding : 'px-5 py-2.5'} cursor-pointer
        focus:outline-none
       ${className} ${rounded ? 'rounded-full' : 'rounded-xl'}
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
  rounded?: boolean;
  tooltipPosition?: TippyProps['placement'];
  onClick?: () => void;
  className?: string;
  padding? : string;
}

export default Button;
