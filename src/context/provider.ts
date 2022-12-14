import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CartItem } from '../interfaces/basket';

import { AppContextType } from './index';

const MySwal = withReactContent(Swal);
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  showCloseButton: true,
  timer: 1500,
  timerProgressBar: true,
  didOpen(toast) {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
const api = process.env.REACT_APP_API_URL;

/// Get data saved
const dataFormCheckOutLS = JSON.parse(localStorage.getItem('dataFormCheckOut') as unknown as string);
const shoppingCar: CartItem[] = JSON.parse(localStorage.getItem('shoppingCart') as unknown as string);

export const appProvider: AppContextType = {
  // Generic
  swal: MySwal,
  toast: Toast,
  updateContext: old => old,
  api,

  // Auth
  isAuthenticated: true,

  // Products
  products: shoppingCar === null ? [] : shoppingCar,

  // Discount
  discount: 0,
  // ProductView
  productView: {
    age: '',
    category: 'Accesorios',
    description: '',
    id: '',
    ingredients: [],
    kind_pet: '',
    License: '',
    name: '',
    nutrition_information: [],
    presentation: '',
    price: 0,
    quantity: 0,
    status: '',
    url_image: '',
    benefits: [],
    recommendation_for_use: '',
    atributos: [],
    key: '',
    atributos_en: [],
    benefits_en: [],
    country: 0,
    description_en: '',
    dosis: '',
    dosis_en: '',
    ingredients_en: [],
    key_en: '',
    name_en: '',
    nutrition_information_en: [],
    recommendation_for_use_en: '',
  },
  dataFormCheckOut: dataFormCheckOutLS === null ? {
    address: '',
    apartment: '',
    city: { label: '', value: '' },
    cities: [],
    colony: '',
    countries: [],
    country: { label: '', value: '' },
    delegation: '',
    delivery_note: '',
    email: '',
    houseNumber: '',
    last_name: '',
    name: '',
    phone: '',
    receive_information: '0',
    reference: '',
    state: { label: '', value: '' },
    states: [],
    zip_code: { label: '', value: '' },
    zipcodes: []
  } : dataFormCheckOutLS,

  showNavbar: true,
  marginWhatsApp: false,
  showPopup: false,
  showMinimalNavbar: false,
  showLoading: false,
  showPopupViewerImage: {
    show: false,
    url: ''
  },
  showPopupGotoSite: true,
  // Provitional data to show recomendation
  productsToShowRecomendation: [],
  location: '',
  showPopupTermsAndConditions: {
    status: false,
    type: 1
  }
};
