import { useEffect, useState } from 'react';
import Carrousel from '../../components/common/carrousel';
import Icon from '../../components/common/icon';
import { Product } from '../../interfaces/product';
import productService from '../../services/productService';

const BannerDetail = ({ id } : BannerDetailProps) => {
  const [product, setproduct] = useState<Product>({
    description: 'undefined',
    id: '0',
    name: 'no registrado',
    price: 0,
    tag: {
      name: 'cachorros',
      key: '1'
    },
    quantity: 1,
    totalPrice: 0
  });

  // Product
  useEffect(() => {
    productService.searchProduct(id).then(product => setproduct(product)).catch(product => setproduct(product));
  }, [id]);

  return (
    <div className='flex flex-col w-full overflow-hidden h-full px-7 md:w-2/3 md:px-0 lg:hidden'>
      <Carrousel bulletsDirection='vertical' className='flex-grow flex-shrink-0' slidesPerView={1} centeredSlides={false} spaceBetween={0} >
        <div className='flex w-full h-full items-center justify-center bg-gray-100'>
          <img src={product.img} className='w-96 h-96'/>
        </div>
        <div className='flex w-full h-full items-center justify-center bg-gray-100'>
          <Icon name='landscape' className='text-gray-500' size='3xl' />
        </div>
      </Carrousel >
    </div>
  );
};

interface BannerDetailProps{
  id: string | undefined
}

export default BannerDetail;
