import { useAppContext } from '../../../hooks';
import IconButton from '../../common/iconButton';
import { colombiaFlag, mexicoFlag, usaFlag } from '../../../assets/vectors';

const PopupChancePage = () => {
  // Hooks
  const { updateContext } = useAppContext();

  // Methods
  const handleClosePopup = () => {
    updateContext(old => ({ ...old, showPopupGotoSite: false }));
  };

  const handleChooseMexico = () => {
    localStorage.setItem('mexicoSeleced', 'true');
    handleClosePopup();
  };

  return (
    <div className='absolute z-1000 flex items-start justify-center -top-[10px] -left-1 -right-1 -bottom-[10px] bg-[#000000b6] lg:-left-[10px] lg:-right-[10px]'>
      <div className='bg-sixth w-full flex flex-col justify-center items-center rounded-b-3xl pb-9 lg:w-auto lg:rounded-3xl lg:mt-80'>
        <div className='w-full flex justify-end px-8 pt-5'>
          <IconButton
            name='close'
            size='3xl'
            className='absolute text-grayText'
            onClick={() => handleClosePopup()}
            shadow={false}
            sizeContainer='w-5 h-5'
          />
        </div>
        <div className='flex flex-col lg:px-36 py-4 text-center text-sm'>
          <span className='text-xl md:text-[25px]'>Escoge un país</span>
          <div className='flex flex-col pt-9 md:flex-row gap-10 md:gap-16 md:pt-4'>
            <div className='flex gap-4 items-center md:flex-col md:justify-center md:items-center cursor-pointer' onClick={handleChooseMexico}>
              <img src={mexicoFlag} alt='mexicoFlag' className='w-12 h-12 md:w-24 md:h-24' />
              <p>México</p>
            </div>
            <div className='flex gap-4 items-center md:flex-col md:justify-center md:items-center'>
              <a href='https://pixie.net.co/'>
                <img src={colombiaFlag} alt='colombiaFlag' className='w-12 h-12 md:w-24 md:h-24'/>
              </a>
              <p>Colombia</p>
            </div>
            <div className='flex gap-4 items-center md:flex-col md:justify-center md:items-center'>
              <a href='https://us.pixie.pet/'>
                <img src={usaFlag} alt='usaFlag' className='w-12 h-12 md:w-24 md:h-24'/>
              </a>
              <div className='leading-none'>
                <p>Estados</p>
                <p>Unidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupChancePage;
