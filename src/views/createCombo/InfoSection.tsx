import { useTranslation } from 'react-i18next';
import { basket } from '../../assets/vectors';
import Button from '../../components/common/button';
import { productCombo } from '../../helpers/productHelper';
import { useAppContext, useForm } from '../../hooks';
import useShoppingCar from '../../hooks/useShoppingCar';
import { createComboForm, Product } from '../../interfaces/product';
import ProductCounter from '../Detail/productCounter';
import StepOneSection from './StepOneSection';
import StepThreeSection from './StepThreeSection';
import StepTwoSection from './StepTwoSection';

const InfoSection = () => {
  // Hooks
  const { t } = useTranslation();
  const { addRemoveProduct } = useShoppingCar();
  const { toast } = useAppContext();
  const { form, handleRadioChange, handleSelectChange, setForm, onSubmit } = useForm<createComboForm>({
    flavor: [],
    flavorOptions: [],
    flavorSelect: { label: '', value: '' },
    quantity: 1,
    quantityChoose: 0,
    finalPrice: 0,
    quantityToProduct: 0
  }, () => {
    validator();
  });

  const validator = () => {
    const quantity = form.flavor.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
    if (quantity === 20)
      handleSubmit();
    else
      toast.fire({
        timer: 5000,
        icon: 'warning',
        title: 'Debes completar minimo las 20 unidades',
      });
  };

  // Methods
  const handleSubmit = () => {
    const productComboItem:Product = JSON.parse(JSON.stringify(productCombo));
    productCombo.price = form.finalPrice;
    // eslint-disable-next-line no-mixed-operators
    productCombo.id = `${Math.floor(100000 + Math.random() * 9000)}`;
    form.flavor.forEach(product => {
      productComboItem.productsInside?.push(product);
    });
    addRemoveProduct(productComboItem, form.quantity);
    resetForm();
  };

  const handlePriceChange = (quantity: number) => {
    setForm(old => ({ ...old, quantity }));
  };

  const resetForm = () => {
    setForm(old => ({
      ...old,
      flavor: [],
      flavorSelect: { label: '', value: '' },
      quantity: 1,
      quantityChoose: 0,
      finalPrice: 0,
      quantityToProduct: 0
    }));
  };

  return (
    <form className='flex flex-col w-full mt-4 md:mt-0 md:h-full md:w-[37%] md:pr-9' onSubmit={onSubmit}>
      <h1 className='text-2xl font-bold mb-3 md:mb-2 md:text-3xl text-pixieLightBlue text-left pl-5 md:pl-0'>
        Caja x20 rollos diferentes sabores
      </h1>
      <div className='px-5 md:px-0'>
        {/* Step one */}
        <StepOneSection
          handleRadioChange={handleRadioChange}
          setForm={setForm}
        />
        {/* Step two */}
        <StepTwoSection
          handleSelectChange={handleSelectChange}
          options={form.flavorOptions}
          setForm={setForm}
          form={form}
        />
        {/* Step three */}
        <StepThreeSection
          products={form.flavor}
          form={form}
        />
        {/* Product Counter */}
        <ProductCounter price={form.finalPrice} onPriceChange={handlePriceChange} productQuantity={999} className='mt-7 px-0' showGr={false}/>
        <div className='text-base'>
          <span className='text-pixieLightBlue font-sanzBold md:font-subTitles'>(Caja x20 unidades)</span>
        </div>
      </div>
      <Button
        className={`
          fixed bottom-0 bg-primary gap-4 rounded-t-2xl py-4 rounded-b-none w-full z-20 md:rounded-b-2xl
          md:relative md:py-3 hover:bg-grayText focus:outline-none focus:ring focus:ring-fourth mt-7
        `}
        type='submit'
      >
        <img src={basket} />
        <span className='text-base text-[#fad7b1]'>{t('productsAddButton')}</span>
      </Button>
    </form>
  );
};

export default InfoSection;
