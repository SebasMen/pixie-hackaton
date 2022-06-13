import IconButton from '../common/iconButton';

const AddRemoveItem = () => (
  <div className='flex items-center rounded-3xl text-white' style={{ backgroundColor: '#929292' }}>
    <IconButton.mini name='add' onClick={() => console.log(1)} className='shadow-none transform scale-75' />
    <span className='text-base'>
      1
    </span>
    <IconButton.mini name='remove' onClick={() => console.log(-1)} className='shadow-none transform scale-75' />
  </div>
);

export default AddRemoveItem;
