import NutritionItem from '../../components/common/nutritionItem';

const NutritionSection = ({ ingredients }: NutritionSectionProps) => (
  <div className='flex flex-col w-full md:bg-transparent mt-10 px-5'>
    <div className='md:hidden md:mx-0 text-center py-6'>
      <span className='text-lg font-bold text-primary '>Ingredientes y Nutrición</span>
    </div>
    <div className='mb-6 p-3 ring-1 ring-primary text-[11px] grid grid-cols-4 gap-4 md:grid-cols-12 text-primary font-extrabold md:pt-3 rounded-3xl md:mx-0 md:py-1 md:px-9'>
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
