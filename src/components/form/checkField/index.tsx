import { useState, useEffect } from 'react';

import Icon from '../../common/icon';

export const CheckField = ({
  className,
  label,
  onChange,
  checked = false,
  onClick,
  disabled = false,
  border,
  labelClassName
}: CheckFieldProps) => {
  // Hooks
  const [_checked, setChecked] = useState(false);

  useEffect(() => {
    if (onChange) onChange(checked || _checked);

    return () => {};
  }, [checked, _checked]);

  // Component
  return (
    <div className={`flex items-center gap-2 ${className}`} onClick={onClick}>
      <div
        className={`w-10 h-10 bg-white flex items-center justify-center rounded-md cursor-pointer
        ${border}
        `}
        onClick={disabled || checked ? undefined : () => setChecked(old => !old)}
      >
        <Icon
          name='done'
          size='2xl'
          className={`
            text-red-500 select-none animate__animated
            ${checked || _checked ? 'animate__zoomIn animate__faster200' : 'animate__zoomOut animate__faster'}
          `}
        />
      </div>
      <span className={`${labelClassName}`}>{label}</span>
    </div>
  );
};

interface CheckFieldProps {
  label?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  border?: string;
  onChange?: (value: boolean) => void;
  labelClassName?: string;
  onClick: VoidFunction;
}

export default CheckField;
