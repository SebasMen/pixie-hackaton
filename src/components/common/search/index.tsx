import { useState } from 'react';
import TextField from '../../form/textField';
import IconButton from '../iconButton';
import { useNavigate } from 'react-router-dom';

const Search = ({ colorIcon, borderColor, sizePlaceholder }: SearchProps) => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  // Methods
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter')
      navigate(`/catalogue?query=${searchText}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='md:flex md:flex-row md:justify-end relative w-full'>
      <TextField
        handler={handleChange}
        name='searchText'
        value={searchText}
        className='w-full'
        border={`${borderColor ? borderColor : 'ring-grayText'} rounded-full`}
        placeholder='Busca tu pixie favorito'
        fieldClassName={`${sizePlaceholder ? sizePlaceholder : 'text-sm'} font-sanzSemiBold py-2 pl-12`}
        handleKeyDown={(e:any) => handleKeyDown(e)}
      />
      <IconButton name='search' size='2xl' sizeContainer='w-6' className={`${colorIcon ? colorIcon : 'text-grayText'} bottom-[0.01rem] left-3 absolute block cursor-pointer md:bottom-3 md:left-3`} onClick={() => {}} shadow={false} />
    </div>
  );
};

interface SearchProps {
 colorIcon?: string;
 borderColor?: string;
 sizePlaceholder?: string;
}

export default Search;
