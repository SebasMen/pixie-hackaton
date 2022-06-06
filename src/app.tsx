import { useEffect, useState } from 'react';

import Router from './router';

import { AppContext, appProvider } from './context/';

export const App = () => {
  // Updatable Provider
  const [provider, setProvider] = useState(appProvider);

  useEffect(() => {
    if (!provider) return;

    localStorage.setItem('auth', JSON.stringify(provider.isAuthenticated));
    localStorage.setItem('shoppingCart', JSON.stringify(provider.products));

    return () => { };
  }, [provider]);

  return (
    <AppContext.Provider value={{ ...provider, updateContext: setProvider }}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
