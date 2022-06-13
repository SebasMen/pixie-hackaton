import { useLocation, useNavigate } from 'react-router-dom';

export const NavItem = ({ name, path }: NavItemProps) => {
  // Hooks
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Constants
  const isActive = pathname === path;

  // Component
  return (
    <span
      className={`
        text-red-600 text-lg py-2 px-4 rounded-full bg-transparent
        ${isActive ? 'bg-red-500 bg-opacity-20' : 'cursor-pointer'}
        transform transition-all duration-200
      `}
      onClick={isActive ? undefined : (() => navigate(path))}
    >
      {name}
    </span>);
};

interface NavItemProps {
  name: string;
  path: string;
}

export default NavItem;

