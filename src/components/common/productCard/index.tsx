import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../hooks';
import { useShoppingCar } from '../../../hooks/useShoppingCar';

import AddRemoveItem from '../addRemoveItem/AddRemoveItem';
import IconButton from '../iconButton';
import Tag from './tag';

import { Product } from '../../../interfaces/product';
import { transformAge } from '../../../helpers/productHelper';
import { capitalize } from '../../../helpers/capitalize';

import { basket, tagCatGray, tagDogGray, notImage } from '../../../assets/vectors/index';
import { transformUrlGDrive } from '../../../helpers/imgHelper';
import Tooltiped from '../tooltiped';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { anHoverBasket } from '../../../assets/json';

export const ProductCard = ({ product, showControls = true, className, isCarrousel, selected, showHeader = true, showDetailInPopup = false }: ProductCardProps) => {
  // Hooks
  const navigate = useNavigate();
  const ages = transformAge(product);
  const { updateContext } = useAppContext();
  const { addRemoveProduct } = useShoppingCar();
  const [isMobile, setIsMobile] = useState(false);
  const [counter, setCounter] = useState(1);
  const [clickBasket, setClickBasket] = useState(false);
  const [showHoverComingSoon, setShowHoverComingSoon] = useState(false);

  useEffect(() => {
    if (screen.width < 800)
      setIsMobile(true);
  }, [screen.width]);

  // Handle
  const handleSubmit = () => {
    updateContext(old => ({ ...old, productView: product }));
    if (showDetailInPopup)
      updateContext(old => ({ ...old, showPopup: true }));
    else
      navigate('/product/detail/' + product.id);
  };

  const handleChange = () => {
    addRemoveProduct(product, counter);
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
    if (newCount > product.quantity)
      newCount = product.quantity;
    setCounter(counter => newCount);
  };

  // Component
  return (
    <div
      className={`
          relative flex flex-col flex-shrink-0 justify-between items-center
          h-[15.5rem] w-40 md:w-[16.815rem] md:h-[380px]
          ${className}
        `}
    >
      <div
        className={`
          relative flex flex-col flex-shrink-0 justify-between items-center 
          cursor-pointer p-3 pb-8 rounded-2xl bg-white 
          ring-0 ring-pixieLightBlue transform transition-all 
          ${isCarrousel && (selected ? 'scale-150 lg:scale-100' : 'scale-125 lg:scale-90')}
          w-full h-full lg:pb-11
          hover:ring-1 ${className}
        `}
        onClick={handleSubmit}
        onMouseOver={() => setShowHoverComingSoon(true)}
        onMouseLeave={() => setShowHoverComingSoon(false)}
      >
        <div className={`${!showHeader && 'hidden'} flex justify-between w-full mb-2 relative z-30`}>
          <div className='flex items-start justify-center gap-1 absolute left-1 pr-9'>
            {ages.map((age, index) => (
              <Tag key={`${product.id}-age-${age}`} name={age} className='w-full' sizeTags={ages.length}/>
            ))}
          </div>
          <IconButton.mini
            img={product.kind_pet === 'CAT' ? tagCatGray : tagDogGray}
            name={product.name + '-tag-' + product.kind_pet}
            className={`text-pixieLightBlue p-1 shadow-none md:mr-1 absolute right-0 md:right-1
            ${product.kind_pet === 'CAT' ? 'bg-[#FFB88A]' : 'bg-[#F7EBA8]'}`}
            imgClassName='brightness-[0.30] opacity-80'
            onClick={() => console.log(product.kind_pet)}
          />
        </div>
        <div className='flex-grow overflow-hidden rounded-md'>
          {product.url_image === '' ? (
            <img src={notImage} className='w-24 h-24 md:w-36 md:h-36' />
          ) : (
            <img src={transformUrlGDrive(product.url_image)} className='w-full h-36 md:w-[15.7rem] md:h-[15.7rem] top-[0.75rem] object-contain right-0 transform transition-all duration-200 hover:scale-[2.2]' />
          )}
        </div>
        <div className={'text-center text-xs md:text-lg w-full'}>
          {product.name.length > 22 && !isMobile
            ?
            <Tooltiped label={product.name}>
              <h4 className='text-pixieLightBlue mb-1'>{capitalize(product.name.slice(0, 22) + '...')}</h4>
            </Tooltiped>
            :
            <h4 className={`${product.name.length > 22 && 'leading-none'} text-pixieLightBlue mb-1`}>{capitalize(product.name)}</h4>
          }
          {product.status !== '2' &&
          <div className='flex items-center justify-between px-4'>
            <p className='font-sanzBold text-base md:text-xl flex flex-col'>
              <span>${product.price}{' '}</span>
              <span className='text-xs font-semibold hidden lg:inline-flex '>{product.presentation.toLocaleLowerCase()}</span>
            </p>
            {showControls && (
              <div className='w-16 h-6 md:w-20 md:h-8'>
                <AddRemoveItem handleChance={addCounter} counter={counter} onhandleChangeInput={onChangeValue}/>
              </div>
            )}
          </div>
          }
        </div>
      </div>

      {(showControls && product.status !== '2') && (
        <div className={`${clickBasket ? 'bottom-[-4.5rem] md:bottom-[-4.3rem]' : 'bg-primary md:-bottom-4 shadow-[0_2px_10px_0_rgba(65,65,65,0.4)]'} absolute -bottom-[1rem] text-white z-40 rounded-full`}>
          { clickBasket
            ?
            <Lottie animationData={anHoverBasket} loop={true} className='w-36 h-36 md:w-36 md:h-36'/>
            :
            <IconButton.mini
              imgClassName='w-6 h-6 md:w-7 md:h-7'
              sizeContainer='w-[35px] h-[35px] md:w-[43px] md:h-[43px] '
              img={basket}
              name='basket'
              type='outlined'
              size='xs'
              onClick={() => handleChange()}
            />
          }
        </div>
      )}
      { product.status === '2' &&
        <div className={`absolute -bottom-[1rem] text-primary z-40 rounded-full bg-[#FFF6EC] shadow-md
        text-[10px] md:text-xs px-3 py-2 md:px-5 md:md:py-4 ${showHoverComingSoon ? 'ring-1 ring-pixieLightBlue' : 'ring-0'}`}>
          <span>Proximamente</span>
        </div>
      }
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  showControls?: boolean;
  className?: string;
  isCarrousel? : boolean;
  selected?: boolean;
  showHeader?: boolean;
  showDetailInPopup?: boolean;
}

export default ProductCard;
