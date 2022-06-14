
export const Icon = ({ name, size = 'xl', type = 'round', className = '' }: IconProps) => (
  <i className={`material-icons-${type} text-${size} ${className} rounded-full`} >{name}</i>
);

Icon.awesome = ({ icon, size = 'xl', className = '' }: AwesomeIcon) => (
  <i className={`fab ${icon} text-${size} ${className} rounded-full`}></i>);

export interface IconProps {
  name: string;
  size?: 'xs' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  type?: 'round' | 'outlined';
  className?: string;
}
export interface AwesomeIcon extends Omit<IconProps, 'type' | 'name'> {
  icon: string;
}

export default Icon;
