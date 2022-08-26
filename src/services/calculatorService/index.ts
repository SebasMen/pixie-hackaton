import { PetFeedData } from '../../helpers/calculator';
import { ProductListResponse } from '../../interfaces/product';
import api from '../axios';

export class CalculatorService {
  init() {}

  getCalculateProduct = async (feedData: PetFeedData | undefined): Promise<ProductListResponse> => {
    // Add allergies or diseases
    let getAllergies = '';
    if (feedData?.allergies.alergies === true)
      getAllergies += '&alergies=true';
    if (feedData?.allergies.hepatics === true)
      getAllergies += '&hepatics=true';
    if (feedData?.allergies.obesity === true)
      getAllergies += '&obesity=true';
    if (feedData?.allergies.renal === true)
      getAllergies += '&renal=true';
    if (feedData?.allergies.sensitive_stomach === true)
      getAllergies += '&sensitive_stomach=true';
    const { data } = await api.get(`pixie-payments/api/products/filter-calculator?gramos=${feedData?.grams}&type=${feedData?.type}&age=${feedData?.range}${getAllergies}`);
    return data;
  };
}

export default new CalculatorService();

