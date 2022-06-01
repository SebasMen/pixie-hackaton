import IconButton from '../../common/iconButton';
import car from '../../../assets/vectors/car.svg';
import logo from '../../../assets/images/logo_red.png';

export const NavBar = () => (
  <div className='w-full flex justify-between items-center py-2 px-5'>
    <div className='w-1/3 flex-shrink-0'>
      <IconButton name='menu' size='3xl' className='shadow-none text-red-600' onClick={() => console.log('menu')} />
    </div>

    <div className='w-1/3 flex-shrink-0 flex justify-center'>
      <IconButton img={logo} name='logo' className='shadow-none' onClick={() => console.log('pixie')} />
    </div>

    <div className='w-1/3 flex-shrink-0 flex justify-end gap-2'>
      <img src={car} onClick={() => console.log('cart')} />
    </div>
  </div>
);

export default NavBar;
