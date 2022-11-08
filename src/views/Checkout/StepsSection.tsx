import { useNavigate } from 'react-router-dom';

const StepsSection = ({ step, setStep }:StepsSectionProps) => {
  const navigate = useNavigate();

  return (
    <div className='flex gap-[6px] text-xs lg:text-sm'>
      <span className={'font-sanzBold'} onClick={() => navigate('/canasta')}>Canasta </span>
      <span className='font-sanzBold'>{'>'}</span>
      <span className={step > 1 ? 'font-sanzBold' : 'font-subTitles'} onClick={() => step > 2 ? setStep(2) : () => {} }>Información</span>
      <span className={step > 1 ? 'font-sanzBold' : 'font-subTitles'}>{'>'}</span>
      <span className={step > 2 ? 'font-sanzBold' : 'font-subTitles'} onClick={() => step > 3 ? setStep(3) : () => {}}>Envíos</span>
      <span className={step > 2 ? 'font-sanzBold' : 'font-subTitles'} >{'>'}</span>
      <span className={step > 3 ? 'font-sanzBold' : 'font-subTitles'} onClick={() => step > 4 ? setStep(4) : () => {}}>Pago</span>
    </div>
  );
};

interface StepsSectionProps {
  step: number;
  setStep:React.Dispatch<React.SetStateAction<number>>
}

export default StepsSection;
