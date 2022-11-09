import ItemAccordion from '../../components/common/itemAccordion';
import { extraInfo } from '../../@fake/detailFake';
import { Product } from '../../interfaces/product';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const InfoAccordion = ({ product }: InfoAccordionProps) => {
  // Hooks
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [nameTable, setNameTable] = useState('');
  const [tableInfo, setTableInfo] = useState([
    {
      kl: '',
      grams: '',
    },
  ]);

  useEffect(() => {
    if (product.kind_pet === 'DOG')
      switch (product.age) {
        case 'Cachorros':
          setTableInfo(extraInfo.infoConsumer.DOG.Cachorros);
          setNameTable(`${t('productsInfoPuppiesRange')}`);
          break;
        case 'Adultos':
          setTableInfo(extraInfo.infoConsumer.DOG.Adultos);
          setNameTable(`${t('productsInfoAdultsRange')}`);
          break;
        case 'Senior':
          setTableInfo(extraInfo.infoConsumer.DOG.Senior);
          setNameTable(`${t('productsInfoSeniorRange')}`);
          break;

        default:
          break;
      }
    else
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

        default:
          break;
      }
  }, [language]);

  return (
    <ul className='w-full md:px-24 md:hidden bg-fifth'>
      <ItemAccordion name='Beneficios y Características' infoList={product.benefits} type='list' />
      {product.age.toLocaleLowerCase() === 'cachorros' ? (
        <ItemAccordion name={t('productsInfoIngr')} type='tableCachorro' />
      ) : (
        <ItemAccordion name={t('productsInfoIngr')} infoTable={tableInfo} nameTable={nameTable} type='table' />
      )}
      <ItemAccordion
        name={t('productsInfoComp')}
        infoList={product.nutrition_information}
        type='list'
      />
      <ItemAccordion
        name={t('productsInfoCons')}
        infoConservation={product.recommendation_for_use}
        type='conservation'
      />
    </ul>
  );
};

interface InfoAccordionProps {
  product: Product;
}

export default InfoAccordion;
