import ExtraInfo from './ExtraInfo';
import { extraInfo } from '../../@fake/detailFake';
import { Product } from '../../interfaces/product';
import { useEffect, useState } from 'react';
import { tableCachorro, tableCachorroWhite } from '../../assets/images';
import { useAppContext } from '../../hooks';
import useScrolled from '../../hooks/useScrolled';
import { useTranslation } from 'react-i18next';

const ExtraInfoContainer = ({ product }: ExtraInfoContainerProps) => {
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
  const { updateContext } = useAppContext();
  const { scrollTo } = useScrolled();

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

  const handleShowTable = () => {
    updateContext(old => ({ ...old, showPopupViewerImage: { show: true, url: tableCachorroWhite } }));
    scrollTo(0);
  };

  return (
    <div className='hidden md:flex md:flex-col mt-1 w-full'>
      <div className='flex gap-4 mb-8'>
        <div className='rounded-lg w-1/2 text-sm pl-12 pr-16 bg-fifth'>
          <div className='py-7'>
            <h2 className='text-lg font-bold text-fourth text-left'>{t('productsInfoTitle')}</h2>
          </div>
          <h3 className='pb-8 pl-5 text-left'>
            <ExtraInfo type='list' infoList={product.benefits} />
          </h3>
        </div>
        <div className='rounded-lg text-sm	w-1/2 px-16 bg-fifth'>
          <div className='pt-7 pb-1'>
            <h2 className='text-lg font-bold text-fourth text-left'>{t('productsInfoTable')}</h2>
          </div>
          <h3 className='pb-8 text-left'>
            {product.age.toLocaleLowerCase() === 'cachorros' ? (
              <div className='mt-7 flex flex-col items-center gap-4 cursor-pointer' onClick={handleShowTable}>
                <img src={tableCachorro} />
                <span className='text-sm font-sanzBold'>{t('productsInfoTableButton')}</span>
              </div>
            ) : (
              <ExtraInfo type='table' infoTable={tableInfo} nameTable={nameTable} />
            )}
          </h3>
        </div>
      </div>
      <div className='flex justify-around rounded-lg px-16 bg-fifth'>
        <div className='w-2/5'>
          <div className='py-7'>
            <h2 className='text-lg font-bold text-fourth text-left'>{t('productsInfoComp')}</h2>
          </div>
          <h3 className='pb-8 pl-5 text-left'>
            <ExtraInfo type='list' infoList={product.nutrition_information} />
          </h3>
        </div>
        <div className='w-3/5'>
          <div className='py-7'>
            <h2 className='text-lg font-bold text-fourth text-left'>{t('productsInfoCons')}</h2>
          </div>
          <h3 className='pb-8 text-left'>
            <ExtraInfo type='conservation' infoConservation={product.recommendation_for_use} />
          </h3>
        </div>
      </div>
    </div>
  );
};

interface ExtraInfoContainerProps {
  product: Product;
}

export default ExtraInfoContainer;
