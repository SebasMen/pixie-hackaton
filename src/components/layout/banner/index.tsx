import Carrousel from '../../common/carrousel';
import BannerContent from './bannerContent';

import '../../../styles/banner.css';

export const Banner = ({ dataBanner, showBotton }: BannerProps) => (
  <div className='banner w-full flex transform transition-all overflow-hidden pb-10 md:pb-0'>
    <Carrousel slidesPerView={1} bulletsDirection='vertical'>
      {dataBanner.map(item => (
        <BannerContent key={item.title} title={item.title} text={item.text} showBotton={showBotton}/>
      ))}
    </Carrousel>
  </div>
);

interface BannerProps {
  dataBanner: Array<ArrayData>;
  showBotton: boolean;
}

interface ArrayData {
  title: string;
  text: string;
}

export default Banner;
