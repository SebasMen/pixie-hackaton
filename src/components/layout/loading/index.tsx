import { loadingDog } from '../../../assets/gifts';

const Loading = () => (
  <div className='fixed z-1000 flex justify-center -top-[10px] -left-1 -right-1 -bottom-[10px] bg-[#000000b6] lg:-left-[10px] lg:-right-[10px] lg:items-center'>
    <div className='flex flex-col justify-center items-center text-white gap-7'>
      <div className='bg-[#FDF6ED] rounded-full py-4 pl-2 pr-8'>
        <img src={loadingDog} alt='dogLoading' className='w-16 h-16 md:w-32 md:h-32'/>
      </div>
      <h2 className='text-2xl'>Cargando</h2>
    </div>
  </div>
);

export default Loading;
