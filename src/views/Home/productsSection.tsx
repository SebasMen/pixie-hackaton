import { useState } from 'react';

import Carrousel from '../../components/common/carrousel';
import Card from '../../components/common/card';
import ProductCard from '../../components/common/productCard';
import Button from '../../components/common/button';

import { Product } from '../../interfaces/product';

import { dogDesktop, vegetables } from '../../assets/images';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  {
    title: 'Lorem ipsum dolor sit amet 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc consectetur purus, eget egestas nisl nunc sed.',
  },
  {
    title: 'Lorem ipsum dolor sit amet 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc consectetur purus, eget egestas nisl nunc sed.',
  },
  {
    title: 'Lorem ipsum dolor sit amet 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc consectetur purus, eget egestas nisl nunc sed.',
  },
  {
    title: 'Lorem ipsum dolor sit amet 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc consectetur purus, eget egestas nisl nunc sed.',
  },
  {
    title: 'Lorem ipsum dolor sit amet 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc consectetur purus, eget egestas nisl nunc sed.',
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
      <img className='hidden absolute bottom-0 right-0 object-none -z-10 transform lg:block xl:bottom-16 xl:right-12 xl:scale-125' src={dogDesktop} />

      {/* Carrousel */}
      <Carrousel onSlideChange={setSelected} className='pt-20 pb-10 px-5' breakpoints={{
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
                className={`${isLeft && 'translate-x-20'} ${isRight && '-translate-x-20'}`}
              />
            );
          })
        }
      </Carrousel>

      {/* Products */}
      <div className='flex flex-wrap justify-center gap-4 gap-y-20 mt-20 p-4 lg:p-24 xl:p-32 xl:justify-start items-start'>
        {products.slice(0, 7).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button className='mt-10 text-red-500 font-bold w-4/5 border-2 border-red-500 md:w-96' onClick={redirectCatalogue}>Ver catálogo</Button>
    </div>
  );
};

interface ProductsSectionProps {
  products: Product[];
}

export default ProductsSection;
