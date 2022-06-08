import Button from '../../components/common/button';
import { basket } from '../../assets/vectors';

const ResultRecommendation = () => (
  <div className='w-full my-16'>
    <div className='md:mx-40'>
      <div className='absolute flex justify-center bg-fourth rounded-full py-2 px-5 lg:bottom-96 lg:left-48 lg:mb-72'>
        <span className='text-white font-extrabold'>Recomendamos</span>
      </div>
      <div className='bg-fourthOpacity flex justify-between rounded-lg items-center lg:px-14 px-5 py-10'>
        <span className='text-xl font-medium'>Compra <span className='text-primary'>Carne al horno</span> por 4 semanas <span className='lg:bg-white lg:p-3 lg:rounded-lg lg:text-black text-primary'>38</span> porciones por <span className='lg:bg-white lg:text-black lg:p-3 lg:rounded-lg text-primary'>$322,620</span></span>
        <Button className='bg-primary text-white flex justify-around w-44 items-center h-14'><img src={basket} className='pt-2'/>Agregar</Button>
      </div>
    </div>
  </div>
);

export default ResultRecommendation;
