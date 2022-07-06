
export const Card = ({ title, description, selected, far, className, img }: CardProps) => (
  <div
    className={`
        w-[14.6rem] h-[22.9rem] md:h-[26rem] p-2 lg:h-120 lg:w-[17.1rem] rounded-3xl flex flex-col lg:p-5 
        shadow-xl transform transition-all overflow-hidden flex-shrink-0
        ${selected ? 'bg-[#f5baba]' : far ? 'bg-[#e96b76] scale-50 xl1:scale-[0.55] xl2:scale-[0.668]' : 'bg-[#ef9298] scale-75 xl1:scale-[0.8] xl2:scale-[0.82]'}
        ${className}
    `}
  >
    <div className='flex flex-grow flex-shrink-0 items-center justify-center lg:pt-3'>
      <img src={img} className={`${selected ? 'w-[138px] h-[138px] xl:w-48 xl:h-48' : far ? 'w-[138px] h-[138px] xl:w-36 xl:h-36' : 'w-[138px] h-[138px] xl:w-36 xl:h-36'}`} />
    </div>
    <div className='flex-grow flex-shrink-0 overflow-y-auto'>
      <h2
        className={`text-lg mb-3 
        ${selected ? 'lg:text-xl' : far ? 'lg:text-lg' : 'lg:text-lg'}`}
      >
        {title}
      </h2>
      <p className='text-center font-sanzSemiBold text-base md:text-sm'>{description}</p>
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
