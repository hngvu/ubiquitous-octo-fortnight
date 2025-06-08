
import SearchBar from './SearchBar'
import { NavLink } from 'react-router'
import TagIcon from '../icons/TagIcon'

const AdminSidebar = () => {
  return (
    <div className="bg-[#edeff2] w-full h-full">
      {/* <SearchBar /> */}

      {/* Section header with icon */}
      <div className="flex items-center text-[#18230F] font-bold text-base px-4 py-2">
        <TagIcon className="w-5 h-5 text-[#18230F] mr-2" />
        <span>Products</span>
      </div>

      {/* Submenu links */}
      <NavLink
        to="/admin/products"
        end
        className={({ isActive }) =>
          `block mx-4 px-4 py-2 text-sm rounded-lg ${
            isActive
              ? 'bg-white text-[#18230F] font-medium'
              : 'text-[#8a8f98] hover:bg-[#dfe3e6] hover:text-[#18230F]'
          }`
        }
      >
        All Products
      </NavLink>

      <NavLink
        to="/admin/products/categories"
        end
        className={({ isActive }) =>
          `block mx-4 px-4 py-2 text-sm rounded-lg ${
            isActive
              ? 'bg-white text-[#18230F] font-medium'
              : 'text-[#8a8f98] hover:bg-[#dfe3e6] hover:text-[#18230F]'
          }`
        }
      >
        
        Product Categories
      </NavLink>
    </div>
  )
}

export default AdminSidebar
