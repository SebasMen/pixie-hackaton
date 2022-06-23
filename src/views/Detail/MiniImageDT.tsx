import { transformUrlGDrive } from '../../helpers/imgHelper';
import { notImage } from '../../assets/vectors/index';

const MiniImageDT = ({ src, handleChangeImage, index = 0 }: MiniImageDTProps) => (
  <>
    {src === ''
      ?
      <div className='mb-6 cursor-pointer hover:' onClick={() => handleChangeImage(index)}>
        <img src={notImage} className='w-36 h-36'/>
      </div>
      :
      <div className='mb-6 cursor-pointer hover:' onClick={() => handleChangeImage(index)}>
        <img src={transformUrlGDrive(src)} className='w-36 h-36 object-contain'/>
      </div>
    }
  </>
);

interface MiniImageDTProps{
    src: string,
    handleChangeImage: React.Dispatch<React.SetStateAction<number>>,
    index?: number
}

export default MiniImageDT;
