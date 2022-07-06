import { useAppContext } from '../../../hooks';
import NavBar from '../../layout/navBar';
import Popup from '../popup';

export const Page = ({ className, children, color }: PageProps) => {
  const { showPopup } = useAppContext();
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
        {showPopup && <Popup/>}
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
