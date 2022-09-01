import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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

export const appProvider: AppContextType = {
  // Generic
  swal: MySwal,
  toast: Toast,
  updateContext: old => old,
  api,

  // Auth
  isAuthenticated: true,

  // Products
  products: [],
  // ProductView
  productView: {
    age: '',
    category: 'Accesorios',
    description: '',
    id: '',
    ingredients: '',
    kind_pet: '',
    license: '',
    name: '',
    nutrition_information: '',
    presentation: '',
    price: 0,
    quantity: 0,
    status: '',
    url_image: '',
    benefits: '',
    recommendation_for_use: '',
    atributos: ''
  },
  dataFormCheckOut: {
    address: '',
    apartment: '',
    city: '',
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
    zip_code: ''
  },

  showNavbar: true,
  marginWhatsApp: false,
  showPopup: false,
  showMinimalNavbar: false,
  // Provitional data to show recomendation
  productsToShowRecomendation: []
};
