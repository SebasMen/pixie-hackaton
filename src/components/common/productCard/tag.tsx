import Icon from '../icon';
import { capitalize } from '../../../helpers/capitalize';

export const Tag = ({ name, className }: TagProps) => (
  <div
    className={`
      rounded-full pl-px pr-2 h-[1.1rem]
      flex items-center justify-start
      border border-primary text-primary 
      font-subTitles font-semibold 
      md:h-auto md:px-3 md:py-px md:gap-1 
      ${className}
    `}
  >
    <Icon name='sell' className='text-md rotate-90 scale-[55%] sm:block md:scale-[80%]' type='outlined' />
    <span className='text-[11px] md:text-sm capitalize'>{capitalize(name)}</span>
  </div>
);

interface TagProps {
  name: string;
  className?: string;
}

export default Tag;
