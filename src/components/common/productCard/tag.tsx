import Icon from '../icon';

export const Tag = ({ name }: TagProps) => (
  <div className='rounded-full px-3 py-px flex items-center gap-1 border-2 border-red-500 text-red-500'>
    <Icon name='sell' className='text-sm' type='outlined' />
    {name}
  </div>
);

interface TagProps {
  name: string;
}

export default Tag;
