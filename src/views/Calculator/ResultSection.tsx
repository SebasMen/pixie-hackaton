import ProductCard from '../../components/common/productCard';
import { products } from '../../@fake/productsFake';
import ResultRecommendation from './ResultRecommendation';
import Button from '../../components/common/button';

const ResultSection = () => (
  <div className='w-full rounded-t-3xl bg-sixth -mt-5 z-10 animate__animated animate__fadeIn'>
    <div className='text-center mb-14 mt-14'>
      <span className='text-primary text-2xl font-bold'>¡PIXEL debe consumir un total de 670 gramos al día en 2 porciones!</span>
    </div>
    <div className='flex justify-center items-center lg:gap-14 gap-6'>
      <div className='lg:scale-90 mb-4'>
        <ProductCard product={products[0]} showControls={false} />
      </div>
      <div className='mb-4'>
        <ProductCard product={products[1]} showControls={false} />
      </div>
      <div className='hidden lg:scale-90 lg:block'>
        <ProductCard product={products[2]} showControls={false} />
      </div>
    </div>
    <div className='text-center mt-8 font-subTitles font-bold'>
      <span>Dieta recomendada para 4 semanas = 30 porciones, <span className='text-primary'>¡combínalas como tu quieras!</span></span>
    </div>
    <ResultRecommendation />
    <div className='flex justify-center items-center mb-36 flex-col w-full px-3 gap-4 md:px-12 lg:gap-24 lg:flex-row lg2:px-20 xl:px-44'>
      <p className='font-subTitles text-base text-justify text-gray-600 lg:w-[60%]'>*Este es un dato aproximado. Te invitamos a monitorear periódicamente el peso de tu mascota y reajustar la ración según corresponda, ya que el metabolismo de cada perro/gato puede variar. Si tu perro/gato tiene una condición especial de la que debamos saber, por favor escríbenos en el horario de atención de nuestro chat o agenda una asesoría nutricional gratis. </p>
      <div className='flex gap-6 lg:w-[40%] flex-col md:flex-row'>
        <Button className='bg-transparent ring-2 ring-primary text-primary font-bold truncate'>Tabla peso ideal perro</Button>
        <Button className='bg-transparent ring-2 ring-primary text-primary font-bold truncate'>Tablas peso ideal gato</Button>
      </div>
    </div>
    {/* <img src={backgroundCalculator} className='absolute -z-10' /> */}
  </div>
);

export default ResultSection;

