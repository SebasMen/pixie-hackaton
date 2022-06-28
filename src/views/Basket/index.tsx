import ItemShoppingCar from '../../components/common/itemShoppingCar';
import Page from '../../components/layout/page';
import { useAppContext } from '../../hooks';

const Basket = () => {
  const { products } = useAppContext();
  return (
    <Page>
      <div className='px-6 w-full'>
        <div className='text-left '>
          <span className='text-[25px]'>Tu canasta</span>
        </div>
        <div>
          {products.map(product => <ItemShoppingCar key={`item-${product.id}`} product={product} />)}
        </div>
      </div>
    </Page>
  );
};

export default Basket;
