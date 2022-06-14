import Icon, { IconProps } from '../icon/';

export const IconButton = ({ onClick, name, type, size, className, img, imgClassName, color, shadow = true }: IconButtonProps) => (
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
    {img ? <img src={img} alt={name} className={imgClassName || 'w-full h-full'} /> : <Icon name={name} type={type} size={size} />}
  </div>
);

IconButton.mini = ({ onClick, name, type, size, className, img, imgClassName, color, shadow, sizeContainer }: IconButtonProps) => (
  <div
    onClick={onClick}
    style={color ? { backgroundColor: color } : {}}
    className={`
        flex items-center justify-center
        cursor-pointer ${sizeContainer ? sizeContainer : 'w-8 h-8 md:w-10 md:h-10'} rounded-full
        ${shadow && 'shadow-xl'} overflow-hidden
        ${className}
    `}
  >
    {img ? <img src={img} alt={name} className={imgClassName || 'w-full h-full'} /> : <Icon name={name} type={type} size={size} />}
  </div>
);

IconButton.xl = ({ onClick, name, type, size, className, img, imgClassName, color, shadow = true }: IconButtonProps) => (
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
    {img ? <img src={img} alt={name} className={imgClassName || 'w-full h-full'} /> : <Icon name={name} type={type} size={size} />}
  </div>
);

interface IconButtonProps extends IconProps {
  onClick: () => void;
  img?: string;
  imgClassName?: string;
  color?: string;
  shadow?: boolean;
  sizeContainer?: string;
}

export default IconButton;
