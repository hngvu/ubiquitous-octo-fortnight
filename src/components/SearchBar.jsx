import { Input } from 'antd'

const SearchBar = () => {
  return (
    <div className="bg-[#F5F5F5] py-2 px-4">
      <div className='flex items-center space-x-4'>
        <div className='border border-[#e3e9ed] rounded-md p-2'>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.00012207" y="0.000190735" width="18" height="2" rx="1" fill="white"></rect>
                <rect x="-0.00012207" y="5.99999" width="18" height="2" rx="1" fill="white"></rect>
                <rect x="-0.00012207" y="12.0001" width="18" height="2" rx="1" fill="white"></rect>
            </svg>
        </div>
        <Input
        placeholder="Search..."
        className="w-5xl rounded-md border border-[#e3e9ed] bg-[#F5F5F5] text-[#18230F]"
      />
      </div>
    </div>
  )
}

export default SearchBar