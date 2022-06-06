import { useState } from 'react';
import ExtraInfo from '../../../views/Detail/ExtraInfo';
import Icon from '../icon';

const ItemAccordion = ({ name, infoList, infoTable, infoConservation, type }: ItemAccordionProps) => {
  // Hooks
  const [isOpen, setIsOpen] = useState(false);

  // Component
  return (
    <li
      className='relative flex flex-col text-lg px-7 py-4 md:px-0'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex justify-between'>
        <span className='text-primary font-extrabold text-base'>
          {name}
        </span>
        {isOpen ? <Icon name='expand_more' size='3xl' /> : <Icon name='expand_less' size='3xl' />}
      </div>
      <div className={`overflow-hidden h-auto transition-all transform${isOpen ? 'max-h-screen duration-500 block' : 'max-h-0 duration-300 hidden'}`}>
        <div className='pl-5'>
          {type === 'list' && <ExtraInfo type={type} infoList={infoList}/>}
        </div>
        {type === 'table' && <ExtraInfo type={type} infoTable={infoTable}/>}
        {type === 'conservation' && <ExtraInfo type={type} infoConservation={infoConservation}/>}
      </div>
    </li>
  );
};

interface ItemAccordionProps {
  name: string,
  type: 'list' | 'table' | 'conservation',
  infoList?: Array<string>,
  infoTable?:Array<interfaceTable>
  infoConservation? : interfaceConservation
}
interface interfaceTable {
  kl: string,
  grams: string
}
interface interfaceConservation{
  frozen: string,
  cooled: string
}

export default ItemAccordion;
