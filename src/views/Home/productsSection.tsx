import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Carrousel from '../../components/common/carrousel';
import Card from '../../components/common/card';
import ProductCard from '../../components/common/productCard';
import Button from '../../components/common/button';

import { Product } from '../../interfaces/product';

import { dogDesktop, vegetables } from '../../assets/images';
import { cardHomePets, cardHomeStool, cardHomeFood, cardHomeLoveDog, cardHomePets2 } from '../../assets/vectors';

const cardsData = [
  {
    title: 'DIRECTO A TU CASA:',
    description: 'Nosotros te llevamos la comida fresca y cuando la necesites hasta la puerta de tu casa.',
    img: cardHomePets,
  },
  {
    title: 'MENOS Y MEJORES HECES: ',
    description: `Por su alta digestibilidad los perros y gatos absorben
                  de mejor forma los nutrientes por lo que recogerás menos popós.`,
    img: cardHomeStool,
  },
  {
    title: 'COMIDA REAL HORNEADA',
    description: `Cumpliendo nuestro propósito de generar bienestar aseguramos
                  que solo usamos los mejores ingredientes de grado humano dentro del rollo.`,
    img: cardHomeFood,
  },
  {
    title: 'DESARROLLADA POR NUTRIÓLOGOS VETERINARIOS:',
    description: `Sin conservadores y con los nutrientes necesarios para
                  una dieta diaria balanceada y saludable.`,
    img: cardHomeLoveDog,
  },
  {
    title: 'VARIEDAD DE PRODUCTOS: ',
    description:
      'Cada dieta y cada ingrediente, está pensada para cada tamaño, edad, condición física y condición médica.',
    img: cardHomePets2,
  },
];

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const redirectCatalogue = () => navigate('/catalogue');

  return (
    <div className='flex flex-col items-center bg-gray-100 w-full rounded-t-3xl transform -mt-4 pb-[4.5rem] relative overflow-hidden'>
      {/* Backgrounds */}
      <img className='absolute w-full h-full object-cover object-right -z-20' src={vegetables} />
      <div className='hidden absolute bottom-0 -z-10 left-[0] right-[0] m-auto w-full max-w-[1440px] lg:block xl2:w-[1440px]'>
        <img className='absolute bottom-0 right-0 object-none' src={dogDesktop} />
      </div>
      <div className='hidden lg:block mt-28 text-primary text-3xl mx-72 text-center pb-16'>
        <span>Tu amor de 4 patas debería de comer igual de saludable que toda tu familia.</span>
      </div>
      {/* Carrousel */}
      <Carrousel
        onSlideChange={setSelected}
        className='pt-10 pb-10 h-max lg:px-28 max-w-[1440px]'
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
          }
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
              className={`${isLeft && 'lg2:translate-x-16 xl2:translate-x-12'} ${isRight && 'lg2:-translate-x-16 xl2:-translate-x-12'}`}
            />
          );
        })}
      </Carrousel>

      {/* Products */}
      <div className='flex flex-wrap justify-center items-start gap-4 gap-y-[4.3rem] mt-36 p-4 lg:pt-10 lg:px-36 lg:pb-12 xl:justify-between 2xl:p-32 max-w-[1440px]'>
        {products?.slice(0, 7).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        <div className='h-[357px] w-[16.815rem] hidden xl:block' />
      </div>
      <Button
        className='mt-10 mb-10 text-primary font-bold font-sanzBold w-4/5 border border-primary md:w-80 lg:mb-12 xl:-ml-[19rem] 2xl:-ml-[21rem]'
        onClick={redirectCatalogue}
      >
        Ver más opciones
      </Button>
    </div>
  );
};

interface ProductsSectionProps {
  products: Product[] | undefined;
}

export default ProductsSection;
