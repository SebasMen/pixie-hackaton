import { useEffect, useState } from 'react';
import IconButton from '../../components/common/iconButton';
import NutritionItem from '../../components/common/nutritionItem';
import { calculatePageNutrients } from '../../helpers/detailHelper';
import { ingredientesProps } from '../../interfaces/product';
import { useTranslation } from 'react-i18next';

const NutritionSection = ({ ingredients }: NutritionSectionProps) => {
  // Hooks
  const { t } = useTranslation();
  const [allPagesNutritions, setAllPagesNutritions] = useState<ingredientesProps[][]>();
  const [showNutritionPagination, setShowNutritionPagination] = useState<ingredientesProps[]>();
  const [currentPageNutition, setCurrentPageNutition] = useState(0);
  const [numberToDivide, setNumberToDivide] = useState(10);

  useEffect(() => {
    getPagesIngredients();
  }, [ingredients, numberToDivide]);

  useEffect(() => {
    if (screen.width < 800) setNumberToDivide(4);
    if (screen.width < 840 && screen.width > 800) setNumberToDivide(6);
  }, [screen.width]);

  // Methods
  const getPagesIngredients = () => {
    const orderNutritions = calculatePageNutrients(ingredients, numberToDivide);
    // Set values
    setAllPagesNutritions(orderNutritions);
    setShowNutritionPagination(orderNutritions[0]);
  };

  const handleChangePagination = (goToPage: number) => {
    const newNumberPage = currentPageNutition + goToPage;
    const lengthAllpage = allPagesNutritions?.length ? allPagesNutritions.length : 0;
    if (newNumberPage >= 0 && newNumberPage < lengthAllpage) {
      setShowNutritionPagination(allPagesNutritions ? allPagesNutritions[newNumberPage] : []);
      setCurrentPageNutition(newNumberPage);
    }
  };

  return (
    <div className='flex flex-col w-full md:bg-transparent mt-1 px-5 md:px-0 md:pr-2'>
      <div className='md:hidden md:mx-0 text-center py-6'>
        <span className='text-lg font-bold text-pixieLightBlue '>{t('productsNutrTitle')}</span>
      </div>
      <div className='flex justify-between items-center mb-6 p-3 text-[11px] gap-4 text-pixieLightBlue bg-[#FAD7B1] bg-opacity-[0.3] font-extrabold md:pt-3 rounded-3xl md:mx-0 md:py-4 md:px-4 md:gap-2 md:overflow-x-auto scroll_ingredients'>
        {currentPageNutition > 0 && (
          <IconButton
            name='navigate_before'
            className='w-[3%] animate__animated animate__fadeIn animate__faster'
            sizeContainer='w-8 h-8'
            size='3xl'
            onClick={() => handleChangePagination(-1)}
            shadow={false}
          />
        )}
        <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 text-center w-[94%]'>
          {showNutritionPagination?.map(
            ({ img, name, tooltip }) => img && <NutritionItem key={name} name={name} img={img} tooltip={tooltip} />
          )}
        </div>
        {(allPagesNutritions ? allPagesNutritions.length - 1 : 0) > currentPageNutition && (
          <IconButton
            name='navigate_next'
            className='w-[3%] text-right animate__animated animate__fadeIn animate__faster'
            sizeContainer='w-8 h-8'
            size='3xl'
            onClick={() => handleChangePagination(+1)}
            shadow={false}
          />
        )}
      </div>
    </div>
  );
};

interface NutritionSectionProps {
  ingredients: Array<ingredientesProps>;
}

export default NutritionSection;
