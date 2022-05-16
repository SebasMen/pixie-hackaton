import { TippyProps } from '@tippyjs/react';

import Tooltiped from '../tooltiped/index';

import { ButtonStyle } from './buttonStyle';

export const Button = ({
  type = 'button',
  className,
  onClick,
  children,
  tooltip = '',
  tooltipPosition,
}: ButtonProps) => (
  <Tooltiped label={tooltip} visible={tooltip ? undefined : false} position={tooltipPosition}>
    <button type={type} onClick={onClick} className={ButtonStyle.concat(' ', className || '')}>
      {children}
    </button>
  </Tooltiped>
);

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  tooltip?: string;
  tooltipPosition?: TippyProps['placement'];
  onClick?: () => void;
  className?: string;
}

export default Button;
