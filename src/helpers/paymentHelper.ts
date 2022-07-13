import { CartItem } from '../interfaces/basket';
import { shippingTypeForm, SubmissionFormInterface } from '../interfaces/checkout';
import { generatePayment } from '../interfaces/payment';
import { productShort } from '../interfaces/product';
import { calculateTotal } from './productHelper';

export const organiceInformationPayment = (idCustomer: string, tokenId: string, userData: SubmissionFormInterface | undefined, products: CartItem[], shippingData: shippingTypeForm): generatePayment => {
  const paymentData: generatePayment = {
    customer_id: idCustomer,
    details_payments: {
      amount: {
        currency: 'MXN',
        ice: 0,
        iva: 0,
        subtotalIva: 0,
        subtotalIva0: calculateTotalPayment(products, shippingData),
      },
      contactDetails: {
        email: userData?.email ? userData?.email : '',
        firstName: userData?.name ? userData?.name : '',
        lastName: userData?.last_name ? userData?.last_name : '',
        phoneNumber: userData?.phone ? userData?.phone : '',
      },
      productDetails: {
        product: organiceProducts(products),
      },
      fullResponse: true,
      orderDetails: {
        siteDomain: 'example.com',
        shippingDetails: {
          name: `${(userData?.name ? userData.name : '')} ${(userData?.last_name ? userData.last_name : '')}`,
          phone: userData?.phone ? userData?.phone : '',
          address1: userData?.address ? userData?.address : '',
          city: userData?.city ? userData?.city : '',
          region: userData?.city ? userData?.city : '',
          country: userData?.country ? userData?.country.label : '',
        },
        billingDetails: {
          name: `${(userData?.name ? userData.name : '')} ${(userData?.last_name ? userData.last_name : '')}`,
          phone: userData?.phone ? userData?.phone : '',
          address1: userData?.address ? userData?.address : '',
          city: userData?.city ? userData?.city : '',
          region: userData?.city ? userData?.city : '',
          country: userData?.country ? userData?.country.label : '',
        }
      },
      token: tokenId
    }
  };
  return paymentData;
};

const organiceProducts = (products: CartItem[]) : Array<productShort> => {
  const productsArray = products.map(item => {
    const productItem: productShort = {
      id: item.product.id,
      title: item.product.name,
      price: parseInt(String(item.product.price), 10),
      sku: item.product.id,
      quantity: item.quantity
    };
    return productItem;
  });
  return productsArray;
};

export const calculateTotalPayment = (productsCar: CartItem[], shippingData: shippingTypeForm): number => {
  const totalProduct = calculateTotal(productsCar);
  return totalProduct + shippingData.price;
};
