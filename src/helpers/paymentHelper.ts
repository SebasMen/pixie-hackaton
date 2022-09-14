import { CartItem } from '../interfaces/basket';
import { addressObject, paymentForm, shippingTypeForm, SubmissionFormInterface } from '../interfaces/checkout';
import { billingDetailsInterface, generatePayment } from '../interfaces/payment';
import { productShort } from '../interfaces/product';
import { calculateIva, calculateTotal, roundToXDigits } from './productHelper';

// Organize the data to send them to the api
// eslint-disable-next-line max-params
export const organiceInformationPayment = (idCustomer: string, tokenId: string, userData: SubmissionFormInterface | undefined, products: CartItem[], shippingData: shippingTypeForm, form: paymentForm, sameBillingAddress: boolean): generatePayment => {
  const dataBilling = organiceBillingDetails(userData, form, sameBillingAddress);

  const paymentData: generatePayment = {
    customer_id: idCustomer,
    delivery_price: shippingData.price,
    details_payments: {
      metadata: {
        subtotalNoIva: calculateTotalPayment(products, shippingData, false),
        iva: 16,
        deliveryPrice: shippingData.price,
        onlyIva: calculateIva(products)
      },
      amount: {
        currency: 'MXN',
        ice: 0,
        iva: 0,
        subtotalIva: 0,
        subtotalIva0: calculateTotalPayment(products, shippingData, true),
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
          address1: organiceAddress(userData),
          city: userData?.city ? userData?.city : '',
          region: userData?.state.value ? userData?.state.value : '',
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
      id: `${item.product.id}`,
      title: item.product.name,
      price: parseInt(String(item.product.price), 10),
      sku: `${item.product.id}`,
      quantity: item.quantity,
      image: item.product.url_image,
      presentation: item.product.presentation
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
    address1: organiceAddress(userData),
    city: userData?.city ? userData?.city : '',
    region: userData?.state.value ? userData?.state.value : '',
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
      region: userData?.state.value ? userData?.state.value : '',
      country: form?.country ? form?.country.label : '',
    };

  return dataIsFromForm;
};

const organiceAddress = (userData:SubmissionFormInterface | undefined): string => {
  const address: addressObject = {
    address: userData?.address,
    houseNumber: userData?.houseNumber,
    apartament: userData?.apartment,
    reference: userData?.reference,
    zipCode: userData?.zip_code,
    colony: userData?.colony,
    delegation: userData?.delegation,
  };

  return JSON.stringify(address);
};

// Calculate the total with the shipping price and iva
export const calculateTotalPayment = (productsCar: CartItem[], shippingData: shippingTypeForm, showIva: boolean): number => {
  const totalProduct = calculateTotal(productsCar);
  const iva = calculateIva(productsCar);
  // If the product cost > 750 the shipping is free
  if (totalProduct > 750)
    if (showIva)
      return totalProduct + iva;
    else
      return roundToXDigits(totalProduct, 2);

  if (showIva)
    return roundToXDigits((totalProduct + shippingData.price + iva), 2);

  return roundToXDigits((totalProduct + shippingData.price), 2);
};

export const isFormComplete = (data: SubmissionFormInterface, acceptConditions: boolean) => {
  let isFull = true;
  if (data.address === '')
    isFull = false;
  if (data.apartment === '')
    isFull = false;
  if (data.city === '')
    isFull = false;
  if (data.colony === '')
    isFull = false;
  if (data.country.value === '')
    isFull = false;
  if (data.delegation === '')
    isFull = false;
  if (data.email === '')
    isFull = false;
  if (data.houseNumber === '')
    isFull = false;
  if (data.last_name === '')
    isFull = false;
  if (data.name === '')
    isFull = false;
  if (data.phone === '')
    isFull = false;
  if (data.state.value === '')
    isFull = false;
  if (data.zip_code === '')
    isFull = false;
  if (!acceptConditions)
    isFull = false;
  return isFull;
};
