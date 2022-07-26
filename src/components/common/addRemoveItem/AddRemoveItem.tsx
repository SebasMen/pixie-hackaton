import IconButton from '../iconButton';

const AddRemoveItem = ({ handleChance }: AddRemoveItemProps) => (
  <div className='flex items-center rounded-3xl text-white font-sanzBold w-full h-full' style={{ backgroundColor: '#929292' }}>
    <IconButton.mini name='remove' sizeContainer='w-full h-full' onClick={() => handleChance(-1)} className='shadow-none transform scale-75' />
    <span className='text-base'>
      1
    </span>
    <IconButton.mini name='add' sizeContainer='w-full h-full' onClick={() => handleChance(+1)} className='shadow-none transform scale-75' />
  </div>
);

interface AddRemoveItemProps {
  handleChance: (type: number) => void
}

export default AddRemoveItem;
