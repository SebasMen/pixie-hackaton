export interface IconProps {
  name: string;
  size?: 'xs' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  type?: 'round' | 'outlined';
  className?: string;
}

export const Icon = ({ name, size = 'xl', type = 'round', className = '' }: IconProps) => (
  <i className={`material-icons-${type} text-${size} ${className} rounded-full`} >{name}</i>
);

export default Icon;
