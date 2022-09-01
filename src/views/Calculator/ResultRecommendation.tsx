import { useState } from 'react';

import RecomendationItem from '../../components/common/recomendationItem/RecomendationItem';
import ColoredScrollbars from '../../components/common/scroll';
import IconButton from '../../components/common/iconButton';
import Button from '../../components/common/button';

import { Product, ResultProduct } from '../../interfaces/product';
import { capitalize } from '../../helpers/capitalize';

import { basket } from '../../assets/vectors';
import useShoppingCar from '../../hooks/useShoppingCar';

const ResultRecommendation = ({ products, grams, quantity }: ResultRecommendationProps) => {
  // Hooks
  const [selected, setSelected] = useState<ResultProduct[]>([]);
  const [productList, setProductList] = useState<ResultProduct[]>(
    products.map(product => ({
      quantity: Math.round((grams / parseInt(product.presentation, 10)) * 30),
      product,
    }))
  );

  const { addRemoveProduct } = useShoppingCar();

  // Handlers
  const toggleSelect = (product: Product, cant?: number) => {
    if (selected.some(res => res.product.id === product.id))
      // Remove product if exist
      setSelected(old => old.filter(res => res.product.id !== product.id));
    // Add product if it no exist
    else setSelected(old => [...old, { product, quantity: cant || 1 }]);
  };

  const updateQuantity = (productId: string, value: number) => {
    // Update only product matched by id
    const newProductList = productList.map(res =>
      res.product.id === productId ? { product: res.product, quantity: value } : res
    );

    // Get selected new products
    const newSelected = newProductList.filter(listed => selected.some(res => res.product.id === listed.product.id));

    // Update state values
    setSelected(newSelected);
    setProductList(newProductList);
  };

  // Prices
  const total = parseInt(
    // Map selected product prices
    selected
      .map(({ product: { price }, quantity }) => parseInt((price * quantity).toString(), 10))
      // Sum all
      .reduce((a, b) => a + b, 0)
      // Stringify result
      .toString(),
    // Convert to 10 base decimal
    10
  );

  // Selected names
  const names = selected.map(({ product: { name } }) => capitalize.all(name)).join(', ');

  // Max quantity
  const maxQuantity = parseInt(
    // Map selected product prices
    selected
      .map(({ quantity }) => parseInt(quantity.toString(), 10))
      // Sum all
      .reduce((a, b) => a + b, 0)
      // Stringify result
      .toString(),
    // Convert to 10 base decimal
    10
  );

  // Save product to car
  const handleAddProductsToShopping = () => {
    selected.forEach(item =>
      addRemoveProduct(item.product, item.quantity)
    );
  };

  // Component
  return (
    <div className='flex flex-col gap-[38px] w-full mb-10 px-5 md:pl-0'>
      <ColoredScrollbars style={{ height: 390 }}>
        {productList.map(listed => (
          <RecomendationItem
            key={listed.product.id}
            data={listed}
            toggle={toggleSelect}
            checked={selected.some(res => res.product.id === listed.product.id)}
            grams={grams}
            updateCant={updateQuantity}
          />
        ))}
      </ColoredScrollbars>
      <div className='flex justify-center lg:mr-5'>
        <div className='flex flex-col flex-shrink-0 justify-center pt-3 pb-4 gap-2 w-full h-auto px-5 rounded-2xl shadow-xl ring-1 ring-[#33B5A9] lg:flex-row lg:h-28 lg:pl-4 lg:pr-6 lg:gap-1 md:py-10'>
          <div className='flex lg:items-center w-full text-left justify-start lg:justify-center lg:w-[20%] h-full  border-b-pixieLightBlue border-r-pixieLightBlue lg:border-r lg:border-b-0'>
            <h2 className='text-pixieLightBlue font-extrabold md:text-xl'>Resumen</h2>
          </div>
          <div className='flex-grow text-sm flex-shrink-0 text-left border-r-pixieLightBlue lg:border-r pr-30 lg:w-[53%] lg:pl-3'>
            <p className='font-sanzBold'>{names}</p>
            <p className='text-pixieLightBlue font-subTitles font-semibold text-[11px] lg:text-sm'>
              {maxQuantity < quantity
                ? `(Te hacen falta ${quantity - maxQuantity} porciones para completar las 4 semanas)`
                : `(Bien has seleccionado ${maxQuantity} porciones)`}
            </p>
          </div>
          <div className='w-full lg:w-[22%] flex flex-col flex-shrink-0 justify-between items-center text-pixieLightBlue md:flex-row md:w-max gap-1 md:gap-6'>
            <div className='flex justify-between lg:flex-col lg:justify-center items-center w-full'>
              <p className='text-sm'>Total</p>
              <p className='font-subTitles font-bold text-lg md:text-xl'>${total}</p>
            </div>
            <div className='hidden md:block'>
              <IconButton
                name='result'
                className='bg-primary scale-75 shadow-[0px_2px_10px_0_rgba(65,65,65,0.4)]'
                img={basket}
                imgClassName='w-9 h-9'
                onClick={handleAddProductsToShopping}
                sizeContainer={'h-14 w-14'}
              />
            </div>
            <div className='w-full md:hidden'>
              <Button className='bg-primary flex gap-4 w-full' rounded={true} onClick={handleAddProductsToShopping}>
                <img src={basket} className={'h-5 w-5'} />
                <span className='md:hidden text-base text-amber-100'>Agregar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ResultRecommendationProps {
  products: Product[];
  quantity: number;
  grams: number;
}

export default ResultRecommendation;
