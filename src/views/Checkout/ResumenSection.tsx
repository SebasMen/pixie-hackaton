import { basket } from '../../assets/vectors';
const ResumenSection = () => {
  console.log('resumen');

  return (
    <>
      <div className='flex justify-between ring-1 ring-primary px-6 py-5 rounded-xl'>
        <div className='flex justify-around'>
          <img src={basket} className='w-5 h-5'/>
          <span className='text-sm'>Mostrar resumen del pedido</span>
        </div>
        <div className='text-[17px]'>
          $180.000
        </div>
      </div>
    </>
  );
};

export default ResumenSection;
