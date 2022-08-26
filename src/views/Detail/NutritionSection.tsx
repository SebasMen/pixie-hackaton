import NutritionItem from '../../components/common/nutritionItem';
import { ingredientesProps } from '../../interfaces/product';

const NutritionSection = ({ ingredients }: NutritionSectionProps) => (
  <div className='flex flex-col w-full md:bg-transparent mt-1 px-5 md:px-0 md:pr-2'>
    <div className='md:hidden md:mx-0 text-center py-6'>
      <span className='text-lg font-bold text-pixieLightBlue '>Ingredientes y Nutrición</span>
    </div>
    <div className='mb-6 p-3 text-[11px] grid grid-cols-4 gap-4 text-pixieLightBlue bg-[#FAD7B1] bg-opacity-[0.3] font-extrabold md:pt-3 rounded-3xl md:mx-0 md:py-4 md:px-3 md:gap-2 md:flex md:overflow-x-auto scroll_ingredients'>
      {ingredients.map(({ img, name }) => (
        img &&
        <NutritionItem key={name} name={name} img={img} />
      ))}
    </div>
  </div>
);

interface NutritionSectionProps {
  ingredients: Array<ingredientesProps>;
}

export default NutritionSection;
