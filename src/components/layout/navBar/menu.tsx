import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Icon from '../../common/icon';
import IconButton from '../../common/iconButton';

import twitterRed from '../../../assets/vectors/TwitterRed.svg';
import facebookRed from '../../../assets/vectors/FacebookRed.svg';
import instagramRed from '../../../assets/vectors/InstagramRed.svg';
import logo from '../../../assets/images/logo.png';

export const Menu = ({ collapsed, toggle }: MenuProps) => {
  // Hooks
  const navigate = useNavigate();

  // Methods
  const navigateClose = (path: string) => {
    toggle();
    setTimeout(() => navigate(path), 200);
  };

  // Constants
  const collapsedClass = (collapsed === null) ? 'hidden' : collapsed ? 'animate__slideInLeft' : 'animate__slideOutLeft';

  // Component
  return (
    <div className={`
            flex flex-col gap-5
            h-screen w-4/5 fixed z-1000
            p-5 shadow-2xl bg-white
            animate__animated animate__faster300
            ${collapsedClass}
        `}
    >
      {/* Close Button */}
      <IconButton name='close' size='3xl' shadow={false} className='text-red-600' onClick={toggle} />

      {/* Logo */}
      <div className='w-full flex justify-center flex-shrink-0'>
        <img src={logo} className='w-32 cursor-pointer' onClick={() => navigateClose('/')} />
      </div>

      {/* Items */}
      <div className='flex flex-col flex-grow flex-shrink-0 gap-5 mt-10 text-gray-800 text-xl'>
        <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigateClose('/catalogue')}>
          <Icon name='storefront' className='text-red-500' size='2xl' />
          <p>Catalogo</p>
        </div>
        <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigateClose('/calculator')}>
          <Icon name='calculate' className='text-red-500' size='2xl' />
          <p>Calculadora</p>
        </div>
        <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigateClose('/user')}>
          <Icon name='person' className='text-red-500' size='2xl' />
          <p>Usuario</p>
        </div>
        <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigateClose('/cart')}>
          <Icon name='shopping_basket' className='text-red-500' size='2xl' />
          <p>Carrito</p>
        </div>
      </div>

      {/* Social */}
      <div className='flex justify-around items-center w-full flex-shrink-0 gap-2'>
        <img src={facebookRed} className='w-4' />
        <img src={instagramRed} className='w-7' />
        <img src={twitterRed} className='w-7' />
      </div>
    </div>
  );
};

interface MenuProps {
  collapsed: boolean | null;
  toggle: () => void;
}

export default Menu;
