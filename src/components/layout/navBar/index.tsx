import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { useLocation, useNavigate } from 'react-router-dom';

import ShoppingCar from '../shoppingCar';
import IconButton from '../../common/iconButton';
import Icon from '../../common/icon';
import Menu from './menu';
import { NavItem } from './navItem';

import { logoFooter, iconGlass, basketWhite } from '../../../assets/vectors';
import { logo } from '../../../assets/images';
import Search from '../../common/search';

// eslint-disable-next-line complexity
export const NavBar = () => {
  // Hooks
  const navigate = useNavigate();
  const { products, showNavbar, updateContext, showMinimalNavbar } = useAppContext();
  const { pathname } = useLocation();

  const [showShoppingCar, setShowShoppingCar] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean | null>(null);
  const [openSearch, setOpenSearch] = useState(false);

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
  const isHome = pathname.includes('/');

  const itemsBlack = ['/catalogue', '/basket', '/checkout', '/calculator', '/'];
  const showItemsBlack = itemsBlack.map(rute => pathname.includes(rute));

  const itemsLogoBlack = ['/catalogue'];
  const showLogoBlack = itemsLogoBlack.map(rute => pathname.includes(rute));
  const pixie = showLogoBlack.includes(true) ? logoFooter : logo;
  const color = (isCatalogue || isCalculator || isCheckout || isBasket || isHome ? 'grayText' : 'primary') || 'grayText';
  const bgIconColor = 'gray-600';

  if (!showNavbar) return <></>;

  // Component
  return (
    <div className='w-full relative max-w-[1440px]'>
      {/* Mobile Menu */}
      <Menu collapsed={collapsed} toggle={toggleCollapsed} />

      {/* Cart */}
      <ShoppingCar onClose={toogleShoppingCar} show={showShoppingCar} />

      <div className={`${showMinimalNavbar ? 'bg-white py-1 px-2 lg:px-12 md:py-3' : 'bg-transparent py-4 px-2 lg:px-12 md:py-5'} fixed top-0 flex z-40 justify-between w-full items-center md:items-start  
      overflow-hidden md:justify-start md:gap-10 max-w-[1440px]`}>
        {/* Menu Toggle */}
        <div className={`flex-shrink-0 md:hidden text-${color}`}>
          <IconButton name='menu' size='3xl' shadow={false} onClick={toggleCollapsed} className='-scale-x-125 -scale-y-125' />
        </div>

        {/* Logo */}
        <div className={`${showMinimalNavbar ? 'w-14 md:w-[55px]' : 'w-14 md:w-[6.75rem] md:pt-2'} flex-shrink-0 flex justify-center items-center md:justify-start `}>
          <img src={pixie} className='w-full cursor-pointer' onClick={toHome} />
        </div>

        {/* Content */}
        <div className='flex flex-col flex-grow-0 md:flex-grow'>
          {/* Top */}
          <div className={`w-full hidden text-${color} gap-[22px] ${showMinimalNavbar ? 'md:hidden' : 'md:block'}
            md:flex md:flex-row md:justify-end md:items-center md:pt-[0.20rem]`}
          >
            <div className='flex items-center justify-center text-sm '>
              <span className='font-subTitles'>EN</span>
              <span className='font-extrabold font-subTitles'> &nbsp;|&nbsp;</span>
              <span className='font-subTitles font-black'>ES</span>
            </div>
          </div>

          {/* Bottom */}
          <div className={`${showMinimalNavbar ? 'md:pt-2' : 'md:pt-4'} flex flex-grow-0 items-top w-full md:flex-grow text-${color}  `}>
            {/* Social */}
            <div className={`${showMinimalNavbar ? 'md:items-center' : 'md:pt-[0.40rem]'} hidden md:flex md:flex-row md:space-x-10 md:w-2/3 md:ml-4 `}>
              <a href='https://www.facebook.com/Pixiemx-104482775594223/' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <Icon.awesome className='text-gray-600 hover:text-red-500 hover:bg-white w-10 h-10 flex justify-center items-center' icon='fa-facebook-f' size='3xl' />
              </a>
              <a href='https://www.instagram.com/pixie.mex/?igshid=YmMyMTA2M2Y%3D' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <Icon.awesome className='text-gray-600 hover:text-red-500  hover:bg-white w-10 h-10 flex justify-center items-center' icon='fa-instagram' size='3xl' />
              </a>
            </div>

            {/* Items */}
            <div className={'w-1/3 flex-grow justify-end gap-2 md:pt-0 md:flex md:flex-row md:w-auto lg:gap-6'}>
              {/* Navs */}
              { !openSearch &&
                <div className={`${showMinimalNavbar && 'md:items-center'} hidden md:flex md:flex-row justify-between md:gap-7 md:mr-6`}>
                  <NavItem name='Tienda' path='/catalogue' color={color}/>
                  <NavItem name='Calculadora' path='/calculator' color={color} />
                </div>
              }
              {/* Buttons */}
              { !openSearch &&
                <div className='hidden md:flex md:flex-row md:justify-end'>
                  <IconButton.mini
                    img={iconGlass}
                    name={iconGlass}
                    type='outlined'
                    imgClassName={`${showItemsBlack.includes(true) && 'w-8 h-8 brightness-200'} w-7 h-7`}
                    sizeContainer={'w-11 h-11 md:w-[42px] md:h-[42px]'}
                    className={`mr-4 md:mr-0 bg-${bgIconColor} p-[10px]`}
                    size='xs'
                    shadow={false}
                    onClick={() => setOpenSearch(!openSearch)}
                    color={showItemsBlack.includes(true) ? undefined : bgIconColor}
                  />
                </div>
              }
              {openSearch &&
                <Search />
              }

              <div className='flex-shrink-0 flex justify-end lg:mr-1'>
                <IconButton.mini
                  img={basketWhite}
                  name={basketWhite}
                  type='outlined'
                  imgClassName={`${showItemsBlack.includes(true) && 'w-8 h-8 brightness-200'} w-7 h-7`}
                  sizeContainer={'w-11 h-11 md:w-[42px] md:h-[42px]'}
                  className={`mr-4 md:mr-0 bg-${bgIconColor}`}
                  size='md'
                  shadow={false}
                  onClick={() => toogleShoppingCar()}
                  color={showItemsBlack.includes(true) ? undefined : bgIconColor}
                />
                {products.length > 0 && (
                  <div className='relative'>
                    <div
                      className={`flex w-5 h-5 font-subTitles text-xs rounded-full
                        absolute justify-center items-center text-white top-[1.8rem] right-4
                        md:-right-1 animate__animated animate__bounceIn
                        ${showItemsBlack.includes(true) ? 'bg-primary' : 'bg-gray-600'}
                        `}
                    >
                      {products.length}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
