const NutritionItem = ({ name, img }: NutritionItemProps) => (
  <div className='flex flex-col justify-center items-center text-center h-24'>
    <div className='rounded-full flex justify-center items-center bg-primaryOpacity w-11 h-11'><img src={img}/></div>
    <span className='flex-grow flex items-center justify-center px-4'>{name}</span>
  </div>
);

interface NutritionItemProps {
  name: string;
  img: string;
}

export default NutritionItem;
