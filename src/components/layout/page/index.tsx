import NavBar from '../../layout/navBar';

export const Page = ({ className, children, color }: PageProps) => (
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
      <>{children}</>
    </div>
  </>
);

interface PageProps {
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export default Page;
