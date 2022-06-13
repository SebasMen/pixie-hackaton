import Icon from '../icon';

export const Card = ({ title, description, selected, far, className }: CardProps) => (
  <div
    className={`
        w-full h-120 rounded-3xl flex flex-col p-5 
        shadow-xl transform transition-all 2xl:h-128
        ${selected ? 'bg-red-200' : far ? 'bg-red-400 scale-50' : 'bg-red-300 scale-75'}
        ${className}
    `}
  >
    <div className='flex items-center justify-center pt-3 pb-3 flex-grow'>
      <Icon name='landscape' size='3xl'/>
    </div>
    <h2 className='text-xl font-subTitles font-bold'>{title}</h2>
    <p className='text-center font-paragraph text-sm'>{description}</p>
  </div>
);

interface CardProps {
  title: string;
  description: string;
  selected?: boolean | (() => boolean);
  far?: boolean | (() => boolean);
  className?: string;
}

export default Card;
