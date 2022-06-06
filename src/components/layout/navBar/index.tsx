import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import IconButton from '../../common/iconButton';
import Button from '../../common/button';
import Menu from './menu';

import { TwitterRed, FacebookRed, InstagramRed, basket } from '../../../assets/vectors';
import { logo } from '../../../assets/images';

export const NavBar = ({ isProduct }: NavBarProps) => {
  // Hooks
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean | null>(null);

  // Methods
  const toCatalogue = () => navigate('/catalogue');
  const toHome = () => navigate('/');

  const toggleCollapsed = () => setCollapsed(old => !old);

  return (
    <div className='w-full'>
      {/* Mobile Menu */}
      <Menu collapsed={collapsed} toggle={toggleCollapsed} />

      {/* Desktop */}
      <div className='w-full md:px-20'>
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
        <div className='w-full flex justify-between items-center py-2 px-5'>
          <div className='w-1/3 flex-shrink-0 md:hidden'>
            <IconButton name='menu' size='3xl' shadow={false} className='text-red-600' onClick={toggleCollapsed} />
          </div>
          <div className='w-1/3 flex justify-center md:justify-start md:w-96'>
            <div className='w-20 flex-shrink-0 flex justify-center items-center md:justify-start lg:w-1/3 md:mr-20'>
              <img src={logo} className='w-full cursor-pointer' onClick={toHome} />
            </div>
            <div className='hidden md:flex md:flex-row md:space-x-8 md:w-2/3'>
              <img src={FacebookRed} className='w-4' />
              <img src={InstagramRed} className='w-7' />
              <img src={TwitterRed} className='w-7' />
            </div>
          </div>
          <div className='w-1/3 md:flex md:flex-row md:w-96'>
            <div className='hidden md:flex md:flex-row items-center justify-between md:mr-8 md:font-bold'>
              <span className='text-red-600 mr-16 text-md cursor-pointer' onClick={toCatalogue}>Tienda</span>
              <span className='text-red-600 text-md'>calculadora</span>
            </div>
            <div className='hidden md:flex md:flex-row md:w-2/5 md:justify-end'>
              <IconButton name='search' className='text-amber-100' shadow={false} size='3xl' onClick={() => console.log('search')} color='#df2f44' />
            </div>

            <div className='flex-shrink-0 flex justify-end gap-2 md:w-1/5'>
              <IconButton img={basket} name={basket} type='outlined' className={`pt-2 ${isProduct && 'mr-2 md:mr-0'}`} size='3xl' shadow={false} onClick={() => console.log('cart')} color='#df2f44' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavBarProps {
  isProduct?: boolean;
}

export default NavBar;
