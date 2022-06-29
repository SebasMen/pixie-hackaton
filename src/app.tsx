import { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Router from './router';

import { AppContext, appProvider } from './context';

const MySwal = withReactContent(Swal);

export const App = () => {
  // Updatable Provider
  const [provider, setProvider] = useState(appProvider);

  // Auth check
  useEffect(() => {
    if (!provider) return;

    localStorage.setItem('auth', JSON.stringify(provider.isAuthenticated));
    localStorage.setItem('shoppingCart', JSON.stringify(provider.products));

    return () => { };
  }, [provider]);

  // Add product check
  useEffect(() => {
    const { products } = provider;

    if (products.length < 1) return;

    // TODO: Product Popup
    // Swal.fire({
    //   title: 'Bottom drawer 👋',
    //   position: 'bottom',
    //   showClass: {
    //     popup: `
    //       animate__animated
    //       animate__fadeInUp
    //       animate__faster
    //     `
    //   },
    //   hideClass: {
    //     popup: `
    //       animate__animated
    //       animate__fadeOutDown
    //       animate__faster
    //     `
    //   },
    //   grow: 'row',
    //   showConfirmButton: false,
    //   showCloseButton: true
    // });

    return () => { };
  }, [provider]);

  return (
    <AppContext.Provider value={{ ...provider, updateContext: setProvider }}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
