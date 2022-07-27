import { separateByCommas } from './productHelper';
import {
  fillet,
  rice,
  potato,
  carrot,
  bean,
  quinua,
  linaza,
  vegetableOil,
  egg,
  vitamin,
  mineral,
} from '../assets/vectors';
import { ingredientesProps } from '../interfaces/product';

export const organizeIngredients = (ingredients: string): Array<ingredientesProps> => {
  const arrayIngredients = separateByCommas(ingredients);
  const objectIngredients: Array<ingredientesProps> = [];
  arrayIngredients.forEach(item => objectIngredients.push(switchOrganiceIngredients(item)));
  return objectIngredients;
};

const switchOrganiceIngredients = (ingredient: string) => {
  const objectIngredient = {
    name: ingredient,
    img: ''
  };

  if (ingredient.includes('Vitaminas')) {
    objectIngredient.img = vitamin;
    objectIngredient.name = 'Vitaminas';
  }

  switch (ingredient.trim()) {
    case 'Carne de Res':
      objectIngredient.img = fillet;
      break;
    case 'Corazón de Res':
      objectIngredient.img = fillet;
      break;
    case 'Pulmón de Res':
      objectIngredient.img = fillet;
      break;
    case 'Arroz integral':
      objectIngredient.img = rice;
      break;
    case 'Zanahoria':
      objectIngredient.img = carrot;
      break;
    case 'Quinoa':
      objectIngredient.img = quinua;
      break;
    case 'Huevo de gallina':
      objectIngredient.name = 'Huevo';
      objectIngredient.img = egg;
      break;
    case 'Aceite Vegetal':
      objectIngredient.img = vegetableOil;
      break;
    case 'Linaza':
      objectIngredient.img = linaza;
      break;
    case ('Hierro' || 'Yodo' || 'Cobre' || 'Selenio'):
      objectIngredient.name = 'Minerales';
      objectIngredient.img = mineral;
      break;
    case 'Habichuela':
      objectIngredient.img = bean;
      break;
    case 'Papa':
      objectIngredient.img = potato;
      break;
    default:
      break;
  }

  return objectIngredient;
};

