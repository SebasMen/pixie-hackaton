
export const Card = ({ title, description, selected, far, className, img }: CardProps) => (
  <div
    className={`
        w-56 h-96 p-2 lg:h-120 xl:w-[17.1rem] rounded-3xl flex flex-col lg:p-5 
        shadow-xl transform transition-all overflow-hidden flex-shrink-0
        ${selected ? 'bg-red-200' : far ? 'bg-red-400 scale-50' : 'bg-red-300 scale-75'}
        ${className}
    `}
  >
    <div className='flex flex-grow flex-shrink-0 items-center justify-center lg:pt-3 lg:pb-3 '>
      <img src={img} className=' w-32 h-32 xl:w-44 xl:h-44' />
    </div>
    <div className='flex-grow flex-shrink-0 overflow-y-auto'>
      <h2 className='lg:text-xl text-lg mb-3'>{title}</h2>
      <p className='text-center font-subTitles text-xs font-semibold md:text-sm'>{description}</p>
    </div>
  </div>
);

interface CardProps {
  title: string;
  description: string;
  selected?: boolean | (() => boolean);
  far?: boolean | (() => boolean);
  className?: string;
  img: string;
}

export default Card;
