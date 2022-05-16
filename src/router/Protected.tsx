import { Navigate } from 'react-router-dom';

import { useAppContext } from '../hooks';

const Protected = ({ children }: ProtectedProps) => {
  const { isAuthenticated } = useAppContext();

  if (!isAuthenticated) return <Navigate to='/login' replace />;

  return children;
};

interface ProtectedProps {
  children: JSX.Element;
}

export default Protected;
