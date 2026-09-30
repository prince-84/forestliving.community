const points = [
  { label: "03 Minutes – Global Village" },
  { label: "10 Minutes – Dubai Miracle Garden" },
  { label: "15 Minutes – Tilal Al Ghaf" },
  { label: "24 Minutes – Mall Of Emirates" },
  { label: "30 Minutes – Downtown Dubai" },
  { label: "30 Minutes – Dubai Int'l Airport" },
];

export default function LocationSection() {
  return (
    <section id="location" className="bg-forest-900 py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          Ghaf Woods Location
        </h2>
        <p className="text-forest-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Located in Dubailand, Ghaf Woods offers a quick escape into a lush
          forest living while being conveniently connected to key attractions
          like Global Village and other major hubs.
        </p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base text-forest-100/90 max-w-4xl mx-auto">
          {points.map((p) => (
            <span key={p.label} className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-xl backdrop-blur-xs border border-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-white">
                <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
