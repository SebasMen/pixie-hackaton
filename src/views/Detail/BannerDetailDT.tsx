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
    <div className='hidden lg:flex w-full overflow-hidden lg:h-full md:w-2/3 md:h-20 lg:items-center'>
      <div className='flex flex-col w-1/3 items-start'>
        {arrayUrlImages.map((url, index) => index < 3 ? (
          <div key={url} className='mb-6 cursor-pointer hover:' onClick={() => handleChangeImage(index)}>
            <img src={url} className='w-32 h-32 object-cover'/>
          </div>)
          : '')}
      </div>
      <div className='flex w-2/3 justify-center'>
        <div>
          <img src={arrayUrlImages[image]} className='w-96 h-96'/>
        </div>
      </div>
    </div>
  );
};

export default BannerDetailDT;
