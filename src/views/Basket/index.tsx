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

const Basket = () => {
  // Hooks
  const [showMessage, setShowMessage] = useState(false);
  const [messageDelete, setMessageDelete] = useState('');
  const { products } = useAppContext();

  const navigate = useNavigate();

  // Handlers
  const showMessageDelete = (item: CartItem) => {
    setShowMessage(true);
    setMessageDelete(` Se quitó (${item.quantity}) ${capitalize(item.product.name)} de tu bolsa`);

    setTimeout(() => setShowMessage(false), 2000);
  };

  // Component
  return (
    <Page>
      <div className='px-6 w-full font-paragraph mb-16'>
        <div className='text-left'>
          <span className='text-[25px] font-bold'>Tu canasta</span>
        </div>
        {/* Deleted message */}
        {showMessage && <div className='ring-1 ring-primary w-full px-3 py-2 animate__animated animate__fadeIn'>{messageDelete}</div>}

        <div className='mt-7'>
          {/* Product list */}
          {products.map(item => <ItemShoppingCar key={`item-${item.product.id}`} item={item} showMessageDelete={showMessageDelete} showOptions />)}
        </div>

        {/* Sections */}
        <PromotionalSection />
        <div className='border-b border-primary text-sm font-bold pb-4'>
          <span>RESUMEN DE TU PEDIDO</span>
        </div>
        <TotalSection />
        <div className='flex justify-around mt-[10px] w-full gap-2'>
          <Button className='ring-1 ring-primary text-primary text-base w-2/3' padding='px-[25px] py-[11px]'>
            Seguir comprando
          </Button>
          <Button className='bg-primary text-white w-1/3' padding='px-[25px]' onClick={() => navigate('/checkout')}>
            Siguiente
          </Button>
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default Basket;
