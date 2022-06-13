import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import ShoppingCar from '../shoppingCar';
import IconButton from '../../common/iconButton';
import Button from '../../common/button';
import Menu from './menu';

import { useAppContext } from '../../../hooks';

import { TwitterRed, FacebookRed, InstagramRed, basket } from '../../../assets/vectors';
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

  const isProduct = pathname.includes('/product');

  return (
    <div className='w-full relative'>
      {/* Mobile Menu */}
      <Menu collapsed={collapsed} toggle={toggleCollapsed} />

      {/* Cart */}
      <ShoppingCar onClose={toogleShoppingCar} show={showShoppingCar} />

      {/* Desktop */}
      <div className='flex flex-col w-full font-subTitles md:px-5 lg:px-20'>
        {/* Top */}
        <div className='mt-5 hidden md:flex md:flex-row md:justify-end md:items-center'>
          <div className='mr-8'>
            <Button className='text-red-600 font-bold rounded-full bg-transparent ring-2 py-1 ring-red-600'>
              Ingresar
            </Button>
          </div>
          <div className='text-red-600 mr-8'>
            <span className='font-medium'>EN</span> | <span className='font-extrabold'>ES</span>
          </div>
        </div>

        {/* Bottom */}
        <div className='w-full flex justify-between items-center py-2 px-5 overflow-hidden'>
          {/* Menu toggle */}
          <div className='w-1/3 flex-shrink-0 md:hidden'>
            <IconButton name='menu' size='3xl' shadow={false} className='text-red-600' onClick={toggleCollapsed} />
          </div>

          {/* Social */}
          <div className='w-1/3 flex justify-center gap-2 md:justify-start md:w-96'>
            <div className='w-20 flex-shrink-0 flex justify-center items-center md:justify-start lg:w-1/3 lg:mr-20'>
              <img src={logo} className='w-full cursor-pointer' onClick={toHome} />
            </div>
            <div className='hidden md:flex md:flex-row md:space-x-8 md:w-2/3'>
              <img src={FacebookRed} className='w-4' />
              <img src={InstagramRed} className='w-7' />
              <img src={TwitterRed} className='w-7' />
            </div>
          </div>

          {/* Items */}
          <div className='w-1/3 justify-end items-center gap-2 lg:gap-10 md:flex md:flex-row md:w-auto md:flex-grow'>
            <div className='hidden md:flex md:flex-row items-center justify-between md:font-bold md:gap-5'>
              <NavItem name='Tienda' path='/catalogue' />
              <NavItem name='Calculadora' path='/calculator' />
            </div>
            <div className='hidden md:flex md:flex-row md:justify-end'>
              <IconButton name='search' className='text-amber-100' shadow={false} size='3xl' onClick={() => console.log('search')} color='#df2f44' />
            </div>

            <div className='flex-shrink-0 flex justify-end gap-2'>
              <IconButton img={basket} name={basket} type='outlined' imgClassName='w-10 h-10' className={`${isProduct && 'mr-2 md:mr-0'}`} size='3xl' shadow={false} onClick={() => toogleShoppingCar()} color='#df2f44' />
              {products.length > 0 && <div className='flex w-8 h-8 rounded-full absolute justify-center items-center font-bold bg-gray-600 text-white top-12 md:top-28 lg:top-32 animate__animated animate__bounceIn'>{products.length}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
