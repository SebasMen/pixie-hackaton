export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  tag: {
    name: string;
    key: string;
  };
  img?: string;
}
