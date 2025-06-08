import { Input } from 'antd'
import { SearchIcon } from '../icons/SearchIcon'

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-4 py-2 px-4">
      <div className='relative w-2/3 text-[#18230F]/30'>
        <SearchIcon className="absolute z-2 top-2 left-2 w-4 h-4 cursor-pointer" />
        <Input
          placeholder="Search..."
          className="w-lg rounded-md border border-[#e3e9ed] bg-[#F5F5F5] text-[#18230F] indent-6"
        />
      </div>
    </div>
  )
}

export default SearchBar