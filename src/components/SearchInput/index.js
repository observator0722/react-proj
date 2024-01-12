import './SearchInput.css'
import { MdSearch } from "react-icons/md";

const SearchInput = () => {
  return <div className='SearchInput'>
    <MdSearch className='SearchIcon' col />
    <input placeholder='Введите поисковый запрос' />
  </div>
}

export default SearchInput