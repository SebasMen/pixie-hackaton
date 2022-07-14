const StepsSection = ({ step }:StepsSectionProps) => (
  <div className='flex gap-[6px] text-xs lg:text-sm'>
    <span className={'font-sanzBold'}>Canasta </span>
    <span className='font-sanzBold'>{'>'}</span>
    <span className={step > 1 ? 'font-sanzBold' : 'font-subTitles'}>Información</span>
    <span className={step > 1 ? 'font-sanzBold' : 'font-subTitles'}>{'>'}</span>
    <span className={step > 2 ? 'font-sanzBold' : 'font-subTitles'}>Envíos</span>
    <span className={step > 2 ? 'font-sanzBold' : 'font-subTitles'}>{'>'}</span>
    <span className={step > 3 ? 'font-sanzBold' : 'font-subTitles'}>Pago</span>
  </div>
);

interface StepsSectionProps {
  step: number;
}

export default StepsSection;
