import { SetStateAction, useMemo } from 'react';

import Button from '../button';
import IconButton from '../iconButton';
import Icon from '../icon';

import { filterShop, typePet, agePet, typeProduct, FilterPet } from '../../../interfaces/filter';
import { useTranslation } from 'react-i18next';

import { CatIcon, DogIcon, DogIconSelected, CatIconSelected } from '../../../assets/vectors';
import { useNavigate } from 'react-router';

const AnimalFilter = ({ setFilter, filter, adopt }: animalFilterProps) => {
  // Hooks
  const navigate = useNavigate();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  // Handlers
  const handleFilterChange = (
    type: 'typePet' | 'agePet' | 'typeProduct',
    value: string,
    inAdopt?: string
  ) => {
    if (!inAdopt) {
      if (type === 'typePet') {
        const typePet = value as typePet;

        const add = filter.typePet.includes(typePet);
        const newTypePet = add ? filter.typePet.filter(item => item !== typePet) : [...filter.typePet, typePet];
        setFilter(() => ({ ...filter, typePet: newTypePet }));
        if (typePet.length === 0)
          navigate('/catalogo');
        else
          navigate(`/catalogo/${typePet === 'CAT' ? 'gatos' : 'perros'}`);
      }

      if (type === 'agePet') {
        const agePet = value as agePet;

        const add = filter.agePet.includes(agePet);
        const newAgePet = add ? filter.agePet.filter(item => item !== agePet) : [...filter.agePet, agePet];
        setFilter(() => ({ ...filter, agePet: newAgePet }));
      }

      if (type === 'typeProduct') {
        const typeProduct = value as typeProduct;
        setFilter(() => ({ ...filter, typeProduct }));
      }
    }

    if (inAdopt) {
      if (type === 'typePet') {
        const typePet = value as typePet;

        const add = filter.typePet.includes(typePet);
        const newTypePet = add ? filter.typePet.filter(item => item !== typePet) : [...filter.typePet, typePet];
        setFilter(() => ({ ...filter, typePet: newTypePet }));
        if (typePet.length === 0)
          navigate('/adopta');
        else
          navigate(`/adopta/${typePet === 'CAT' ? 'gatos' : 'perros'}`);
      }

      if (type === 'agePet') {
        const agePet = value as agePet;

        const add = filter.agePet.includes(agePet);
        const newAgePet = add ? filter.agePet.filter(item => item !== agePet) : [...filter.agePet, agePet];
        setFilter(() => ({ ...filter, agePet: newAgePet }));
      }
    }
  };

  // Filters data
  const categories = useMemo(
    () => [
      {
        name: t('catFilterPuppies'),
        key: 'cachorros' as agePet,
      },
      {
        name: t('catFilterAdults'),
        key: 'adultos' as agePet,
      },
      {
        name: t('catFilterSenior'),
        key: 'senior' as agePet,
      },
    ],
    [language]
  );

  const filters = useMemo(
    () => [
      {
        name: t('catFilterDog'),
        key: 'DOG' as typePet,
        img: DogIcon,
        imgSelected: DogIconSelected,
      },
      {
        name: t('catFilterCat'),
        key: 'CAT' as typePet,
        img: CatIcon,
        imgSelected: CatIconSelected,
      },
    ],
    [language]
  );

  // Component
  return (
    <div
      className='w-full flex flex-col items-center justify-center rounded-t-3xl overflow-hidden transform -mt-4 lg:gap-9'
      style={{ backgroundColor: '#FFF6EC' }}
    >
      <h4 className='mt-[2rem] md:mt-[5rem]'>{t('catFiltersTitle')}</h4>
      <div className='flex flex-row mb-7 md:mb-14 mt-[0.4rem] gap-12 md:gap-14'>
        {filters.map(({ name, key, img, imgSelected }) => (
          <Button
            key={key}
            className='flex justify-center items-center flex-col text-center cursor-pointer'
            onClick={() => handleFilterChange('typePet', key, adopt)}
          >
            <div
              className={`
                md:w-52 md:flex md:justify-between md:items-center 
                rounded-full transform transition-all 
                md:ring-2 md:ring-primary lg:shadow-xl lg:px-1 
                ${filter.typePet.includes(key as any) ? 'bg-primary md:gap-3' : 'bg-white md:gap-2 hover:bg-[#FAD7B1]'}
              `}
            >
              <div className='md:text-left'>
                <IconButton.xl
                  img={filter.typePet.includes(key as any) ? imgSelected : img}
                  name={name}
                  className={`z-10 rounded-full ring-1 ring-primary md:ring-0  shadow-none transform transition-all
                  ${filter.typePet.includes(key as any) ? 'px-3 md:px-2' : 'px-2 md:px-3'}
                  `}
                  onClick={() => handleFilterChange('typePet', key, adopt)}
                  shadow={false}
                  sizeContainer={`md:h-[4.8rem] md:w-[4.8rem]
                  ${filter.typePet.includes(key as any) ? 'h-[4.8rem] w-[4.8rem]' : 'h-[3.8rem] w-[3.8rem]'}`}
                />
              </div>
              <div
                className={`hidden text-[27px] font-bold text-white md:flex-grow md:flex ${
                  filter.typePet.includes(key as any) ? 'md:text-amber-100' : 'md:text-primary'
                }`}
              >
                <span>{name}</span>
              </div>
            </div>
            <div className={'md:hidden text-lg font-bold text-primary md:flex-grow'}>
              <span>{name}</span>
            </div>
          </Button>
        ))}
      </div>
      <div className='w-full flex flex-row justify-around px-8 gap-1 mb-10 md:gap-5 md:mb-2 md:px-32 md:justify-center'>
        {categories.map(cat => (
          <Button
            key={`cat-${cat.key}`}
            className={
              'font-bold text-white gap-1 h-full transform transition-all duration-300 md:rounded-b-none lg:rounded-t-[30px]'
            }
            color={`${filter.agePet.includes(cat.key) ? '#7ac5be' : '#bee0e1'}`}
            onClick={() => handleFilterChange('agePet', cat.key, adopt)}
            padding={'px-2 lg:py-4 lg:px-6'}
            rounded={true}
          >
            {filter.agePet.includes(cat.key) ? (
              <Icon
                name='done'
                className={'w-6 text-xs overflow-hidden transform transition-all md:mr-2 md:w-7 md:text-3xl'}
              />
            ) : (
              <Icon
                name='circle'
                className={'w-6 text-xs overflow-hidden transform transition-all md:mr-2 md:w-7 md:text-2xl'}
              />
            )}
            <span className='tracking-wide md:tracking-normal text-sm lg:text-[27px]'>{cat.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

interface animalFilterProps {
  setFilter: React.Dispatch<SetStateAction<filterShop | FilterPet>>;
  filter: filterShop | FilterPet;
  adopt?: string;
}

export default AnimalFilter;
