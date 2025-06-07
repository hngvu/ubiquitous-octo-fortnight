
import SearchBar from '../components/SearchBar'
import { Outlet } from 'react-router'

const ProductListLayout = () => {
  return (
    <>
        <SearchBar />
        <Outlet />
    </>
  )
}

export default ProductListLayout
