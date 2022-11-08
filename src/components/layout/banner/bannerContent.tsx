import { flagBannerContainer } from '../../../assets/images';

export const BannerContent = ({ title, text, img, showBotton }: BannerContentProps) =>
  <div className='flex flex-col w-full h-auto lg:h-full overflow-hidden sm:flex-row-reverse tall:flex-col lg:mb-4 relative'>
    {img &&
      <div className='animation-image pt-48 md:pt-60 lex flex-shrink-0 flex-grow w-full h-full overflow-hidden sm:flex-grow-0 sm:w-[67%] tall:w-full tall:flex-grow taller:flex-grow-0 taller:h-2/3 lg:pt-1'>
        <img src={img} className='w-full h-[389px] object-cover md:h-[460px] lg:object-contain lg:h-[379px] lg2:h-[473px] xl2:h-[553px]' />
      </div>
    }

    <div className='absolute w-full flex flex-col top-[3%] gap-4 lg:gap-[1.30rem] justify-center items-center lg:left-[6rem] lg:w-[41%] lg:top-[17%] lg2:top-[20%] lg2:left-[6.5rem] lg2:w-[42%] xl2:w-1/2 xl2:left-[3.7rem] xl2:top-[13%]'>
      <div className='flex flex-col gap-0'>
        <div className='flex flex-col lg:gap-4 justify-center items-center lg:flex-row animation-title'>
          <h1 className='text-[50px] md:text-[60px] lg:text-[100px] lg:pb-8'>Pixie</h1>
          <div className='text-base flex flex-col md:text-lg lg:text-[19px]  lg2:text-xl lg:justify-start lg:items-start'>
            <h2>Comida <span className='text-primary'>verdadera</span></h2>
            <h2>Para un amor <span className='text-primary'>verdadero</span></h2>
          </div>
        </div>
        <div className='relative mt-4 text-white text-2xl justify-center items-center lg:mt-0 animate__animated animate__backInLeft animate__delay-2s'>
          <img src={flagBannerContainer}/>
          <h2 className='text-base left-[12%] sm:left-[18%] sm:text-lg md:left-[23%] md:text-lg md:top-2 absolute top-1 lg:left-[10%] lg:top-1 lg2:left-[20%]'>Alimento natural para todos los días </h2>
        </div>
      </div>
      {/* <img src={banneHomerCopy} className='hidden md:block animation-title w-full h-full'/>
      <img src={bannerHomeFlag} className='hidden md:block animate__animated animate__backInLeft animate__delay-2s '/>
      <img src={bannerHomeCopyMobile} className='block animation-title md:hidden'/>
      <img src={bannerHomeFlagMobile} className='md:hidden animate__animated animate__backInLeft animate__delay-2s'/> */}
    </div>

  </div>;

interface BannerContentProps {
  title: string;
  text: string;
  showBotton: boolean;
  img?: string;
}

export default BannerContent;
