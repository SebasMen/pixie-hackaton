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
      <div className='bg-sixth w-full flex flex-col justify-center items-center rounded-t-3xl pb-9 lg:w-auto lg:rounded-3xl'>
        <div className='w-full flex justify-end px-8 pt-5'>
          <IconButton
            name='close'
            size='3xl'
            className='absolute text-primary'
            onClick={() => handleClosePopup()}
            shadow={false}
            sizeContainer='w-5 h-5'
          />
        </div>
        <div className='px-[23px] text-xl lg:px-[5.6rem] lg:pt-5'>
          <div className='flex gap-4 items-center text-[#7ac5be] '>
            <div className='text-[#7ac5be]'>
              <Icon
                name='done'
                size='3xl'
              />
            </div>
            <span>Tu Pixie se agregó a la canasta</span>
          </div>
          <div className='md:ml-[50px]'>
            <span className='text-sm font-bold font-paragraph md:text-base'>Agrega a tu compra:</span>
          </div>
          <div className='flex scale-75 lg:scale-[0.87] lg:gap-6 '>
            <ProductCard product={products[0]} />
            <ProductCard product={products[1]} />
          </div>
          <div className='flex flex-col w-full text-base gap-3 mt-4 font-sanzBold lg:flex-row-reverse lg:justify-center lg:items-center lg:mt-7 lg:px-[3.5rem] lg:gap-5'>
            <Button className='bg-primary text-[#fad7b1] lg:w-1/2' onClick={handleNavigateBasket}>
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
