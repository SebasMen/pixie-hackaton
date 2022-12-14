import { useState } from 'react';
import { tableCachorro, tableCachorroWhite } from '../../../assets/images';
import { useAppContext } from '../../../hooks';
import useScrolled from '../../../hooks/useScrolled';
import ExtraInfo from '../../../views/Detail/ExtraInfo';
import Icon from '../icon';

const ItemAccordion = ({ name, infoList, infoTable, nameTable, infoConservation, type }: ItemAccordionProps) => {
  // Hooks
  const [isOpen, setIsOpen] = useState(false);
  const { updateContext } = useAppContext();
  const { scrollTo } = useScrolled();

  const handleShowTable = () => {
    updateContext(old => ({ ...old, showPopupViewerImage: { show: true, url: tableCachorroWhite } }));
    scrollTo(0);
  };

  // Component
  return (
    <li
      className='relative flex flex-col text-lg px-7 py-4 md:px-0 font-medium'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex justify-between'>
        <span className='text-fourth font-extrabold text-base'>
          {name}
        </span>
        {isOpen ? <Icon name='expand_less' size='3xl' className='text-fourth'/> : <Icon name='expand_more' size='3xl' className='text-fourth'/>}
      </div>
      <div className={`overflow-hidden h-auto transition-all transform${isOpen ? 'max-h-screen duration-500 block' : 'max-h-0 duration-300 hidden'}`}>
        <div className='pl-5'>
          {type === 'list' && <ExtraInfo type={type} infoList={infoList}/>}
        </div>
        {type === 'table' && <ExtraInfo type={type} infoTable={infoTable} nameTable={nameTable}/>}
        {type === 'conservation' && <ExtraInfo type={type} infoConservation={infoConservation}/>}
        {type === 'tableCachorro' &&
          <div className='mt-7 flex flex-col items-center gap-4 cursor-pointer' onClick={handleShowTable} >
            <img src={tableCachorro} />
            <span className='text-sm font-sanzBold'>Click para ampliar</span>
          </div>
        }
      </div>
    </li>
  );
};

interface ItemAccordionProps {
  name: string,
  type: 'list' | 'table' | 'conservation' | 'tableCachorro',
  infoList?: Array<string>,
  infoTable?:Array<interfaceTable>,
  nameTable? : string,
  infoConservation? : string
}
interface interfaceTable {
  kl: string,
  grams: string
}

export default ItemAccordion;
