import React from 'react'

const FeaturedCollection = () => {
  return (
    <section id='featured-collections' className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12 text-[#18230F]">Explore Our Exquisite Collections</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Category 1: Orchids by Type */}
      <div className="category-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src="https://cdn-icons-png.flaticon.com/512/2926/2926750.png" alt="Orchids by Type" className="w-full h-48 object-fill" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#18230F]">Orchids by <br/> Type</h3>
          <p className="text-gray-600 mb-4 text-sm">Discover popular varieties like Phalaenopsis, Vanda, and Cattleya.</p>
          <button className="bg-[#ffd700] text-[#18230F] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90">Shop Now</button>
        </div>
      </div>

      {/* Category 2: Orchid Arrangements */}
      <div className="category-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src="https://cdn-icons-png.flaticon.com/512/6611/6611535.png" alt="Orchid Arrangements" className="w-full h-48 object-fill" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#18230F]">Orchid Arrangements</h3>
          <p className="text-gray-600 mb-4 text-sm">Beautifully potted and styled for any décor or special gift.</p>
          <button className="bg-[#ffd700] text-[#18230F] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90">View Collection</button>
        </div>
      </div>

      {/* Category 3: Orchid Care Essentials */}
      <div className="category-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src="https://cdn-icons-png.flaticon.com/512/13012/13012902.png" className="w-full h-48 object-fill" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#18230F]">Orchid Care Essentials</h3>
          <p className="text-gray-600 mb-4 text-sm">Everything you need to keep your orchids thriving and healthy.</p>
          <button className="bg-[#ffd700] text-[#18230F] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90">Shop Now</button>
        </div>
      </div>

      {/* Category 4: Gifts for Every Occasion */}
      <div className="category-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src="https://cdn-icons-png.flaticon.com/512/8671/8671227.png" alt="Gifts for Every Occasion" className="w-full h-48 object-fill" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#18230F]">Gifts for Every Occasion</h3>
          <p className="text-gray-600 mb-4 text-sm">The perfect living gift for birthdays, anniversaries, and more.</p>
          <button className="bg-[#ffd700] text-[#18230F] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90">View Gifts</button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default FeaturedCollection