import NutritionItem from '../../components/common/nutritionItem';

const NutritionSection = ({ ingredients }: NutritionSectionProps) => (
  <div className='flex flex-col w-full md:px-24 mt-10'>
    <div className='mb-4 mx-7 md:mx-0'>
      <span className='text-lg font-bold md:hidden'>Ingredientes y Nutrición</span>
    </div>
    <div className='mx-7 grid grid-cols-4 gap-4 md:grid-cols-12 md:bg-red-100 md:text-red-800 md:font-bold md:pt-3 md:rounded-lg md:mx-0'>
      {ingredients.map(ingredient => (<NutritionItem key={ingredient} name={ingredient} />))}
    </div>
  </div>
);

interface NutritionSectionProps {
  ingredients: string[];
}

export default NutritionSection;
