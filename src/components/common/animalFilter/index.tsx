import { SetStateAction } from 'react';

import Button from '../button';
import IconButton from '../iconButton';
import Icon from '../icon';

/// import { vegetablesCatalogue } from '../../../assets/images';
import {
  CatIcon,
  DogIcon,
  DogIconSelected,
  CatIconSelected,
} from '../../../assets/vectors';
import { filterShop } from '../../../interfaces/filter';

const categories = [
  {
    name: 'Cachorros',
    key: 'cachorros'
  },
  {
    name: 'Adultos',
    key: 'adultos'
  },
  {
    name: 'Senior',
    key: 'senior'
  }
];

const filters = [
  {
    name: 'Perros',
    key: 'DOG',
    img: DogIcon,
    imgSelected: DogIconSelected
  },
  {
    name: 'Gatos',
    key: 'CAT',
    img: CatIcon,
    imgSelected: CatIconSelected
  },
];

const AnimalFilter = ({ setFilter, filter }: animalFilterProps) => (
  <div className='w-full flex flex-col items-center justify-center rounded-t-3xl overflow-hidden transform -mt-4' style={{ backgroundColor: '#FFF6EC' }}>
    {/* Backgrounds */}
    {/* <img className='absolute w-full md:pt-20 object-cover object-right -z-10' src={vegetablesCatalogue} /> */}

    <div className='flex flex-row justify-around mb-14 mt-20 gap-5 md:gap-14'>
      {filters.map(({ name, key, img, imgSelected }) => (
        <div key={key} className='text-center'>
          <div
            className={`
              md:w-52 md:flex md:justify-between md:items-center 
              rounded-full transform transition-all gap-2
              md:ring-2 md:ring-red-600 shadow-xl
              ${filter.typePet === key ? 'bg-red-600 ' : 'bg-transparent'}
            `}
          >
            <div className='text-left'>
              <IconButton.xl
                img={filter.typePet === key ? imgSelected : img}
                name={name}
                className={'z-10 ring-1 ring-red-600 rounded-full p-2 shadow-none transform transition-all md:ring-0 scale-75'}
                onClick={() => setFilter({ ...filter, typePet: key })}
                shadow={false}
              />
            </div>
            <div className={`hidden text-2xl font-bold text-white md:flex-grow md:flex ${filter.typePet === key ? 'md:text-amber-100' : 'md:text-red-600'}`}>
              <span>{name}</span>
            </div>
          </div>
          <div className={'md:hidden text-2xl font-bold text-red-600 md:flex-grow'}>
            <span>{name}</span>
          </div>
        </div>
      ))}
    </div>
    <div className='w-full flex flex-row justify-around px-8 gap-1 mb-10 md:gap-5 md:mb-2 md:px-32 md:justify-center'>
      {categories.map(({ key, name }) => (
        <Button
          key={`cat-${key}`}
          className={'font-bold text-white gap-1 h-full transform transition-all duration-300 md:rounded-b-none'}
          color={`${filter.agePet === key ? '#7ac5be' : '#bee0e1'}`}
          onClick={() => setFilter({ ...filter, agePet: key })}>
          <Icon name='done' size='2xl' className={`${filter.agePet === key ? 'w-6 md:w-7' : 'w-0'} overflow-hidden transform transition-all`} />
          <span className='tracking-wide md:tracking-widest'>{name}</span>
        </Button>
      ))}
    </div>
  </div>
);

interface animalFilterProps {
  setFilter: React.Dispatch<SetStateAction<filterShop>>
  filter: filterShop
}

export default AnimalFilter;
