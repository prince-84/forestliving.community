import img1 from "../assets/image1.png";
import img2 from "../assets/image_2.png";
import img3 from "../assets/image-3.png";
import img4 from "../assets/image_4.png";
import img5 from "../assets/image_5.png";
import img6 from "../assets/image_6.png";
import img7 from "../assets/image-7.png";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#7d8f67] py-16 md:py-24 text-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          Gallery
        </h2>
        <p className="font-sans text-sm md:text-base text-white/95 max-w-3xl mx-auto mb-12 lg:mb-16 font-normal">
          Redefine urban living surrounded by lush landscapes only at Ghaf Woods
        </p>

        {/* Root Images Grid - 4 Columns Asymmetric Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="col-span-1 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-[220px] sm:h-[260px] md:h-[290px]">
            <img
              src={img2}
              alt="Ghaf Woods Gallery 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="col-span-1 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-[220px] sm:h-[260px] md:h-[290px]">
            <img
              src={img3}
              alt="Ghaf Woods Gallery 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-[220px] sm:h-[260px] md:h-[290px]">
            <img
              src={img4}
              alt="Ghaf Woods Gallery 4"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-[220px] sm:h-[260px] md:h-[290px]">
            <img
              src={img5}
              alt="Ghaf Woods Gallery 5"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="col-span-1 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-[220px] sm:h-[260px] md:h-[290px]">
            <img
              src={img6}
              alt="Ghaf Woods Gallery 6"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="col-span-1 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-[220px] sm:h-[260px] md:h-[290px]">
            <img
              src={img7}
              alt="Ghaf Woods Gallery 7"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Download Brochure Button */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#register"
            className="inline-block bg-white text-[#7d8f67] hover:bg-white/90 font-medium text-sm md:text-base px-8 py-3.5 rounded-xl shadow-md transition-all duration-200"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}


