import { Link } from "react-router";
function HeroSection() {
  return (
    <div className="flex items-center justify-between py-12">
      <div className="w-2/3">
        <h1 className="text-5xl font-[Playfair_Display] font-bold mb-8">
          Elevate Your Space <br /> with Exquisite Orchids
        </h1>
        <Link
          to="/orchids"
          className="bg-[#ffd700] text-[#18230F] px-8 py-3 rounded-full font-bold"
        >
          Explore Now
        </Link>
      </div>
      <div className="w-1/3">
        <img
          src="https://gatherfloral.ca/cdn/shop/files/IRY02194_1296x.jpg?v=1682788004"
          alt="Exquisite Orchids"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default HeroSection;
