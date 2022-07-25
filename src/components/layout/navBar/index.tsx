import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import ShoppingCar from '../shoppingCar';
import IconButton from '../../common/iconButton';
import Icon from '../../common/icon';
import Button from '../../common/button';
import Menu from './menu';

import { useAppContext } from '../../../hooks';

import { basket, logoFooter, searchIcon } from '../../../assets/vectors';
import { logo } from '../../../assets/images';
import { NavItem } from './navItem';

export const NavBar = () => {
  // Hooks
  const navigate = useNavigate();
  const { products, showNavbar, updateContext } = useAppContext();
  const { pathname } = useLocation();

  const [showShoppingCar, setShowShoppingCar] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean | null>(null);

  // Methods
  const toHome = () => navigate('/');

  const toggleCollapsed = () => setCollapsed(old => !old);
  const toogleShoppingCar = () => {
    updateContext(old => ({ ...old, marginWhatsApp: !showShoppingCar }));
    setShowShoppingCar(!showShoppingCar);
  };

  // Constants
  const isCatalogue = pathname.includes('/catalogue');
  const isBasket = pathname.includes('/basket');
  const isCheckout = pathname.includes('/checkout');
  const isCalculator = pathname.includes('/calculator');

  const itemsBlack = ['/catalogue', '/basket', '/checkout', '/calculator'];
  const showItemsBlack = itemsBlack.map(rute => pathname.includes(rute));

  const itemsLogoBlack = ['/catalogue'];
  const showLogoBlack = itemsLogoBlack.map(rute => pathname.includes(rute));
  const pixie = showLogoBlack.includes(true) ? logoFooter : logo;
  const color = (isCatalogue || isCalculator || isCheckout || isBasket ? 'grayText' : 'primary') || 'grayText';

  if (!showNavbar) return <></>;

  // Component
  return (
    <div className='w-full relative  max-w-[1440px]'>
      {/* Mobile Menu */}
      <Menu collapsed={collapsed} toggle={toggleCollapsed} />

      {/* Cart */}
      <ShoppingCar onClose={toogleShoppingCar} show={showShoppingCar} />

      <div className='flex justify-between w-full items-center md:items-start py-4 px-2 overflow-hidden md:py-5 md:justify-start md:gap-10 lg:px-12 '>
        {/* Menu Toggle */}
        <div className={`flex-shrink-0 md:hidden text-${color}`}>
          <IconButton name='menu' size='3xl' shadow={false} onClick={toggleCollapsed} className='-scale-x-125 -scale-y-125' />
        </div>

        {/* Logo */}
        <div className='w-14 flex-shrink-0 flex justify-center items-center md:w-[6.75rem] md:justify-start md:pt-2'>
          <img src={pixie} className='w-full cursor-pointer' onClick={toHome} />
        </div>

        {/* Content */}
        <div className='flex flex-col flex-grow-0 md:flex-grow'>
          {/* Top */}
          <div className={`w-full hidden text-${color} gap-[22px] md:flex md:flex-row md:justify-end md:items-center md:pt-[0.20rem]`}>
            {color === 'grayText' ? (
              <Button
                rounded
                className='font-sanzBold bg-transparent border-grayText border-[1px] leading-[17px] text-sm md:mr-2'
                padding='py-[0.19rem] px-[1.19rem]'
              >
                Ingresar
              </Button>
            ) : (
              <Button
                rounded
                className='font-sanzBold bg-transparent border-primary border-[1px] leading-[17px] text-sm md:mr-2'
                padding='py-[0.19rem] px-[1.19rem]'
              >
                Ingresar
              </Button>
            )}
            <div className='flex items-center justify-center text-sm '>
              <span className='font-subTitles'>EN</span>
              <span className='font-extrabold font-subTitles'> &nbsp;|&nbsp;</span>
              <span className='font-subTitles font-black'>ES</span>
            </div>
          </div>

          {/* Bottom */}
          <div className={`flex flex-grow-0 items-top w-full md:flex-grow text-${color} md:pt-4 `}>
            {/* Social */}
            <div className='hidden md:flex md:flex-row md:space-x-10 md:w-2/3 md:ml-4 md:pt-[0.40rem]'>
              <Icon.awesome icon='fa-facebook-f' size='3xl' />
              <Icon.awesome icon='fa-instagram' size='3xl' />
              <Icon.awesome icon='fa-twitter' size='3xl' />
            </div>

            {/* Items */}
            <div className='w-1/3 flex-grow justify-end gap-2 md:pt-0 md:flex md:flex-row md:w-auto lg:gap-6'>
              {/* Navs */}
              <div className='hidden md:flex md:flex-row justify-between md:gap-7 md:mr-6'>
                <NavItem name='Tienda' path='/catalogue' color={color} />
                <NavItem name='Calculadora' path='/calculator' color={color} />
              </div>

              {/* Buttons */}
              <div className='hidden md:flex md:flex-row md:justify-end'>
                <IconButton.mini
                  img={searchIcon}
                  name={searchIcon}
                  type='outlined'
                  imgClassName={`${showItemsBlack.includes(true) && 'w-8 h-8 brightness-200'} w-7 h-7`}
                  sizeContainer={'w-11 h-11 md:w-[42px] md:h-[42px]'}
                  className={`mr-4 md:mr-0 bg-${color} p-[10px]`}
                  size='xs'
                  shadow={false}
                  onClick={() => toogleShoppingCar()}
                  color={showItemsBlack.includes(true) ? undefined : '#df2f44'}
                />
              </div>

              <div className='flex-shrink-0 flex justify-end lg:mr-1'>
                <IconButton.mini
                  img={basket}
                  name={basket}
                  type='outlined'
                  imgClassName={`${showItemsBlack.includes(true) && 'w-8 h-8 brightness-200'} w-7 h-7`}
                  sizeContainer={'w-11 h-11 md:w-[42px] md:h-[42px]'}
                  className={`mr-4 md:mr-0 bg-${color}`}
                  size='md'
                  shadow={false}
                  onClick={() => toogleShoppingCar()}
                  color={showItemsBlack.includes(true) ? undefined : '#df2f44'}
                />
                {products.length > 0 && (
                  <div
                    className={`flex w-5 h-5 font-subTitles text-xs rounded-full
                     absolute justify-center items-center  text-white top-[3.1rem] right-6
                     md:right-4 lg:right-[49px] md:top-[5.85rem] animate__animated animate__bounceIn
                     ${showItemsBlack.includes(true) ? 'bg-primary' : 'bg-gray-600'}
                     `}
                  >
                    {products.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  /* /
   return (
    <div className='w-full relative'>

      <Menu collapsed={collapsed} toggle={toggleCollapsed} />

      <ShoppingCar onClose={toogleShoppingCar} show={showShoppingCar} />

      <div className='flex flex-col font-subTitles md:px-5 lg:px-20'>

        <div className={`hidden text-${color} pt-5 gap-[22px] md:flex md:flex-row md:justify-end md:items-center`}>
          {
            color === 'grayText' ?
              <Button rounded className='font-extrabold bg-transparent py-1 border-grayText border-[1px]' padding='py-0 px-3'>
                Ingresar
              </Button> :
              <Button rounded className='font-extrabold bg-transparent py-1 border-primary border-[1px]' padding='py-0 px-3'>
                Ingresar
              </Button>
          }
          <div className='flex'>
            <span className='font-medium'>EN</span><span className='font-extrabold'> &nbsp;|&nbsp;</span><span className='font-extrabold'>ES</span>
          </div>
        </div>

        <div className={`w-full flex justify-between items-center py-2 md:py-0 overflow-hidden text-${color}`}>

          <div className='w-1/3 flex-shrink-0 md:hidden'>
            <IconButton name='menu' size='3xl' shadow={false} onClick={toggleCollapsed} />
          </div>

          <div className='w-1/3 flex justify-center items-center gap-2 md:gap-14 md:justify-start'>
            <div className='w-16 flex-shrink-0 flex justify-center items-center md:w-24 md:justify-start'>
              <img src={pixie} className='w-full cursor-pointer' onClick={toHome} />
            </div>
            <div className='hidden md:flex md:flex-row md:space-x-8 md:w-2/3'>
              <Icon.awesome icon='fa-facebook-f' size='2xl' />
              <Icon.awesome icon='fa-instagram' size='2xl' />
              <Icon.awesome icon='fa-twitter' size='2xl' />
            </div>
          </div>

          <div className='w-1/3 justify-end items-center gap-2 lg:gap-6 md:flex md:flex-row md:w-auto md:flex-grow'>
            <div className='hidden md:flex md:flex-row items-center justify-between md:font-bold md:gap-5'>
              <NavItem name='Tienda' path='/catalogue' color={color} />
              <NavItem name='Calculadora' path='/calculator' color={color} />
            </div>
            <div className='hidden md:flex md:flex-row md:justify-end'>
              <IconButton.mini
                name='search'
                className={`${isCatalogue || isCalculator ? 'text-white' : 'text-amber-100'} bg-${color}`}
                shadow={false}
                size='2xl'
                sizeContainer={'w-10 h-10'}
                onClick={() => console.log('search')}
                color={isCatalogue || isCalculator ? undefined : '#df2f44'}
              />
            </div>

            <div className='flex-shrink-0 flex justify-end'>
              <IconButton.mini
                img={basket}
                name={basket}
                type='outlined'
                imgClassName={`${(isCatalogue || isCalculator) && 'w-8 h-8 brightness-200'} w-7 h-7`}
                sizeContainer={'w-10 h-10'}
                className={`mr-4 md:mr-0 bg-${color}`}
                size='md'
                shadow={false}
                onClick={() => toogleShoppingCar()}
                color={isCatalogue || isCalculator ? undefined : '#df2f44'}
              />
              {products.length > 0 && <div className='flex w-8 h-8 rounded-full absolute justify-center items-center font-bold bg-gray-600 text-white top-12 md:top-28 lg:top-32 animate__animated animate__bounceIn'>{products.length}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  */
};

export default NavBar;
