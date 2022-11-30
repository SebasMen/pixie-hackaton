import { lazy, Suspense, useEffect, useRef } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FadeScreen from "../components/layout/fadeScreen";

import generalService from "../services/generalService";

const NotFound = lazy(() => import("../views/notFound"));
const Catalogue = lazy(() => import("../views/Catalogue"));
const Home = lazy(() => import("../views/Home"));
const Detail = lazy(() => import("../views/Detail"));
const Calculator = lazy(() => import("../views/Calculator"));
const Basket = lazy(() => import("../views/Basket"));
const CheckOut = lazy(() => import("../views/Checkout"));
const FrequentQuestions = lazy(() => import("../views/FrequentQuestions"));
const DataPrivacy = lazy(() => import("../views/dataPrivacy"));
const TermsAndConditions = lazy(() => import("../views/termsAndConditions"));
const ResultPayment = lazy(() => import("../views/resultPayment"));
const CreateCombo = lazy(() => import("../views/createCombo"));
const Fundations = lazy(() => import("../views/Foundations"));
import { useAppContext, useAuth, useLocation } from "../hooks";

const AppRouter = () => {
  // Hooks
  const { isAuthenticated, updateContext } = useAppContext();
  const { checkToken, old: token, isChecking } = useAuth();
  const isMounted = useRef(false);
  const { getUserLocation } = useLocation();

  // Check if user is authenticated
  useEffect(() => {
    const verifyAuth = async () => {
      const isAuth = await checkToken();

      if (isAuth)
        // Update auth state
        return updateContext((old) => ({
          ...old,
          isAuthenticated: true,
        }));

      // Remove data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    };

    if (!isAuthenticated && isMounted.current && token) verifyAuth();

    if (!isMounted.current) isMounted.current = true;

    return () => {};
  }, [isMounted.current]);

  useEffect(() => {
    getUserLocation().then((lngLat) => setDataLocation(lngLat[0], lngLat[1]));
    return () => {};
  }, []);

  const setDataLocation = (longitud: number, latitud: number) => {
    generalService.getLocationData(longitud, latitud).then((res) => {
      updateContext((old) => ({ ...old, location: res.country }));
    });
  };

  // Routes
  return (
    <>
      {isChecking && <FadeScreen />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<FadeScreen />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/catalogo"
            element={
              <Suspense fallback={<FadeScreen />}>
                <Catalogue />
              </Suspense>
            }
          />

          <Route path="/catalogo/:type">
            <Route
              index
              element={
                <Suspense fallback={<FadeScreen />}>
                  <Catalogue />
                </Suspense>
              }
            />
            <Route path="/catalogo/:type/:cat">
              <Route
                index
                element={
                  <Suspense fallback={<FadeScreen />}>
                    <Catalogue />
                  </Suspense>
                }
              />
              <Route
                path="/catalogo/:type/:cat/detalle/:product"
                element={
                  <Suspense fallback={<FadeScreen />}>
                    <Detail />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/catalogo/:type/detalle/:product"
              element={
                <Suspense fallback={<FadeScreen />}>
                  <Detail />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/catalogo/detalle/:product"
            element={
              <Suspense fallback={<FadeScreen />}>
                <Detail />
              </Suspense>
            }
          />

          <Route
            path="producto/detalle/:product"
            element={
              <Suspense fallback={<FadeScreen />}>
                <Detail />
              </Suspense>
            }
          />

          <Route
            path="producto/crear/combo"
            element={
              <Suspense fallback={<FadeScreen />}>
                <CreateCombo />
              </Suspense>
            }
          />

          <Route
            path="/calculadora"
            element={
              <Suspense fallback={<FadeScreen />}>
                <Calculator />
              </Suspense>
            }
          />
          <Route
            path="/canasta"
            element={
              <Suspense fallback={<FadeScreen />}>
                <Basket />
              </Suspense>
            }
          />
          <Route
            path="/canasta"
            element={
              <Suspense fallback={<FadeScreen />}>
                <Basket />
              </Suspense>
            }
          />

          <Route
            path="/pago"
            element={
              <Suspense fallback={<FadeScreen />}>
                <CheckOut />
              </Suspense>
            }
          />
          <Route
            path="/fundaciones"
            element={
              <Suspense fallback={<FadeScreen />}>
                <Fundations />
              </Suspense>
            }
          />
          <Route
            path="/preguntas-frecuentes"
            element={
              <Suspense fallback={<FadeScreen />}>
                <FrequentQuestions />
              </Suspense>
            }
          />
          <Route
            path="/politica-privacidad"
            element={
              <Suspense fallback={<FadeScreen />}>
                <DataPrivacy />
              </Suspense>
            }
          />
          <Route
            path="/terminos"
            element={
              <Suspense fallback={<FadeScreen />}>
                <TermsAndConditions />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<FadeScreen />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
