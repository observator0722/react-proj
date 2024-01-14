import './SearchInput.scss'
import { MdSearch } from "react-icons/md";
import { useState } from 'react';

const SearchInput = () => {
  const [value, setValue] = useState('');

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className='SearchInput Extended'>
      <MdSearch className='SearchIcon' col />
      <input placeholder='Введите поисковый запрос' value={value} onChange={handleValueChange} />
      <div className='SearchTipsList'>
        <div className='SearchTip'>
          <span>Test</span>
        </div>
        <div className='SearchTip'>
          <span>Test</span>
        </div>
        <div className='SearchTip'>
          <span>Test</span>
        </div>
      </div>
    </div>
  )
}

export default SearchInput