import { useState } from 'react';
import Icon from '../icon';

const ItemAccordion = ({ name, info }: ItemAccordionProps) => {
  // Hooks
  const [isOpen, setIsOpen] = useState(false);

  // Component
  return (
    <li
      className='relative flex flex-col text-lg font-bold px-7 py-4 md:px-0'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex justify-between'>
        <span>
          {name}
        </span>
        {isOpen ? <Icon name='expand_more' size='3xl' /> : <Icon name='expand_less' size='3xl' />}
      </div>
      <ul className={`mx-7 pl-5 overflow-hidden h-auto transition-all transform ${isOpen ? 'max-h-screen duration-500' : 'max-h-0 duration-300'}`}>
        {info.map((text, i) => <li className='font-normal list-disc my-2' key={name + '-' + i}>{text}</li>)}
      </ul>
    </li>
  );
};

interface ItemAccordionProps {
  name: string,
  info: Array<string>,
}

export default ItemAccordion;
