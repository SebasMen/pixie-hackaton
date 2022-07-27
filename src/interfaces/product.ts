export interface ProductListResponse {
  status: string;
  products: Array<Product>;
}

export interface ResultProduct {
  product: Product;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  age: string;
  benefits: string;
  category: 'Alimentos' | 'Snack' | 'Accesorios';
  description: string;
  ingredients: string;
  kind_pet: string;
  license: string;
  nutrition_information: string;
  presentation: string;
  price: number;
  quantity: number;
  status: string;
  quantitySold?: number;
  totalPrice?: number;
  url_image: string;
  recommendation_for_use: string;
}

export interface productShort {
  id: string,
  title: string,
  price: number,
  sku: string,
  quantity: number
  image: string
}

export interface productCatalogue {
  name: string;
  products: Array<Product>;
}

export interface ingredientesProps {
  name: string,
  img: string
}
