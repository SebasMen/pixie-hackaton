import ItemAccordion from '../../components/common/itemAccordion';

const infoTemp = [
  'Mejor condición de pelaje y piel.',
  'Dieta balanceada que ayuda a reestablecer y fortalecer el funcionamiento hepático de tu mascota.',
  'Mascotas saludables y longevas.',
  'Mejor digestión y absorción del alimento.',
  'Mejor transito gastrointestinalMayor desarrollo muscular.',
  'Mayor desarrollo muscular.',
  'Menor grasa corporal.',
  'Mejor actitud al comer.',
  'Fortalece el sistema inmune.',
  'Mascotas más activas y enérgicas.',
  'Detoxificación de su organismo.',
  'Reducción en la cantidad de deposiciones.',
];

const InfoAccordion = () => (
  <ul className='w-full md:px-24 md:hidden'>
    <ItemAccordion name='Beneficios y Características' info={infoTemp}/>
    <ItemAccordion name='Instrucciones de Alimentación' info={infoTemp}/>
    <ItemAccordion name='Composición Garantizada-MS%' info={infoTemp}/>
    <ItemAccordion name='Conservación del producto' info={infoTemp}/>
  </ul>
);

export default InfoAccordion;
