import Carrousel from '../../common/carrousel';
import BannerContent from './bannerContent';

import '../../../styles/banner.css';

export const Banner = ({ dataBanner }: BannerProps) => (
  <div className='banner w-full flex transform transition-all overflow-hidden pb-10'>
    <Carrousel slidesPerView={1} bulletsDirection='vertical'>
      {dataBanner.map(item => (
        <BannerContent key={item.title} title={item.title} text={item.text} />
      ))}
    </Carrousel>
  </div>
);

interface BannerProps {
  dataBanner: Array<ArrayData>;
}

interface ArrayData {
  title: string;
  text: string;
}

export default Banner;
