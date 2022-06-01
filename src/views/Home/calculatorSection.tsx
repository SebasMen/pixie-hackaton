import background from '../../assets/vectors/fillets.svg';
import dogs from '../../assets/images/dogs.png';
import Button from '../../components/common/button';

export const CalculatorSection = () => (
  <div
    className='relative flex flex-col h-max pt-10 w-full items-center justify-center text-center rounded-t-3xl overflow-hidden transform -mt-4 z-10'
    style={{ background: '#e55969' }}
  >
    <img src={background} className='object-none h-full float-none absolute' />
    <div>
      <span className='text-3xl text-white font-extrabold'>Copy invitando a calculadora</span>
    </div>
    <Button className='flex items-center justify-center px-11 py-2.5 rounded-xl cursor-pointer focus:outline-none mt-5 bg-white text-red-600 font-bold'>
      Call to action
    </Button>
    <div className='top-0 z-10'>
      <img src={dogs} />
    </div>
  </div>
);

export default CalculatorSection;
