const NutritionItem = ({ name, img }: NutritionItemProps) => (
  <div className='flex flex-col justify-center items-center text-center'>
    <div className='rounded-full flex justify-center items-center bg-white w-[41px] h-[41px] mb-2 md:mb-1'>
      <img src={img}/>
    </div>
    <span className='flex-grow flex items-center justify-center px-2 leading-[10.63px] md:text-[11px]'>{name}</span>
  </div>
);

interface NutritionItemProps {
  name: string;
  img: string;
}

export default NutritionItem;
