import IconButton from '../iconButton';

const AddRemoveItem = ({ handleChance, counter, onlyOneNumber = false, onhandleChangeInput }: AddRemoveItemProps) => (
  <div className='flex items-center rounded-3xl text-white font-sanzBold w-full h-full' style={{ backgroundColor: '#929292' }}>
    <IconButton.mini
      name='remove'
      sizeContainer='w-1/3 h-full'
      onClick={() => handleChance(-1)}
      className='shadow-none transform scale-75'
    />
    {onlyOneNumber
      ?
      <span className='text-base w-1/3 text-center'>
        1
      </span>
      :
      <input
        value={counter}
        type='number'
        className='w-1/3 bg-transparent text-center inputWithoutArrow'
        onChange={onhandleChangeInput}
        onClick={e => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      />
    }
    <IconButton.mini name='add' sizeContainer='w-1/3 h-full' onClick={() => handleChance(+1)} className='shadow-none transform scale-75' />
  </div>
);

interface AddRemoveItemProps {
  handleChance: (type: number) => void;
  counter? : number,
  onlyOneNumber?: boolean,
  onhandleChangeInput? : (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default AddRemoveItem;
