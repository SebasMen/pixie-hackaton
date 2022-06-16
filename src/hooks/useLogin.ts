import { useNavigate } from 'react-router-dom';

import { useAppContext, useForm } from './';

import { LoginForm } from '../interfaces/login';

export const useLogin = (initialState: LoginForm) => {
  // Hooks
  const { updateContext, swal } = useAppContext();
  const navigate = useNavigate();

  // Login Handler
  const handleLogin = async (credentials: LoginForm) => {
    const { ok, msg, user, token } = { ok: true, msg: '', token: 'authToken', user: {} };

    if (!ok || !user) return swal.fire('Error', msg, 'error');

    updateContext(old => ({ ...old, isAuthenticated: true }));

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);

    navigate('/');
  };

  // Form
  const { form, clear, handleFormChange, onSubmit } = useForm<LoginForm>(initialState, handleLogin);

  return { form, handleFormChange, clear, onSubmit };
};

export default useLogin;
