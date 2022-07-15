import { SetStateAction } from 'react';

import Button from '../button';
import IconButton from '../iconButton';
import Icon from '../icon';

import { filterShop, typePet, agePet } from '../../../interfaces/filter';

/// import { vegetablesCatalogue } from '../../../assets/images';
import {
  CatIcon,
  DogIcon,
  DogIconSelected,
  CatIconSelected,
} from '../../../assets/vectors';

const categories = [
  {
    name: 'Cachorros',
    key: 'cachorros' as agePet,
  },
  {
    name: 'Adultos',
    key: 'adultos' as agePet,
  },
  {
    name: 'Senior',
    key: 'senior' as agePet,
  }
];

const filters = [
  {
    name: 'Perros',
    key: 'DOG' as typePet,
    img: DogIcon,
    imgSelected: DogIconSelected
  },
  {
    name: 'Gatos',
    key: 'CAT' as typePet,
    img: CatIcon,
    imgSelected: CatIconSelected
  },
];

const AnimalFilter = ({ setFilter, filter }: animalFilterProps) => {
  // Handlers
  const handleFilterChange = (type: 'typePet' | 'agePet', value: string) => {
    if (type === 'typePet') {
      const typePet = value as typePet;

      const add = filter.typePet.includes(typePet);
      const newTypePet = add ? filter.typePet.filter(item => item !== typePet) : [...filter.typePet, typePet];
      setFilter(() => ({ ...filter, typePet: newTypePet }));
    }

    if (type === 'agePet') {
      const agePet = value as agePet;

      const add = filter.agePet.includes(agePet);
      const newAgePet = add ? filter.agePet.filter(item => item !== agePet) : [...filter.agePet, agePet];
      setFilter(() => ({ ...filter, agePet: newAgePet }));
    }
  };

  // Component
  return (
    <div className='w-full flex flex-col items-center justify-center rounded-t-3xl overflow-hidden transform -mt-4 lg:gap-9' style={{ backgroundColor: '#FFF6EC' }}>
      {/* Backgrounds */}
      {/* <img className='absolute w-full md:pt-20 object-cover object-right -z-10' src={vegetablesCatalogue} /> */}

      <div className='flex flex-row mb-14 mt-[5.4rem] gap-14 md:gap-14'>
        {filters.map(({ name, key, img, imgSelected }) => (
          <div key={key} className='text-center cursor-pointer' onClick={() => handleFilterChange('typePet', key)}>
            <div
              className={`
                md:w-52 md:flex md:justify-between md:items-center 
                rounded-full transform transition-all 
                md:ring-2 md:ring-primary lg:shadow-xl lg:px-1
                ${filter.typePet.includes(key as any) ? 'bg-primary gap-3' : 'bg-white gap-2'}
              `}
            >
              <div className='text-left'>
                <IconButton.xl
                  img={filter.typePet.includes(key as any) ? imgSelected : img}
                  name={name}
                  className={`z-10 rounded-full ring-1 ring-primary md:ring-0  shadow-none transform transition-all
                  ${filter.typePet.includes(key as any) ? 'px-2' : 'px-3'}
                  `}
                  onClick={() => { }}
                  shadow={false}
                  sizeContainer={'h-[4.8rem] w-[4.8rem]'}
                />
              </div>
              <div className={`hidden text-[27px] font-bold text-white md:flex-grow md:flex ${filter.typePet.includes(key as any) ? 'md:text-amber-100' : 'md:text-primary'}`}>
                <span>{name}</span>
              </div>
            </div>
            <div className={'md:hidden text-2xl font-bold text-primary md:flex-grow'}>
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-row justify-around px-8 gap-1 mb-10 md:gap-5 md:mb-2 md:px-32 md:justify-center'>
        {categories.map(cat => (
          <Button
            key={`cat-${cat.key}`}
            className={'font-bold text-white gap-1 h-full transform transition-all duration-300 md:rounded-b-none lg:rounded-t-[30px]'}
            color={`${filter.agePet.includes(cat.key) ? '#7ac5be' : '#bee0e1'}`}
            onClick={() => handleFilterChange('agePet', cat.key)}
            padding={'px-[1.0rem] lg:py-4 lg:px-6'}
            rounded={true}
          >
            { filter.agePet.includes(cat.key)
              ?
              <Icon name='done' size='3xl' className={'w-6 md:w-7 overflow-hidden transform transition-all md:mr-2'} />
              :
              <Icon name='circle' size='2xl' className={'w-6 md:w-7 overflow-hidden transform transition-all md:mr-2'} />
            }
            <span className='tracking-wide md:tracking-normal text-sm lg:text-[27px]'>{cat.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

interface animalFilterProps {
  setFilter: React.Dispatch<SetStateAction<filterShop>>
  filter: filterShop
}

export default AnimalFilter;
