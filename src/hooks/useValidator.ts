import { useState } from 'react';
import { validatorBody } from '../interfaces/validator';

export const useValidator = (
  initialState: validatorBody[]
) => {
  const [validatorBody, setValidator] = useState(initialState);

  // Set and Show message error
  const handlePutMessageError = (nameInput:string, message: string) => {
    /// setValidator({
    //   ...validatorBody,
    //   [nameInput]: {
    //     state: true,
    //     message
    //   },
    // });

    const index = validatorBody.findIndex(item => item.name === nameInput);
    const newState = validatorBody[index];
    newState.message = message;
    newState.state = true;
    setValidator(validatorBody.filter(item => item.name !== nameInput));
  };

  return { validatorBody, handlePutMessageError };
};

export default useValidator;
