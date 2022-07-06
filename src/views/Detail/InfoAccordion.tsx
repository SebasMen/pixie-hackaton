import ItemAccordion from '../../components/common/itemAccordion';
import { extraInfo } from '../../@fake/detailFake';
import { Product } from '../../interfaces/product';
import { separateByCommas } from '../../helpers/productHelper';

const InfoAccordion = ({ product }:InfoAccordionProps) => (
  <ul className='w-full md:px-24 md:hidden bg-fifth'>
    <ItemAccordion name='Beneficios y Características' infoList={separateByCommas(product.benefits)} type='list'/>
    <ItemAccordion name='Instrucciones de Alimentación' infoTable={extraInfo.infoConsumer} type='table'/>
    <ItemAccordion name='Composición Garantizada-MS%' infoList={separateByCommas(product.nutrition_information)} type='list'/>
    <ItemAccordion name='Conservación del producto' infoConservation={extraInfo.conservatioInfo} type='conservation'/>
  </ul>
);

interface InfoAccordionProps{
  product: Product
}

export default InfoAccordion;
