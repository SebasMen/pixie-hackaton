import { useNavigate } from 'react-router-dom';
import AccordeonList from '../../components/common/accordeonList';

const QuestionSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col text-left w-full px-36 mb-36 mt-[6.35rem]'>
      <h3 className='text-pixieLightBlue text-left text-[30px]'>Preguntas frecuentes</h3>
      <ul className='mt-10 flex flex-col gap-[2.7rem]'>
        <AccordeonList title='¿Pixie, el alimento natural, reemplaza totalmente una alimentación con concentrado comercial?'>
          <p>
              La respuesta es sí. Pixie ha sido desarrollado bajo estándares nutricionales
              mundialmente reconocidos, como lo es el National Research Counsil. Además, nuestro
              equipo de médicos veterinarios ha calibrado y certificado, mediante exámenes de
              laboratorio, que nuestro alimento natural cuente con todos los requerimientos
              nutricionales que nuestras mascotas necesitan.
          </p>
        </AccordeonList>
        <AccordeonList title='¿Cuántas veces al día debe comer mi perro?'>
          <div className='flex flex-col gap-5'>
            <p className='flex flex-col'>
              <strong>Adulto:</strong> 2 veces al día.
              <strong>Cachorro:</strong> 3-4 veces al día.
            </p>
            <span>
              Te invitamos a usar nuestra <a className='underline cursor-pointer' onClick={() => navigate('/calculator')}>calculadora de raciones</a>
            </span>
          </div>
        </AccordeonList>
        <AccordeonList title='¿Varía la dieta de mi mascota según la edad?'>
          <div className='flex flex-col gap-5'>
            <p>
                Por supuesto, cada etapa fisiológica de nuestras mascotas (cachorro, adulto, adulto
                mayor) requiere características nutricionales diferentes. Por esta razón, Pixie te ofrece
                variedad de dietas para cada una de sus etapas.
            </p>
            <span>
                Te invitamos a usar nuestra <a className='underline cursor-pointer' onClick={() => navigate('/calculator')}>calculadora de raciones</a>
            </span>
          </div>
        </AccordeonList>
        <AccordeonList title='¿Puedo dejar la ración servida en el plato todo el día?'>
          <p>
            Una vez abierto el producto, debe consumirse en el menor tiempo posible. Por eso, te
            recomendamos congelar lo que usarás en los siguientes días y refrigerar lo que usarás
            durante el día.
          </p>
        </AccordeonList>
        <AccordeonList title='¿Pixie tiene dietas medicadas?'>
          <div>
            ¡Si! Contamos con un desarrollo científico de dietas medicadas como:
            <ul className='mt-4 list-disc pl-5'>
              <li>Hepatopatias</li>
              <li>Obesidad</li>
              <li>Alergias</li>
              <li>Estomago sensible</li>
            </ul>
          </div>
        </AccordeonList>
        <AccordeonList title='¿Por qué PIXIE, el alimento natural, es mejor?'>
          <p>
            Es un alimento elaborado con ingredientes frescos y naturales, no usamos ningún tipo
            de conservador, preservante, colorante ni saborizante; su palatabilidad es muy alta ya
            que brinda un sabor delicioso. ¿Y qué mejor que alimentar a nuestras mascotas con un
            alimento creado anatómicamente y fisiológicamente para comer?
          </p>
        </AccordeonList>
        <AccordeonList title='¿Cuánto dura el alimento PIXIE?'>
          <div className='flex flex-col gap-5'>
            <p className='flex flex-col gap-3'>
              <span><strong>Congelado:</strong> 6 meses 7 días en empaque cerrado a una temperatura</span>
              <span><strong>Refrigerado:</strong> máxima de 4 grados centígrados.</span>
            </p>
            <p>
              Una vez abierto debe guardarse en recipiente hermético y consumir en el menor tiempo
              posible. Lo ideal es que mantengas el producto congelado y vayas pasando al
              refrigerador a medida que lo vayas necesitando. Aunque el producto está diseñado
              para mantenerse en refrigeración (Max. 4 grados) el refrigerador de casa suele abrirse
              mucho, impidiendo que esa temperatura se mantenga. Por eso, congélalo y
              manteniendo en refrigeración solo lo del día.
            </p>
          </div>
        </AccordeonList>
        <AccordeonList title='¿Qué ventajas tiene comer PIXIE alimentación natural?'>
          <p>
            <strong>Beneficios generales:</strong> Mascotas saludables y longevas con un <strong>pelaje brillante</strong> una <strong>mejor digestión</strong>
            y metabolismo del alimento, un <strong>mejor transito gastrointestinal</strong> y <span>mayor desarrollo muscular</span> con menor
            grasa corporal y una mejor actitud al comer. Nuestras dietas <strong>fortalecen el sistema inmune</strong>, detoxificando
            su sistema biológico y reduciendo la cantidad de deposiciones, generando así animales <strong>más activos y enérgicos</strong>.
          </p>
        </AccordeonList>
        <AccordeonList title='¿Pixie es BARF?'>
          <p>
            B.A.R.F es un acrónimo en inglés: Biologically Appropriate Raw Food, lo que traduce
            Alimentos Crudos Biológicamente Apropiados. Como Pixie es un alimento natural
            horneado: ¡NO ES BARF!

            En Pixie solo usamos cortes magros para nuestras dietas, mientras que BARF usa
            residuos de la industria cárnica y muelen huesos en la preparación de sus dietas.
            BARF elabora sus productos basado en la idea de que los perros son carnívoros
            estrictos, por eso se exceden con la proteína no digestible, lo que a largo plazo causa
            problemas hepáticos y/o renales.
          </p>
        </AccordeonList>
        <AccordeonList title='¿Es necesario realizar una transición para iniciar con Pixie?'>
          <div className='flex flex-col gap-5'>
            <p>
              Sí recomendamos realizar la transición del alimento que consume actualmente a
              nuestras dietas, para evitar problemas digestivos por el cambio de alimento. Lo ideal es
              que durante el periodo de cambio, solo le brindes una de nuestras comidas, luego
              puedes alternar los sabores sin problema.
            </p>
            <p>Para la transición tenemos dos formas, puedes escoger la que consideres mejor:</p>
            <div>
              <ul className='list-disc flex flex-col gap-4 pl-5'>
                <li>La primera es realizar una preparación de arroz y la proteína de origen animal que
                  escojas, siendo 50% proteína y 50% arroz, todo cocinado solamente con agua.
                  Tomando en cuenta la ración sugerida en nuestra calculadora y brindársela
                  durante 3 días, es una dieta détox y permite adaptar el sistema digestivo.
                </li>
                <li>
                  La segunda forma es ir disminuyendo la ración del concentrado e ir incluyendo Pixie
                  proporcionalmente
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Día 1-2: 75% alimento actual y 25% de la ración sugería Pixie.</li>
                <li>Día 3-4: 50% alimento actual y 50% Pixie.</li>
                <li>Día 5-6: 25% alimento actual y 75% Pixie.</li>
                <li>Día 7: ya puedes empezar totalmente con Pixie.</li>
              </ul>
            </div>
          </div>
        </AccordeonList>
        <AccordeonList title='¿Son los snacks también para gatitos?'>
          <div className='flex flex-col gap-5'>
            <p>
              ¡Claro que sí! Aunque en el empaque se encuentra indicado para perritos por sus
              ingredientes y composición nutricional, también se las puedes dar a los gatitos sin
              problema
            </p>
            <p>
              Nota: Recuerda validar el tamaño del snack y cortarlos en porciones más pequeñas
            </p>

          </div>
        </AccordeonList>
        <AccordeonList title='¿Puedo alternar los sabores?'>
          <div className='flex flex-col gap-5'>
            <p>
              En Pixie sabemos que en la variedad está el placer, por ello contamos con diferentes
              dietas para tu peludito. Puedes alternarlas y así mantener siempre su interés al hora
              del alimento (no recomendamos mezclar dos dietas diferentes en una misma comida)
            </p>
            <p>
              Si tu peludito es sensible del estómago, contáctanos para brindarte asesoría personalizada
            </p>

          </div>
        </AccordeonList>
      </ul>
    </div>
  );
};

export default QuestionSection;
