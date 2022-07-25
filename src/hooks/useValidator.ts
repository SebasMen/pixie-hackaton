import { useState } from 'react';

export const useValidator = <T>(
  initialState: T
) => {
  const [validatorBody, setValidator] = useState(initialState);

  // Set and Show message error
  const handlePutMessageError = (nameInput:string, message: string) => {
    setValidator(old => ({
      ...old,
      [nameInput]: {
        state: true,
        message
      },
    }));
  };

  const resetValidator = () => {
    setValidator(initialState);
  };

  return { validatorBody, handlePutMessageError, resetValidator, setValidator };
};

export default useValidator;
