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
    description: 'Nosotros te la llevamlos fresca y cuando la necesites hasta la puerta de tu casa ',
    img: cardHomePets
  },
  {
    title: 'MENOS Y MEJORES HECES: ',
    description: '',
    img: cardHomeStool,
  },
  {
    title: 'COMIDA REAL HORNEADA',
    description: 'Ingredientes de grado humano alimenticio.',
    img: cardHomeFood,
  },
  {
    title: 'DESARROLLADA POR NUTRIÓLOGOS VETERINARIOS:',
    description: 'Comida hecha de manera natural, sin conservadores y con los nutrientes necesarios como proteínas, vegetales y cereales, para una dieta diaria balanceada y saludable.',
    img: cardHomeLoveDog,
  },
  {
    title: 'VARIEDAD DE PRODUCTOS: ',
    description: 'Cada dieta y cada ingrediente, está pensada para cada tamaño, edad, condición física y condición médica.',
    img: cardHomePets2,
  },
];

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const redirectCatalogue = () => navigate('/catalogue');

  return (
    <div className='flex flex-col items-center bg-gray-100 w-full rounded-t-3xl transform -mt-4 pb-20 relative overflow-hidden'>
      {/* Backgrounds */}
      <img className='absolute w-full h-full object-cover object-right -z-20' src={vegetables} />
      <img className='hidden absolute bottom-0 right-0 object-none -z-10 transform lg:block' src={dogDesktop} />
      <div className='hidden lg:block mt-28 text-primary text-3xl mx-72 text-center pb-16'>
        <span>Tu amor de 4 patas debería de comer igual de saludable que toda tu familia.</span>
      </div>
      {/* Carrousel */}
      <Carrousel onSlideChange={setSelected} className='pt-20 pb-10 lg:px-32' breakpoints={{
        100: {
          slidesPerView: 1.7,
          spaceBetween: 0,
        },
        580: {
          slidesPerView: 2,
        },
        720: {
          slidesPerView: 3,
          initialSlide: 2,
        },
        980: {
          slidesPerView: 3.5,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1023: {
          slidesPerView: 2.7,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1536: {
          slidesPerView: 5,
          spaceBetween: 30,
          initialSlide: 2,
        }
      }}>
        {
          cardsData.map((card, i) => {
            const [isLeft, isRight] = [(i < selected - 1), (i > selected + 1)];
            const isFar = (isLeft || isRight);

            return (
              <Card
                key={'card-' + i}
                title={card.title}
                description={card.description}
                selected={selected === i}
                far={isFar}
                img={card.img}
                className={`${isLeft && 'lg:translate-x-20'} ${isRight && 'lg:-translate-x-20'}`}
              />
            );
          })
        }
      </Carrousel>

      {/* Products */}
      <div className='flex flex-wrap justify-center gap-4 gap-y-20 mt-20 p-4 lg:p-24 xl:p-32 xl:justify-between items-start'>
        {products?.slice(0, 7).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        <div className='h-72 w-40 hidden md:w-[269px] md:h-[357px] xl:block' />

      </div>
      <Button className='mt-10 text-red-500 font-bold font-subTitles w-4/5 border-2 border-red-500 md:w-96' onClick={redirectCatalogue}>Ver catálogo</Button>
    </div>
  );
};

interface ProductsSectionProps {
  products: Product[] | undefined;
}

export default ProductsSection;
