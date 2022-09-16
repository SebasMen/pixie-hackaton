const ItemListInfo = ({ title, children }: ItemListInfoProps) => (
  <li className='flex flex-col gap-5'>
    <span className='font-sanzBold text-xl'>{title}</span>
    <div className='font-subTitles'>{children}</div>
  </li>
);

interface ItemListInfoProps {
  title: string,
  children: JSX.Element
}

export default ItemListInfo;
