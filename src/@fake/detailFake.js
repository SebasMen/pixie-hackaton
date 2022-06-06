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

export const ingredients = [
  {
    name: 'Corazón de res',
    img: fillet
  },
  {
    name: 'Pulmón de res',
    img: fillet
  },
  {
    name: 'Arroz integral',
    img: rice
  },
  {
    name: 'Papa',
    img: potato
  },
  {
    name: 'Zanahoria',
    img: carrot
  },
  {
    name: 'Habichuela',
    img: bean
  },
  {
    name: 'Quinua',
    img: quinua
  },
  {
    name: 'Linaza',
    img: linaza
  },
  {
    name: 'Aceite vegetal',
    img: vegetableOil
  },
  {
    name: 'Huevo',
    img: egg
  },
  {
    name: 'Vitaminas',
    img: vitamin
  },
  {
    name: 'Minerales',
    img: mineral
  },
];

export const extraInfo = {
  infoBenefits: [
    'Mejor condición de pelaje y piel.',
    'Dieta balanceada que ayuda a reestablecer y fortalecer el funcionamiento hepático de tu mascota.',
    'Mascotas saludables y longevas.',
    'Mejor digestión y absorción del alimento.',
    'Mejor transito gastrointestinal',
    'Mayor desarrollo muscular.',
    'Menor grasa corporal.',
    'Mejor actitud al comer.',
    'Fortalece el sistema inmune.',
    'Mascotas más activas y enérgicas.',
    'Detoxificación de su organismo.',
    'Reducción en la cantidad de deposiciones.',
  ],

  infoConsumer: [
    {
      kl: '1-10',
      grams: '40 - 200'
    },
    {
      kl: '11-16',
      grams: '40 - 200'
    },
    {
      kl: '27-48',
      grams: '40 - 200'
    },
    {
      kl: '1-10',
      grams: '49 - 60'
    },
  ],

  infoComposition: [
    'Proteína Min 20%',
    'Grasa Min 9%',
    'Ceniza Max 2,5%',
    'Fibra Max 3,5%',
    'Humedad Max 59,2%',
  ],
  conservatioInfo: {
    frozen: 'hasta su fecha de vencimiento (Aprox 4 meses desde su fabricación',
    cooled: `Refrigerado: El rollito cerrado dura más tiempo en una temperatura maxima de 4 grados centígrados. 
    Una vez abierto debe guardarse en recipiente hermético y consumir en el menor tiempo posible.
    Lo ideal es que mantengas el producto congelado y vayas pasando al refrigerador a medida que necesites. Aunque el producto está diseñado para mantenerse en refrigeración (Max. 4 grados) la nevera en casa suele abrirse mucho impidiendo que esa temperatura se mantenga. Por eso, congélalo y mantienes en refrigeración solo lo del día!`
  }
};
