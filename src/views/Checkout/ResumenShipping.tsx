const ResumenShipping = ({ location, email }: ResumenShippingProps) => (
  <div className='pt-[18px] lg:pt-3 font-subTitles'>
    <div className='bg-[#d9eeef] px-5 lg:px-5 lg:rounded-2xl'>
      <div className='border-b border-[#B8B8B8]'>
        <div className='text-left flex justify-between lg:items-center pt-2 pb-3 lg:pt-6 lg:pb-4'>
          <div className='flex flex-col gap-1 lg:flex-row lg:gap-5 lg:items-center'>
            <span className='font-sanzBold text-xs'>Contacto</span>
            <span className='text-[13px] pl-3 lg:pl-0 lg:text-sm'>{email}</span>
          </div>
          <div className='flex justify-start lg:items-center'>
            <span className='text-fourth text-xs font-sanzBold'>Cambiar</span>
          </div>
        </div>
      </div>
      <div className='text-left flex justify-between pt-2 pb-3 lg:pt-4 lg:pb-4'>
        <div className='flex flex-col gap-1 pr-5 lg:flex-row lg:gap-5 lg:items-center lg:pr-16'>
          <span className='font-sanzBold text-xs'>Enviar a</span>
          <span className='text-[13px] pl-3 leading-4 lg:pl-0 lg:text-sm'>
            {location}
          </span>
        </div>
        <div className='flex justify-start lg:items-center'>
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
