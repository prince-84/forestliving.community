const blocks = [
  {
    title: "Ghaf Woods by MAF",
    body: "Global Village is next to Ghaf Woods by MAF. Considered an ecologically conscious development, Ghaf Woods development is recognized as the first forest living area in Dubai. The Ghaf Woods location gives people a distinctive living experience in the center of a lush forest with a focus on environmental sustainability. Al Ghaf Woods Dubai offers a range of residences including, including apartments and penthouses in different sizes and layouts.",
  },
  {
    title: "Off Plan Projects In Ghaf Woods",
    body: "Ghaf Woods Properties is a premier residential community blending nature with modern living. This development features luxury off-plan properties with sustainable design and class amenities.",
  },
  {
    title: "Maravelle at Ghaf Woods",
    body: "Maravelle Residences at Ghaf Woods is a new residential development by Majid Al Futtaim in Dubailand, Dubai. Surrounded by lush greenery, the community offers a peaceful forest-inspired lifestyle with modern 2, 3, and 4-bedroom apartments. Designed for comfortable living, the residences combine contemporary architecture with natural surroundings, creating a calm and private environment for residents while keeping them connected to Dubai's key destinations and attractions.",
  },
  {
    title: "Distrikt At Ghaf Woods",
    body: "Majid Al Futtaim has recently launched a new distrikt at Ghaf Woods, situated in the heart of Dubai's nature. The Distrikt has been selected the lifestyle of its residents, offering a distinctive and highly sustainable lifestyle.",
  },
  {
    title: "Capria At Ghaf Woods",
    body: "Capria offers contemporary apartments with high-end finishes, spacious layouts, and lush green views. Residents enjoy top-tier amenities, including pools, fitness centers, and recreational spaces.",
  },
  {
    title: "Lacina At Ghaf Woods",
    body: "Lacina combines modern living with nature, featuring elegant homes, retail options, and easy access to parks, jogging trails, and retail outlets. Lacina prime location ensures easy connectivity.",
  },
  {
    title: "Ghaf Woods Phase 1 & Phase 2",
    body: "These phases introduce stylish Ghaf Woods apartments and townhouses with eco-friendly designs, premium materials, and top-class amenities such as clubhouses, sports courts, and landscaped gardens.",
  },
  {
    title: "Cilia At Ghaf Woods",
    body: "Cilia focuses on sustainability with energy-efficient homes, lush landscapes, and modern conveniences. Residents enjoy access to fitness centers, swimming pools, and retail hubs.",
  },
  {
    title: "Serra At Ghaf Woods",
    body: "Serra epitomizes luxury with modern interiors, private terraces, and breathtaking views. Ghaf Woods Serra project offers exclusive facilities, including private pools, community parks, and wellness centers.",
  },
  {
    title: "Arista At Ghaf Woods",
    body: "Arista seamlessly integrates modern design with nature, offering stylish homes, smart technology, and access to parks, community facilities, and recreational spaces.",
  },
  {
    title: "First Forest Living Township",
    body: "The lively culture of Global Village and the busy thrill of IMG Worlds are nestled together. Majid Al Futtaim is the developer of New Forest Living Community in Dubai, a sustainable residential-scale community offering forest living in Dubai by MAF to more than simply a project. Forest living by MAF is located adjacent to Global Village, a nature masterpiece that is designed to provide peace of mind, body and soul enveloped by Forest living by MAF is surrounded by nature featuring flora, farm-to-table dining, and interactive neighborhood woodland paths. Investors can trust the integrity and success of Forest by MAF as it is meticulously crafted to exceed expectations. Investors can trust the integrity and success of Forest by MAF as it is meticulously crafted to exceed expectations.",
  },
];

export default function ContentSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {blocks.map((b) => (
            <div key={b.title}>
              <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                {b.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{b.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-forest-700 font-medium mt-10">
          Coming soon new Ghaf Woods phase 2 at forest living phase 2 launching soon by Majid Al Futtaim
        </p>
      </div>
    </section>
  );
}
