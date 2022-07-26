import { CartItem } from '../interfaces/basket';
import { paymentForm, shippingTypeForm, SubmissionFormInterface } from '../interfaces/checkout';
import { billingDetailsInterface, generatePayment } from '../interfaces/payment';
import { productShort } from '../interfaces/product';
import { calculateTotal } from './productHelper';

// Organize the data to send them to the api
// eslint-disable-next-line max-params
export const organiceInformationPayment = (idCustomer: string, tokenId: string, userData: SubmissionFormInterface | undefined, products: CartItem[], shippingData: shippingTypeForm, form: paymentForm, sameBillingAddress: boolean): generatePayment => {
  const dataBilling = organiceBillingDetails(userData, form, sameBillingAddress);

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
        billingDetails: dataBilling
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

// If the person send other billing details is change here
const organiceBillingDetails = (userData: SubmissionFormInterface | undefined, form:paymentForm, sameBillingAddress: boolean) => {
  // Data base
  let dataIsFromForm: billingDetailsInterface = {
    name: `${(userData?.name ? userData.name : '')} ${(userData?.last_name ? userData.last_name : '')}`,
    phone: userData?.phone ? userData?.phone : '',
    address1: userData?.address ? userData?.address : '',
    city: userData?.city ? userData?.city : '',
    region: userData?.city ? userData?.city : '',
    country: userData?.country ? userData?.country.label : '',
  };
  // Data change if the user change the billingData
  if (!sameBillingAddress)
    dataIsFromForm = {
      name: `${(form?.name ? form.name : '')} ${(form?.last_name ? form.last_name : '')}`,
      phone: form?.phone ? form?.phone : '',
      address1: form?.address ? form?.address : '',
      address2: form?.addressOptional ? form?.addressOptional : '',
      city: form?.city ? form?.city : '',
      region: form?.city ? form?.city : '',
      country: form?.country ? form?.country.label : '',
    };

  return dataIsFromForm;
};

// Calculate the total with the shipping price
export const calculateTotalPayment = (productsCar: CartItem[], shippingData: shippingTypeForm): number => {
  const totalProduct = calculateTotal(productsCar);
  return totalProduct + shippingData.price;
};
