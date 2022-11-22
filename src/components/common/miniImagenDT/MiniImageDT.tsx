import { notImage } from '../../../assets/vectors';

const MiniImageDT = ({ src, handleChangeImage, index = 0 }: MiniImageDTProps) => (
  <>
    {src === ''
      ?
      <div className='mb-4 cursor-pointer hover:' onClick={() => handleChangeImage(index)}>
        <img src={notImage} className='w-36 h-36'/>
      </div>
      :
      <div className='mb-4 cursor-pointer hover:' onClick={() => handleChangeImage(index)}>
        <img src={src} className='w-[146px] h-[123px] object-contain'/>
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
