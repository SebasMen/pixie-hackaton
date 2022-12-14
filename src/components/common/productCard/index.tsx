/* eslint-disable complexity */
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../hooks';
import { useShoppingCar } from '../../../hooks/useShoppingCar';

import AddRemoveItem from '../addRemoveItem/AddRemoveItem';
import IconButton from '../iconButton';
import Tag from './tag';

import { Product } from '../../../interfaces/product';
import { roundToXDigits, transformAge } from '../../../helpers/productHelper';
import { capitalize } from '../../../helpers/capitalize';

import { basket, tagCatGray, tagDogGray, notImage } from '../../../assets/vectors/index';
import Tooltiped from '../tooltiped';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { anHoverBasket } from '../../../assets/json';
import { useTranslation } from 'react-i18next';

export const ProductCard = ({
  product,
  showControls = true,
  className,
  isCarrousel,
  selected,
  showHeader = true,
  showDetailInPopup = false,
}: ProductCardProps) => {
  // Hooks
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const ages = transformAge(product);
  const { updateContext } = useAppContext();
  const { addRemoveProduct } = useShoppingCar();
  const [isMobile, setIsMobile] = useState(false);
  const [counter, setCounter] = useState(1);
  const [clickBasket, setClickBasket] = useState(false);
  const [showHoverComingSoon, setShowHoverComingSoon] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (screen.width < 800) setIsMobile(true);
  }, [screen.width]);

  // Handle
  const handleSubmit = () => {
    updateContext(old => ({ ...old, productView: product }));
    if (showDetailInPopup)
      updateContext(old => ({ ...old, showPopup: true }));
    else
    if (location.pathname.includes('catalogo'))
      navigate(`${location.pathname}/detalle/` + product.key);
    else
      navigate('/producto/detalle/' + product.key);
  };

  const handleChange = () => {
    addRemoveProduct(product, counter);
    setCounter(1);
    setClickBasket(true);
    setTimeout(() => {
      setClickBasket(false);
    }, 1000);
  };

  const addCounter = (value: number) => {
    const newCount = counter + value;

    if (newCount < 1 || newCount > product.quantity) return;

    setCounter(counter => counter + value);
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCount = parseInt(e.target.value, 10);
    if (newCount > product.quantity) newCount = product.quantity;
    setCounter(counter => newCount);
  };

  const isEs = language === 'es';
  const productName = isEs ? product.name : product.name_en;

  // Component
  return (
    <div
      className={`
          relative flex flex-col flex-shrink-0 justify-between items-center
          h-[15.5rem] smaller:w-48 w-40 md:w-[16.815rem] md:h-[380px]
          2xl1:w-[19.815rem] 2xl1:h-[414px] gt-product-cart
          ${className} 
        `}
    >
      <div
        className={`
          relative flex flex-col flex-shrink-0 justify-between items-center 
          cursor-pointer p-3 pb-8 rounded-2xl bg-white
          ring-0 ring-pixieLightBlue transform transition-all 
          ${isCarrousel && (selected ? 'scale-150 lg:scale-100' : 'scale-125 lg:scale-90')}
          w-full h-full lg:pb-11 hover:ring-1 
          ${product.status === '2' && 'opacity-60'}
          ${className}
        `}
        onClick={handleSubmit}
        onMouseOver={() => setShowHoverComingSoon(true)}
        onMouseLeave={() => setShowHoverComingSoon(false)}
      >
        <div className={`${!showHeader && ''} flex justify-between w-full mb-2 relative z-30`}>
          <div className='flex items-start justify-center gap-1 absolute left-1 pr-9'>
            {ages.map(age => (
              <Tag key={`${product.id}-age-${age}`} name={age} className='w-full' sizeTags={ages.length} />
            ))}
          </div>
          <IconButton.mini
            img={product.kind_pet === 'CAT' ? tagCatGray : tagDogGray}
            name={productName + '-tag-' + product.kind_pet}
            className={`text-pixieLightBlue p-1 shadow-none md:mr-1 absolute right-0 md:right-1 w-full h-full
            ${product.kind_pet === 'CAT' ? 'bg-[#FFB88A]' : 'bg-[#F7EBA8]'}`}
            imgClassName='brightness-[0.30] opacity-80'
            onClick={() => console.log(product.kind_pet)}
          />
        </div>
        <div className='flex-grow overflow-hidden rounded-md'>
          {product.url_image === '' ? (
            <img src={notImage} className='w-24 h-24 md:w-36 md:h-36' />
          ) : (
            <img
              src={`https://pixie-antpack.s3.amazonaws.com/${product.url_image}`}
              className='w-full h-36 md:w-[15.7rem] md:h-[15.7rem] top-[0.75rem] object-contain right-0 transform transition-all duration-200 hover:scale-[2.2]'
            />
          )}
        </div>
        <div className={'text-center text-xs md:text-lg w-full'}>
          {productName && (productName.length > 22 && !isMobile) ? (
            <Tooltiped label={productName}>
              <h4 className='text-pixieLightBlue mb-1'>{capitalize(productName.slice(0, 22) + '...')}</h4>
            </Tooltiped>
          ) : (
            <h4 className={`${productName && (productName?.length > 22) && 'leading-none'} text-pixieLightBlue mb-1`}>
              {capitalize(productName ? productName : '')}
            </h4>
          )}
          {product.status !== '2' && (
            <div className='flex items-center justify-between px-4'>
              <p className='font-sanzBold text-base md:text-xl flex flex-col'>
                <span>${roundToXDigits(product.price, 2)} </span>
                <span className='text-xs font-semibold hidden lg:inline-flex '>
                  {product.presentation.toLocaleLowerCase()}
                </span>
              </p>
              {showControls && (
                <div className='w-16 h-6 md:w-20 md:h-8'>
                  <AddRemoveItem handleChance={addCounter} counter={counter} onhandleChangeInput={onChangeValue} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showControls && product.status !== '2' && (
        <div
          className={`${
            clickBasket
              ? 'bottom-[-3.9rem] md:bottom-[-4.3rem]'
              : 'bg-primary md:-bottom-4 shadow-[0_2px_10px_0_rgba(65,65,65,0.4)]'
          } absolute -bottom-[1rem] text-white z-40 rounded-full`}
        >
          {clickBasket ? (
            <Lottie animationData={anHoverBasket} loop={true} className='w-32 h-32 md:w-36 md:h-36' />
          ) : (
            <IconButton.mini
              imgClassName='w-6 h-6 md:w-7 md:h-7'
              sizeContainer='w-[35px] h-[35px] md:w-[43px] md:h-[43px] tg-basket-product-card'
              img={basket}
              name='basket'
              type='outlined'
              size='xs'
              onClick={() => handleChange()}
            />
          )}
        </div>
      )}
      {product.status === '2' && (
        <div
          className={`
            absolute -bottom-[1rem] text-primary z-40 rounded-full bg-[#FFF6EC] shadow-md
            text-[10px] md:text-xs px-3 py-2 md:px-5 md:md:py-4 
            ${showHoverComingSoon ? 'ring-1 ring-pixieLightBlue' : 'ring-0'}
          `}
        >
          <span>{t('productsSoonButton')}</span>
        </div>
      )}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  showControls?: boolean;
  className?: string;
  isCarrousel?: boolean;
  selected?: boolean;
  showHeader?: boolean;
  showDetailInPopup?: boolean;
}

export default ProductCard;
