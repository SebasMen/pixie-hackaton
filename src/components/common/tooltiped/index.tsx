import Tippy, { TippyProps } from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

export const Tooltiped = ({ children, label, className, position, visible }: TooltipedProps) => (
  <Tippy content={label} className={className} placement={position} visible={visible}>
    {children}
  </Tippy>
);

interface TooltipedProps {
  children: JSX.Element;
  label: string;
  visible?: boolean;
  position?: TippyProps['placement'];
  className?: string;
}

export default Tooltiped;
