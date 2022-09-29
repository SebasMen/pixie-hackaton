import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useShoppingCar from '../../hooks/useShoppingCar';

import Button from '../../components/common/button';

import { dogIconCheckout } from '../../assets/vectors';
import { useAppContext } from '../../hooks';
import { generatePaymentMP, urlParamsMP } from '../../interfaces/payment';
import Page from '../../components/layout/page';
import Footer from '../../components/layout/footer';
import paymentService from '../../services/paymentService';

const ResultPayment = () => {
  // Hooks
  const [searchParams] = useSearchParams();
  // Order urlParams
  const urlParams: urlParamsMP = {
    collection_id: `${searchParams.get('collection_id')}`,
    collection_status: `${searchParams.get('collection_status')}`,
    payment_id: `${searchParams.get('payment_id')}`,
    preference_id: `${searchParams.get('preference_id')}`,
    status: `${searchParams.get('status')}`,
    payment_type: `${searchParams.get('payment_type')}`
  };
  const navigate = useNavigate();
  const { deleteAllProducts } = useShoppingCar();
  const { updateContext, toast } = useAppContext();
  const dataLocalStorage: generatePaymentMP = JSON.parse(localStorage.getItem('order-data') as unknown as string);
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
    if (searchParams.get('status') === 'approved')
      statusApproved();

    updateStatePayment();

    return () => {};
  }, [searchParams.get('status')]);

  // Methods
  const statusApproved = async () => {
    deleteAllProducts();
    localStorage.removeItem('dataFormCheckOut');
    // Reset data saved in context
    updateContext(old => ({ ...old, dataFormCheckOut: {
      address: '',
      apartment: '',
      city: '',
      colony: '',
      countries: [],
      country: { label: '', value: '' },
      delegation: '',
      delivery_note: '',
      email: '',
      houseNumber: '',
      last_name: '',
      name: '',
      phone: '',
      receive_information: '0',
      reference: '',
      state: { label: '', value: '' },
      states: [],
      zip_code: ''
    } }));
  };

  const updateStatePayment = async () => {
    await paymentService.updatePayment(urlParams)
      .then(res => {
      })
      .catch(error => {
        toast.fire({
          icon: 'warning',
          title: error,
        });
      });
  };

  return (
    <Page className='bg-sixth min-h-screen'>
      <div className='bg-white px-5 lg:px-[180px] mt-[15px] mb-32'>
        <div className='flex flex-col items-center justify-center pt-[3.6rem] pb-7 gap-[0.6rem] lg:gap-5 lg:pt-[72px] lg:pb-[64px]'>
          <img src={dogIconCheckout} className='w-[69px] h-[69px]'/>
          {urlParams.status === 'approved'
            ?
            <>
              <span className='text-fourth text-xl tracking-[-1.5px] lg:text-4xl lg:tracking-normal'>¡Tu pago ha sido exitoso!</span>
              <Button
                className='bg-primary text-[#fad7b1] font-sanzBold mt-3 lg:mt-2'
                padding='px-14 py-3 lg:px-[3.5rem]'
                onClick={() => navigate('/')}
              >
                Volver al inicio
              </Button>
            </>
            :
            <>
              <span className='text-fourth text-xl tracking-[-1.5px] lg:text-4xl lg:tracking-normal'>Oops! Tu pago ha sido rechazado</span>
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
        <div className='pb-9 lg:pb-8 text-sm lg:text-lg'>
          <span>Datos de la transacción</span>
        </div>
        <div className='flex flex-col gap-4 leading-[13px] pb-[90px] font-subTitles text-xs lg:grid lg:grid-cols-3 lg:text-sm lg:gap-6 lg:leading-[22px]'>
          <div className='flex justify-between lg:flex-col gap-2'>
            <span className='font-sanzBold'>VALOR</span>
            <p>${dataLocalStorage?.total_amount}</p>
          </div>
          <div className='flex justify-between lg:flex-col gap-2'>
            <span className='font-sanzBold pr-32 lg:pr-0'>FECHA Y HORA DE PAGO</span>
            <p className='text-right lg:text-left'>{date} <span className='hidden lg:inline-flex'>-</span> {hours}</p>
          </div>
          <div className='flex justify-between items-center lg:flex-col gap-2 lg:justify-center'>
            <span className='font-sanzBold w-1/3 lg:w-full'>NÚMERO DE TRANSACCIÓN</span>
            <p className='w-2/3 text-right lg:w-full lg:text-left'>{searchParams.get('payment_id')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default ResultPayment;
