const ResumenShipping = ({ location, email }: ResumenShippingProps) => (
  <div className='pt-3 font-subTitles'>
    <div className='bg-[#d9eeef] px-4 rounded-2xl'>
      <div className='border-b border-[#B8B8B8]'>
        <div className='text-left flex justify-between items-center py-4'>
          <div className='flex gap-3 items-center'>
            <span className='font-sanzBold text-xs'>Contacto</span>
            <span className='text-sm'>{email}</span>
          </div>
          <div>
            <span className='text-fourth text-xs font-sanzBold'>Cambiar</span>
          </div>
        </div>
      </div>
      <div className='text-left flex justify-between py-4'>
        <div className='flex gap-3 items-center'>
          <span className='font-sanzBold text-xs'>Enviar a</span>
          <span className='text-sm leading-4'>
            {location}
          </span>
        </div>
        <div>
          <span className='text-fourth text-xs font-sanzBold'>Cambiar</span>
        </div>
      </div>
    </div>
</div>
);

interface ResumenShippingProps {
  location: string;
  email?: string;
}

export default ResumenShipping;
