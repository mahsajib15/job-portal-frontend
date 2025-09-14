import React from "react";
import { ArrowRight } from "lucide-react";

import callGirl from "../../images/callGirl.jpg";
import repair from "../../images/repair.jpg";
import homeRent from "../../images/homeRent.jpg";
import doctor from "../../images/doctor.jpg";

const Card = ({ image, title, description }) => (
  <div className="flex flex-col items-center bg-white border border-black rounded-lg shadow-md p-1 hover:shadow-lg transition relative">
    <img src={image} alt={title} className="w-40 h-40 mb-4 rounded-md" />
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-500 text-sm mt-2 mb-4 text-center">{description}</p>

    {/* Arrow Button - Aligned Left */}
    <div className="w-full">
      <div className="cursor-pointer group relative flex items-center ">
        <button className="w-20 flex items-center bg-blue-500 text-white px-3 py-2 mb-5 rounded-r-xl transition-all duration-300 group-hover:opacity-0">
          <ArrowRight className="w-5 h-5 transition-all duration-300" />
        </button>
        <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium text-blue-600">
          Explore
        </span>
      </div>
    </div>
  </div>
);

const AddSection = () => {
  const cards = [
    { image: callGirl, title: "Calls", description: "Contact services easily" },
    { image: repair, title: "Repairs", description: "Get things fixed quickly" },
    { image: homeRent, title: "Home", description: "Find your next home" },
    { image: doctor, title: "Doctors", description: "Book medical appointments" },
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-end space-x-4 overflow-x-auto">
          {cards.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddSection;
