import RecomendationItem from '../../components/common/recomendationItem/RecomendationItem';
import IconButton from '../../components/common/iconButton';

import { basket } from '../../assets/vectors';
import ColoredScrollbars from '../../components/common/scroll';

const ResultRecommendation = () => (
  <div className='flex flex-col gap-[38px] w-full mb-16 px-5 md:px-0'>
    <ColoredScrollbars
      style={{ height: 370 }}>
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
      <RecomendationItem name={'Carne al horno'} price={322.620} quantity={30} />
    </ColoredScrollbars>
    <div className='flex justify-center lg:mx-6'>
      <div className='flex flex-col flex-shrink-0 justify-center items-center gap-5 w-full h-auto p-10 rounded-2xl shadow-xl ring-1 ring-red-500 lg:flex-row lg:h-32'>
        <div className='flex items-center justify-center w-1/6 h-full border-b border-b-red-500 border-r-red-500 lg:border-r lg:border-b-0'>
          <h2 className='text-xl text-red-500 font-extrabold'>
            Resumen
          </h2>
        </div>
        <div className='flex-grow flex-shrink-0 text-center md:text-left'>
          <p className='font-subTitles font-bold'>Carne al horno (x30), Pollo al horno (x10), Salmón al horno (x8)</p>
          <p className='text-[#7AC5BE] font-subTitles font-bold'>(Te hacen falta 10 porciones para completar las 4 semanas)</p>
        </div>
        <div className='w-1/5 flex flex-col flex-shrink-0 justify-between items-center text-red-500 md:flex-row md:w-max'>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-xl'>Total</p>
            <p className='font-subTitles font-bold text-xl'>$500,620</p>
          </div>
          <IconButton name='result' className='bg-primary scale-75' img={basket} imgClassName='w-8 h-8' onClick={() => { }} />
        </div>
      </div>
    </div>
  </div>
);

export default ResultRecommendation;
