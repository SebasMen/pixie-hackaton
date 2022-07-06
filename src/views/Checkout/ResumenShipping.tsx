const ResumenShipping = ({ location, email }: ResumenShippingProps) => (
  <div className='pt-3 font-paragraph'>
    <div className='border border-primary p-2.5'>
      <div className='border-b border-primary grid grid-flow-col pb-5'>
        <div className='text-left flex flex-col'>
          <span className='text-xs'>Contacto</span>
          <span className='text-sm mt-1'>{email}</span>
        </div>
        <div className='text-right text-xs text-[#7D7D7D]'>
          <span>Cambiar</span>
        </div>
      </div>
      <div className='grid grid-flow-col pt-2'>
        <div className='text-left flex flex-col'>
          <span className='text-xs'>Enviar a</span>
          <span className='text-sm mt-1 leading-4'>
            <p>{location}</p>
          </span>
        </div>
        <div className='text-right text-xs text-[#7D7D7D]'>
          <span>Cambiar</span>
        </div>
      </div>
    </div>
  </div>
);

interface ResumenShippingProps {
  location: string;
  email: string;
}

export default ResumenShipping;
