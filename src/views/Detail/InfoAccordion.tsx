import ItemAccordion from '../../components/common/itemAccordion';
import { extraInfo } from '../../@fake/detailFake';

const InfoAccordion = () => (
  <ul className='w-full md:px-24 md:hidden bg-fifth'>
    <ItemAccordion name='Beneficios y Características' infoList={extraInfo.infoBenefits} type='list'/>
    <ItemAccordion name='Instrucciones de Alimentación' infoTable={extraInfo.infoConsumer} type='table'/>
    <ItemAccordion name='Beneficios y Características' infoList={extraInfo.infoComposition} type='list'/>
    <ItemAccordion name='Composición Garantizada-MS%' infoConservation={extraInfo.conservatioInfo} type='conservation'/>
  </ul>
);

export default InfoAccordion;
