import './SearchInput.scss'
import { MdSearch } from "react-icons/md";
import { useState } from 'react';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [extended, setExtended] = useState(false)
  const [options, setOptions] = useState([])

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  const handleInputFocus = (event) => {
    setExtended(true)
  }

  const handleInputBlur = (event) => {
    setExtended(false)
  }

  return (
    <div className='SearchInput Extended'>
      <MdSearch className='SearchIcon' />
      <input placeholder='Введите поисковый запрос'
        value={value}
        onChange={handleValueChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onSubmit={e => {
          setOptions([value, ...options]);
          setValue('')}} />
      {
        extended
          ? <div className='SearchTipsList'>
            {
              options.map(o => <SearchTip value={o}/>)
            }
          </div>
          : <></>
      }
    </div>
  )
}

const SearchTip = (props) => {
  return <div className='SearchTip'>
    <span>{props.value}</span>
  </div>
}

export default SearchInput