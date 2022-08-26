const AttributesItem = ({ img }: AttributesItemProps) => (
  <div className='bg-[#FAD7B1] bg-opacity-[0.4] rounded-full w-[60px] h-[60px] flex justify-center items-start pt-1'>
    <img src={img}/>
  </div>
);

interface AttributesItemProps {
  img: string
}

export default AttributesItem;
