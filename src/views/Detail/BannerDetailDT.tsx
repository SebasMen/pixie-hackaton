import { useState } from 'react';
import { transUrlImages } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';

const BannerDetailDT = () => {
  const [image, setImage] = useState(0);
  /// const [showMoreImg, setShowMoreImg] = useState(false);
  // Hooks
  const { productView: product } = useAppContext();
  /// const [product, setproduct] = useState<Product>(productView);
  const arrayUrlImages = transUrlImages(product);

  const handleChangeImage = (index: number) => {
    /// setShowMoreImg(false);
    setImage(index);
  };

  return (
    <div className='hidden lg:flex w-full overflow-hidden lg:h-full md:w-2/3 '>
      <div className='flex flex-col w-1/4 items-start'>
        {arrayUrlImages.map((url, index) => index < 3 ? (
          <div key={url} className='mb-6 cursor-pointer hover:' onClick={() => handleChangeImage(index)}>
            <img src={url} className='w-36 h-36 object-cover'/>
          </div>)
          : '')}
      </div>
      <div className='flex w-3/4 justify-center'>
        <div>
          <img src={arrayUrlImages[image]} className='w-[529px] h-[446px]'/>
        </div>
      </div>
    </div>
  );
};

export default BannerDetailDT;
