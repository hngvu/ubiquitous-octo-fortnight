
const AboutPage = () => {
  return (
    <section className="bg-[#F8F5F0] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#18230F] text-center mb-8">About Emperor Orchids</h1>
        
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          At <span className="font-semibold text-[#18230F]">Emperor Orchids</span>, we believe that beauty, elegance, and serenity can bloom in every corner of your life. Founded with a deep passion for rare and exotic orchids, our mission is to bring nature’s most captivating floral masterpieces right to your doorstep.
        </p>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          From the lush rainforests of Southeast Asia to carefully curated greenhouses, we handpick only the healthiest and most stunning orchids. Our team of horticulturists ensures each plant is nurtured with love, arriving at your home vibrant and full of life.
        </p>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Whether you&apos;re an experienced collector or just discovering the allure of orchids, Emperor Orchids is your trusted destination for quality, care, and beauty. Every bloom tells a story — and we’re here to help you write yours.
        </p>

        <div className="mt-10 text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVaMgwGg3H5RgwVit0u8wCTO93wkoyV3xSA&s"
            alt="Orchids"
            className="rounded-lg mx-auto shadow-md max-h-96 object-cover"
          />
          <p className="mt-4 text-sm text-gray-500">A glimpse into our orchid greenhouse.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
