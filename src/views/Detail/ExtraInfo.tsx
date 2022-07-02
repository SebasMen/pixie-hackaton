const ExtraInfo = ({ type, infoList, infoTable, infoConservation }: ExtraInfoProps) => {
  if (type === 'list')
    return <ul className='font-subTitles'>
      {infoList?.map((text, i) => <li className='list-disc text-gray-700 text-base' key={`li${i}${text}`}>{ text }.</li>)}
    </ul>;
  if (type === 'table')
    return <div className='my-8'>
      <div className='w-full bg-fourth text-center text-white rounded-lg font-bold py-2 font-paragraph'>Etapa: Senior mayores de 7 años</div>
      <table className='table-auto border-collapse font-subTitles w-full'>
        <tbody>
          {infoTable?.map(({ grams, kl }) =>
            <tr key={`tableItem-${grams}-${kl}`}>
              <td className='border-r border-b border-fourth px-8 py-3 font-semibold text-center'>{kl} Kg</td>
              <td className='border-b border-fourth md:px-12 px-8 py-3 font-semibold text-center'>{grams} gramos por día</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>;

  return (
    <div className='font-subTitles'>
      <p className='text-sm text-gray-700'>
        <strong className='text-fourth'>Congelado:</strong> {infoConservation?.frozen}
      </p>
      <p className='text-sm text-gray-700'>
        <strong className='text-fourth'>Refrigerado:</strong> {infoConservation?.cooled}
      </p>
    </div>);
};

interface ExtraInfoProps {
    type: 'list' | 'table' | 'conservation',
    infoList?: Array<string>,
    infoTable?:Array<interfaceTable>
    infoConservation? : interfaceConservation
}

interface interfaceTable {
  kl: string,
  grams: string
}
interface interfaceConservation{
  frozen: string,
  cooled: string
}

export default ExtraInfo;
