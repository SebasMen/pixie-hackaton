import { useAppContext } from '../../../hooks';
import DataPrivacyInfoSection from '../../../views/dataPrivacy/dataPrivacyInfoSection';
import TermsSection from '../../../views/termsAndConditions/TermsSection';
import IconButton from '../../common/iconButton';

const PopupTermAndConditions = () => {
  // Hooks
  const { updateContext, showPopupTermsAndConditions } = useAppContext();

  // Methods
  const handleClosePopup = () => {
    updateContext(old => ({ ...old, showPopupTermsAndConditions: { ...old.showPopupTermsAndConditions, status: false } }));
  };

  return (
    <div className='absolute z-1000 flex items-center justify-center -top-[10px] -left-1 -right-1 -bottom-[10px] bg-[#000000b6] lg:-left-[10px] lg:-right-[10px]'>
      <div className='bg-sixth w-full justify-center items-center pb-9 lg:w-auto rounded-3xl max-w-[1100px] max-h-screen scroll-gray overflow-y-auto'>
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
        {showPopupTermsAndConditions.type === 1
          ?
          <div className='w-full h-auto'>
            <TermsSection />
          </div>
          :
          <DataPrivacyInfoSection />
        }
      </div>
    </div>
  );
};

export default PopupTermAndConditions;
