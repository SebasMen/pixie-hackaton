import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import ShoppingCar from '../shoppingCar';
import IconButton from '../../common/iconButton';
import Icon from '../../common/icon';
import Button from '../../common/button';
import Menu from './menu';

import { useAppContext } from '../../../hooks';

import { basket, logoFooter } from '../../../assets/vectors';
import { logo } from '../../../assets/images';
import { NavItem } from './navItem';

export const NavBar = () => {
  // Hooks
  const navigate = useNavigate();
  const { products } = useAppContext();
  const { pathname } = useLocation();

  const [showShoppingCar, setShowShoppingCar] = useState<boolean | null>(null);
  const [collapsed, setCollapsed] = useState<boolean | null>(null);

  // Methods
  const toHome = () => navigate('/');

  const toggleCollapsed = () => setCollapsed(old => !old);
  const toogleShoppingCar = () => setShowShoppingCar(!showShoppingCar);

  // Constants
  const isCatalogue = pathname.includes('/catalogue');
  const isCalculator = pathname.includes('/calculator');

  const pixie = isCatalogue ? logoFooter : logo;
  const color = ((isCatalogue || isCalculator) ? 'grayText' : 'red-500') || 'grayText';

  // Component
  return (
    <div className='w-full relative'>
      {/* Mobile Menu */}
      <Menu collapsed={collapsed} toggle={toggleCollapsed} />

      {/* Cart */}
      <ShoppingCar onClose={toogleShoppingCar} show={showShoppingCar} />

      {/* Desktop */}
      <div className='flex flex-col w-full font-subTitles md:px-5 lg:px-20'>
        {/* Top */}
        <div className={`hidden text-${color} pt-5 gap-12 md:flex md:flex-row md:justify-end md:items-center`}>
          <Button rounded className={`font-bold bg-transparent py-1 ${'border-' + color} border-2`}>
            Ingresar
          </Button>
          <div className='flex'>
            <span className='font-medium'>EN</span> | <span className='font-extrabold'>ES</span>
          </div>
        </div>

        {/* Bottom */}
        <div className={`w-full flex justify-between items-center py-2 md:py-0 overflow-hidden text-${color}`}>
          {/* Menu toggle */}
          <div className='w-1/3 flex-shrink-0 md:hidden'>
            <IconButton name='menu' size='3xl' shadow={false} onClick={toggleCollapsed} />
          </div>

          {/* Social */}
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

          {/* Items */}
          <div className='w-1/3 justify-end items-center gap-2 lg:gap-8 md:flex md:flex-row md:w-auto md:flex-grow'>
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

            <div className='flex-shrink-0 flex justify-end gap-2'>
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
};

export default NavBar;
