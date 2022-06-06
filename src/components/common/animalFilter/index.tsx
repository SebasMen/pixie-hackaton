import { useState } from 'react';

import Button from '../button';
import IconButton from '../iconButton';
import Icon from '../icon';

import { vegetablesCatalogue } from '../../../assets/images';
import {
  CatIcon,
  DogIcon,
  DogIconSelected,
  CatIconSelected,
} from '../../../assets/vectors';

const categories = [
  {
    name: 'Chachorros',
    key: 'puppies'
  },
  {
    name: 'Adultos',
    key: 'adults'
  },
  {
    name: 'Senior',
    key: 'seniors'
  }
];

const filters = [
  {
    name: 'Perros',
    key: 'dogs',
    img: DogIcon,
    imgSelected: DogIconSelected
  },
  {
    name: 'Gatos',
    key: 'cats',
    img: CatIcon,
    imgSelected: CatIconSelected
  },
];

const AnimalFilter = () => {
  const [filter, setFilter] = useState({
    key: 'dogs',
    type: 'puppies'
  });

  return (
    <div className='w-full flex flex-col items-center justify-center rounded-t-3xl overflow-hidden transform -mt-4' style={{ backgroundColor: '#FFF6EC' }}>
      {/* Backgrounds */}
      <img className='absolute w-full md:pt-20 object-cover object-right -z-10' src={vegetablesCatalogue} />

      <div className='flex flex-row justify-around mb-14 mt-20 gap-5 md:gap-14'>
        {filters.map(({ name, key, img, imgSelected }) => (
          <div key={key} className='text-center'>
            <div
              className={`
                md:w-52 md:flex md:justify-between md:items-center 
                rounded-full transform transition-all gap-2
                md:ring-2 md:ring-red-600 shadow-xl
                ${filter.key === key ? 'bg-red-600 ' : 'bg-transparent'}
              `}
            >
              <div className='text-left'>
                <IconButton.xl
                  img={filter.key === key ? imgSelected : img}
                  name={name}
                  className={'z-10 ring-1 ring-red-600 rounded-full p-2 shadow-none transform transition-all md:ring-0 scale-75'}
                  onClick={() => setFilter({ ...filter, key })}
                  shadow={false}
                />
              </div>
              <div className={`hidden text-2xl font-bold text-white md:flex-grow md:flex ${filter.key === key ? 'md:text-amber-100' : 'md:text-red-600'}`}>
                <span>{name}</span>
              </div>
            </div>
            <div className={'md:hidden text-2xl font-bold text-red-600 md:flex-grow'}>
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-row justify-around px-8 gap-2 mb-10 md:gap-5 md:mb-2 md:px-32 md:justify-center'>
        {categories.map(({ key, name }) => (
          <Button
            key={`cat${key}`}
            className={'font-bold text-white gap-2 h-full transform transition-all duration-300 md:rounded-b-none'}
            color={`${filter.type === key ? '#7ac5be' : '#bee0e1'}`}
            onClick={() => setFilter({ ...filter, type: key })}>
            <Icon name='done' size='2xl' className={`${filter.type === key ? 'w-7' : 'w-0'} overflow-hidden transform transition-all`} />
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AnimalFilter;
