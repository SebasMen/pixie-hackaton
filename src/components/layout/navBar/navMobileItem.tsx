import { useNavigate } from 'react-router-dom';
import { basket, calculatorIcon, pixieProduct } from '../../../assets/vectors';

const NavMobileItem = ({ name }: NavMobileItemProps) => {
  const navigate = useNavigate();

  const handleRoute = (name: string) => {
    if (name === 'tienda')
      navigate('/catalogo');
    if (name === 'calculadora')
      navigate('/calculadora');
    if (name === 'canasta')
      navigate('/canasta');
  };

  return (
    <div className='flex gap-3' onClick={() => handleRoute(name)}>
      <div className='rounded-full h-[30px] w-[30px] bg-fourth p-1'>
        {name === 'tienda' && <img src={pixieProduct} alt='tiendaIcon' className='object-contain h-full w-full'/>}
        {name === 'calculadora' && <img src={calculatorIcon} alt='calculatorIcon' className='object-contain h-full w-full'/>}
        {name === 'canasta' && <img src={basket} alt='basketBlue' className='object-contain h-full w-full brightness-200'/>}
      </div>
      {name === 'tienda' && <label>Tienda</label>}
      {name === 'calculadora' && <label>Calculadora</label>}
      {name === 'canasta' && <label>Tu canasta</label>}
    </div>
  );
};

interface NavMobileItemProps {
  name: string
}

export default NavMobileItem;
