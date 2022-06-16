import NutritionItem from '../../components/common/nutritionItem';

const NutritionSection = ({ ingredients }: NutritionSectionProps) => (
  <div className='flex flex-col w-full md:px-24 md:bg-transparent mt-10'>
    <div className='md:hidden mb-4 mx-7 md:mx-0 text-center py-6'>
      <span className='text-lg font-bold text-primary '>Ingredientes y Nutrición</span>
    </div>
    <div className='mx-7 mb-6 py-3 ring-2 ring-primary text-xs grid grid-cols-4 gap-4 md:grid-cols-12 text-primary font-extrabold md:pt-3 rounded-lg md:mx-0'>
      {ingredients.map(({ img, name }) => (<NutritionItem key={name} name={name} img={img} />))}
    </div>
  </div>
);

interface NutritionSectionProps {
  ingredients: Array<ingredientesProps>;
}

interface ingredientesProps {
  name: string,
  img: string
}

export default NutritionSection;
