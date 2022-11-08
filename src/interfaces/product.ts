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
  country: number;
  key: string;
  key_en: string;
  name: string;
  name_en: string;
  age: string;
  benefits: string;
  benefits_en: string;
  category: 'Alimentos' | 'Snack' | 'Accesorios';
  description: string;
  description_en: string;
  ingredients: string;
  ingredients_en: string;
  kind_pet: string;
  license: string;
  nutrition_information: string;
  nutrition_information_en: string;
  presentation: string;
  price: number;
  quantity: number;
  status: string;
  quantitySold?: number;
  totalPrice?: number;
  url_image: string;
  recommendation_for_use: string;
  recommendation_for_use_en: string;
  atributos: string;
  atributos_en: string;
  dosis: string;
  dosis_en: string;
}

export interface productShort {
  id: string;
  title: string;
  price: number;
  sku: string;
  quantity: number;
  image: string;
  presentation: string;
  age: string;
}

export interface productCatalogue {
  name: string;
  products: Array<Product>;
}

export interface ingredientesProps {
  name: string;
  img: string;
  tooltip?: string;
}

export interface attributesType {
  img: string;
  name: string;
}
