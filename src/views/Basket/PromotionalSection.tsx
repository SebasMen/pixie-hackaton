import TextArea from '../../components/form/textArea';
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
    <div>
      <span>Agrega una nota a tu pedido</span>
      <TextArea handler={handleFormChange} name='note' value={form.note} />
    </div>
  );
};

export default PromotionalSection;
