import { Link } from "react-router";
import OrchidHeroImage from "../assets/orchid-2.png";
function HeroSection() {
  return (
    <div className="relative flex items-center justify-between bg-[#f6f6f6] px-4">

      {/* Text Content */}
      <div className="flex-1 text-left ">
        <h1 className="font-['Playfair_Display'] text-4xl  font-medium text-[#333] ">
          Elevate Your Space <br/> with Exquisite Orchids
        </h1>
        < br/>
        <Link
          to="/orchids" // Assuming a general shop page, adjust as needed
          className="inline-block bg-[#2e8b57] text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#256a42] transition-colors duration-300 shadow-lg"
        >
          Explore Now
        </Link>
      </div>

      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="relative w-36 h-36 bg-white rounded-t-full rounded-b-lg overflow-hidden shadow-xl flex items-end justify-center">
          <img
            src={OrchidHeroImage}
            alt="Orchid"
            className="absolute bottom-0 h-4/5 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;