const NutritionItem = ({ name }: NutritionItemProps) => (
  <div className='flex flex-col justify-center items-center text-center h-24'>
    <div className='rounded-full ring-2 ring-red-600 w-10 h-10' />
    <span className='flex-grow flex items-center justify-center'>{name}</span>
  </div>
);

interface NutritionItemProps {
  name: string;
}

export default NutritionItem;
