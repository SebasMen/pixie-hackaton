import ExtraInfo from './ExtraInfo';

const infoBenefits = [
  'Mejor condición de pelaje y piel.',
  'Dieta balanceada que ayuda a reestablecer y fortalecer el funcionamiento hepático de tu mascota.',
  'Mascotas saludables y longevas.',
  'Mejor digestión y absorción del alimento.',
  'Mejor transito gastrointestinal',
  'Mayor desarrollo muscular.',
  'Mayor desarrollo muscular.',
  'Menor grasa corporal.',
  'Mejor actitud al comer.',
  'Fortalece el sistema inmune.',
  'Mascotas más activas y enérgicas.',
  'Detoxificación de su organismo.',
  'Reducción en la cantidad de deposiciones.',
];

const infoConsumer = [
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
];

const infoComposition = [
  'Proteína Min 20%',
  'Grasa Min 9%',
  'Ceniza Max 2,5%',
  'Fibra Max 3,5%',
  'Humedad Max 59,2%',
];
const conservatioInfo = {
  frozen: 'hasta su fecha de vencimiento (Aprox 4 meses desde su fabricación',
  cooled: `Refrigerado: El rollito cerrado dura más tiempo en una temperatura maxima de 4 grados centígrados. 
  Una vez abierto debe guardarse en recipiente hermético y consumir en el menor tiempo posible.
  Lo ideal es que mantengas el producto congelado y vayas pasando al refrigerador a medida que necesites. Aunque el producto está diseñado para mantenerse en refrigeración (Max. 4 grados) la nevera en casa suele abrirse mucho impidiendo que esa temperatura se mantenga. Por eso, congélalo y mantienes en refrigeración solo lo del día!`
};

const ExtraInfoContainer = () => (
  <div className='hidden md:flex md:flex-col mt-7 w-full'>
    <div className='flex justify-between gap-4 mb-8 mx-24'>
      <div className='bg-red-100 rounded-lg text-sm px-16'>
        <span className='text-lg font-bold'>Beneficios y Características:</span>
        <ExtraInfo type='list' infoList={infoBenefits} />
      </div>
      <div className='bg-red-100 rounded-lg text-sm	px-16'>
        <span className='text-lg font-bold'>Tabla consumo en gramos diarios:</span>
        <ExtraInfo type='table' infoTable={infoConsumer}/>
      </div>
    </div>
    <div className='flex justify-around bg-red-100 rounded-lg px-16 mx-24'>
      <div className='w-1/3'>
        <span className='text-lg font-bold'>Composición Garantizada-MS%</span>
        <ExtraInfo type='list' infoList={infoComposition}/>
      </div>
      <div className='w-2/3'>
        <span className='text-lg font-bold'>Conservación del producto</span>
        <ExtraInfo type='conservation' infoConservation={conservatioInfo} />
      </div>
    </div>

  </div>
);

export default ExtraInfoContainer;
