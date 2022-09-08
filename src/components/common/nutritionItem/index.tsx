import Tooltiped from '../tooltiped';

const NutritionItem = ({ name, img, tooltip }: NutritionItemProps) => (
  <div className='flex flex-col justify-center items-center text-center'>
    {tooltip
      ?
      <Tooltiped label={tooltip} >
        <div className='rounded-full flex justify-center items-center bg-white w-[41px] h-[41px] mb-2 md:mb-1'>
          <img src={img}/>
        </div>
      </Tooltiped>
      :
      <div className='rounded-full flex justify-center items-center bg-white w-[41px] h-[41px] mb-2 md:mb-1'>
        <img src={img}/>
      </div>
    }
    <span className='flex-grow flex items-center justify-center px-2 leading-[10.63px] md:text-[10px] xl2:text-[12px]'>{name}</span>
  </div>
);

interface NutritionItemProps {
  name: string;
  img: string;
  tooltip?: string;
}

export default NutritionItem;
