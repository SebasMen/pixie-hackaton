import { SelectItem } from '../components/form/selectField';

export interface ProductListResponse {
  status: string;
  products: Array<Product>;
}

export interface ResultProduct {
  product: Product;
  quantity: number;
}

export interface Product {
  License: string;
  age: string;
  atributos: string[];
  atributos_en: string[] | null;
  benefits: string[];
  benefits_en: string[] | null;
  category: 'Alimentos' | 'Snack' | 'Accesorios';
  country: number;
  description: string;
  description_en: string | null;
  dosis: string;
  dosis_en: string;
  id: string;
  ingredients: string[];
  ingredients_en: string[] | null;
  key: string;
  key_en: string;
  kind_pet: string;
  name: string;
  name_en: string | null;
  nutrition_information: string[];
  nutrition_information_en: string[] | null;
  presentation: string;
  price: number;
  quantity: number;
  recommendation_for_use: string;
  recommendation_for_use_en: string;
  status: string;
  url_image: string;
  quantitySold?: number;
  totalPrice?: number;
  productsInside?: Product[]
  isComboPersonality?: boolean
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

export interface infoSelectSPandEn {
  id: string,
  key: string,
  name: string,
  name_en: string
}

export interface createComboForm {
  quantityChoose: number,
  flavor: Product[],
  quantity: number,
  flavorOptions: SelectItem[]
  flavorSelect: SelectItem,
  finalPrice: number,
  quantityToProduct: number
}
