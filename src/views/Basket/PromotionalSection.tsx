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
      <div className='my-7 flex flex-col gap-3 w-full'>
        <TextArea
          handler={handleFormChange}
          name='note'
          fieldClassName='h-[60px]'
          value={form.note}
          labelClassName='text-sm mb-2'
          label='Agrega una nota a tu pedido'
          border='border border-primary'/>
        <div className='flex'>
          <TextField
            handler={handleFormChange}
            name='promotionalCode'
            className='w-5/6'
            fieldClassName='h-[30px]'
            labelClassName='text-sm mb-2'
            value={form.promotionalCode}
            label='Código promocional'
            border='border border-primary ring-1 ring-primary'
            required
          />
          <div className='flex justify-end items-end'>
            <Button className='bg-primary text-white h-[32px] rounded-none' type='submit'>
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PromotionalSection;
