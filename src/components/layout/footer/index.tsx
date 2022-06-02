import logoFooter from '../../../assets/vectors/logoFooter.svg';
import facebookLogo from '../../../assets/vectors/Facebook.svg';
import twitterLogo from '../../../assets/vectors/Twitter.svg';
import instagramLogo from '../../../assets/vectors/Instagram.svg';

export const Footer = () => (
  <footer
    className='flex flex-col filter w-full items-center justify-center pb-24 z-10 md:pt-16'
    style={{ backgroundColor: '#DF2F44' }}
  >
    <div className='hidden md:absolute md:bottom-56 md:block'>
      <img src={logoFooter} />
    </div>
    <div className='mt-9 md:hidden'>
      <img src={logoFooter} />
    </div>
    <div className='hidden space-x-7 mb-8 md:flex md:flex-row'>
      <img src={facebookLogo} />
      <img src={instagramLogo} />
      <img src={twitterLogo} />
    </div>
    <div className='text-center text-orange-200 font-extrabold md:flex md:flex-row md:space-x-20'>
      <div className='my-3.5'>
        <span>Contacto</span>
      </div>
      <div className='my-3.5'>
        <span>Preguntas frecuentes</span>
      </div>
      <div className='my-3.5'>
        <span>Términos y condiciones</span>
      </div>
      <div className='my-3.5'>
        <span>Pólitica de datos</span>
      </div>
    </div>
  </footer>
);

export default Footer;
