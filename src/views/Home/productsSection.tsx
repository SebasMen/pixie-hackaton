import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Carrousel from '../../components/common/carrousel';
import Card from '../../components/common/card';
import ProductCard from '../../components/common/productCard';
import Button from '../../components/common/button';

import { Product } from '../../interfaces/product';

import { dogDesktop, vegetables } from '../../assets/images';
import { homeIconCard, poopIconCard, foodIconCard, dogIconCard, catIconCard } from '../../assets/vectors';
import { homeCardCats, homeCardFood, homeCardHold, homeCardHouse, homeCardPoop } from '../../assets/json';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../hooks';
import ProductCardCombo from '../../components/common/productCardCombo';

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  // Hooks
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const { location } = useAppContext();

  const redirectCatalogue = () => navigate('/catalogo');

  // Cards
  const cardsData = useMemo(
    () => [
      {
        title: t('card1Title'),
        description: t('card1Descr'),
        img: homeIconCard,
        imgSelected: homeCardHouse,
      },
      {
        title: t('card2Title'),
        description: t('card2Descr'),
        img: poopIconCard,
        imgSelected: homeCardPoop,
      },
      {
        title: t('card3Title'),
        description: t('card3Descr'),
        img: foodIconCard,
        imgSelected: homeCardFood,
      },
      {
        title: t('card4Title'),
        description: t('card4Descr'),
        img: dogIconCard,
        imgSelected: homeCardHold,
      },
      {
        title: t('card5Title'),
        description: t('card5Descr'),
        img: catIconCard,
        imgSelected: homeCardCats,
      },
    ],
    [language]
  );

  return (
    <div className='pt-8 flex flex-col items-center bg-gray-100 w-full rounded-t-3xl transform md:-mt-4 md:pt-0 pb-[4.5rem] relative overflow-hidden'>
      {/* Backgrounds */}
      <img className='absolute w-full h-full object-cover object-right -z-20' src={vegetables} />
      <div className='hidden absolute bottom-0 -z-10 left-[0] right-[0] m-auto w-full lg:block'>
        <img className='absolute bottom-0 right-0 object-none' src={dogDesktop} />
      </div>
      <div className='hidden lg:block mt-28 text-pixieLightBlue text-3xl mx-72 text-center pb-16'>
        <span>{t('homeCardsTitle')}</span>
      </div>
      {/* Carrousel */}
      <Carrousel
        onSlideChange={setSelected}
        className='pt-16 md:pt-10 pb-10 h-max lg:px-28 max-w-[1440px]'
        breakpoints={{
          300: {
            slidesPerView: 1.7,
            initialSlide: 2,
          },
          460: {
            slidesPerView: 1.7,
            initialSlide: 2,
          },
          580: {
            slidesPerView: 2,
            initialSlide: 2,
          },
          720: {
            slidesPerView: 3,
            initialSlide: 2,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30,
            initialSlide: 2,
          },
          900: {
            slidesPerView: 3.5,
            spaceBetween: 30,
            initialSlide: 2,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 0,
            initialSlide: 2,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
            initialSlide: 2,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
            initialSlide: 2,
          },
          1366: {
            slidesPerView: 4.3,
            spaceBetween: 0,
            initialSlide: 2,
          },
        }}
      >
        {cardsData.map((card, i) => {
          const [isLeft, isRight] = [i < selected - 1, i > selected + 1];
          const isFar = isLeft || isRight;

          return (
            <Card
              key={'card-' + i}
              title={card.title}
              description={card.description}
              selected={selected === i}
              far={isFar}
              img={card.img}
              imgselected={card.imgSelected}
              className={`${isLeft && 'lg2:translate-x-16 xl2:translate-x-12'} ${
                isRight && 'lg2:-translate-x-16 xl2:-translate-x-12'
              } cursor-pointer mb-12`}
            />
          );
        })}
      </Carrousel>

      {/* Products */}
      <div className='hidden lg:block my-12 text-pixieLightBlue text-3xl mx-72 text-center'>
        <span>{t('homeProductsTitle')}</span>
      </div>
      <div className='flex flex-wrap justify-center items-start gap-4 gap-y-[4.3rem] mt-20 md:mt-0 p-4 lg:px-36 lg:pb-12 xl:justify-between 2xl:pb-32 2xl:px-32 max-w-[1880px]'>
        {location === 'USA' &&
          <ProductCardCombo key='createCombo'/>
        }
        {products?.slice(0, location === 'USA' ? 6 : 7).map((product, index) =>
          <ProductCard key={product.id} product={product} />
        )}
        <div className='h-[357px] w-[16.815rem] hidden xl:block' />
      </div>
      <Button
        className='mt-10 mb-10 text-primary font-bold font-sanzBold w-4/5 border border-primary md:w-80 lg:mb-12 xl:-ml-[19rem] 2xl:-ml-[21rem]'
        onClick={redirectCatalogue}
      >
        {t('homeCatalogueButton')}
      </Button>
    </div>
  );
};

interface ProductsSectionProps {
  products: Product[] | undefined;
}

export default ProductsSection;
