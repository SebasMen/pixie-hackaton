import Carrousel from '../../common/carrousel';
import BannerContent from './bannerContent';

import '../../../styles/banner.css';

import vegetables from '../../../assets/images/food.png';

export const Banner = ({ dataBanner, showBotton, fixed = false, backgroundImg }: BannerProps) => (
  <div className='w-full max-h-[668px] flex transform transition-all overflow-hidden pb-10 md:pb-0 max-w-[1440px] lg:max-h-[564px]'>
    {backgroundImg && <img src={backgroundImg} className='abosolute w-full h-full object-cover md:object-contain' />}
    {fixed ? (
      <BannerContent
        key={dataBanner[0].title}
        title={dataBanner[0].title}
        text={dataBanner[0].text}
        showBotton={showBotton}
      />
    ) : (
      <Carrousel slidesPerView={1} bulletsDirection='horizontal-banner'>
        {dataBanner.map(item => (
          <BannerContent
            key={item.title}
            title={item.title}
            text={item.text}
            showBotton={showBotton}
            img={vegetables}
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
