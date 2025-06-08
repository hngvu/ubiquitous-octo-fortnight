import FilterSideBar from "../components/FilterSideBar";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

const ProductListLayout = () => {
  return (

      <div className="flex space-x-8 py-4 h-3/4">
        <aside className="flex-14 bg-white">
          <FilterSideBar />
        </aside>
        <div className="flex-3/4">
          <SearchBar />
          <ProductList />
        </div>
      </div>
  );
};

export default ProductListLayout;
