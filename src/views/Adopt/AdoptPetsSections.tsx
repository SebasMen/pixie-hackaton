import { useTranslation } from 'react-i18next';
import { FilterPet } from '../../interfaces/filter';
import { filterDefault } from '../../helpers/filterHelpers';

import ProductCard from '../../components/common/productCard';
import AdoptCard from './AdoptCard';

const AdoptPetsSections = ({ data, filter }: PetsSectionProps) => {
  // Hooks
  // const { t } = useTranslation();

  // Products
  // const filtered = filterDefault(data, filter);

  console.log(data);

  // Component
  return (
    <div className='full mt-10'>
      <div className='w-full'>
        {/* <div className='w-full' key={`catalogue-${category.name}-${i}`}> */}
        <div className='w-full'>
          <div
            className={`
                p-4 pb-24 lg:p-24 xl:p-16 rounded-t-3xl overflow-hidden transform -mt-4 flex flex-col items-center
                ${'bg-third'}
              `}
          >
            <div className='max-w-[1440px] xl2:px-1 2xl1:px-36' id='catalogue'>
              {/* <h2 className='text-center text-[40px] mb-6 text-gray-700 stroke-zinc-50 text_withoutbg opacity-50 md:text-7xl lg:text-7xl lg:mb-[70px]'>
                {t(`catCategory${category.name === 'Alimentos' ? 'Aliments' : 'Snacks'}`)}
              </h2> */}
              <div
                className={`
                    flex flex-wrap justify-center gap-3 gap-y-20 md:gap-6 md:gap-y-[94px]
                    items-start
                  `}
              >
                {data && data?.map(pet => (
                  <AdoptCard key={pet.id} pet={pet} />
                ))}
              </div>
            </div>
          </div>
          {/* {category.products.length > 0 && (
          )} */}
        </div>
      </div>
    </div>
  );
};

interface PetsSectionProps {
  data?: any[];
  filter: FilterPet;
}

export default AdoptPetsSections;
