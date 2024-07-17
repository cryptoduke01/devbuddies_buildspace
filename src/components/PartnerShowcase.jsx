import React, { useState } from "react";
import { partners } from "../constants";

const PartnerCard = ({ name, description, logo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#121212] rounded-lg overflow-hidden p-6 transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex flex-col items-center justify-center h-full transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={logo}
          alt={name}
          className="w-24 h-24 object-contain mb-4 rounded-full"
        />
        <h3 className="text-xl font-bold text-white text-center">{name}</h3>
      </div>
      <div
        className={`absolute inset-0 bg-[#44967E] p-6 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-black text-center">{description}</p>
      </div>
    </div>
  );
};

const PartnerShowcase = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-white text-center">
          our <span className="text-[#F1AEDA]">partners</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-white text-lg mb-6">
            interested in partnering with us?
          </p>
          <button className="px-8 py-3 bg-[#F1AEDA] text-black rounded-full font-semibold hover:bg-[#d690bf] transition-colors">
            become a partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerShowcase;
