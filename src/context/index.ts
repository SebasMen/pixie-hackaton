import { createContext } from 'react';

import Swal from 'sweetalert2';
import { ReactSweetAlert } from 'sweetalert2-react-content';

import { appProvider as provider } from './provider';
import { Product } from '../interfaces/product';
import { CartItem } from '../interfaces/basket';
import { SubmissionFormInterface } from '../interfaces/checkout';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<AppContextType>(null!);

export interface AppContextType {
  // Generic
  api: string;
  swal: typeof Swal & ReactSweetAlert;
  toast: typeof Swal;
  updateContext: React.Dispatch<React.SetStateAction<AppContextType>>;

  // Auth
  isAuthenticated: boolean;

  // Products
  products: CartItem[];

  // Productview
  productView: Product;

  // ShowNavbar
  showNavbar: boolean;

  // Add margin button Whatsapp
  marginWhatsApp : boolean;

  // ShowPopup
  showPopup: boolean;

  // DataFormCheck
  dataFormCheckOut: SubmissionFormInterface;

  // Provitional data to popup add product
  productsToShowPopup : Product[];
}

export const appProvider: AppContextType = provider;
