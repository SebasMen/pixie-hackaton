import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../../hooks';

import NavBar from '../../layout/navBar';
import PopupAddProduct from '../popupAddProduct';

export const Page = ({ className, children, color }: PageProps) => {
  // Hooks
  const { showPopup } = useAppContext();
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById('root');

    if (!root) return;

    root.scrollTo(0, 0);

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
        ${className}  
      `}
      >
        <NavBar />
        {showPopup && <PopupAddProduct />}
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
