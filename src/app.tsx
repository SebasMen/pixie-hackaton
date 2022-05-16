import { useState } from 'react';

import Router from './router';

import { AppContext, appProvider } from './context/';

export const App = () => {
  // Updatable Provider
  const [provider, setProvider] = useState(appProvider);

  return (
    <AppContext.Provider value={{ ...provider, updateContext: setProvider }}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
