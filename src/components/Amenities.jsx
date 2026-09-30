import rec1 from "../assets/rec_1.png";
import rec2 from "../assets/rec_2.png";
import rec3 from "../assets/rec_3.png";

const amenities = [
  {
    title: "Fitness Retreats",
    desc: "Dedicated natural spaces for yoga and meditation",
    img: rec1,
  },
  {
    title: "Forest Edge Oasis Pool",
    desc: "Relax by the forest edge pool with views of the lush landscapes",
    img: rec2,
  },
  {
    title: "For Adventure Enthusiasts",
    desc: "Promoting an active lifestyle with mountain biking trails and running tracks",
    img: rec3,
  },
];

export default function Amenities() {
  return (
    <section className="bg-[#7d8f67] py-16 md:py-24 text-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
        <div>
          <span className="inline-block bg-white text-black font-semibold text-xs md:text-sm uppercase tracking-wider px-5 py-2 rounded-lg mb-6 shadow-sm">
            GHAF WOODS DUBAI AMENITIES
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Urban Lifestyle, Forest Living
        </h2>

        <p className="font-sans text-sm md:text-base leading-relaxed text-white/95 max-w-4xl mx-auto mb-12 lg:mb-16 font-normal">
          Rediscover luxury, embraced within the bliss of nature, only at Ghaf Woods
          by Majid Al Futtaim. The impeccably designed residences create a refined
          ambiance with marble flooring, wooden accents, and ample natural light.
          Well-equipped with modern amenities like gyms, dining and cafes, retail
          outlets, BBQ areas, and spa, the community also features nature trails, and
          mountain biking trails, all designed for a balanced lifestyle.
          Ghaf Woods creates a tranquil haven, one that promotes your connection
          to nature.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl h-[340px] sm:h-[420px] md:h-[480px] group"
            >
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                  {a.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-white/90 leading-snug">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#register"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#7d8f67] text-sm md:text-base font-semibold tracking-wide px-8 py-3.5 rounded-xl shadow-md transition-all duration-200"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}


