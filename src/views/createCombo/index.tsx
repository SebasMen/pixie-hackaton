import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Page from '../../components/layout/page';
import Footer from '../../components/layout/footer';

import { backArrow } from '../../assets/vectors';
import '../../styles/banner.css';
import ButtonWhatsap from '../../components/common/buttonWhatsapp';
import ImagesSection from './imagesSection';
import InfoSection from './InfoSection';
import ImagesSectionMb from './ImagesSectionMb';

const CreateCombo = () => {
  // Hooks
  const [showFooter, setShowFooter] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (screen.width < 800) setShowFooter(false);
  }, [screen.width]);

  // Component
  return (
    <Page className={`${!showFooter && 'mb-14'}`}>
      <div>
        <div className='lg:px-[123px] max-w-[1440px] mt-6'>
          <div className='md:hidden px-7 mt-7 mb'>
            <img src={backArrow} onClick={() => navigate(-1)} />
          </div>
          <div className='flex flex-col w-full flex-shrink-0 overflow-hidden'>
            <p className='hidden md:mt-3 md:mb-1 md:block text-fourth font-sanzBold text-sm lg:mb-9'>
              <span onClick={() => navigate('/catalogo')} className='cursor-pointer'>
                Catálogo &gt;{' '}
              </span>
              Crear combo
            </p>
            <div className='w-full flex-grow flex flex-col flex-shrink-0 md:flex-row md:pb-10 md:gap-1'>
              {/* Banner Detail to mobile */}
              <ImagesSectionMb />
              {/* Banner Detail to descktop */}
              <ImagesSection/>
              {/* InfoSection */}
              <InfoSection />
            </div>
          </div>
        </div>
        {/* FAB */}
        {showFooter && <ButtonWhatsap />}

        {/* Footer */}
        {showFooter && <Footer className='md:mt-16' />}
      </div>
    </Page>
  );
};

export default CreateCombo;
