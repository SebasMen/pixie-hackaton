export const Page = ({ className, children, color }: PageProps) => (
  <div style={color ? { backgroundColor: color } : {}}>
    <div
      className={`
      flex flex-col items-center justify-center 
      flex-grow overflow-y-auto relative
      animate__animated animate__fadeIn animate__fast
      ${className}  
    `}
    >
      {children}
    </div>
  </div>
);

interface PageProps {
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export default Page;
