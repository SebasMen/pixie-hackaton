import { Product } from './product';

export interface PromotionalForm {
  note: string,
  promotionalCode: string
}

export interface CartItem {
  quantity: number;
  product: Product;
}
