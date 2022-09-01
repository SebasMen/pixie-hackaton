import {
  inFillet,
  inIntegralRice,
  inPotatoes,
  inCarrot,
  bean,
  inQuinua,
  inLinaza,
  inVegetableOil,
  inEggs,
  inVitamines,
  inMineral,
} from '../assets/vectors';

export const ingredients = [
  {
    name: 'Corazón de res',
    img: inFillet
  },
  {
    name: 'Pulmón de res',
    img: inFillet
  },
  {
    name: 'Arroz integral',
    img: inIntegralRice
  },
  {
    name: 'Papa',
    img: inPotatoes
  },
  {
    name: 'Zanahoria',
    img: inCarrot
  },
  {
    name: 'Habichuela',
    img: bean
  },
  {
    name: 'inQuinua',
    img: inQuinua
  },
  {
    name: 'inLinaza',
    img: inLinaza
  },
  {
    name: 'Aceite vegetal',
    img: inVegetableOil
  },
  {
    name: 'Huevo',
    img: inEggs
  },
  {
    name: 'inVitaminesas',
    img: inVitamines
  },
  {
    name: 'inMinerales',
    img: inMineral
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

  infoConsumer: {
    DOG: {
      Cachorros: [
        {
          kl: '1-10',
          grams: '60 - 600'
        },
        {
          kl: '11-16',
          grams: '660 - 1560'
        },
        {
          kl: '17-28',
          grams: '1620 - 2880'
        },
      ],
      Adultos: [
        {
          kl: '1-10',
          grams: '30 - 310'
        },
        {
          kl: '11-26',
          grams: '341 - 806'
        },
        {
          kl: '27-48',
          grams: '837 - 1448'
        },
        {
          kl: '49-60',
          grams: '1519 - 1860'
        },
      ],
      Senior: [
        {
          kl: '1-10',
          grams: '28 - 280'
        },
        {
          kl: '11-26',
          grams: '308 - 728'
        },
        {
          kl: '27-48',
          grams: '756 - 1344'
        },
        {
          kl: '49-60',
          grams: '1372 - 1680'
        },
      ],
    },
    CAT: {
      Cachorros: [
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
      Adultos: [
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
      Senior: [
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
    }
  },

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
