import Icon, { IconProps } from '../icon/';

export const IconButton = ({ onClick, name, type, size, className, img, color }: IconButtonProps) => (
  <div
    onClick={onClick}
    style={color ? { backgroundColor: color } : {}}
    className={`
        flex items-center justify-center
        cursor-pointer w-14 h-14 rounded-full
        shadow-xl overflow-hidden
        ${className} md:w-16 md:h-16
    `}
  >
    {img ? <img src={img} alt={name} className='w-full h-full' /> : <Icon name={name} type={type} size={size} />}
  </div>
);

interface IconButtonProps extends IconProps {
  onClick: () => void;
  img?: string;
  color?: string;
}

export default IconButton;
