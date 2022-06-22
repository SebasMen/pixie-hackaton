import { createContext } from 'react';

import Swal from 'sweetalert2';
import { ReactSweetAlert } from 'sweetalert2-react-content';

import { appProvider as provider } from './provider';
import { Product } from '../interfaces/product';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<AppContextType>(null!);

export interface AppContextType {
  // Generic
  api: string;
  swal: typeof Swal & ReactSweetAlert;
  updateContext: React.Dispatch<React.SetStateAction<AppContextType>>;

  // Auth
  isAuthenticated: boolean;

  // Products
  products: Product[];

  // Productview
  productView: Product;

  // ShowNavbar
  showNavbar: boolean;
}

export const appProvider: AppContextType = provider;
