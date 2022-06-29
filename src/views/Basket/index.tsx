import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button';
import ItemShoppingCar from '../../components/common/itemShoppingCar';
import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import { capitalize } from '../../helpers/capitalize';
import { calculateTotal } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';
import { Product } from '../../interfaces/product';

const Basket = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageDelete, setMessageDelete] = useState('');
  const { products } = useAppContext();

  const navigate = useNavigate();

  const showMessageDelete = (product: Product) => {
    setShowMessage(true);
    setMessageDelete(` Se quitó (${product.quantitySold}) ${capitalize(product.name)} de tu bolsa`);
  };

  return (
    <Page>
      <div className='px-6 w-full font-paragraph mb-16'>
        <div className='text-left'>
          <span className='text-[25px] font-bold'>Tu canasta</span>
        </div>
        {showMessage && <div className='ring-1 ring-primary w-full px-3 py-2'>{messageDelete}</div>}
        {products.map(product => <ItemShoppingCar key={`item-${product.id}`} product={product} showMessageDelete={showMessageDelete} />)}
        <div className='ring-1 ring-primary rounded-xl flex justify-between px-3 py-3 font-bold text-lg'>
          <span>Total</span>
          <span>${calculateTotal(products)}</span>
        </div>
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
