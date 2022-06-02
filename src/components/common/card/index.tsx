import Icon from '../icon';

export const Card = ({ title, description, selected, far, className }: CardProps) => (
  <div
    className={`
        w-full h-120 rounded-3xl flex flex-col p-5 
        shadow-xl transform transition-all 2xl:h-128
        ${selected ? 'bg-red-100' : far ? 'bg-red-400 scale-50' : 'bg-red-300 scale-75'}
        ${className}
    `}
  >
    <div className='flex items-center justify-center pt-3 pb-3 flex-grow'>
      <Icon name='landscape' size='3xl'/>
    </div>
    <h2 className='text-xl'>{title}</h2>
    <p className='text-center'>{description}</p>
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
