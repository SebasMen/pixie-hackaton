import { useNavigate } from 'react-router-dom';

import useAppContext from './useAppContext';

export const useLogout = (callback?: () => void) => {
  // Hooks
  const { updateContext } = useAppContext();
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    updateContext(old => ({ ...old, isAuthenticated: false }));
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    navigate('/login');

    if (callback) callback();
  };

  return handleLogout;
};

export default useLogout;
