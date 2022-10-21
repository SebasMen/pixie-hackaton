import { products, shoppingCar } from './products';
import { calculator } from './calculator';
import { catalogue } from './catalogue';
import { questions } from './questions';
import { privacy } from './privacy';
import { navBar } from './navbar';
import { footer } from './footer';
import { terms } from './terms';
import { home } from './home';

export const es = {
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
  },
};

export default es;
