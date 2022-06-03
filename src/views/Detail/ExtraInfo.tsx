const ExtraInfo = ({ type, infoList, infoTable, infoConservation }: ExtraInfoProps) => {
  if (type === 'list')
    return <ul>
      {infoList?.map(text => <li className='list-disc' key={text}>{ text }</li>)}
    </ul>;
  if (type === 'table')
    return <div className='my-8'>
      <div className='w-full bg-gray-300 text-center rounded-lg font-bold py-2'>Senior mayores de 7 años</div>
      <table className='table-auto border-collapse'>
        <thead>
          {/* <tr>
            <th className='bg-gray-400 w-full'>Etapa: Senior mayores de 7 años</th>
          </tr> */}
        </thead>
        <tbody>
          {infoTable?.map(({ grams, kl }) =>
            <tr key={kl}>
              <td className='border-r border-b border-black px-12 py-6 font-bold'>{kl} Kg</td>
              <td className='border-b border-black px-12 py-6 font-bold'>{grams} gramos por día</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>;

  return (
    <div>
      <p className='text-sm'>
        <strong>Congelado:</strong> {infoConservation?.frozen}
      </p>
      <p className='text-sm'>
        <strong>Refrigerado:</strong> {infoConservation?.cooled}
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
