import { useState, useEffect } from 'react';

import Icon from '../../common/icon';

export const CheckField = ({
  className,
  label,
  onChange,
  disabled = false,
}: CheckFieldProps) => {
  // Hooks
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onChange(checked);

    return () => { };
  }, [checked]);

  // Component
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className='w-10 h-10 bg-white flex items-center justify-center rounded-md cursor-pointer' onClick={disabled ? undefined : (() => setChecked(!checked))}>
        <Icon
          name='done'
          size='2xl'
          className={`
            text-red-500 select-none animate__animated
            ${checked ? 'animate__zoomIn animate__faster200' : 'animate__zoomOut animate__faster'}
          `}
        />
      </div>
      <span>{label}</span>
    </div>
  );
};

interface CheckFieldProps {
  label?: string;
  className?: string;
  disabled?: boolean;
  onChange: (value: boolean) => void;

}

export default CheckField;
