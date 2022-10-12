import { cdmxCities, cmx003Codes, cmx010Codes, cmx014Codes, cmx015Codes, cmx016Codes, quepostalCode, queretaroCities } from '../@fake/statesFake';
import { SelectItem } from '../components/form/selectField';

export const getCities = (value: string): SelectItem[] => {
  switch (value) {
    case 'MX-QUE':
      return queretaroCities;
    case 'MX-CMX':
      return cdmxCities;
    default:
      return [];
  }
};

export const getPostalCode = (valueCity: string): SelectItem[] => {
  // Quereataro
  if (valueCity.includes('MX-QUE'))
    return quepostalCode;

  switch (valueCity) {
    // Ciudad de mexico
    case 'MX-CMX-003':
      return cmx003Codes;
    case 'MX-CMX-010':
      return cmx010Codes;
    case 'MX-CMX-014':
      return cmx014Codes;
    case 'MX-CMX-015':
      return cmx015Codes;
    case 'MX-CMX-016':
      return cmx016Codes;
    default:
      return [];
  }
};
