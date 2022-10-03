import { CartItem } from '../interfaces/basket';
import { addressObject, paymentForm, shippingTypeForm, SubmissionFormInterface } from '../interfaces/checkout';
import { billingDetailsInterface, billingDetailsInterfaceMV, generatePaymentMP, itemsMP } from '../interfaces/payment';
import { calculateIva, calculateTotal, roundToXDigits } from './productHelper';

// Organize the data to send them to the api
// eslint-disable-next-line max-params
export const organiceInformationPaymentMP = (idCustomer: string, userData: SubmissionFormInterface | undefined, products: CartItem[], shippingData: shippingTypeForm, form: paymentForm, sameBillingAddress: boolean): generatePaymentMP => {
  const paymentData: generatePaymentMP = {
    items: organiceProductsMP(products),
    payer: organiceBillingDetailsMP(userData, form, sameBillingAddress),
    auto_return: 'approved',
    shipments: {
      cost: shippingData.price,
      mode: shippingData.type,
      receiver_address: {
        apartment: `${userData?.apartment}`,
        city_name: `${userData?.city}`,
        country_name: `${userData?.country.value}`,
        floor: `${userData?.houseNumber}`,
        state_name: `${userData?.state.value}`,
        street_name: `${userData?.address}`,
        street_number: `${userData?.reference}`,
        zip_code: `${userData?.zip_code}`
      }
    },
    metadata: {
      shippingDetails: {
        name: `${(userData?.name ? userData.name : '')} ${(userData?.last_name ? userData.last_name : '')}`,
        phone: userData?.phone ? userData?.phone : '',
        address1: organiceAddress(userData),
        city: userData?.city ? userData?.city : '',
        region: userData?.state.value ? userData?.state.value : '',
        country: userData?.country ? userData?.country.label : '',
      },
      customer_id: idCustomer,
      billingDetails: organiceBillingDetails(userData, form, sameBillingAddress),
      contactDetails: {
        email: userData?.email ? userData?.email : '',
        firstName: userData?.name ? userData?.name : '',
        lastName: userData?.last_name ? userData?.last_name : '',
        phoneNumber: userData?.phone ? userData?.phone : '',
      },
      details_payments: {
        subTotalNoIva: calculateTotalPayment(products, { type: 'gratis', price: 0 }, false),
        deliveryPrice: shippingData.price,
        onlyIva: calculateIva(products),
        totalPayment: calculateTotalPayment(products, shippingData, true)
      },
    },
    total_amount: calculateTotalPayment(products, shippingData, true),
    back_urls: {
      failure: 'http://localhost:3001/checkout/result',
      pending: 'http://localhost:3001/checkout/result',
      success: 'http://localhost:3001/checkout/result'
    },
  };

  return paymentData;
};

const organiceProductsMP = (products: CartItem[]) : Array<itemsMP> => {
  const productsArray = products.map(item => {
    const productItem: itemsMP = {
      id: item.product.id,
      description: {
        description: item.product.description,
        presentation: item.product.presentation,
        age: item.product.age
      },
      picture_url: item.product.url_image,
      unit_price: item.product.price,

      title: item.product.name,
      quantity: item.quantity,
    };
    return productItem;
  });
  return productsArray;
};

const organiceBillingDetailsMP = (userData: SubmissionFormInterface | undefined, form:paymentForm, sameBillingAddress: boolean) => {
  // Data base
  let dataIsFromForm: billingDetailsInterfaceMV = {
    name: `${(userData?.name ? userData.name : '')}`,
    surname: `${(userData?.last_name ? userData.last_name : '')}`,
    phone: {
      area_code: 'MX',
      number: `${userData?.phone ? userData?.phone : ''}`
    },
    address: {
      street_name: organiceAddress(userData),
      zip_code: `${userData?.zip_code ? userData?.zip_code : ''}`,
      street_number: 0,
    },
    email: `${userData?.email ? userData.email : ''}`
  };
  // Data change if the user change the billingData
  if (!sameBillingAddress)
    dataIsFromForm = {
      name: `${(form?.name ? form.name : '')}`,
      surname: `${(form?.last_name ? form.last_name : '')}`,
      phone: {
        area_code: 'MX',
        number: `${form?.phone ? form?.phone : ''}`
      },
      address: {
        street_name: organiceAddressChangeBilling(form),
        zip_code: `${form?.zip_code ? form?.zip_code : ''}`,
        street_number: 0,
      },
      email: `${form?.email ? form.email : ''}`
    };

  return dataIsFromForm;
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
      address1: organiceAddressChangeBilling(form),
      city: form?.city ? form?.city : '',
      region: form?.state ? form?.state.value : '',
      country: form?.country ? form?.country.label : '',
    };

  return dataIsFromForm;
};

// Organice address to send JSONObject with all information
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

// Organice address to send JSONObject with all information when the billingAddress is changed
const organiceAddressChangeBilling = (form:paymentForm): string => {
  const address: addressObject = {
    address: form.address,
    houseNumber: form.houseNumber,
    apartament: form.apartment,
    reference: form.reference,
    zipCode: form.zip_code,
    colony: form.colony,
    delegation: form.delegation,
  };

  return JSON.stringify(address);
};

// Calculate the total with the shipping price and iva
export const calculateTotalPayment = (productsCar: CartItem[], shippingData: shippingTypeForm, withIva: boolean): number => {
  const totalProduct = calculateTotal(productsCar, !withIva);

  // If the product cost > 750 the shipping is free
  if (totalProduct > 750)
    return roundToXDigits(totalProduct, 2);

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
