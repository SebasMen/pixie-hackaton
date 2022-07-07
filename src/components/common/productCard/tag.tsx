import Icon from '../icon';
import { tagIcon } from '../../../assets/vectors';
import { capitalize } from '../../../helpers/capitalize';

export const Tag = ({ name, className }: TagProps) => (
  <div
    className={`
      rounded-full pl-px pr-2 h-[1.95rem]
      flex items-center
      border border-primary text-primary 
      font-subTitles font-semibold 
      md:py-px md:gap-1 md:pr-3 md:pl-[6px]
      ${className}
    `}
  >
    <img src={tagIcon} className='text-md scale-[55%] sm:block md:scale-100' />
    <span className='text-[11px] md:text-sm capitalize ml-1'>{capitalize(name)}</span>
  </div>
);

interface TagProps {
  name: string;
  className?: string;
}

export default Tag;
