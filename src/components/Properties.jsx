const properties = [
  {
    name: "Distrikt at Ghaf Woods",
    location: "Dubailand, Dubai",
    desc: "New Majid AL Futtaim has newly launched a new district at Ghaf Woods, situated in the heart of Dubai's nature. It offers a serene living experience with 2-3 living bedroom apartments",
    specs: "Bedroom 1-3   |   Apartments",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Capria at Ghaf Woods",
    location: "Dubailand, Dubai",
    desc: "Capria at Ghaf Woods offers luxurious 1, 2, and 3-bedroom apartments in Ghafwoods, Dubai. Starting at AED 1.5M, enjoy modern living with world-class amenities in a prime location.",
    specs: "Bedroom 1-3   |   Apartments",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Serra at Ghaf Woods",
    location: "Dubailand, Dubai",
    desc: "SERRA at Ghaf Woods, by Majid ul Futtaim: first-of-a-kind luxury apartments and duplex penthouses with resort-style amenities. The community is set to become one of the city's top destinations.",
    specs: "Bedroom 1-3   |   Apartments",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lacina at Ghaf Woods Phase 2",
    location: "Dubailand, Dubai",
    desc: "New launch Ghaf Woods phase 2 at forest living phase 2, by Majid ul Futtaim: first-of-a-kind luxury apartments and duplex penthouses with resort-style amenities. The community is set to become one of the city's top destinations.",
    specs: "Bedroom 1-3   |   Apartments   |   Penthouses",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
];

function PropertyCard({ p }) {
  return (
    <div className="bg-white rounded-3xl p-5 md:p-6 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="rounded-2xl overflow-hidden mb-4 h-[200px] md:h-[220px]">
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-sans font-bold text-lg md:text-xl text-black mb-1">
          {p.name}
        </h3>

        <p className="text-xs text-gray-500 font-medium flex items-center gap-1 mb-3">
          <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {p.location}
        </p>

        <p className="text-xs text-gray-500 leading-relaxed mb-6 font-sans">
          {p.desc}
        </p>
      </div>

      <div>
        <div className="border-t border-gray-200 pt-3 pb-3 mb-4 text-center">
          <p className="text-xs font-semibold text-gray-700 tracking-wide font-sans">
            {p.specs}
          </p>
        </div>

        <a
          href="#register"
          className="block w-full py-2.5 text-center rounded-full border border-black text-black font-semibold text-xs md:text-sm hover:bg-black hover:text-white transition-colors duration-200"
        >
          Price &amp; Payment Plan
        </a>
      </div>
    </div>
  );
}

export default function Properties() {
  const topThree = properties.slice(0, 3);
  const fourthProperty = properties[3];

  return (
    <section id="properties" className="bg-cream py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <span className="inline-block bg-[#e0c458] text-black font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              LATEST PROPERTIES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Ghaf Woods Properties
            </h2>
          </div>

          <div>
            <a
              href="#register"
              className="inline-block bg-[#788863] hover:bg-[#677753] text-white text-sm font-medium px-7 py-3 rounded-xl shadow-sm transition-colors duration-200"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Top 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {topThree.map((p) => (
            <PropertyCard key={p.name} p={p} />
          ))}
        </div>

        {/* 4th Card Centered Below */}
        <div className="flex justify-center">
          <div className="w-full md:w-[calc(33.333%-1.33rem)] lg:w-[calc(33.333%-1.77rem)]">
            <PropertyCard p={fourthProperty} />
          </div>
        </div>
      </div>
    </section>
  );
}

