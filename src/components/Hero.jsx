import bgImage from "../assets/background-image.jpg";
import image1 from "../assets/image1.png";

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat min-h-[580px] flex items-center" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay color #7d8f67 with 0.6 opacity */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: "#7d8f67", opacity: 0.6 }}
      />

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center w-full">
        <div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-5xl leading-[1.15] mb-4 text-white font-bold">
            Ghaf Woods Dubai
            <br />
            Forest-Living Apartments, Villas & Mansions
          </h1>
          <p className="uppercase text-base md:text-lg tracking-wider font-bold text-white mb-6">
            GHAF WOODS <span className="font-normal normal-case">By Majid Al Futtaim</span>
          </p>
          <p className="text-white/90 leading-relaxed mb-8 max-w-lg text-sm md:text-base">
            New Launch Property by Majid Al Futtaim in Ghaf Woods. Ghaf Woods, Dubai's first forest-living community by Majid Al Futtaim, aims to become a premier destination in the UAE. Designed by renowned architects, it offers exclusive 1, 2, and 3-bedroom apartments and duplexes, spread across five to six floors, seamlessly blending sustainability with luxury.
          </p>
          <a
            href="#register"
            className="inline-block border border-white/60 hover:border-white bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide px-8 py-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            Register Now
          </a>
        </div>

        <div className="relative">
          <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/30">
            <img
              src={image1}
              alt="Ghaf Woods Terrace View"
              className="w-full h-[380px] md:h-[440px] object-cover rounded-xl"
              style={{ objectPosition: "88% center" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}


