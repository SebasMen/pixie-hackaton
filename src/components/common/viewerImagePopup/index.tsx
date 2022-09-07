import { useAppContext } from '../../../hooks';
import IconButton from '../iconButton';

const ViewerImagePopup = () => {
  const { updateContext, showPopupViewerImage } = useAppContext();

  const hadleClosePopup = () => {
    updateContext(old => ({ ...old, showPopupViewerImage: { show: false, url: '' } }));
  };

  return (
    <div className='absolute z-1000 justify-center -top-[10px] -left-1 -right-1 -bottom-[10px] bg-[#000000b6] lg:-left-[10px] lg:-right-[10px] lg:items-center'>
      <div className='w-full flex justify-end px-8 pt-5'>
        <IconButton
          name='close'
          size='3xl'
          className='absolute text-primary'
          onClick={hadleClosePopup}
          shadow={false}
          sizeContainer='w-5 h-5'
        />
      </div>
      <div className='flex justify-center items-center'>
        <img src={showPopupViewerImage.url} className='px-5 py-16 md:py-20'/>
      </div>
    </div>
  );
};

export default ViewerImagePopup;
