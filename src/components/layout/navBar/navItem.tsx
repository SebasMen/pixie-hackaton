import { useLocation, useNavigate } from 'react-router-dom';

export const NavItem = ({ name, path, color = 'red-500' }: NavItemProps) => {
  // Hooks
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Constants
  const isActive = pathname === path;

  // Component
  return (
    <span
      className={`
        text-${color} text-lg py-2 px-4 rounded-full bg-transparent
        ${isActive ? `bg-${color} bg-opacity-20` : 'cursor-pointer'}
        transform transition-all duration-200 font-subTitles h-fit
      `}
      onClick={isActive ? undefined : (() => navigate(path))}
    >
      {name}
    </span>);
};

interface NavItemProps {
  name: string;
  path: string;
  color?: string;
}

export default NavItem;

