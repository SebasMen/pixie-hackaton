import logoFooter from '../../../assets/vectors/logoFooter.svg';
import FacebookGray from '../../../assets/vectors/FacebookGray.svg';
import twittergray from '../../../assets/vectors/Twittergray.svg';
import instagramgray from '../../../assets/vectors/Instagramgray.svg';

export const Footer = ({ className }: FooterProps) => (
  <footer
    className={`flex flex-col filter w-full items-center justify-center pb-28 z-10 md:pt-20 md:text-lg ${className} `}
    style={{ backgroundColor: '#33B5A9' }}
  >
    <div className='hidden md:absolute md:bottom-[15.5rem] md:block'>
      <img src={logoFooter}/>
    </div>
    <div className='mt-9 md:hidden'>
      <img src={logoFooter} className='w-20 h-20' />
    </div>
    <div className='hidden space-x-8 mt-3 md:flex md:flex-row'>
      <img src={FacebookGray} />
      <img src={instagramgray} />
      <img src={twittergray} />
    </div>
    <div className='text-center text-[#4A4A4A] mt-2 text-lg font-extrabold md:flex md:flex-row md:justify-around md:space-x-24 md:mt-7 md:text-base'>
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

interface FooterProps {
  className?: string;
}

export default Footer;
