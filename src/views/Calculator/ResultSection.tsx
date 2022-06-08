import ProductCard from '../../components/common/productCard';
import { products } from '../../@fake/productsFake';
import ResultRecommendation from './ResultRecommendation';
import Button from '../../components/common/button';

const ResultSection = () => (
  <div className='w-full rounded-t-3xl bg-sixth -mt-5 z-10 '>
    <div className='text-center mb-14 mt-14'>
      <span className='text-primary text-2xl font-bold'>¡PIXEL debe consumir un total de 670 gramos al día en 2 porciones!</span>
    </div>
    <div className='flex justify-center items-center lg:gap-14 gap-6'>
      <div className='lg:scale-90 mb-4'>
        <ProductCard product={products[0]} />
      </div>
      <div className='mb-4'>
        <ProductCard product={products[1]}/>
      </div>
      <div className='hidden lg:scale-90 lg:block'>
        <ProductCard product={products[2]}/>
      </div>
    </div>
    <ResultRecommendation/>
    <div className='flex justify-center items-center mb-36 flex-col w-full lg:flex-row px-3'>
      <div className='lg:w-1/2 text-gray-600 text-xs mb-4 md:mx-24'>
        <p>*Este es un dato aproximado. Te invitamos a monitorear periódicamente el peso de tu mascota y reajustar la ración según corresponda, ya que el metabolismo de cada perro/gato puede variar. Si tu perro/gato tiene una condición especial de la que debamos saber, por favor escríbenos en el horario de atención de nuestro chat o agenda una asesoría nutricional gratis. </p>
      </div>
      <div className='flex gap-6 lg:w-1/2 flex-col md:flex-row'>
        <Button className='bg-transparent ring-2 ring-primary text-primary font-bold'>Tabla peso ideal perro</Button>
        <Button className='bg-transparent ring-2 ring-primary text-primary font-bold'>Tablas peso ideal gato</Button>
      </div>
    </div>
    {/* <img src={backgroundCalculator} className='absolute -z-10' /> */}
  </div>
);

export default ResultSection;

