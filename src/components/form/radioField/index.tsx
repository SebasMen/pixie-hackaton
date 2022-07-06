import { useState, useEffect } from 'react';

import Icon from '../../common/icon';

export const RadioField = ({
  className,
  label,
  value,
  name,
  changeState,
  handleRadioChange,
  currentState,
  labelClassName
}: RadioFieldProps) => {
  // Hooks
  const [_checked, setChecked] = useState(false);

  useEffect(() => {
    if (value === currentState) {
      setChecked(true);
      handleRadioChange(currentState, name);
    } else
      setChecked(false);
  }, [currentState]);

  // Component
  return (
    <div className={`flex items-center gap-2 ${className}`} onClick={() => changeState(value)}>
      {_checked
        ?
        <Icon
          name='radio_button_checked'
          className='text-primary'
        />
        :
        <Icon
          name='radio_button_unchecked'
          className='text-primary'
        />
      }
      <span className={`${labelClassName}`}>{label}</span>
    </div>
  );
};

interface RadioFieldProps {
  value : string;
  currentState: string;
  changeState: React.Dispatch<React.SetStateAction<any>>;
  handleRadioChange: (selected: string, name: string) => void;
  name: string;
  label?: string;
  className?: string;
  labelClassName?: string;
}

export default RadioField;
