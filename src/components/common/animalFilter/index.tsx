import { useState } from 'react';

import Button from '../button';
import IconButton from '../iconButton';

import catIcon from '../../../assets/vectors/CatIcon.svg';
import dogIcon from '../../../assets/vectors/DogIcon.svg';

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
  const [filter, setFilter] = useState('dogs');

  return (
    <div className='bg-white w-full flex flex-col items-center justify-center '>
      <div className='flex flex-row justify-around mb-14 mt-20 gap-5 md:gap-14'>
        {filters.map(({ name, key, img }) => (
          <div
            key={key}
            className={`
              md:w-80 md:flex md:justify-between md:items-center 
              md:rounded-3xl md:p-4 transform transition-all gap-5
              ${filter === key ? 'md:bg-red-100' : 'md:bg-red-50'}
            `}
          >
            <div className='text-left'>
              <IconButton.xl
                img={img}
                name={name}
                className={`
                  z-10 ring-1 ring-red-600 rounded-full p-1 shadow-none
                  transform transition-all
                  ${filter === key ? 'bg-red-100 scale-90' : 'scale-75'}
                `}
                onClick={() => setFilter(key)} />
            </div>
            <div className='hidden text-3xl text-white md:flex-grow md:flex md:text-red-500'>
              <span>{name}</span>
            </div>
          </div>))
        }
      </div>
      <div className='w-full flex flex-row justify-around px-8 gap-2 mb-10 md:gap-5 md:mb-0 md:px-32 md:justify-start'>
        <Button className='text-amber-100 font-bold md:rounded-b-none' color='#DF2F44'>
          Cachorros
        </Button>
        <Button className='text-red-600 font-bold bg-transparent ring-2 ring-inset ring-red-600 md:rounded-b-none'>
          Adultos
        </Button>
        <Button className='text-red-600 font-bold bg-transparent ring-2 ring-inset ring-red-600 md:rounded-b-none'>
          Veteranos
        </Button>
      </div>
    </div>
  );
};

export default AnimalFilter;
