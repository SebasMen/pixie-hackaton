export const Page = ({ className, children }: PageProps) => (
  <div
    className={`
      flex flex-col items-center justify-center 
      flex-grow overflow-y-auto relative
      animate__animated animate__fadeIn animate__faster
      ${className}  
    `}
  >
    {children}
  </div>
);

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

export default Page;
