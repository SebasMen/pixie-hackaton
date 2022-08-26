import { useEffect, useState } from 'react';

import { MultiValue, SingleValue } from 'react-select';
import Button from '../../components/common/button';
import TextField from '../../components/form/textField';
import SelectField, { SelectItem } from '../../components/form/selectField';

import { CalculatorForm as CalculatorFormType } from '../../interfaces/calculator';
import RadioField from '../../components/form/radioField';
import CheckField from '../../components/form/checkField';
import { useAppContext } from '../../hooks';

export const CalculatorForm = ({
  onChange,
  onSelectChange,
  onRadioChange,
  onSubmit,
  setForm,
  form: {
    name,
    type,
    typeOptions,
    age,
    ageOptions,
    exactAge,
    exerciseOptions,
    allergies: {
      alergies,
      hepatics,
      obesity,
      renal,
      sensitive_stomach
    },
    exercise,
    idealWeight,
  },
}: CalculatorFormProps) => {
  // Hooks
  const [page, setPage] = useState(0);
  const [allergiesST, setAllergiesST] = useState(false);
  const [textTitleForm, setTextTitleForm] = useState('Descubre cuál es el plan que más le conviene');
  const { toast } = useAppContext();

  const handleChangeView = (page: number) => {
    let hasError = false;
    // Validate age
    if (age.value === 'cachorros' && exactAge > 12) {
      hasError = true;
      showToast('¡Wow, tu amigo ha crecido! Si tu mascota tiene más de 12 meses ya es un adulto.');
    }

    if (age.value === 'cachorros' && exactAge < 2) {
      hasError = true;
      showToast('¡Auch! Pixie está diseñado para cachorros a partir de los 2 meses.');
    }

    // Adult
    if (age.value === 'adultos' && exactAge > 7 && type.value === 'dog') {
      hasError = true;
      showToast('¡Woow, tu amigo ya ha llegado a su etapa senior!, Si tu perrito tiene más de 7 años ya es considerado senior');
    }

    if (age.value === 'adultos' && exactAge > 8 && type.value === 'cat') {
      hasError = true;
      showToast('¡Woow, tu amigo ya ha llegado a su etapa senior!, Si tu michi tiene más de 8 años ya es considerado senior');
    }

    if (!hasError)
      setPage(page);
    /// setView(page);
  };

  const showToast = (text: string) =>
    toast.fire({
      timer: 5000,
      icon: 'warning',
      title: text,
    });

  useEffect(() => {
    if (type.value === 'dog')
      setTextTitleForm('Consiente a tu perrito con nuestra dieta rica en proteína satisfaciendo sus necesidades nutricionales.');
    if (type.value === 'cat')
      setTextTitleForm('Consiente a tu michi con nuestra dieta rica en proteína satisfaciendo sus necesidades nutricionales.');
  }, [type]);

  // Component
  return (
    <form
      className='w-full relative overflow-hidden flex-grow flex flex-col gap-2 text-pixieLightBlue pt-12 pb-4 p-2 xl2:pr-44 md:px-5 md:w-1/2 lg:pt-16 lg:pb-9'
      onSubmit={onSubmit}
    >
      <div className='flex w-full relative'>
        {/* Page 0 */}
        <div
          className={`
            flex-col gap-2 w-full md:gap-5 animate__animated animate__fast font-subTitles 
            ${page === 0 ? 'flex animate__fadeInRight' : 'hidden'}
          `}
        >
          <div className='font-sanzBold text-center mb-9 text-xl'>
            <p>{textTitleForm}</p>
          </div>

          <TextField name='name' value={name} handler={onChange} label='¿Cómo se llama tu mascota?*' required />
          <SelectField
            name='type'
            value={type}
            options={typeOptions}
            onChange={onSelectChange}
            label='Tu mascota es un... *'
          />
          <SelectField name='age' value={age} options={ageOptions} onChange={onSelectChange} label='Edad*' />
          <TextField
            name='exactAge'
            value={exactAge}
            handler={onChange}
            type='number'
            label={`Edad exacta en ${age.value === 'cachorros' ? 'meses' : 'años'}*`}
            required
          />
          <div className='flex flex-col gap-5 items-center mt-4 md:gap-0 md:justify-between md:flex-row'>
            <div className='flex gap-2 items-center px-5'>
              <div className='w-3 h-3 bg-gray-600 rounded-full' />
              <div className='w-3 h-3 bg-gray-400 rounded-full' />
            </div>

            <div className='flex justify-center gap-7 md:justify-end md:mt-2'>
              <Button
                className='bg-primary text-[#FAD7B1] w-32 text-sm md:w-36'
                onClick={exactAge && name ? () => handleChangeView(1) : undefined}
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>

        {/* Page 1 */}
        <div
          className={`
              flex-col gap-2 w-full md:gap-5 animate__animated animate__fast font-subTitles 
              ${page === 1 ? 'flex animate__fadeInRight' : 'hidden'}
          `}
        >
          <div className='w-full flex flex-col items-center gap-6 mb-8 text-center'>
            <div className='flex flex-col font-subTitles font-bold text-lg md:block'>
              <span>¿Sabes el peso ideal de tu mascota? &nbsp;</span>
              <span>Revisa esta guía:</span>
            </div>
            <div className='flex w-full px-3 justify-center items-center gap-3 sm:gap-6 lg2:gap-4 sm:flex-row md:px-0'>
              <Button
                className='ring-pixieLightBlue ring-1 w-full md:w-max'
                padding={'py-[0.4rem] px-2 md:py-[0.3rem] xl1:px-8 xl2:px-[2.4rem] lg2:px-6'}
              >
                <span className='font-subTitles text-sm md:text-base font-bold truncate'>Tabla peso ideal gato</span>
              </Button>

              <Button
                className='ring-pixieLightBlue ring-1 w-full sm:w-max'
                padding={'py-[0.4rem] px-2 md:py-[0.3rem] xl1:px-8 xl2:px-[2.4rem] lg2:px-6'}
              >
                <span className='font-subTitles text-sm md:text-base font-bold truncate'>Tabla peso ideal perro</span>
              </Button>
            </div>
          </div>
          <TextField
            name='idealWeight'
            value={idealWeight}
            type='number'
            handler={onChange}
            label='Peso ideal en kilogramos*'
            required
          />
          <SelectField
            name='exercise'
            value={exercise}
            options={exerciseOptions}
            onChange={onSelectChange}
            label='Actividad fisica*'
          />
          <label>Enfermedades y alergias</label>
          <div className='flex gap-5'>
            <RadioField
              label=' Si'
              changeState={setAllergiesST}
              currentState={allergiesST}
              name='hasAllergies'
              handleRadioChange={onRadioChange}
              value={true}
            />
            <RadioField
              label=' No'
              changeState={setAllergiesST}
              currentState={allergiesST}
              name='hasAllergies'
              handleRadioChange={onRadioChange}
              value={false}
            />
          </div>
          {allergiesST &&
          <div className='flex'>
            <div className='flex flex-col'>
              <CheckField
                onClick={() =>
                  setForm(old => ({ ...old,
                    allergies: {
                      ...old.allergies,
                      hepatics: !hepatics
                    }
                  }))}
                label='Hepática'
                border='border border-pixieLightBlue'
                sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
                className='mt-1'
                labelClassName='text-xs lg:text-sm'
              />
              <CheckField
                onClick={() =>
                  setForm(old => ({ ...old,
                    allergies: {
                      ...old.allergies,
                      renal: !renal
                    }
                  }))}
                label='Renal'
                border='border border-pixieLightBlue'
                sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
                className='mt-1 '
                labelClassName='text-xs lg:text-sm'
              />
              <CheckField
                onClick={() =>
                  setForm(old => ({ ...old,
                    allergies: {
                      ...old.allergies,
                      obesity: !obesity
                    }
                  }))}
                label='Obesidad'
                border='border border-pixieLightBlue'
                sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
                className='mt-1'
                labelClassName='text-xs lg:text-sm'
              />
            </div>
            <div className='flex flex-col'>
              <CheckField
                onClick={() =>
                  setForm(old => ({ ...old,
                    allergies: {
                      ...old.allergies,
                      alergies: !alergies
                    }
                  }))}
                label='Alergia'
                border='border border-pixieLightBlue'
                sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
                className='mt-1 ml-1 lg:ml-5'
                labelClassName='text-xs lg:text-sm'
              />
              <CheckField
                onClick={() =>
                  setForm(old => ({ ...old,
                    allergies: {
                      ...old.allergies,
                      sensitive_stomach: !sensitive_stomach
                    }
                  }))}
                label='Estómago sensible'
                border='border border-pixieLightBlue'
                sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
                className='mt-1 ml-1 lg:ml-5'
                labelClassName='text-xs lg:text-sm'
              />
              <CheckField
                onClick={() => {}}
                label='Otras'
                border='border border-pixieLightBlue'
                sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
                className='mt-1 ml-1 lg:ml-5'
                labelClassName='text-xs lg:text-sm'
              />
            </div>
          </div>
          }
          <div className='flex flex-col gap-5 items-center mt-4 md:gap-0 md:justify-between md:flex-row'>
            <div className='flex gap-2 items-center px-5'>
              <div className='w-3 h-3 bg-gray-400 rounded-full' />
              <div className='w-3 h-3 bg-gray-600 rounded-full' />
            </div>
            <div className='flex justify-center gap-3 px-6 md:gap-7 text-sm md:justify-end'>
              <Button
                className='ring-1 ring-primary bg-transparent text-primary w-32 md:w-36 font-sanzBold'
                onClick={() => handleChangeView(0)}
                padding='px-1 py-1 md:px-5 md:py-2.5'
              >
                Anterior
              </Button>
              <Button
                className='bg-primary text-[#FAD7B1] w-32  md:w-36'
                type='submit'
                padding='px-1 py-2 md:px-5 md:py-2.5'
              >
                Consultar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

interface CalculatorFormProps {
  onSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onRadioChange: (selected: string | boolean, name: string) => void,
  setForm: React.Dispatch<React.SetStateAction<CalculatorFormType>>,
  form: CalculatorFormType;
  /// setView: React.Dispatch<React.SetStateAction<number>>;
}

export default CalculatorForm;
