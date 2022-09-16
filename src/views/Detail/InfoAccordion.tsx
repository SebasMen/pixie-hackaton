import ItemAccordion from '../../components/common/itemAccordion';
import { extraInfo } from '../../@fake/detailFake';
import { Product } from '../../interfaces/product';
import { separateByCommas } from '../../helpers/productHelper';
import { useEffect, useState } from 'react';

const InfoAccordion = ({ product }:InfoAccordionProps) => {
  const [nameTable, setNameTable] = useState('');
  const [tableInfo, setTableInfo] = useState([{
    kl: '',
    grams: ''
  }]);

  useEffect(() => {
    if (product.kind_pet === 'DOG')
      // eslint-disable-next-line default-case
      switch (product.age) {
        case 'Cachorros':
          setTableInfo(extraInfo.infoConsumer.DOG.Cachorros);
          setNameTable(`${product.age} de 2 a 12 meses`);
          break;
        case 'Adultos':
          setTableInfo(extraInfo.infoConsumer.DOG.Adultos);
          setNameTable(`${product.age} de 1 a 6 años`);
          break;
        case 'Senior':
          setTableInfo(extraInfo.infoConsumer.DOG.Senior);
          setNameTable(`${product.age} de 7 años en adelante`);
          break;
      }
    else
      // eslint-disable-next-line default-case
      switch (product.age) {
        case 'Cachorros':
          setTableInfo(extraInfo.infoConsumer.CAT.Cachorros);
          break;
        case 'Adultos':
          setTableInfo(extraInfo.infoConsumer.CAT.Adultos);
          break;
        case 'Senior':
          setTableInfo(extraInfo.infoConsumer.CAT.Senior);
          break;
      }
  }, []);

  return (
    <ul className='w-full md:px-24 md:hidden bg-fifth'>
      <ItemAccordion name='Beneficios y Características' infoList={separateByCommas(product.benefits)} type='list'/>
      {product.age.toLocaleLowerCase() === 'cachorros'
        ?
        <ItemAccordion name='Instrucciones de Alimentación' type='tableCachorro'/>
        :
        <ItemAccordion name='Instrucciones de Alimentación' infoTable={tableInfo} nameTable={nameTable} type='table'/>
      }
      <ItemAccordion name='Composición Garantizada-MS%' infoList={separateByCommas(product.nutrition_information)} type='list'/>
      <ItemAccordion name='Conservación del producto' infoConservation={product.recommendation_for_use} type='conservation'/>
    </ul>
  );
};

interface InfoAccordionProps{
  product: Product
}

export default InfoAccordion;
