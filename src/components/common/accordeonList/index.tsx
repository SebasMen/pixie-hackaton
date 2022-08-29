import { useState } from 'react';
import Icon from '../icon';

const AccordeonList = ({ title, children }: AccordeonListProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className='flex justify-start flex-col'>
      <div className='flex gap-3' onClick={() => setOpen(!open)}>
        <div className='h-[25px] w-[25px] rounded-full bg-pixieLightBlue flex justify-center items-center'>
          {open
            ?
            <Icon name='remove' size='md' className='text-white'/>
            :
            <Icon name='add' size='md' className='text-white'/>
          }
        </div>
        <h5 className='text-left font-sanzBold text-xl' onClick={() => setOpen(!open)}>{title}</h5>
      </div>
      {open &&
      <div className='bg-white font-subTitles text-black px-9 py-7 mt-10 rounded-[10px]'>
        {children}
      </div>
      }
    </li>
  );
};

interface AccordeonListProps {
  title: string,
  children: JSX.Element
}

export default AccordeonList;
