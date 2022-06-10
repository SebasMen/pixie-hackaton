import { useState } from 'react';
import { transUrlImages } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';

const BannerDetailDT = () => {
  const [image, setImage] = useState(0);
  const [showMoreImg, setShowMoreImg] = useState(false);
  // Hooks
  const { productView: product } = useAppContext();
  /// const [product, setproduct] = useState<Product>(productView);
  const arrayUrlImages = transUrlImages(product);

  const handleChangeImage = (index: number) => {
    setShowMoreImg(false);
    setImage(index);
  };

  return (
    <div className='hidden lg:flex w-full overflow-hidden lg:h-full md:w-2/3 md:h-20'>
      <div className='flex flex-col w-1/3 items-start'>
        {arrayUrlImages.map((url, index) => index < 2 ? (
          <div key={url} className='mb-6 cursor-pointer hover:' onClick={() => handleChangeImage(index)}>
            <img src={url} className='w-32 h-32 object-cover'/>
          </div>)
          : '')}
        {arrayUrlImages.length > 2 ? (
          <div className='mb-6 cursor-pointer'>
            <div className='w-32 h-32 flex justify-center items-center bg-gray-900 text-white font-bold' onClick={() => setShowMoreImg(!showMoreImg)}>+ {arrayUrlImages.length - 3}</div>
          </div>
        ) : '' }
        {showMoreImg ? (
          <div
            className='fixed flex justify-center items-center z-10 -top-2 -left-2 -right-2 -bottom-2 gap-11'
            style={{ background: 'rgba(32, 35, 41, 0.61)' }}>
            {arrayUrlImages.map((url, index) => index > 2
              ?
              <div key={url} className='mb-6 cursor-pointer hover:' onClick={() => handleChangeImage(index)}>
                <img src={url} className='w-32 h-32 object-cover'/>
              </div>
              :
              ''
            )}
          </div>
        ) : ''}
      </div>
      <div className='flex w-2/3 items-center justify-center'>
        <div>
          <img src={arrayUrlImages[image]} className='w-96 h-96'/>
        </div>
      </div>
    </div>
  );
};

export default BannerDetailDT;
