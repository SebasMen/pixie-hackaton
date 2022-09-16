import { useEffect, useRef } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FadeScreen from '../components/layout/fadeScreen';
import Home from '../views/Home';
import Catalogue from '../views/Catalogue';
import NotFound from '../views/notFound';

import { useAppContext, useAuth } from '../hooks';
import Detail from '../views/Detail';
import Calculator from '../views/Calculator';
import Basket from '../views/Basket';
import CheckOut from '../views/Checkout';
import FrequentQuestions from '../views/FrequentQuestions';
import DataPrivacy from '../views/dataPrivacy';

const AppRouter = () => {
  // Hooks
  const { isAuthenticated, updateContext } = useAppContext();
  const { checkToken, old: token, isChecking } = useAuth();
  const isMounted = useRef(false);

  // Check if user is authenticated
  useEffect(() => {
    const verifyAuth = async () => {
      const isAuth = await checkToken();

      if (isAuth)
        // Update auth state
        return updateContext(old => ({
          ...old,
          isAuthenticated: true,
        }));

      // Remove data from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    };

    if (!isAuthenticated && isMounted.current && token) verifyAuth();

    if (!isMounted.current) isMounted.current = true;

    return () => { };
  }, [isMounted.current]);

  // Routes
  return (
    <>
      {isChecking && <FadeScreen />}
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />

          <Route
            path='/catalogue'
            element={
              <Catalogue />
            }
          />

          <Route
            path='product/detail/:id'
            element={
              <Detail />
            }
          />

          <Route
            path='/calculator'
            element={
              <Calculator />
            }
          />
          <Route
            path='/basket'
            element={
              <Basket/>
            }
          />
          <Route
            path='/checkout'
            element={
              <CheckOut/>
            }
          />
          <Route
            path='/questions'
            element={
              <FrequentQuestions/>
            }
          />
          <Route
            path='/dataprivacy'
            element={
              <DataPrivacy/>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
