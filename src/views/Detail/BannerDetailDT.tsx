import { useState } from 'react';

import { transUrlImages } from '../../helpers/productHelper';
import { notImage } from '../../assets/vectors/index';
import { Product } from '../../interfaces/product';
import { useAppContext } from '../../hooks';
import MiniImageDT from '../../components/common/miniImagenDT/MiniImageDT';

const BannerDetailDT = ({ product }: BannerDetailDTProps) => {
  // Hooks
  const [image, setImage] = useState(0);
  const { productView } = useAppContext();
  const arrayUrlImages = transUrlImages(product ? product : productView);

  return (
    <div className='hidden lg:flex w-full overflow-hidden lg:h-full md:w-[63%] '>
      <div className='flex flex-col w-1/5 items-start'>
        {arrayUrlImages.map((url, index) => index < 3 ? (
          <MiniImageDT key={url} src={`https://pixie-antpack.s3.amazonaws.com/${url}`} handleChangeImage={setImage} index={index}/>
        )
          : '')}
      </div>
      {arrayUrlImages[0] === ''
        ?
        <div className='flex w-3/5 justify-center'>
          <div>
            <img src={notImage} className='w-[529px] h-[446px]'/>
          </div>
        </div>
        :
        <div className='flex w-3/4 justify-center'>
          <div>
            <img src={`https://pixie-antpack.s3.amazonaws.com/${arrayUrlImages[image]}`} className='w-[529px] h-[446px] object-contain'/>
          </div>
        </div>
      }
    </div>
  );
};

interface BannerDetailDTProps {
  product?: Product;
}

export default BannerDetailDT;
