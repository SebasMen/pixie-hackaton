import Icon from '../icon';
import { capitalize } from '../../../helpers/capitalize';

export const Tag = ({ name, className }: TagProps) => (
  <div className={`rounded-full w-20 h-5 md:w-28 md:h-8 md:px-3 py-px flex items-center gap-1 ring-1 ring-primary text-red-500 font-subTitles font-semibold ${className}`}>
    <Icon name='sell' className='ml-1 mr-1 text-sm sm:block rotate-90	 ' type='outlined' />
    <span className='text-[11px] md:text-sm'>{capitalize(name)}</span>
  </div>
);

interface TagProps {
  name: string;
  className?: string;
}

export default Tag;
