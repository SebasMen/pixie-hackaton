import CounterList from '../../components/common/counterList';
import { createComboForm, Product } from '../../interfaces/product';

const StepThreeSection = ({ products, form }: StepThreeSectionProps) => (
  <div className='mt-7'>
    <div className='flex flex-col gap-4'>
      <CounterList label='Revisa tu combo ' numberItem={3} classNameLabel='text-lg md:text-xl'/>
      <div className='flex flex-col ml-11 mt-3 text-sm font-sanzBold'>
        <span>Tu combo incluye:</span>
        <ul className='list-disc ml-5'>
          {products.map((item, index) => (
            <li key={`${item.id}-${index}`}>{form.quantityToProduct} {item.name_en}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

interface StepThreeSectionProps {
  products: Product[],
  form: createComboForm
}

export default StepThreeSection;
