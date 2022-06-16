export interface ProductListResponse {
  status: string;
  products: Array<Product>;
}

export interface Product {
  id: string;
  name: string;
  age: string;
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
  /// tag: {
  //   name: string;
  //   key: string;
  // };
}

export interface productCatalogue {
  name: string,
  products: Array<Product>,
}

