import logoFooter from '../../../assets/vectors/logoFooter.svg';

export const Footer = () => (
  <footer
    className='flex flex-col filter w-full items-center justify-center pb-24'
    style={{ backgroundColor: '#DF2F44' }}
  >
    <div className='mt-9'>
      <img src={logoFooter} />
    </div>
    <div className='text-center text-orange-200 font-extrabold'>
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
