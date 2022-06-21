import Button from '../../components/common/button';

import { fillets } from '../../assets/vectors';
import { dogs } from '../../assets/images/';
import { useNavigate } from 'react-router-dom';

export const CalculatorSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className='relative flex flex-col h-full pt-11 w-full items-center justify-center text-center rounded-t-3xl overflow-hidden transform -mt-4 z-10 md:flex-row-reverse bg-secondaryOpacity'>
      <img src={fillets} className='object-none h-full w-full float-none absolute' />
      <div className='flex flex-col items-center justify-center md:w-1/3 z-10'>
        <div className='lg:mb-[3.2rem]'>
          <span className='text-3xl text-grayText font-extrabold'>Copy invitando a calculadora</span>
        </div>
        <Button
          className='flex items-center justify-center mb-12 px-11 py-2.5 rounded-xl cursor-pointer focus:outline-none mt-5 font-subTitles bg-white text-red-600 font-bold lg:mb-0'
          onClick={ () => navigate('/calculator')}
        >
          Call to action
        </Button>
      </div>
      <div className='z-10 md:w-2/3 xl:h-full md:flex md:items-center md:justify-center md:pr-16 md:pl-16 md:mt-7'>
        <img src={dogs} className='md:w-full md:object-contain' />
      </div>
    </div>
  );
};

export default CalculatorSection;
