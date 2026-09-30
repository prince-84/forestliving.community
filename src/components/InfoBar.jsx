import bgPattern from "../assets/background.png";

const items = [
  {
    label: "Starting Price",
    lines: ["AED 1.5M | USD 408K"],
    icon: (
      <svg className="w-12 h-12 text-white/95 mx-auto mb-3" viewBox="0 0 64 64" fill="currentColor">
        <rect x="8" y="16" width="48" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="30" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="32" y="34" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">$</text>
        <path d="M14 22v2M50 22v2M14 36v2M50 36v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 40v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 52h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Payment Plan",
    lines: ["60 / 40"],
    icon: (
      <svg className="w-12 h-12 text-white/95 mx-auto mb-3" viewBox="0 0 64 64" fill="currentColor">
        <path d="M12 24h14v22H12z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M15 28h8M15 33h8M15 38h8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="24" y="12" width="28" height="38" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="28" y="17" width="20" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="30" r="1.5" /> <circle cx="38" cy="30" r="1.5" /> <circle cx="44" cy="30" r="1.5" />
        <circle cx="32" cy="36" r="1.5" /> <circle cx="38" cy="36" r="1.5" /> <circle cx="44" cy="36" r="1.5" />
        <circle cx="32" cy="42" r="1.5" /> <circle cx="38" cy="42" r="1.5" /> <circle cx="44" cy="42" r="1.5" />
        <ellipse cx="44" cy="45" rx="7" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <ellipse cx="44" cy="49" rx="7" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Location",
    lines: ["Dubailand"],
    icon: (
      <svg className="w-12 h-12 text-white/95 mx-auto mb-3" viewBox="0 0 64 64" fill="currentColor">
        <path d="M22 52V14l10-4 10 4v38H22z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 4v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="26" y="18" width="4" height="4" /> <rect x="34" y="18" width="4" height="4" />
        <rect x="26" y="25" width="4" height="4" /> <rect x="34" y="25" width="4" height="4" />
        <rect x="26" y="32" width="4" height="4" /> <rect x="34" y="32" width="4" height="4" />
        <rect x="26" y="39" width="4" height="4" /> <rect x="34" y="39" width="4" height="4" />
        <path d="M14 52h36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Property Types",
    lines: ["1-3 BR Apartments", "3 BR Duplexes"],
    icon: (
      <svg className="w-12 h-12 text-white/95 mx-auto mb-3" viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 12L12 28h6v22h28V28h6L32 12z" fill="currentColor" />
        <rect x="26" y="34" width="12" height="16" fill="#445733" rx="1" />
      </svg>
    ),
  },
];

export default function InfoBar() {
  return (
    <section
      className="relative text-white py-12 md:py-14 bg-cover bg-center"
      style={{
        backgroundColor: "#445533",
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center justify-center">
            {item.icon}
            <h3 className="font-display text-lg md:text-xl font-normal text-white/90 mb-1">
              {item.label}
            </h3>
            {item.lines.map((line, idx) => (
              <p key={idx} className="font-display text-lg md:text-xl lg:text-2xl font-medium text-white leading-snug">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

