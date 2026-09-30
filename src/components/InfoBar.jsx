import bgPattern from "../assets/background.png";

const items = [
  {
    value: "7",
    label: "FOREST CLUSTERS",
  },
  {
    value: "40,000+",
    subValue: "Trees",
    label: "TREES PLANTED",
  },
  {
    value: "Dubailand",
    label: "LOCATION",
  },
  {
    value: "1–3 BR",
    label: "APARTMENTS",
  },
  {
    value: "AED 1.5M",
    label: "STARTING PRICE",
  },
  {
    value: "10%",
    label: "BOOKING",
  },
];

export default function InfoBar() {
  return (
    <section
      className="relative text-white py-5 md:py-6 bg-cover bg-center border-t border-b border-white/20"
      style={{
        backgroundColor: "#7d8f67",
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 lg:divide-x divide-white/25">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center py-2 px-2 text-center"
            >
              <div
                className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold text-white tracking-wide mb-0.5 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.value}
                {item.subValue && (
                  <span className="block text-lg sm:text-xl font-normal leading-tight">
                    {item.subValue}
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/90 font-semibold mt-0.5">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


