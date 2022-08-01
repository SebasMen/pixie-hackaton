import Button from '../../common/button';
import IconButton from '../../common/iconButton';

const PopupDecision = ({ handleAccept, handleDeny, text }: PopupDecisionProps) => (
  <div className='fixed z-1000 flex items-end justify-center -top-[10px] -left-1 -right-1 -bottom-[10px] bg-[#000000b6] lg:-left-[10px] lg:-right-[10px] lg:items-center'>
    <div className='bg-sixth w-full flex flex-col justify-center items-center rounded-t-3xl pb-9 lg:w-auto lg:rounded-3xl'>
      <div className='w-full flex justify-end px-8 pt-5'>
        <IconButton
          name='close'
          size='3xl'
          className='absolute text-primary'
          onClick={() => handleDeny()}
          shadow={false}
          sizeContainer='w-5 h-5'
        />
      </div>
      <div className='px-[21px] text-[15px] lg:text-xl lg:px-[5.6rem] lg:pt-5'>
        <p>{text}</p>
        <div className='flex flex-col w-full text-base gap-3 mt-4 font-sanzBold lg:flex-row-reverse lg:justify-center lg:items-center lg:mt-7 lg:px-[3.5rem] lg:gap-5'>
          <Button className='bg-primary text-[#fad7b1] lg:w-1/2' onClick={handleAccept}>
              Aceptar
          </Button>
          <Button className='ring-1 ring-primary text-primary lg:w-1/2' onClick={handleDeny}>
              Cerrar
          </Button>
        </div>
      </div>
    </div>
  </div>
);

interface PopupDecisionProps {
  text: string,
  handleAccept: () => void,
  handleDeny: () => void
}

export default PopupDecision;
