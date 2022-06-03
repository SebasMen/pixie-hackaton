import Icon from '../icon';

export const Tag = ({ name, className }: TagProps) => (
  <div className={`rounded-full w-max px-3 py-px flex items-center gap-1 border-2 border-red-500 text-red-500 ${className}`}>
    <Icon name='sell' className='hidden text-sm sm:block' type='outlined' />
    {name}
  </div>
);

interface TagProps {
  name: string;
  className?: string;
}

export default Tag;
