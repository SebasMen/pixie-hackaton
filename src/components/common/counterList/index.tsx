const CounterList = ({ numberItem, label, classNameLabel }: CounterListProps) => (
  <div className='flex gap-4'>
    <div className='text-white bg-pixieLightBlue w-[27px] h-[27px] flex justify-center items-center rounded-full'>
      {numberItem}
    </div>
    <p className={classNameLabel && classNameLabel}>{label}</p>
  </div>
);

interface CounterListProps {
  numberItem: number,
  label: string,
  classNameLabel?: string,
}

export default CounterList;
