import { useNavigate } from 'react-router-dom';

import Icon from '../../common/icon';
import IconButton from '../../common/iconButton';

import { Instagramgray, FacebookRed, TwitterRed, FacebookGray, Twittergray, expand_more } from '../../../assets/vectors';
import { logo } from '../../../assets/images';
import TextField from '../../form/textField';
import NavMobileItem from './navMobileItem';

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
            shadow-2xl bg-[#D9EEEF]
            animate__animated animate__faster300
            ${collapsedClass}
        `}
    >
      <div className='text-grayText flex'>
        {/* Logo */}
        <div className='w-3/5 flex justify-end mt-4'>
          <img src={logo} className='w-14 cursor-pointer' onClick={() => navigateClose('/')} />
        </div>
        {/* Close Button */}
        <div className='w-2/5 flex justify-end'>
          <IconButton name='close' size='3xl' className='' shadow={false} onClick={toggle} />
        </div>
      </div>

      {/* search */}
      <div className='flex w-full font-subTitles justify-center px-6'>
        <div className='bg-white flex items-center pl-3 pr-1 rounded-l-[100%] w-1/6'>
          <IconButton name='search' size='2xl' sizeContainer='w-6' className='text-fourth' onClick={() => {}} shadow={false} />
        </div>
        <TextField
          name='navSearch'
          handler={() => {}}
          value={''}
          className='w-5/6 '
          fieldClassName='text-fourth py-[0.4rem]'
          border='rounded-r-full ring-pixieLightBlue'
          placeholder='Busca tu pixie favorito'
        />
      </div>

      {/* Items */}
      <div className='flex flex-col flex-grow flex-shrink-0 gap-8 mt-8 text-fourth text-xl px-6'>
        <NavMobileItem name='tienda'/>
        <NavMobileItem name='calculadora'/>
        <NavMobileItem name='canasta'/>
        {/* languages */}
        <div className='font-sanzBold text-sm mt-5 text-grayText flex'>
          <span>Español</span>
          <img src={expand_more} className='brightness-0'/>
        </div>
      </div>

      {/* Social */}
      <div className='flex justify-center items-center w-full flex-shrink-0 gap-5 mb-10'>
        <img src={FacebookGray} className='w-4 h-[19px]' />
        <img src={Instagramgray} className='w-7 h-[19px]' />
        <img src={Twittergray} className='w-7 h-[19px]' />
      </div>
    </div>
  );
};

interface MenuProps {
  collapsed: boolean | null;
  toggle: () => void;
}

export default Menu;
