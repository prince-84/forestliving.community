import about1 from "../assets/about_1.png";
import about2 from "../assets/about_2.png";
import about3 from "../assets/about_3.png";

export default function LuxurySection() {
  return (
    <section className="bg-cream py-16 md:py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {/* Left Column - Perfectly Balanced 3 Image Grid */}
        <div className="grid grid-cols-2 gap-4 h-[380px] md:h-[440px] lg:h-[480px]">
          {/* Stack of 2 images on the left */}
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
              <img
                src={about1}
                alt="Ghaf Woods Forest Driveway"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
              <img
                src={about2}
                alt="Ghaf Woods Outdoor Terrace Dining"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 1 Tall vertical image on the right (perfectly aligned top and bottom) */}
          <div className="h-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
            <img
              src={about3}
              alt="Ghaf Woods Cycling Path"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column - Text & Content */}
        <div className="flex flex-col justify-center">
          <div>
            <span className="inline-block bg-[#4d5e38] text-white text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-lg mb-5">
              GHAF WOODS DUBAI
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-5 leading-[1.2]">
            Where Luxury
            <br />
            Blends with Nature
          </h2>

          <p className="font-sans text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Located in one of Dubai's most desirable communities, Ghaf
            Woods reimagines luxury living by merging it with
            sustainability. In the neighborhood of some of the city's most
            attractive tourist destinations, Ghaf Woods aims to blend
            urban comfort with the bliss of nature. With the goal to
            become one of Dubai's top 10 must-visit destinations, Ghaf
            Woods is set to offer a distinctive lifestyle to its residents.
          </p>

          <p className="font-sans text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            What makes Ghaf Woods standout is its commitment to
            environmental sustainability. Strategically designed, this
            forest community not only maintains temperatures up to 5°C
            cooler than surrounding areas but also offers a 20% purer air
            quality. Offering wellness-focused benefits, and a
            sustainable lifestyle, Ghaf Woods is the perfect residence for
            those planning a healthier tomorrow.
          </p>

          <div>
            <a
              href="#register"
              className="inline-block bg-[#788863] hover:bg-[#677753] text-white text-sm md:text-base font-medium px-8 py-3.5 rounded-xl shadow-sm transition-colors duration-200"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



