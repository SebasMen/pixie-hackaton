import { products, shoppingCar } from './products';
import { calculator } from './calculator';
import { catalogue } from './catalogue';
import { questions } from './questions';
import { privacy } from './privacy';
import { navBar } from './navbar';
import { footer } from './footer';
import { terms } from './terms';
import { home } from './home';
import { basket } from './basket';
import { checkSubmissionForm } from './checkSubmissionForm';
import { coupon } from './coupon';
import { shipping } from './shipping';
import { payment } from './payment';

export const en = {
  translation: {
    ...navBar,
    ...footer,
    ...home,
    ...catalogue,
    ...products,
    ...shoppingCar,
    ...calculator,
    ...questions,
    ...terms,
    ...privacy,
    ...basket,
    ...checkSubmissionForm,
    ...coupon,
    ...shipping,
    ...payment
  },
};

export default en;
