import React from "react";
import { Link } from "react-router";

const ValueProposition = () => {
  return (
    <div className="why-choose-us py-16 bg-[#F8F5F0]">

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#18230F]">
          Why Choose Emperor Orchids?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value Prop 1 */}
          <div className="value-prop-card p-6">
            <div className="flex justify-center mb-4">
              {/* Replace with a relevant icon, e.g., a quality badge or leaf */}
              <span className="text-5xl text-[#ffd700]">&#10003;</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#18230F]">
              Unrivaled Quality
            </h3>
            <p className="text-gray-700">
              Each orchid is hand-selected and nurtured to ensure vibrant blooms
              and lasting beauty.
            </p>
          </div>

          {/* Value Prop 2 */}
          <div className="value-prop-card p-6">
            <div className="flex justify-center mb-4">
              {/* Replace with a relevant icon, e.g., a watering can or plant pot */}
              <span className="text-5xl text-[#ffd700]">&#9733;</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#18230F]">
              Expert Care & Support
            </h3>
            <p className="text-gray-700">
              From planting to flourishing, we provide detailed care guides and
              dedicated support.
            </p>
          </div>

          {/* Value Prop 3 */}
          <div className="value-prop-card p-6">
            <div className="flex justify-center mb-4">
              {/* Replace with a relevant icon, e.g., a globe or a unique flower */}
              <span className="text-5xl text-[#ffd700]">&#9825;</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#18230F]">
              Sustainable Sourcing
            </h3>
            <p className="text-gray-700">
              We partner with ethical growers who share our commitment to
              environmental responsibility.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link to="/about" className="bg-[#ffd700] text-[#18230F] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors duration-300">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
