import { PageStyle } from './pageStyle';

export const Page = ({ className, children }: PageProps) => (
  <div className={PageStyle.concat(' animate__animated animate__fadeIn ', className || '')}>{children}</div>
);

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

export default Page;
