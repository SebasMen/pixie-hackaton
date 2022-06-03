import Button from '../../components/common/button';
import Icon from '../../components/common/icon';
import Tag from '../../components/common/productCard/tag';
import ProductCounter from './productCounter';

const InfoSection = ({ id }: InfoSectionProps) => {
  // Methods
  const handlePriceChange = (price: number) =>
    console.log(id, price);

  return (
    <div className='flex flex-col w-full md:h-full md:w-1/3'>
      <div className='flex-shrink-0 px-7 md:px-0 md:flex-grow'>
        <Tag name='Cachorros' className='mb-1 mt-2 md:mt-0' />
        <div className='text-2xl font-bold mb-2 md:text-3xl'>
          Pixie carne al horno
        </div>
        <div className='text-base mb-2'>
          Dieta diseñada para perritos mayores de 7 años o con problemas hepáticos o renales
        </div>
        <div className='text-sm text-gray-400	'>
          Licencia de venta ICA #14584-AL
        </div>
      </div>

      {/* Product Counter */}
      <ProductCounter price={1000} onPriceChange={handlePriceChange} />

      {/* Cart Button */}
      <Button className='flex bg-red-600 gap-4 rounded-t-2xl py-4 rounded-b-none w-full md:rounded-b-2xl'>
        <Icon name='shopping_bag' className='text-white' size='3xl' />
        <span className='text-white text-xl'>Agregar a la bolsa</span>
      </Button>

      {/* Calculator */}
      <div className='hidden justify-between mt-5 md:flex '>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <Button className='ring-2 ring-red-600 text-red-500'>Calculadora</Button>
      </div>
    </div>
  );
};

interface InfoSectionProps {
  id: string | undefined
}

export default InfoSection;

