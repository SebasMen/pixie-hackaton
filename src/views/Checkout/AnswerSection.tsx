import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dogIconCheckout } from '../../assets/vectors';
import Button from '../../components/common/button';
import useShoppingCar from '../../hooks/useShoppingCar';
import { postSendPayment } from '../../interfaces/payment';

const AnswerSection = ({ paymentAnswer: { data, status } }:AnswerSectionProps) => {
  // Hooks
  const navigate = useNavigate();
  const { deleteAllProducts } = useShoppingCar();
  const now = new Date();

  // Show Date
  const date = now.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).replace(/ /g, ' / ');

  // Show Hours
  const hours = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  useEffect(() => {
    // Clear Basket
    if (status === 'OK')
      deleteAllProducts();
  }, [status]);

  return (
    <div className='bg-white mt-[15px] px-[180px]'>
      <div className='flex flex-col items-center justify-center pt-[72px] pb-[64px] gap-5'>
        <img src={dogIconCheckout}/>
        {status === 'OK'
          ?
          <>
            <span className='text-fourth text-4xl'>¡Tu pago ha sido exitoso!</span>
            <Button
              className='bg-primary text-[#fad7b1] font-sanzBold mt-2'
              padding='px-[3.5rem] py-3'
              onClick={() => navigate('/')}
            >
              Volver al inicio
            </Button>
          </>
          :
          <>
            <span className='text-fourth text-4xl'>Oops! Tu pago ha sido rechazado</span>
            <Button
              className='bg-primary text-[#fad7b1] font-sanzBold mt-2'
              padding='px-[3.5rem] py-3'
              onClick={() => navigate('/basket')}
            >
              Volver a la canasta
            </Button>
          </>
        }
      </div>
      <div className='pb-8 text-lg'>
        <span>Datos de la transacción</span>
      </div>
      <div className='grid grid-cols-3 pb-[90px] font-subTitles text-sm'>
        <div className='flex flex-col gap-2 '>
          <span className='font-sanzBold'>VALOR</span>
          <p>${data.order_detail.details.approvedTransactionAmount}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='font-sanzBold'>FECHA Y HORA DE PAGO</span>
          <p>{date} - {hours}</p>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <span className='font-sanzBold'>NÚMERO DE TRANSACCIÓN</span>
          <p>{data.order_detail.details.transactionId}</p>
        </div>
      </div>
    </div>
  );
};

interface AnswerSectionProps {
  paymentAnswer: postSendPayment;
}

export default AnswerSection;
