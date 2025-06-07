import React from 'react'
import ProductCard from './ProductCard'

const SpecialProducts = () => {
  const products = [
  {
    name: "Phalaenopsis 'Pink Delight'",
    price: "35.00",
    image: "https://www.flowerchimp.com/cdn/shop/files/flowerchimp-plant-lilac-phalaenopsis-orchid-2500x2500-01_083cfb1e-4549-4b24-be75-8d3c7c250f27_1946x.jpg?v=1724830232"
  },
  {
    name: "Vanda 'Blue Mystic'",
    price: "68.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjN_R0US-GY9rCxM5SMPv8x6rPlQs6GUgYA&s"
  },
  {
    name: "Dendrobium 'Snow White'",
    price: "42.00",
    image:
      "https://www.gardeningexpress.co.uk/media/catalog/product/cache/66b89186767b2c977358b85d0c9864e8/d/e/dendrobium-starclass-white-visi-x750.jpg"
  }
];

  return (
    <section className="py-16 bg-[#F8F5F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#18230F]">
          Our Bestsellers & New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialProducts