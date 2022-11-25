import { CartItem } from '../interfaces/basket';
import { addressObject, paymentForm, shippingTypeForm, SubmissionFormInterface } from '../interfaces/checkout';
import { couponComplete } from '../interfaces/coupon';
import { billingDetailsInterface, billingDetailsInterfaceMV, generatePaymentMP, itemsMP } from '../interfaces/payment';
import { calculateIva, calculateTotal, roundToXDigits } from './productHelper';

// Organize the data to send them to the api
// eslint-disable-next-line max-params
export const organiceInformationPaymentMP = (idCustomer: string, userData: SubmissionFormInterface | undefined, products: CartItem[], shippingData: shippingTypeForm, form: paymentForm, sameBillingAddress: boolean, coupon: couponComplete | undefined, location: string): generatePaymentMP => {
  const paymentData: generatePaymentMP = {
    items: organiceProductsMP(products, shippingData, coupon),
    payer: organiceBillingDetailsMP(userData, form, sameBillingAddress),
    auto_return: 'approved',
    shipments: {
      cost: 0,
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
        city: userData?.city ? userData?.city.label : '',
        region: userData?.state.value ? userData?.state.label : '',
        country: userData?.country ? userData?.country.label : '',
        cityValue: userData?.city.value ? userData?.city.value : '',
        regionvalue: userData?.state.value ? userData?.state.value : '',
        countryValue: userData?.country.value ? userData?.country.value : ''
      },
      customer_id: idCustomer,
      delivery_note: userData?.delivery_note ? userData.delivery_note : '',
      billingDetails: organiceBillingDetails(userData, form, sameBillingAddress),
      contactDetails: {
        email: userData?.email ? userData?.email : '',
        firstName: userData?.name ? userData?.name : '',
        lastName: userData?.last_name ? userData?.last_name : '',
        phoneNumber: userData?.phone ? userData?.phone : '',
      },
      details_payments: {
        subTotalNoIva: calculateTotalPayment(products, { type: 'gratis', price: 0 }, false, coupon),
        deliveryPrice: shippingData.price,
        onlyIva: calculateIva(products),
        totalPayment: calculateTotalPayment(products, shippingData, true, coupon)
      },
      couponId: coupon && {
        amount: (getPriceDescount(products, coupon) - calculateTotal(products, false)),
        id: coupon.id,
        code: coupon.claimCode,
        internalCouponName: coupon.internalCoupon.name,
        internalCouponNumber: coupon.internalCoupon.code
      }
    },
    total_amount: calculateTotalPayment(products, shippingData, true, coupon),
    back_urls: {
      failure: 'https://pixie.antpk.co/pago/resultado',
      pending: 'https://pixie.antpk.co/pago/resultado',
      success: 'https://pixie.antpk.co/pago/resultado'
    },
    ticketNumberFree: calculateTotalPayment(products, shippingData, true, coupon) === 0 ? generateTicketNumberFree(location) : undefined
  };

  return paymentData;
};

const organiceProductsMP = (products: CartItem[], shippingData: shippingTypeForm, coupon: couponComplete | undefined) : Array<itemsMP> => {
  const productsArray = products.map(item => {
    const productItem: itemsMP = {
      id: item.product.id,
      description: {
        presentation: item.product.presentation,
        age: item.product.age
      },
      picture_url: item.product.url_image,
      unit_price: Number(item.product.price),

      title: item.product.name,
      quantity: item.quantity,
    };
    return productItem;
  });
  // Add shipping cost
  if (shippingData.price !== 0) {
    const productItem: itemsMP = {
      id: '0',
      description: {
        presentation: 'envio',
        age: 'envio'
      },
      picture_url: '',
      unit_price: 90,
      title: 'Envio',
      quantity: 1,
    };
    productsArray.push(productItem);
  }

  if (coupon) {
    const productItemdiscount: itemsMP = {
      id: '0',
      description: {
        presentation: 'descuento',
        age: 'descuento'
      },
      picture_url: '',
      unit_price: (getPriceDescount(products, coupon) - calculateTotal(products, false)),
      title: 'descuento',
      quantity: 1,
    };
    productsArray.push(productItemdiscount);
    console.log(productItemdiscount.unit_price);
  }

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
    city: userData?.city ? userData?.city.label : '',
    region: userData?.state.value ? userData?.state.label : '',
    country: userData?.country ? userData?.country.label : '',
    cityValue: userData?.city.value ? userData?.city.value : '',
    regionvalue: userData?.state.value ? userData?.state.value : '',
    countryValue: userData?.country.value ? userData?.country.value : ''
  };
  // Data change if the user change the billingData
  if (!sameBillingAddress)
    dataIsFromForm = {
      name: `${(form?.name ? form.name : '')} ${(form?.last_name ? form.last_name : '')}`,
      phone: form?.phone ? form?.phone : '',
      address1: organiceAddressChangeBilling(form),
      city: form?.city?.label ? form?.city.label : '',
      region: form?.state ? form?.state.label : '',
      country: form?.country ? form?.country.label : '',
      cityValue: form.city?.value ? form.city.value : '',
      countryValue: form.country?.value ? form.country.value : '',
      regionvalue: form.state?.value ? form.state.value : ''
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
    zipCode: userData?.zip_code.value,
    colony: userData?.colony,
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
    zipCode: form.zip_code?.value,
    colony: form.colony,
  };

  return JSON.stringify(address);
};

// Calculate the total with the shipping price and iva
export const calculateTotalPayment = (productsCar: CartItem[], shippingData: shippingTypeForm, withIva: boolean, coupon: couponComplete | undefined): number => {
  let totalProduct = calculateTotal(productsCar, !withIva);

  if (coupon)
    switch (coupon?.couponType.key) {
      case 'percent':
        totalProduct = roundToXDigits(totalProduct - (totalProduct * coupon.discount / 100), 2);
        break;
      case 'discount':
        totalProduct = roundToXDigits(totalProduct - coupon.discount, 2);
        break;
      default:
        break;
    }

  // If the product cost > 750 the shipping is free
  if (totalProduct > 750)
    return roundToXDigits(totalProduct, 2);

  return roundToXDigits((totalProduct + shippingData.price), 2);
};

export const getPriceDescount = (productsCar: CartItem[], coupon: couponComplete): number => {
  const totalProduct = calculateTotal(productsCar, false);
  switch (coupon?.couponType.key) {
    case 'percent':
      return roundToXDigits(totalProduct - (totalProduct * coupon.discount / 100), 2);
    case 'discount':
      return roundToXDigits(totalProduct - coupon.discount, 2);
    default:
      break;
  }

  return 0;
};

export const isFormComplete = (data: SubmissionFormInterface, acceptConditions: boolean) => {
  let isFull = true;
  if (data.address === '')
    isFull = false;
  if (data.city?.value === '')
    isFull = false;
  if (data.colony === '')
    isFull = false;
  if (data.country?.value === '')
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
  if (data.state?.value === '')
    isFull = false;
  if (data.zip_code?.value === '')
    isFull = false;
  if (!acceptConditions)
    isFull = false;
  return isFull;
};

const generateTicketNumberFree = (location: string): string => {
  const date = new Date();
  const today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  const locationPs = location === 'USA' ? 'ST' : 'MP';
  // eslint-disable-next-line no-mixed-operators
  const code = `REG-${today}${locationPs}${Math.floor(1000 + Math.random() * 9000)}`;
  return code;
};
