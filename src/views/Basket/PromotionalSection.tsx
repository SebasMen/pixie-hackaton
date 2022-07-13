import Button from '../../components/common/button';
import TextArea from '../../components/form/textArea';
import TextField from '../../components/form/textField';
import { useForm } from '../../hooks';
import { PromotionalForm } from '../../interfaces/basket';

const PromotionalSection = () => {
  // Hooks
  const { form, onSubmit, handleFormChange } = useForm<PromotionalForm>(
    {
      note: '',
      promotionalCode: ''
    },
    form => handleSubmit(form)
  );

  // Methods
  const handleSubmit = (form: PromotionalForm) => {
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='my-7 flex flex-col gap-3 w-full font-subTitles text-sm'>
        <TextArea
          handler={handleFormChange}
          name='note'
          fieldClassName='h-[100px] px-[22px] py-4'
          value={form.note}
          labelClassName='text-sm mb-2'
          placeholder='Agrega una nota a tu pedido'
          border='outline-none ring-0 transform transition-all border-0 ring-primary rounded-[20px]'
        />
      </div>
    </form>
  );
};

export default PromotionalSection;
