import { useTranslation } from 'react-i18next';
const ExtraInfo = ({ type, infoList, infoTable, nameTable, infoConservation }: ExtraInfoProps) => {
  // Hooks
  const { t } = useTranslation();

  // Define default component
  const defInfo = (
    <div className='font-subTitles'>
      <p className='text-sm text-gray-700'>{infoConservation}</p>
    </div>
  );

  // Render component by type
  switch (type) {
    case 'list':
      return (
        <ul className='font-subTitles text-sm'>
          {infoList?.map((text, i) => (
            <li className='list-disc text-gray-700 text-base' key={`li${i}${text}`}>
              {text}.
            </li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <div className='my-8'>
          <div className='w-full bg-fourth text-center text-white rounded-lg font-bold py-2 font-paragraph'>
            {nameTable}
          </div>
          <table className='table-auto border-collapse font-subTitles w-full'>
            <tbody>
              {infoTable?.map(({ grams, kl }) => (
                <tr key={`tableItem-${grams}-${kl}`}>
                  <td className='border-r border-b border-fourth px-8 py-3 font-semibold text-center'>{kl} Kg</td>
                  <td className='border-b border-fourth md:px-12 px-8 py-3 font-semibold text-center'>
                    {grams} {t('productsInfoGrams')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'conservation':
      return defInfo;

    default:
      return defInfo;
  }
};

interface ExtraInfoProps {
  type: 'list' | 'table' | 'conservation';
  infoList?: Array<string>;
  infoTable?: Array<interfaceTable>;
  nameTable?: string;
  infoConservation?: string;
}

interface interfaceTable {
  kl: string;
  grams: string;
}

export default ExtraInfo;
