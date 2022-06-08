export interface Product {
  id: string;
  name: string;
  description: string;
  quantity?: number;
  totalPrice?: number;
  price: number;
  tag: {
    name: string;
    key: string;
  };
  img?: string;
}

