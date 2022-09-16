import logoFooter from '../../../assets/vectors/logoFooter.svg';
import FacebookGray from '../../../assets/vectors/FacebookGray.svg';
import instagramgray from '../../../assets/vectors/Instagramgray.svg';
import { useNavigate } from 'react-router-dom';
import Icon from '../../common/icon';
import { americanExLogo, kushkiLogo, masterCardLogo, visaLogo, whoBuildThis } from '../../../assets/images';

export const Footer = ({ className }: FooterProps) => {
  const navigate = useNavigate();

  return (
    <footer className='flex flex-col w-full z-10 bg-fourth items-center'>
      <div className='flex flex-col lg:flex-row pb-[2rem] pt-9 lg:pt-[2.1rem] lg:text-lg bg-fourth px-[1.6rem] lg2:px-[2.5rem] xl1:px-[3rem] xl2:px-[5.5rem] max-w-[1440px]'>
        <div className='flex flex-col items-center mb-5 gap-5 lg:mb-0 lg:w-2/12 lg:gap-[1.9rem] xl2:mr-10'>
          <img src={logoFooter} className='w-[79px] lg:w-[113px]'/>
          <div className='flex gap-6 lg:gap-8'>
            <a href='https://www.facebook.com/Pixiemx-104482775594223/' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
              <img src={FacebookGray} className='w-2 lg:w-3'/>
            </a>
            <a href='https://www.instagram.com/pixie.mex/?igshid=YmMyMTA2M2Y%3D' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
              <img src={instagramgray} className='w-4 lg:w-5'/>
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center lg:w-4/12 lg:pl-[2.5rem] lg:items-start'>
          <h5 className='text-left text-lg mb-3'>Información de Contacto</h5>
          <div className='flex font-sanzSemiBold mb-4 gap-10 lg:gap-6'>
            <div className='flex text-[13px] items-center gap-2 lg:text-sm'>
              <Icon name='phone_iphone' className='text-2xl lg:text-xl'/>
              <span>(+52) 1 55 1307 0792</span>
            </div>
            <div className='flex text-[13px] items-center gap-2 lg:text-sm'>
              <Icon name='email'/>
              <span>soporte@pixie.pet</span>
            </div>
          </div>
          <div className='flex font-sanzSemiBold items-start mt-2 gap-2 lg:pr-2 lg:items-start text-[13px] mb-[2.3rem] lg:mb-0 lg:text-sm xl2:mt-0'>
            <Icon name='location_on' className='text-xs lg:text-lg'/>
            <p className='leading-snug'>
              Calle Medellín, número 148, Colonia Roma Norte, Alcaldía Cuauhtémoc, Código Postal 06700, Ciudad de México.
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:w-3/12 lg:pl-12 items-center lg:items-start xl2:pl-[4.8rem]'>
          <h5 className='text-left text-lg mb-2 lg:text-base lg:mb-4'>Links de interés</h5>
          <ul className='font-sanzSemiBold flex flex-col gap-3 text-sm lg:text-base text-center lg:text-left'>
            <li className='cursor-pointer' onClick={() => navigate('/questions')}>Preguntas frecuentes</li>
            <li>Términos y condiciones</li>
            <li>Política de datos</li>
          </ul>
        </div>
        <div className='lg:w-4/12 items-center lg:items-start xl2:pl-10'>
          <div className='bg-white rounded-[20px] flex flex-col pl-[1.13rem] pr-[0.57rem] pt-[0.8rem] pb-[1.38rem] mt-8 mx-[1.6rem] lg:ml-6 lg:mt-2'>
            <h5 className='text-left text-base mb-[0.15rem]'>Pago 100% seguro</h5>
            <p className='font-sanzSemiBold text-[#9D9D9D] text-xs mb-3'>
              Este certificado garantiza la seguridad de todas tus conexiones mediante cifrado
            </p>
            <div className='flex justify-center items-center gap-5 md:gap-1 xl1:gap-3 xl2:gap-[1.4rem]'>
              <img src={kushkiLogo} className='w-11 h-7'/>
              <img src={visaLogo} className='w-12 h-4'/>
              <img src={masterCardLogo} className='w-11 h-8'/>
              <img src={americanExLogo} className='w-7'/>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-grayText flex justify-center items-center text-white text-sm font-montserrat py-[0.4rem] gap-9 w-full'>
        <span className='leading-[96%] tracking-[0.16em] '>copyright 2022</span>
        <img src={whoBuildThis}/>
      </div>
    </footer>
  );
};

interface FooterProps {
  className?: string;
}

export default Footer;
