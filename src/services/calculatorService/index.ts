import { PetFeedData } from '../../helpers/calculator';
import { ProductListResponse } from '../../interfaces/product';
import api from '../axios';

export class CalculatorService {
  init() {}

  getCalculateProduct = async (feedData: PetFeedData | undefined): Promise<ProductListResponse> => {
    const { data } = await api.get(`pixie/api/products/filter-calculator?gramos=${feedData?.grams}&type=${feedData?.type}&age=${feedData?.range}`);
    return data;
  };
}

export default new CalculatorService();

