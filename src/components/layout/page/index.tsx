import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../../hooks';
import useScrolled from '../../../hooks/useScrolled';
import ViewerImagePopup from '../../common/viewerImagePopup';

import NavBar from '../../layout/navBar';
import Loading from '../loading';
import PopupDetailProduct from '../popupDetailProduct';
import PopupTermAndConditions from '../popupTermsAndConditions';

export const Page = ({ className, children, color, addPadding = true }: PageProps) => {
  // Hooks
  const { showPopup } = useAppContext();
  const { pathname } = useLocation();
  const { updateContext, showNavbar, showLoading, showPopupViewerImage, showPopupTermsAndConditions } = useAppContext();
  const minimalNavbar = useCallback(() => {
    if (screen.width < 800) return 20;

    return 50;
  }, [screen]);

  const {
    scrollTo,
    scrolledData: { isDown },
  } = useScrolled({
    gap: minimalNavbar(),
    callback: () =>
      isDown
        ? updateContext(old => ({ ...old, showMinimalNavbar: true }))
        : updateContext(old => ({ ...old, showMinimalNavbar: false })),
  });

  useEffect(() => {
    if (!(pathname.includes('/catalogo')))
      scrollTo(0);

    return () => {};
  }, [pathname]);

  return (
    <>
      <div style={color ? { backgroundColor: color } : {}} className='absolute h-screen w-screen -z-10' />
      <section
        className={`
        flex flex-col items-center justify-center 
        flex-grow relative w-full
        animate__animated animate__fadeIn animate__fast
        ${showNavbar && `pt-[5.5rem] ${addPadding ? 'md:pt-[7.5rem]' : 'md:pt-0'}`}
        ${className ? className : ''}  
      `}
      >
        <NavBar />
        {showPopup && <PopupDetailProduct />}
        {showPopupViewerImage.show && <ViewerImagePopup />}
        {showLoading && <Loading />}
        {showPopupTermsAndConditions.status && <PopupTermAndConditions />}
        <>{children}</>
      </section>
    </>
  );
};

interface PageProps {
  className?: string;
  children: React.ReactNode;
  color?: string;
  addPadding?: boolean;
}

export default Page;
