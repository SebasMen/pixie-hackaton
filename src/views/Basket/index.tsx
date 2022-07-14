import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ItemShoppingCar from '../../components/common/itemShoppingCar';
import Button from '../../components/common/button';
import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import PromotionalSection from './PromotionalSection';
import TotalSection from './TotalSection';

import { CartItem } from '../../interfaces/basket';
import { capitalize } from '../../helpers/capitalize';
import { useAppContext } from '../../hooks';
import { basketRed } from '../../assets/vectors/';

const Basket = () => {
  // Hooks
  const [showMessage, setShowMessage] = useState(false);
  const [messageDelete, setMessageDelete] = useState('');
  const { products } = useAppContext();

  const navigate = useNavigate();

  // Handlers
  const showMessageDelete = (item: CartItem) => {
    setShowMessage(true);
    setMessageDelete(`(${item.quantity}) ${capitalize(item.product.name)}`);

    setTimeout(() => setShowMessage(false), 2000);
  };

  // Component
  return (
    <Page className='bg-sixth'>
      <div className='px-6 w-full mb-16 max-w-[1440px] tracking-[-0.55px] lg:px-32 lg:pt-5'>
        <div className='flex gap-5 lg:pl-4'>
          <img src={basketRed} />
          <span className='text-primary text-[25px] lg:text-[36px] tracking-[-1.5px]'>Tu canasta</span>
        </div>
        <div className='lg:flex lg:mt-14'>
          <div className='lg:w-1/2'>
            {/* Deleted message */}
            {showMessage && <div className='font-subTitles text-fourth w-full animate__animated animate__fadeIn pb-4 tracking-normal lg:pl-4'>Se quitó <span className='underline font-sanzBold'>{messageDelete}</span> al horno de tu bolsa</div>}

            <div className='border-b border-[#a4a09b] lg:pb-5'>
              {/* Product list */}
              {products.map(item => <ItemShoppingCar key={`item-${item.product.id}`} item={item} showMessageDelete={showMessageDelete} showOptions />)}
            </div>

            {/* Sections */}
            <PromotionalSection />
          </div>

          <div className='lg:w-1/2'>
            <div className='bg-white lg:ml-[8.5rem] lg:pl-6 lg:pr-8 lg:pb-8 lg:pt-5 lg:rounded-xl'>
              <div className='border-b border-primary text-sm font-bold pb-4 lg:border-b-0 lg:text-base'>
                <span className='text-primary'>RESUMEN DE TU PEDIDO</span>
              </div>
              <TotalSection />
              <div className='flex justify-around text-lg mt-[10px] w-full gap-3 lg:mt-5'>
                <Button className='font-subTitles ring-1 ring-primary text-primary text-base w-[54%]'>
                  Seguir comprando
                </Button>
                <Button className='font-sanzSemiBold bg-primary text-white w-[46%] tracking-normal' onClick={() => navigate('/checkout')}>
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default Basket;
