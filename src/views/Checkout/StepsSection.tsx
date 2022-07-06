const StepsSection = ({ step }:StepsSectionProps) => (
  <div className='mt-4 text-xs lg:text-[13px]'>
    <span>
      <span className={'font-bold'}>Carrito {'>'} </span>
      <span className={step > 1 ? 'font-bold' : 'text-gray-400'}>Información {'>'} </span>
      <span className={step > 2 ? 'font-bold' : 'text-gray-400'}>Envíos {'>'} </span>
      <span className={step > 3 ? 'font-bold' : 'text-gray-400'}>Pago</span> </span>
  </div>
);

interface StepsSectionProps {
  step: number;
}

export default StepsSection;
