import { useState } from "react";
import floorplanSketch from "../assets/floorplan_sketch.svg";

const plans = {
  "1 Br": { size: "829 – 899 Sqft", price: "1.5M", label: "1-BEDROOM" },
  "2 Br": { size: "1,248 – 1,330 Sqft", price: "2.4M", label: "2-BEDROOM" },
  "3 Br": { size: "1,968 – 2,080 Sqft", price: "3.8M", label: "3-BEDROOM" },
};

export default function FloorPlans() {
  const [active, setActive] = useState("1 Br");
  const plan = plans[active];

  return (
    <section id="floor-plans" className="bg-white py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
          Ghaf Woods Floor Plans
        </h2>

        <p className="font-sans text-base md:text-lg text-gray-800 mb-8">
          Select Number Of Bedrooms Forest Living
        </p>

        {/* Bedroom Filter Tabs */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
          {Object.keys(plans).map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`px-7 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${active === k
                  ? "border-2 border-black text-black bg-white shadow-xs"
                  : "text-gray-400 hover:text-black border-2 border-transparent"
                }`}
            >
              {k}
            </button>
          ))}
        </div>

        {/* 2 Column Content */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center text-left max-w-5xl mx-auto">
          {/* Blurry Architectural Floor Plan Sketch Container */}
          <div className="bg-[#f5f4ef] rounded-3xl p-4 border border-gray-200 shadow-xl overflow-hidden relative group">
            <img
              src={floorplanSketch}
              alt={`${plan.label} 2D floor plan sketch`}
              className="w-full h-[320px] md:h-[380px] object-contain rounded-2xl filter blur-[7px] md:blur-[8px] scale-105 select-none pointer-events-none transition-all duration-300"
            />
          </div>

          {/* Floor Plan Details */}
          <div>
            <h3 className="font-display text-4xl md:text-5xl lg:text-4xl font-normal text-black mb-5 tracking-tight">
              {plan.label}
            </h3>

            <p className="font-sans text-2xl md:text-3xl text-gray-900 font-bold mb-3 tracking-tight">
              {plan.size}
            </p>

            <p className="font-sans text-xl md:text-2xl text-gray-900 font-medium mb-8">
              Starting Price: {plan.price}
            </p>

            <a
              href="#register"
              className="inline-block bg-[#788863] hover:bg-[#677753] text-white text-sm md:text-base font-medium px-8 py-3.5 rounded-xl shadow-sm transition-colors duration-200"
            >
              Download Payment Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



