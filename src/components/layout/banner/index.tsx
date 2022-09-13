import Carrousel from '../../common/carrousel';
import BannerContent from './bannerContent';

import '../../../styles/banner.css';

import { dogBannerHome } from '../../../assets/images';

export const Banner = ({ dataBanner, showBotton, fixed = false, backgroundImg }: BannerProps) => (
  <div className='w-full max-h-[668px] flex transform transition-all overflow-hidden md:pb-0 max-w-[1440px] md:min-h-[680px] md:max-h-[680px] lg:min-h-[363px] lg:max-h-[363px] lg2:min-h-[452px] lg2:max-h-[452px] xl2:min-h-[518px] xl2:max-h-[518px] '>
    {backgroundImg && <img src={backgroundImg} className='abosolute w-full h-full object-cover md:object-contain' />}
    {fixed ? (
      <BannerContent
        key={dataBanner[0].title}
        title={dataBanner[0].title}
        text={dataBanner[0].text}
        showBotton={showBotton}
      />
    ) : (
      <Carrousel slidesPerView={1} bulletsDirection='horizontal-banner' className='h-full'>
        {dataBanner.map(item => (
          <BannerContent
            key={item.title}
            title={item.title}
            text={item.text}
            showBotton={showBotton}
            img={dogBannerHome}
          />
        ))}
      </Carrousel>
    )}
  </div>
);

interface BannerProps {
  dataBanner: Array<ArrayData>;
  showBotton: boolean;
  fixed?: boolean;
  backgroundImg?: string;
}

interface ArrayData {
  title: string;
  text: string;
}

export default Banner;
