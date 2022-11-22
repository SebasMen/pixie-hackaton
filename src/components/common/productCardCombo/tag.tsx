import { iconTagBlue } from '../../../assets/vectors';
import { capitalize } from '../../../helpers/capitalize';
import Tooltiped from '../tooltiped';
import { useTranslation } from 'react-i18next';

export const Tag = ({ name, className, sizeTags }: TagProps) => {
  // Hooks
  const { t } = useTranslation();

  let translatedName = '';

  switch (name.toLowerCase()) {
    case 'cachorros':
      translatedName = t('catFilterPuppies');
      break;

    case 'adultos':
      translatedName = t('catFilterAdults');
      break;

    case 'senior':
      translatedName = t('catFilterSenior');
      break;

    default:
      break;
  }

  const nameTag = sizeTags > 1 ? translatedName.charAt(0) : translatedName;
  return (
    <div>
      {sizeTags > 1 ? (
        <Tooltiped label={capitalize(translatedName)}>
          <div
            className={`
              rounded-full pl-px pr-2 h-[1.18rem]
              flex items-center
              border border-pixieLightBlue text-white bg-fourth
              font-subTitles font-semibold 
              md:py-px md:gap-1 md:pr-3 md:pl-[6px] md:h-[1.95rem]
              ${className}
            `}
          >
            <img src={iconTagBlue} className='text-md scale-[55%] sm:block md:scale-100 brightness-[10]' />
            <span className='text-[11px] md:text-sm capitalize md:ml-1'>{capitalize(nameTag)}</span>
          </div>
        </Tooltiped>
      ) : (
        <div
          className={`
            rounded-full pl-px pr-2 h-[1.18rem]
            flex items-center
            border border-pixieLightBlue text-white bg-fourth
            font-subTitles font-semibold 
            md:py-px md:gap-1 md:pr-3 md:pl-[6px] md:h-[1.95rem]
            ${className}
          `}
        >
          <img src={iconTagBlue} className='text-md scale-[55%] sm:block md:scale-100 brightness-[10]' />
          <span className='text-[11px] md:text-sm capitalize ml-1'>{capitalize(nameTag)}</span>
        </div>
      )}
    </div>
  );
};

interface TagProps {
  name: string;
  className?: string;
  sizeTags: number;
}

export default Tag;
