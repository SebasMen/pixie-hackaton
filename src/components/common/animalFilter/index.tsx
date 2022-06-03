import { useState } from 'react';

import Button from '../button';
import IconButton from '../iconButton';

import catIcon from '../../../assets/vectors/CatIcon.svg';
import dogIcon from '../../../assets/vectors/DogIcon.svg';

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
    name: 'Veteranos',
    key: 'veterans'
  }
];

const filters = [
  {
    name: 'Perritos',
    key: 'dogs',
    img: dogIcon,
  },
  {
    name: 'Michis',
    key: 'cats',
    img: catIcon,
  },
];

const AnimalFilter = () => {
  const [filter, setFilter] = useState({
    key: 'dogs',
    type: 'puppies'
  });

  return (
    <div className='bg-white w-full flex flex-col items-center justify-center '>
      <div className='flex flex-row justify-around mb-14 mt-20 gap-5 md:gap-14'>
        {filters.map(({ name, key, img }) => (
          <div
            key={key}
            className={`
              md:w-80 md:flex md:justify-between md:items-center 
              md:rounded-3xl md:p-4 transform transition-all gap-5
              md:ring-2 md:ring-red-600
              ${filter.key === key ? 'md:bg-red-600 ' : 'md:bg-transparent'}
            `}
          >
            <div className='text-left'>
              <IconButton.xl
                img={img}
                name={name}
                className={`
                  z-10 ring-1 ring-red-600 rounded-full p-1 shadow-none
                  transform transition-all
                  ${filter.key === key ? 'bg-red-100 scale-90' : 'scale-75'}
                `}
                onClick={() => setFilter({ ...filter, key })} />
            </div>
            <div className={`hidden text-3xl text-white md:flex-grow md:flex ${filter.key === key ? 'md:text-amber-100' : 'md:text-red-600'}`}>
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-row justify-around px-8 gap-2 mb-10 md:gap-5 md:mb-0 md:px-32 md:justify-start'>
        {categories.map(({ key, name }) => (
          <div key={`cat${key}`}>
            <Button
              className={`font-bold ring-2 ring-inset
             ring-red-600 md:rounded-b-none
              ${filter.type === key ? 'bg-red-600 text-amber-100' : 'bg-transparent text-red-600'}`}
              onClick={() => setFilter({ ...filter, type: key })}>
              { name }
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalFilter;
