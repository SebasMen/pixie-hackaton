import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { AppContextType } from './index';

const MySwal = withReactContent(Swal);
const api = process.env.REACT_APP_API_URL || '';

export const appProvider: AppContextType = {
  // Generic
  swal: MySwal,
  updateContext: old => old,
  api,

  // Auth
  isAuthenticated: true,
};
