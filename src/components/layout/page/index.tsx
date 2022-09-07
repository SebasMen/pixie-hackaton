import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../../hooks';
import useScrolled from '../../../hooks/useScrolled';
import ViewerImagePopup from '../../common/viewerImagePopup';

import NavBar from '../../layout/navBar';
import Loading from '../loading';
import PopupDetailProduct from '../popupDetailProduct';

export const Page = ({ className, children, color }: PageProps) => {
  // Hooks
  const { showPopup } = useAppContext();
  const { pathname } = useLocation();
  const { updateContext, showNavbar, showLoading, showPopupViewerImage } = useAppContext();
  const minimalNavbar = useCallback(
    () => {
      if (screen.width < 800)
        return 20;

      return 112;
    },
    [screen],
  );

  const { scrollTo,
    scrolledData: { isDown },
  } = useScrolled({
    gap: minimalNavbar(),
    callback: () => isDown ? updateContext(old => ({ ...old, showMinimalNavbar: true })) : updateContext(old => ({ ...old, showMinimalNavbar: false }))
  });

  useEffect(() => {
    scrollTo(0);

    return () => {};
  }, [pathname]);

  return (
    <>
      <div style={color ? { backgroundColor: color } : {}} className='absolute h-screen w-screen -z-10' />
      <div
        className={`
        flex flex-col items-center justify-center 
        flex-grow relative w-full
        animate__animated animate__fadeIn animate__fast
        ${showNavbar && 'pt-[5.5rem] md:pt-[10rem]'}
        ${className}  
      `}
      >
        <NavBar />
        {showPopup && <PopupDetailProduct />}
        {showPopupViewerImage.show && <ViewerImagePopup />}
        {showLoading && <Loading />}
        <>{children}</>
      </div>
    </>
  );
};

interface PageProps {
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export default Page;
