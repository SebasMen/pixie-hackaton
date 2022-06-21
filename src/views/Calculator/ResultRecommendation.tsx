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
      <div className='flex flex-col flex-shrink-0 justify-center items-center gap-5 w-full h-auto p-10 rounded-2xl shadow-xl ring-1 ring-primary lg:flex-row lg:h-32'>
        <div className='flex items-center justify-center w-1/6 h-full border-b border-b-primary border-r-primary lg:border-r lg:border-b-0 lg:pr-3'>
          <h2 className='text-xl text-primary font-extrabold'>
            Resumen
          </h2>
        </div>
        <div className='flex-grow text-sm flex-shrink-0 text-center border-r border-r-primary'>
          <p className='font-subTitles font-bold'>Carne al horno (x30), Pollo al horno (x10), Salmón al horno (x8)</p>
          <p className='text-[#7AC5BE] font-subTitles font-semibold'>(Te hacen falta 10 porciones para completar las 4 semanas)</p>
        </div>
        <div className='w-1/5 flex flex-col flex-shrink-0 justify-around items-center text-primary md:flex-row md:w-max lg:ml-8'>
          <div className='flex flex-col justify-center items-center lg:mr-[2.2rem] lg:ml-[1.5rem]'>
            <p className='text-sm'>Total</p>
            <p className='font-subTitles font-bold text-xl'>$500,620</p>
          </div>
          <IconButton name='result' className='bg-primary scale-75 shadow-[0px_2px_10px_0_rgba(65,65,65,0.4)]' img={basket} imgClassName='w-8 h-8' onClick={() => { }} />
        </div>
      </div>
    </div>
  </div>
);

export default ResultRecommendation;
