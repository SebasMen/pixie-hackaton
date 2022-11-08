import { separateByCommas, separateByCommasAndParenthesis } from './productHelper';
import {
  inLeg,
  inChickenMeat,
  bean,
  inMineral,
  inFillet,
  inTurkeyMeat,
  inIntegralRice,
  inPotatoes,
  inCarrot,
  inSpinach,
  inQuinua,
  inLinaza,
  inVegetableOil,
  inEggs,
  inVitamines,
  inBatata,
  inInstarchCassava,
  inTilapia,
  inWater,
  inFishOil,
  inSpirulina,
  inCarobtree,
  inOatmeAlflakes,
  inJelly,
  inWheatFlour,
  inRabbitMeat,
  inFlourOats,
  inPeanutButter,
  inhoneyBees,
  inMango,
  inPeanut,
  inYogurt,
  inBanana,
  atDigestibility,
  atNaturalIngredients,
  atHighVitamine,
  atHightProbiotics,
  atLowProtein,
  atGlutenFree,
  atFreshNatural,
  atSensitiveAllergic,
  atHighProtein,
  atKidneyCare,
  atHighEnergy,
  atRefreshing,
} from '../assets/vectors';
import { attributesType, ingredientesProps } from '../interfaces/product';

// Order nutrient adjunting with his image
export const organizeIngredients = (ingredients: string): Array<ingredientesProps> => {
  const arrayIngredients = separateByCommasAndParenthesis(ingredients);
  const ingredientGroup = organizateIngredientsGroup(arrayIngredients);
  return ingredientGroup;
};

export const organizeAttributes = (attributes: string): Array<attributesType> => {
  let arrayAttributes = separateByCommas(attributes);
  // Delete one element because is the same icon
  if (arrayAttributes.find(element => element === 'Fresco') && arrayAttributes.find(element => element === 'natural'))
    arrayAttributes = arrayAttributes.filter(item => item !== 'Fresco');
  const objectAttributes: Array<attributesType> = [];
  arrayAttributes.forEach(item => objectAttributes.push(switchOrganiceAttributes(item)));
  return objectAttributes;
};

// eslint-disable-next-line complexity
const switchOrganiceIngredients = (ingredient: string) => {
  const objectIngredient = {
    name: ingredient,
    img: '',
  };

  if (ingredient.toLocaleLowerCase().includes('quinua')) {
    objectIngredient.img = inQuinua;
    objectIngredient.name = 'quinua';
  }

  if (ingredient.toLocaleLowerCase().includes('quinoa')) {
    objectIngredient.img = inQuinua;
    objectIngredient.name = 'Quinoa';
  }

  if (ingredient.toLocaleLowerCase().includes('harina de quinua')) {
    objectIngredient.img = inQuinua;
    objectIngredient.name = 'Harina de quinua';
  }

  if (ingredient.toLocaleLowerCase().includes('batata')) {
    objectIngredient.img = inBatata;
    objectIngredient.name = 'Batata';
  }

  if (ingredient.toLocaleLowerCase().includes('hígado de res')) {
    objectIngredient.img = inFillet;
    objectIngredient.name = 'Hígado de Res';
  }

  if (ingredient.toLocaleLowerCase().includes('harina de arroz')) {
    objectIngredient.img = inIntegralRice;
    objectIngredient.name = 'Harina de Arroz';
  }

  if (ingredient.toLocaleLowerCase().includes('cacahuate')) {
    objectIngredient.img = inPeanut;
    objectIngredient.name = 'Cacahuate';
  }

  if (ingredient.toLocaleLowerCase().includes('yogurt')) {
    objectIngredient.img = inYogurt;
    objectIngredient.name = 'Yogurt';
  }

  switch (ingredient.trim().toLocaleLowerCase()) {
    case 'carne de cordero':
      objectIngredient.img = inLeg;
      break;
    case 'carne de pollo':
      objectIngredient.img = inChickenMeat;
      break;
    case 'carne de pavo':
      objectIngredient.img = inTurkeyMeat;
      break;
    case 'arroz integral':
      objectIngredient.img = inIntegralRice;
      break;
    case 'papa':
      objectIngredient.img = inPotatoes;
      break;
    case 'zanahoria':
      objectIngredient.img = inCarrot;
      break;
    case 'espinaca y/o ejotes':
      objectIngredient.img = inSpinach;
      break;
    case 'linaza':
      objectIngredient.img = inLinaza;
      break;
    case 'aceite vegetal':
      objectIngredient.img = inVegetableOil;
      break;
    case 'almidón de mandioca':
      objectIngredient.img = inInstarchCassava;
      break;
    case 'tilapia':
      objectIngredient.img = inTilapia;
      break;
    case 'agua':
      objectIngredient.img = inWater;
      break;
    case 'aceite de pescado':
      objectIngredient.img = inFishOil;
      break;
    case 'espirulina':
      objectIngredient.img = inSpirulina;
      break;
    case 'harina de algarrobo':
      objectIngredient.img = inCarobtree;
      break;
    case 'avena en hojuelas':
      objectIngredient.img = inOatmeAlflakes;
      break;
    case 'gelatina':
      objectIngredient.img = inJelly;
      break;
    case 'harina de trigo integral':
      objectIngredient.img = inWheatFlour;
      break;
    case 'carne de conejo':
      objectIngredient.img = inRabbitMeat;
      break;
    case 'harina de avena':
      objectIngredient.img = inFlourOats;
      break;
    case 'crema de cacahuate':
      objectIngredient.img = inPeanutButter;
      break;
    case 'miel de abejas':
      objectIngredient.img = inhoneyBees;
      break;
    case 'mango':
      objectIngredient.img = inMango;
      break;
    case 'huevo de gallina':
      objectIngredient.img = inEggs;
      break;
    case 'huevo':
      objectIngredient.img = inEggs;
      break;
    case 'banano':
      objectIngredient.img = inBanana;
      break;
    case 'habichuela':
      objectIngredient.img = bean;
      break;
    default:
      break;
  }

  return objectIngredient;
};

const switchOrganiceAttributes = (attribute: string): attributesType => {
  const objectAttributes: attributesType = {
    name: attribute,
    img: '',
  };

  if (attribute.toLocaleLowerCase().includes('digestiva')) {
    objectAttributes.img = atSensitiveAllergic;
    objectAttributes.name = 'digestiva';
  }

  switch (attribute.trim().toLocaleLowerCase()) {
    case 'alta digestibilidad':
      objectAttributes.img = atDigestibility;
      break;
    case 'ingredientes naturales':
      objectAttributes.img = atNaturalIngredients;
      break;
    case 'rico en vitaminas':
      objectAttributes.img = atHighVitamine;
      break;
    case 'rico en probioticos':
      objectAttributes.img = atHightProbiotics;
      break;
    case 'bajo en proteína':
      objectAttributes.img = atLowProtein;
      break;
    case 'libre de gluten':
      objectAttributes.img = atGlutenFree;
      break;
    case 'fresco':
      objectAttributes.img = atFreshNatural;
      break;
    case 'alto en proteína':
      objectAttributes.img = atHighProtein;
      break;
    case 'cuidado hepatico y renal':
      objectAttributes.img = atKidneyCare;
      break;
    case 'alta energía':
      objectAttributes.img = atHighEnergy;
      break;
    case 'refrescante':
      objectAttributes.img = atRefreshing;
      break;
    default:
      break;
  }

  return objectAttributes;
};

export const calculatePageNutrients = (
  ingredients: ingredientesProps[],
  divideNumber: number
): ingredientesProps[][] => {
  const ingredientsFilter = ingredients.filter(item => item.img);
  const ingredientsTotal: ingredientesProps[][] = [];
  let currentPosition = 0;

  ingredientsFilter?.forEach((ingredient, index) => {
    if (ingredientsFilter.length > currentPosition && currentPosition === index) {
      const page = ingredientsFilter?.slice(currentPosition, currentPosition + divideNumber);
      ingredientsTotal.push(page);
      currentPosition += divideNumber;
    }
  });

  return ingredientsTotal;
};

const organizateIngredientsGroup = (ingredients: string[]): Array<ingredientesProps> => {
  const objectIngredients: ingredientesProps[] = [];

  const minerales = ['hierro', 'yodo', 'cobre', 'selenio', 'zinc'];
  const carnes = ['carne de res', 'corazón de res', 'pulmón de res'];
  const vitaminas = ['A', 'D', 'E', 'B1', 'B2', 'B3', 'B5', 'B6', 'B8', 'B9', 'B12', 'Colina'];

  ingredients.forEach(item => {
    const objectIngredient: ingredientesProps = {
      name: '',
      img: '',
      tooltip: '',
    };

    if (minerales.includes(item.toLocaleLowerCase().trim())) {
      const index = objectIngredients.findIndex(item => item.name === 'Minerales');
      if (index === -1) {
        objectIngredient.img = inMineral;
        objectIngredient.name = 'Minerales';
        objectIngredient.tooltip += `${item.trim()}, `;
        objectIngredients.push(objectIngredient);
      } else objectIngredients[index].tooltip += `${item.trim()}, `;
    } else if (carnes.includes(item.toLocaleLowerCase().trim())) {
      const index = objectIngredients.findIndex(item => item.name === 'Carnes');
      if (index === -1) {
        objectIngredient.img = inFillet;
        objectIngredient.name = 'Carnes';
        // Provitional while the ingredient data is update in the DB
        if (item.toLocaleLowerCase().trim() === 'carne de res') objectIngredient.tooltip += 'Res, ';
        else objectIngredient.tooltip += `${item.trim()}, `;
        objectIngredients.push(objectIngredient);
        // eslint-disable-next-line brace-style
      }
      // Provitional while the ingredient data is update in the DB
      else if (item.toLocaleLowerCase().trim() === 'carne de res') objectIngredients[index].tooltip += 'Res, ';
      else objectIngredients[index].tooltip += `${item.trim()}, `;
    } else if (vitaminas.find(vitaminItem => vitaminItem === item.trim())) {
      const index = objectIngredients.findIndex(item => item.name === 'Vitaminas');
      if (index === -1) {
        objectIngredient.img = inVitamines;
        objectIngredient.name = 'Vitaminas';
        objectIngredient.tooltip += `${item.trim()}, `;
        objectIngredients.push(objectIngredient);
      } else objectIngredients[index].tooltip += `${item.trim()}, `;
    } else objectIngredients.push(switchOrganiceIngredients(item));
  });
  return objectIngredients;
};
