import Icon, { IconProps } from '../icon/';

export const IconButton = ({ onClick, name, type, size, className, img, imgClassName, color, shadow = true, sizeContainer }: IconButtonProps) => {
  const handleClick = (e: React.MouseEvent, click: React.MouseEventHandler) => {
    e.stopPropagation();
    click(e);
  };

  return (
    <div
      onClick={e => handleClick(e, onClick)}
      style={color ? { backgroundColor: color } : {}}
      className={`
        flex items-center justify-center
        cursor-pointer ${sizeContainer ? sizeContainer : 'w-14 h-14 md:w-16 md:h-16'} rounded-full
        ${shadow && 'shadow-xl'} overflow-hidden
        ${className} 
    `}
    >
      {img ? <img src={img} alt={name} className={imgClassName || 'w-full h-full'} /> : <Icon name={name} type={type} size={size} />}
    </div>
  );
};

IconButton.mini = ({ onClick, name, type, size, className, img, imgClassName, color, shadow, sizeContainer }: IconButtonProps) => {
  const handleClick = (e: React.MouseEvent, click: React.MouseEventHandler) => {
    e.stopPropagation();
    click(e);
  };

  return (
    <div
      onClick={e => handleClick(e, onClick)}
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
};

IconButton.xl = ({ onClick, name, type, size, className, img, imgClassName, color, shadow = true, sizeContainer }: IconButtonProps) => {
  const handleClick = (e: React.MouseEvent, click: React.MouseEventHandler) => {
    e.stopPropagation();
    click(e);
  };

  return (
    <div
      onClick={e => handleClick(e, onClick)}
      style={color ? { backgroundColor: color } : {}}
      className={`
          flex items-center justify-center
          cursor-pointer ${sizeContainer ? sizeContainer : 'w-20 h-20 md:w-24 md:h-24'} rounded-full
          ${shadow && 'shadow-xl'} overflow-hidden
          ${className}
      `}
    >
      {img ? <img src={img} alt={name} className={imgClassName || 'w-full h-full'} /> : <Icon name={name} type={type} size={size} />}
    </div>
  );
};

interface IconButtonProps extends IconProps {
  onClick: React.MouseEventHandler;
  img?: string;
  imgClassName?: string;
  color?: string;
  shadow?: boolean;
  sizeContainer?: string;
}

export default IconButton;
