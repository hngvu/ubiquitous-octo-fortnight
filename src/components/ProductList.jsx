import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function ProductList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [api, setAPI] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl);
      const sortedData = response.data.sort(
        (a, b) => parseInt(b.empId) - parseInt(a.empId)
      );
      setAPI(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg grid grid-cols-3 gap-4 my-8">
      {api.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.orchidName}
          price={item.price}
        />
      ))}
    </div>
  );
}
