import { useState } from 'react';

export const useAuth = () => {
  const [isChecking, setIsChecking] = useState(false);

  const token = localStorage.getItem('token') || false;

  const handleCheck = async () => {
    try {
      if (!token) return false;

      setIsChecking(true);

      // Implement check token service
      const data = await new Promise<any>(resolve => {
        setTimeout(() => resolve({ isChecked: true, msg: '' }), 1000); // Fake async
      });

      if (!data.isChecked) throw new Error(data.msg);

      return true;
    } catch (error: any) {
      return false;
    } finally {
      setIsChecking(false);
    }
  };

  return { checkToken: handleCheck, old: token, isChecking };
};

export default useAuth;
