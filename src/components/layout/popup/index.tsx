import Icon from '../../common/icon';
import ProductCard from '../../common/productCard';
import { products } from '../../../@fake/productsFake';
import Button from '../../common/button';
import IconButton from '../../common/iconButton';
import { useAppContext } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
  // Hooks
  const { updateContext } = useAppContext();
  const navigate = useNavigate();

  const handleClosePopup = () => {
    updateContext(old => ({ ...old, showPopup: false }));
  };

  const handleNavigateBasket = () => {
    handleClosePopup();
    navigate('/basket');
  };

  return (
    <div className='fixed z-1000 flex items-end justify-center -top-[10px] -left-1 -right-1 -bottom-[10px] bg-[#000000b6] lg:-left-[10px] lg:-right-[10px] lg:items-center'>
      <div className='bg-white w-full flex flex-col justify-center items-center rounded-t-3xl pb-7 lg:w-auto lg:rounded-3xl'>
        <div className='w-full flex justify-end px-4 pt-4'>
          <IconButton
            name='close'
            size='md'
            onClick={() => handleClosePopup()}
            shadow={false}
            sizeContainer='w-5 h-5'
          />
        </div>
        <div className='px-[23px] text-[17px] lg:px-20'>
          <div className='flex gap-3'>
            <Icon
              name='done'
            />
            <span>Tu Pixie se agregó a la canasta</span>
          </div>
          <span className='text-sm lg:ml-4'>Agrega a tu compra:</span>
          <div className='flex scale-75 lg:scale-100'>
            <ProductCard product={products[0]} />
            <ProductCard product={products[1]} />
          </div>
          <div className='flex flex-col w-full gap-3 mt-4 lg:flex-row-reverse lg:justify-center lg:items-center'>
            <Button className='bg-primary text-white lg:w-1/2' onClick={handleNavigateBasket}>
              Ver canasta
            </Button>
            <Button className='ring-1 ring-primary text-primary lg:w-1/2' onClick={handleClosePopup}>
              Seguir comprando
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

};



export default Popup;
