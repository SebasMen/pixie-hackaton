import { useAppContext } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

import Icon from '../../common/icon';
import ProductCard from '../../common/productCard';
import Button from '../../common/button';
import IconButton from '../../common/iconButton';

import { products } from '../../../@fake/productsFake';
import Detail from '../../../views/Detail';
import { backArrow } from '../../../assets/vectors';
import { capitalize } from '../../../helpers/capitalize';
import BannerDetail from '../../../views/Detail/bannerDetail';
import BannerDetailDT from '../../../views/Detail/BannerDetailDT';
import { organizeAttributes, organizeIngredients } from '../../../helpers/detailHelper';
import InfoSection from '../../../views/Detail/InfoSection';
import NutritionSection from '../../../views/Detail/NutritionSection';
import ExtraInfoContainer from '../../../views/Detail/ExtraInfoContainer';
import InfoAccordion from '../../../views/Detail/InfoAccordion';

const PopupDetailProduct = () => {
  // Hooks
  const { updateContext, productView } = useAppContext();
  const navigate = useNavigate();

  // Methods
  const handleClosePopup = () => {
    updateContext(old => ({ ...old, showPopup: false }));
  };

  return (
    <div className='absolute z-1000 flex items-center justify-center -top-[10px] -left-1 -right-1 -bottom-[10px] bg-[#000000b6] lg:-left-[10px] lg:-right-[10px]'>
      <div className='bg-sixth w-full flex flex-col justify-center items-center rounded-t-3xl pb-9 lg:w-auto lg:rounded-3xl'>
        <div className='w-full flex justify-end px-8 pt-5'>
          <IconButton
            name='close'
            size='3xl'
            className='absolute text-grayText'
            onClick={() => handleClosePopup()}
            shadow={false}
            sizeContainer='w-5 h-5'
          />
        </div>
        <div className='lg:px-8 max-w-[1250px] pt-20'>
          <div className='flex flex-col w-full flex-shrink-0 overflow-hidden'>
            <div className='w-full flex-grow flex flex-col flex-shrink-0 md:flex-row md:pb-10 md:gap-1'>
              {/* Banner Detail to mobile */}
              <BannerDetail product={productView} />
              {/* Banner Detail to desktop */}
              <BannerDetailDT />
              <InfoSection product={productView} attributes={organizeAttributes(productView.atributos)} showControls={false}/>
            </div>
          </div>

          {/* Nutrition */}
          <NutritionSection ingredients={organizeIngredients(productView.ingredients)} />

          <ExtraInfoContainer product={productView} />

        </div>
        {/* Other Info */}
        <InfoAccordion product={productView} />
      </div>
    </div>
  );
};

export default PopupDetailProduct;
