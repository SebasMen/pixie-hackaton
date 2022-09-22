import ItemListInfo from '../../components/common/itemListInfo';

const DataPrivacyInfoSection = () => (
  <div className='flex flex-col text-left w-full px-6 mt-3 md:px-36 mb-36 md:mt-[6.35rem]'>
    <h3 className='text-pixieLightBlue text-2xl text-left md:text-[30px]'>Aviso de privacidad integral</h3>
    <ul className='mt-10 flex flex-col gap-5 md:gap-7'>
      <ItemListInfo title='Aviso de privacidad integral'>
        <p>SOMOS PIXIE SA de CV mejor conocido como PIXIE, con domicilio en Enrique Rebsamen, 725, Planta Alta, Oficina 4,
          Narvarte Poniente, Benito Juárez, 03020, Ciudad de México y portal de internet www.pixie.pet, es el responsable del uso
          y protección de sus datos personales, y al respecto le informamos lo siguiente:
        </p>
      </ItemListInfo>
      <ItemListInfo title='¿Para qué fines utilizaremos sus datos personales?'>
        <div className='flex flex-col gap-5'>
          <p>
            Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias
            para el servicio que solicita:
          </p>
          <p>
            Respuesta a mensajes del formulario de contacto, Prestación de cualquier servicio solicitado, Envío de productos adquiridos
             en esta tienda en línea y fines promocionales sobre productos o servicios de Pixie.
          </p>
        </div>
      </ItemListInfo>
      <ItemListInfo title='¿Qué datos personales utilizaremos para estos fines?'>
        <div className='flex flex-col gap-5'>
          <p>
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad,
             utilizaremos los siguientes datos personales:
          </p>
          <p>
            Datos de identificación y contacto.
          </p>
        </div>
      </ItemListInfo>
      <ItemListInfo title='¿Con quién compartimos su información personal y para qué fines?'>
        <div className='flex flex-col gap-5'>
          <p>
            Le informamos que sus datos personales son compartidos fuera del país con las siguientes personas, empresas,
             organizaciones o autoridades distintas a nosotros, para los siguientes fines:
          </p>
          <p>
            Empresas Asociadas, controlantes, subordinadas o subsidiarias de SOMOS PIXIE., Empresas de transporte. Con fines de mercadeo,
             logística y contabilidad.
          </p>
        </div>
      </ItemListInfo>
      <ItemListInfo title='¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?'>
        <div className='flex flex-col gap-5'>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos, y las condiciones
             del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de
             que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de
             datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus
             datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
          </p>
          <p>
            Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a soporte@pixie.pet y
             deberá contener:
          </p>
          <p>
            <ul className='list-disc ml-5'>
              <li>
                Nombre completo del titular.
              </li>
              <li>
                Domicilio.
              </li>
              <li>
                Teléfono.
              </li>
              <li>
                Correo electrónico usado en este sitio web.
              </li>
              <li>
                Copia de una identificación oficial adjunta.
              </li>
              <li>
                Asunto «Derechos ARCO»
              </li>
              <li>
                Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación
                 del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos
                 personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar,
                 Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la
                 documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos
                 podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal
                 requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de
                 su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación
                 con nosotros.
              </li>
            </ul>
          </p>
        </div>
      </ItemListInfo>
      <ItemListInfo title='¿En cuántos días le daremos respuesta a su solicitud?'>
        <p>
          7 días
        </p>
      </ItemListInfo>
      <ItemListInfo title='¿Por qué medio le comunicaremos la respuesta a su solicitud?'>
        <p>
          Al mismo correo electrónico de donde se envió la petición.
        </p>
      </ItemListInfo>
      <ItemListInfo title='¿Con quién compartimos su información personal y para qué fines?'>
        <div className='flex flex-col gap-5'>
          <p>
            Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es
             posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en
             nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
          </p>
          <p>
            Identificadores, nombre de usuario y contraseñas de sesión, Idioma preferido por el usuario, Región en la que se encuentra el
             usuario, Tipo de navegador del usuario, Tipo de sistema operativo del usuario, Fecha y hora del inicio y final de una sesión de
             un usuario
          </p>
          <p>
            Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de
             su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas
             en nuestro sitio web.
          </p>
        </div>
      </ItemListInfo>
      <ItemListInfo title='¿Cómo puede conocer los cambios en este aviso de privacidad?'>
        <div className='flex flex-col gap-5'>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales;
             de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en
             nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios
             que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web AGREGAR SITIO WEB.
          </p>
        </div>
      </ItemListInfo>
      <p className='font-subTitles'>
        <span className='font-sanzBold text-lg'>Última Actualización:</span> 8 de septiembre de 2022
      </p>
    </ul>
  </div>
);

export default DataPrivacyInfoSection;
