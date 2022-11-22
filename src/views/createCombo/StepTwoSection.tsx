import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MultiValue, SingleValue } from 'react-select';
import ComboFlavoritem from '../../components/common/comboFlavorItem';
import CounterList from '../../components/common/counterList';
import SelectField, { SelectItem } from '../../components/form/selectField';
import { roundToXDigits } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';
import { createComboForm, Product } from '../../interfaces/product';
import productService from '../../services/productService';

const StepTwoSection = ({ handleSelectChange, options, setForm, form }: StepOneSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [disabled, setDisabled] = useState(false);
  const { location } = useAppContext();

  useEffect(() => {
    getSelects();
    return () => {};
  }, [location]);

  useEffect(() => {
    handleSubmit();
    return () => {};
  }, [form.flavorSelect]);

  useEffect(() => {
    isDisabled();
    setForm(old => ({ ...old, finalPrice: roundToXDigits(form.flavor.map(item => item.price * putQuantity()).reduce((prev, curr) => prev + curr, 0), 2) }));
    return () => {};
  }, [form.flavor]);

  const getSelects = () => {
    productService.getAllProducts(location === 'USA' ? 2 : 1, false).then(res => {
      setProducts(res.products);
      const select: SelectItem[] = res.products.map(prod => ({ label: prod.name_en ? prod.name_en : '', value: prod.id }));
      setForm(old => ({ ...old, flavorOptions: select }));
    }
    ).catch(error => {
      console.log(error);
    });
  };

  // Change quantity
  const putQuantity = (): number => {
    switch (Number(form.quantityChoose)) {
      case 2:
        return 10;
      case 4:
        return 5;
      case 5:
        return 4;
      default:
        return 0;
    }
  };

  const handleSubmit = () => {
    const newValues = form.flavor ? [...form.flavor] : [];
    let productFind = products.find(item => item.id === form.flavorSelect.value);
    if (productFind) {
      productFind = JSON.parse(JSON.stringify(productFind)) as Product;
      productFind.quantity = putQuantity();
      productFind.isComboPersonality = true;
      newValues.push(productFind);
      setForm(old => ({ ...old, flavor: newValues, quantityToProduct: putQuantity() }));
    }
  };

  const handleDeleteProduct = (id: string) => {
    const productFind = form.flavor.filter(item => item.id !== id);
    setForm(old => ({ ...old, flavor: productFind }));
    isDisabled();
  };

  const isDisabled = () => {
    const quantity = form.flavor.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
    if (quantity === 20)
      setDisabled(true);
    else
      setDisabled(false);
  };

  return (
    <div className='mt-7 text-sm'>
      <div className='flex flex-col gap-4'>
        <CounterList label='Elige los sabores ' numberItem={2} classNameLabel='text-lg md:text-xl'/>
        <div className='flex ml-11 mt-3 flex-col gap-3 z-40'>
          <SelectField
            name='flavorSelect'
            value={form.flavorSelect.value ? form.flavorSelect : undefined}
            onChange={handleSelectChange}
            options={options}
            placeholder='Elige tu sabor'
            dropdownIndicatorColor='#7AC5BE'
            backgroundColor='#d9eeef'
            borderRadius={true}
            className='font-sanzBold'
            colorPlaceholder='#33B5A9'
            disabled={disabled}
          />
          <div className='grid grid-cols-3 gap-x-2 gap-y-2 gap-14'>
            {form.flavor.map((prod, index) =>
              <ComboFlavoritem
                key={`${prod.name}-${index}`}
                product={prod}
                handleDeleteProduct={() => handleDeleteProduct(prod.id)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface StepOneSectionProps {
  handleSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void,
  options: SelectItem[],
  setForm: Dispatch<SetStateAction<createComboForm>>,
  form: createComboForm
}

export default StepTwoSection;
