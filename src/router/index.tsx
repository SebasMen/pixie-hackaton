import { lazy, Suspense, useEffect, useRef } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FadeScreen from '../components/layout/fadeScreen';

const NotFound = lazy(() => import('../views/notFound'));
const Catalogue = lazy(() => import('../views/Catalogue'));
const Home = lazy(() => import('../views/Home'));
const Detail = lazy(() => import('../views/Detail'));
const Calculator = lazy(() => import('../views/Calculator'));
const Basket = lazy(() => import('../views/Basket'));
const CheckOut = lazy(() => import('../views/Checkout'));
const FrequentQuestions = lazy(() => import('../views/FrequentQuestions'));
const DataPrivacy = lazy(() => import('../views/dataPrivacy'));
const TermsAndConditions = lazy(() => import('../views/termsAndConditions'));

import { useAppContext, useAuth } from '../hooks';

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
              <Suspense fallback={<FadeScreen />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path='/catalogue'
            element={
              <Suspense fallback={<FadeScreen />}>
                <Catalogue />
              </Suspense>
            }
          />

          <Route
            path='product/detail/:id'
            element={
              <Suspense fallback={<FadeScreen />}>
                <Detail />
              </Suspense>
            }
          />

          <Route
            path='/calculator'
            element={
              <Suspense fallback={<FadeScreen />}>
                <Calculator />
              </Suspense>
            }
          />
          <Route
            path='/basket'
            element={
              <Suspense fallback={<FadeScreen />}>
                <Basket/>
              </Suspense>
            }
          />
          <Route
            path='/checkout'
            element={
              <Suspense fallback={<FadeScreen />}>
                <CheckOut/>
              </Suspense>
            }
          />
          <Route
            path='/questions'
            element={
              <Suspense fallback={<FadeScreen />}>
                <FrequentQuestions/>
              </Suspense>
            }
          />
          <Route
            path='/dataprivacy'
            element={
              <Suspense fallback={<FadeScreen />}>
                <DataPrivacy/>
              </Suspense>
            }
          />
          <Route
            path='/terms'
            element={
              <Suspense fallback={<FadeScreen />}>
                <TermsAndConditions />
              </Suspense>
            }
          />

          <Route path='*' element={
            <Suspense fallback={<FadeScreen />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
