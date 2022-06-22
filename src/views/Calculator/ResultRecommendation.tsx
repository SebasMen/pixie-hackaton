import RecomendationItem from '../../components/common/recomendationItem/RecomendationItem';
import IconButton from '../../components/common/iconButton';

import { basket } from '../../assets/vectors';
import ColoredScrollbars from '../../components/common/scroll';
import Button from '../../components/common/button';

const ResultRecommendation = () => (
  <div className='flex flex-col gap-[38px] w-full mb-16 px-5 md:px-0'>
    <ColoredScrollbars
      style={{ height: 390 }}
    >
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
    <div className='flex justify-center lg:mr-5'>
      <div className='flex flex-col flex-shrink-0 justify-center items-center gap-5 w-full h-auto px-5 py-10 rounded-2xl shadow-xl ring-1 ring-primary lg:flex-row lg:h-28'>
        <div className='flex lg:items-center w-full text-left justify-start lg:justify-center lg:w-1/6 h-full  border-b-primary border-r-primary lg:border-r lg:border-b-0 lg:pr-3'>
          <h2 className='text-xl text-primary font-extrabold'>
            Resumen
          </h2>
        </div>
        <div className='flex-grow md:text-sm flex-shrink-0 text-left border-r-primary lg:border-r pr-30'>
          <p className='font-subTitles font-bold'>Carne al horno (x30), Pollo al horno (x10), Salmón al horno (x8)</p>
          <p className='text-[#7AC5BE] font-subTitles font-semibold text-[11px] lg:text-sm'>(Te hacen falta 10 porciones para completar las 4 semanas)</p>
        </div>
        <div className='w-full lg:w-1/5 flex flex-col flex-shrink-0 justify-between items-center text-primary md:flex-row md:w-max gap-6'>
          <div className='flex justify-between lg:flex-col lg:justify-center items-center w-full'>
            <p className='text-sm'>Total</p>
            <p className='font-subTitles font-bold text-lg md:text-xl'>$500,620</p>
          </div>
          <div className='hidden md:block'>
            <IconButton
              name='result'
              className='bg-primary scale-75 shadow-[0px_2px_10px_0_rgba(65,65,65,0.4)]'
              img={basket}
              imgClassName='w-9 h-9'
              onClick={() => { }}
              sizeContainer={'h-14 w-14'}
            />
          </div>
          <div className='w-full md:hidden'>
            <Button className='bg-primary flex gap-4 w-full' rounded={true}>
              <img src={basket} className={'h-5 w-5'} />
              <span className='text-base text-amber-100'>Agregar a la bolsa</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResultRecommendation;
