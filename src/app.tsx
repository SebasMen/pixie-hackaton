import { useEffect, useState } from 'react';

import Router from './router';

import { AppContext, appProvider } from './context';

export const App = () => {
  // Updatable Provider
  const [provider, setProvider] = useState(appProvider);

  // Auth check
  useEffect(() => {
    if (!provider) return;

    localStorage.setItem('auth', JSON.stringify(provider.isAuthenticated));

    return () => { };
  }, [provider]);

  useEffect(() => {
    if (!provider) return;
    if (provider.products.length < 1) return;

    localStorage.setItem('shoppingCart', JSON.stringify(provider.products));

    return () => { };
  }, [provider.products]);

  return (
    <AppContext.Provider value={{ ...provider, updateContext: setProvider }}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
