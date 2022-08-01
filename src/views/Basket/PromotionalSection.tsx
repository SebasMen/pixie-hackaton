import { useEffect } from 'react';
import { useAppContext, useForm } from '../../hooks';

import TextArea from '../../components/form/textArea';

import { PromotionalForm } from '../../interfaces/basket';

const PromotionalSection = () => {
  // Hooks
  const { updateContext, dataFormCheckOut } = useAppContext();
  const { form, onSubmit, handleFormChange } = useForm<PromotionalForm>(
    {
      note: dataFormCheckOut.delivery_note,
      promotionalCode: ''
    },
    form => handleSubmit(form)
  );

  // Methods
  const handleSubmit = (form: PromotionalForm) => {
    console.log(form);
  };

  // Update context with the text
  useEffect(() => {
    updateContext(old => ({ ...old, dataFormCheckOut: { ...old.dataFormCheckOut, delivery_note: form.note } }));
  }, [form.note]);

  return (
    <form onSubmit={onSubmit}>
      <div className='text-xs my-5 flex flex-col gap-3 w-full font-subTitles lg:text-sm lg:my-7'>
        <TextArea
          handler={handleFormChange}
          name='note'
          fieldClassName='h-[60px] px-[22px] lg:py-4 lg:h-[100px]'
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
