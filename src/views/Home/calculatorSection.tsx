import Button from '../../components/common/button';

import { fillets } from '../../assets/vectors';
import { dogs } from '../../assets/images/';
import { useNavigate } from 'react-router-dom';

export const CalculatorSection = () => {
  const navigate = useNavigate();
  return (
    <div className='relative flex flex-col pt-11 w-full items-center justify-center text-center rounded-t-3xl overflow-hidden transform -mt-4 z-10 md:flex-row-reverse bg-secondaryOpacity'>
      <img src={fillets} className='object-cover h-full w-full float-none absolute' />
      <div className='flex flex-col h-full md:flex-row-reverse max-w-[1440px]'>
        <div className='flex flex-col items-center justify-center md:w-[31%] z-10 lg:mr-24'>
          <div className='lg:mb-[3.2rem]'>
            <span className='text-3xl text-grayText font-extrabold'>
              ¿Cuál es el Pixie ideal para mi perrito o michi?
            </span>
          </div>
          <div className='lg:-mt-12'>
            <Button
              className='flex items-center justify-center mb-12 px-11 py-2.5 rounded-xl cursor-pointer focus:outline-none mt-5 font-subTitles bg-white text-red-600 font-bold'
              onClick={() => navigate('/calculator')}
            >
              Calcúlalo acá
            </Button>
          </div>
        </div>
        <div className='z-10 md:w-[69%] xl:h-full md:flex md:items-center md:justify-center md:pl-10 md:mt-6 max-w-[1440px]'>
          <img src={dogs} className='md:w-full md:object-contain' />
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
