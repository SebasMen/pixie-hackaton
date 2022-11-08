import { useState } from 'react';
import Icon from '../icon';

const AccordeonList = ({ title, children }: AccordeonListProps) => {
  const [open, setOpen] = useState(false);

  const animateClass = open
    ? ` animate__fadeInDown 
        max-h-[500px] py-3 my-3 md:mt-10 md:py-7
      `
    : ` animate__fadeOutUp 
        max-h-0 overflow-hidden delay-100
      `;

  return (
    <li className='flex justify-start flex-col cursor-pointer outline-none focus:outline-none'>
      <div className='flex gap-3' onClick={() => setOpen(!open)}>
        <div className='h-[25px] w-[25px] rounded-full bg-pixieLightBlue flex justify-center items-center'>
          <Icon
            name={open ? 'remove' : 'add'}
            size='md'
            className={`
              text-white animate__animated animate__faster300 select-none
              ${open ? 'animate__fadeInDown' : 'animate__fadeInUp'}
            `}
          />
        </div>
        <h5 className='text-left font-sanzBold text-xl select-none' onClick={() => setOpen(!open)}>
          {title}
        </h5>
      </div>
      <div
        className={`
          font-subTitles text-black rounded-[10px] 
          px-2 md:px-9 transition-all transform
          animate__animated animate__faster300  ${animateClass}
        `}
      >
        {children}
      </div>
      {/* {open && (
        <div className='font-subTitles text-black my-3 py-3 px-2 rounded-[10px] md:px-9 md:mt-10 md:py-7 animate__animated animate__fadeInDown animate__faster300'>
          {children}
        </div>
      )} */}
    </li>
  );
};

interface AccordeonListProps {
  title: string;
  children: JSX.Element;
}

export default AccordeonList;
