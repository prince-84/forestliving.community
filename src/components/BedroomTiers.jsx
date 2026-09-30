const tiers = [
  { title: "1 Bedroom" },
  { title: "2 Bedroom" },
  { title: "3 Bedroom" },
];

export default function BedroomTiers() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {tiers.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-md border border-gray-100/80 hover:shadow-lg transition-all duration-200 flex flex-col justify-center items-center min-h-[160px] md:min-h-[180px]"
            >
              <h3 className="font-display text-3xl md:text-4xl lg:text-3xl font-bold text-black">
                {t.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#register"
            className="inline-block bg-[#7d8f67] hover:bg-[#6b7d56] text-white text-sm md:text-base font-medium px-8 py-3.5 rounded-xl shadow-sm transition-colors duration-200"
          >
            Unit &amp; Price Availability
          </a>
        </div>
      </div>
    </section>
  );
}

