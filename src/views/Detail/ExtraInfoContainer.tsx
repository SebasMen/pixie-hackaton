import ExtraInfo from './ExtraInfo';
import { extraInfo } from '../../@fake/detailFake';

const ExtraInfoContainer = () => (
  <div className='hidden md:flex md:flex-col mt-7 w-full'>
    <div className='flex gap-4 mb-8 mx-24'>
      <div className='rounded-lg w-1/2 text-sm pl-12 pr-16 bg-fifth'>
        <div className='py-7'>
          <span className='text-lg font-bold text-fourth'>Beneficios y Características:</span>
        </div>
        <div className='pb-8 pl-5'>
          <ExtraInfo type='list' infoList={extraInfo.infoBenefits} />
        </div>
      </div>
      <div className='rounded-lg text-sm	w-1/2 px-16 bg-fifth'>
        <div className='py-7'>
          <span className='text-lg font-bold text-fourth'>Tabla consumo en gramos diarios:</span>
        </div>
        <div className='pb-8'>
          <ExtraInfo type='table' infoTable={extraInfo.infoConsumer}/>
        </div>
      </div>
    </div>
    <div className='flex justify-around rounded-lg px-16 mx-24 bg-fifth'>
      <div className='w-2/5'>
        <div className='py-7'>
          <span className='text-lg font-bold text-fourth'>Composición Garantizada-MS%</span>
        </div>
        <div className='pb-8 pl-5'>
          <ExtraInfo type='list' infoList={extraInfo.infoComposition}/>
        </div>
      </div>
      <div className='w-3/5'>
        <div className='py-7'>
          <span className='text-lg font-bold text-fourth'>Conservación del producto</span>
        </div>
        <div className='pb-8'>
          <ExtraInfo type='conservation' infoConservation={extraInfo.conservatioInfo} />
        </div>
      </div>
    </div>

  </div>
);

export default ExtraInfoContainer;
