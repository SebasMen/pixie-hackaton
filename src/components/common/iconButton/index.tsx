import Icon, { IconProps } from '../icon/';

export const IconButton = ({ onClick, name, type, size, className, img, color, shadow = true }: IconButtonProps) => (
  <div
    onClick={onClick}
    style={color ? { backgroundColor: color } : {}}
    className={`
        flex items-center justify-center
        cursor-pointer w-14 h-14 rounded-full
        ${shadow && 'shadow-xl'} overflow-hidden
        ${className} md:w-16 md:h-16 
    `}
  >
    {img ? <img src={img} alt={name} className='w-full h-full' /> : <Icon name={name} type={type} size={size} />}
  </div>
);

IconButton.mini = ({ onClick, name, type, size, className, img, color, shadow }: IconButtonProps) => (
  <div
    onClick={onClick}
    style={color ? { backgroundColor: color } : {}}
    className={`
        flex items-center justify-center
        cursor-pointer w-8 h-8 rounded-full
        ${shadow && 'shadow-xl'} overflow-hidden
        ${className} md:w-10 md:h-10
    `}
  >
    {img ? <img src={img} alt={name} className='w-full h-full' /> : <Icon name={name} type={type} size={size} />}
  </div>
);

IconButton.xl = ({ onClick, name, type, size, className, img, color, shadow = true }: IconButtonProps) => (
  <div
    onClick={onClick}
    style={color ? { backgroundColor: color } : {}}
    className={`
        flex items-center justify-center
        cursor-pointer w-20 h-20 rounded-full
        ${shadow && 'shadow-xl'} overflow-hidden
        ${className} md:w-24 md:h-24
    `}
  >
    {img ? <img src={img} alt={name} className='w-full h-full' /> : <Icon name={name} type={type} size={size} />}
  </div>
);

interface IconButtonProps extends IconProps {
  onClick: () => void;
  img?: string;
  color?: string;
  shadow?: boolean;
}

export default IconButton;
