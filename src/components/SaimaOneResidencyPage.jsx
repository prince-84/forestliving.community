import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RegisterForm from "./RegisterForm";
import { setCanonicalUrl } from "../utils/canonical";

const faqs = [
  {
    q: "1. What is Lyra at Ghaf Woods Dubai?",
    a: "Lyra at Ghaf Woods is a residential apartment development within Ghaf Woods, a nature-inspired community by Majid Al Futtaim in Dubailand.",
  },
  {
    q: "2. Where is the Lyra at Ghaf Woods location?",
    a: "The Lyra at Ghaf Woods location is in Dubailand, along Sheikh Mohammed Bin Zayed Road, with Global Village nearby for entertainment and leisure.",
  },
  {
    q: "3. What are the Lyra at Ghaf Woods prices?",
    a: "The official Lyra at Ghaf Woods prices are yet to be announced. Previous Ghaf Woods phases reportedly started at around AED 1.2 million, offering a useful starting point for buyers of Lyra Ghaf Woods apartments.",
  },
  {
    q: "4. What is the Lyra at Ghaf Woods payment plan?",
    a: "The Lyra at Ghaf Woods payment plan has not been confirmed yet. Previous phases offered flexible structures, including 60/40 and 10/50/40, but Lyra's final terms may vary.",
  },
  {
    q: "5. Is a Lyra at Ghaf Woods floor plan available?",
    a: "The official Lyra at Ghaf Woods floor plan has not been released publicly. Interested buyers can contact the sales team for apartment layouts, sizes, and available configurations.",
  },
  {
    q: "6. How can I get the Lyra at Ghaf Woods brochure?",
    a: "You can call the Ghaf Woods sales team on 800 GHAF (4423) to request the latest Lyra at Ghaf Woods brochure and learn more about the development.",
  },
  {
    q: "7. Does Lyra by Majid Al Futtaim offer only apartments?",
    a: "Ghaf Woods is planned to include apartments, duplexes, penthouses, and garden units. For the specific property types available at Lyra, it's best to check with the developer.",
  },
  {
    q: "8. How many bedrooms are available at Lyra at Ghaf Woods?",
    a: "The bedroom options for Lyra at Ghaf Woods are yet to be confirmed. Earlier Ghaf Woods phases offered one- to three-bedroom apartments, so the sales team can provide updates on the latest layouts.",
  },
  {
    q: "9. What makes Ghaf Woods a forest-living community?",
    a: "Ghaf Woods combines modern living with nature, featuring approximately 35,000 planned trees, walking trails, forest pools, and native plants to create a greener residential environment.",
  },
  {
    q: "10. How can I buy apartments in Ghaf Woods Dubai?",
    a: "Start by registering your interest with the sales team and requesting the latest prices, payment plan, and floor plans. Before booking, make sure you review the terms and verify the relevant project approvals.",
  },
];

export default function SaimaOneResidencyPage({ onBack }) {
  const [tocOpen, setTocOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Lyra by Majid Al Futtaim: Price, Payment Plan & Location";
    setCanonicalUrl("https://forestliving.community/saima-one-residency-clifton");

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore Lyra Ghaf Woods forest living by Majid Al Futtaim location, payment plan, floor plan, apartments, amenities, and investment opportunities in Dubai."
      );
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    let createdKeywords = false;
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
      createdKeywords = true;
    }
    metaKeywords.setAttribute(
      "content",
      "Lyra at Ghaf Woods, Lyra at Ghaf Woods Dubai, Lyra by Majid Al Futtaim, Lyra Ghaf Woods apartments, Lyra at Ghaf Woods prices, Lyra at Ghaf Woods payment plan, Lyra at Ghaf Woods floor plan, Lyra at Ghaf Woods brochure, Lyra at Ghaf Woods location, Buy apartments in Ghaf Woods Dubai"
    );

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q.replace(/^\d+\.\s*/, ""),
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "saima-one-faq-schema";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute("content", prevDesc);
      }
      if (createdKeywords && metaKeywords) {
        metaKeywords.remove();
      }
      const existingScript = document.getElementById("saima-one-faq-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-forest-900 flex flex-col justify-between">
      <div>
        <Header />

        {/* 1. HERO SECTION */}
        <section
          className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat min-h-[340px] sm:min-h-[400px] md:min-h-[460px] flex items-center justify-center"
          style={{ backgroundImage: "url('/75914d231374601.68884b7d7e4c2.jpg')" }}
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(43, 61, 34, 0.72) 0%, rgba(63, 90, 48, 0.65) 50%, rgba(43, 61, 34, 0.72) 100%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-center w-full">
            <span className="inline-block bg-[#e0c458] text-black font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              GHAF WOODS DUBAI
            </span>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold uppercase tracking-wide text-white leading-tight drop-shadow-sm">
              LYRA AT GHAF WOODS
            </p>
          </div>
        </section>

        {/* 2. MAIN CONTENT SECTION */}
        <section className="bg-cream py-12 md:py-16 border-b border-sand/60">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-sm md:text-[15px] mb-6 font-sans">
              <a
                href="/"
                onClick={(e) => {
                  if (onBack) {
                    e.preventDefault();
                    onBack();
                  }
                }}
                className="text-[#6B7D56] font-medium underline hover:text-forest-800 transition-colors"
              >
                Home
              </a>
              <span className="mx-1.5 text-forest-700">/</span>
              <span className="text-forest-900 font-medium">Lyra at Ghaf Woods</span>
            </nav>

            {/* Table of Contents Box */}
            <div className="inline-block border border-sand rounded-xl px-4 py-3 mb-10 bg-white shadow-xs min-w-[260px]">
              <div className="flex items-center justify-between gap-6">
                <span className="font-display text-base font-semibold text-forest-900">
                  Table of Contents
                </span>
                <button
                  type="button"
                  onClick={() => setTocOpen(!tocOpen)}
                  aria-expanded={tocOpen}
                  aria-label="Toggle Table of Contents"
                  className="border border-sand rounded-lg px-2.5 py-1 text-[#6B7D56] hover:text-forest-900 hover:bg-forest-50 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                    <line x1="8" y1="18" x2="16" y2="18" />
                    <circle cx="4" cy="6" r="1" fill="currentColor" />
                    <circle cx="4" cy="12" r="1" fill="currentColor" />
                    <circle cx="4" cy="18" r="1" fill="currentColor" />
                  </svg>
                  <svg className="w-2.5 h-3.5" viewBox="0 0 10 16" fill="currentColor">
                    <path d="M5 1L1 6h8L5 1zm0 14l4-5H1l4 5z" />
                  </svg>
                </button>
              </div>
              {tocOpen && (
                <div className="mt-3 pt-2.5 border-t border-sand text-sm text-forest-800 space-y-1.5">
                  <a href="#lyra-at-ghaf-woods" className="block hover:text-[#6B7D56] transition-colors">1. Lyra at Ghaf Woods</a>
                  <a href="#what-is-lyra" className="block hover:text-[#6B7D56] transition-colors">2. What Is Lyra at Ghaf Woods?</a>
                  <a href="#about-the-developer" className="block hover:text-[#6B7D56] transition-colors">3. About the Developer</a>
                  <a href="#living-inside-a-forest" className="block hover:text-[#6B7D56] transition-colors">4. Living Inside a Forest</a>
                  <a href="#nature-led-design" className="block hover:text-[#6B7D56] transition-colors">5. Nature-Led Design</a>
                  <a href="#amenities" className="block hover:text-[#6B7D56] transition-colors">6. Amenities: Trails, Pools and Wellness</a>
                  <a href="#location" className="block hover:text-[#6B7D56] transition-colors">7. Lyra at Ghaf Woods Location</a>
                  <a href="#property-types" className="block hover:text-[#6B7D56] transition-colors">8. Property Types Available</a>
                  <a href="#floor-plan" className="block hover:text-[#6B7D56] transition-colors">9. Lyra at Ghaf Woods Floor Plan</a>
                  <a href="#prices" className="block hover:text-[#6B7D56] transition-colors">10. Lyra at Ghaf Woods Prices</a>
                  <a href="#payment-plan" className="block hover:text-[#6B7D56] transition-colors">11. Lyra at Ghaf Woods Payment Plan</a>
                  <a href="#brochure" className="block hover:text-[#6B7D56] transition-colors">12. Lyra at Ghaf Woods Brochure</a>
                  <a href="#development-status" className="block hover:text-[#6B7D56] transition-colors">13. Development Status and Handover</a>
                  <a href="#investment-potential" className="block hover:text-[#6B7D56] transition-colors">14. Investment Potential</a>
                  <a href="#pros-and-cautions" className="block hover:text-[#6B7D56] transition-colors">15. Pros and Cautions</a>
                  <a href="#who-should-consider-it" className="block hover:text-[#6B7D56] transition-colors">16. Who Should Consider It?</a>
                  <a href="#faqs" className="block hover:text-[#6B7D56] transition-colors">17. Frequently Asked Questions</a>
                </div>
              )}
            </div>

            {/* Main Article Content */}
            <div className="space-y-10">
                  {/* H1 Section */}
                  <div id="lyra-at-ghaf-woods">
                    <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#6b7d56] mb-3 uppercase tracking-wider font-bold">
                      Lyra at Ghaf Woods
                    </h1>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5">
                      Discover Lyra at Ghaf Woods, Dubai, with forest-inspired apartments, wellness amenities, green trails, and nature-led living in Dubailand.
                    </p>
                    <div className="my-5 overflow-hidden rounded-2xl shadow-sm">
                      <img
                        src="/KoscqdBzB23LKj6Ue9JoN44LTOuIMxNgdZhiSvzx.jpg"
                        alt="Lyra at Ghaf Woods Dubai"
                        className="w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] object-fill rounded-2xl"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Lyra at Ghaf Woods is a residential phase and apartment launch inside Dubai's forest-living community. The idea is simple: homes arranged around trees, trails and shade instead of a concrete skyline. Those searching for Lyra at Ghaf Woods Dubai, are often interested in what daily life in a forest-inspired residential community looks like, making this a key aspect to explore first. Lyra by Majid Al Futtaim belongs to a 738,000 sq m community near Global Village, planned in eight phases through 2031.
                    </p>
                  </div>

                  {/* H2: What Is Lyra at Ghaf Woods? */}
                  <div id="what-is-lyra">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      What Is Lyra at Ghaf Woods?
                    </h2>
                    <div className="my-4 overflow-hidden rounded-2xl shadow-sm">
                      <img
                        src="/i (4).webp"
                        alt="What Is Lyra at Ghaf Woods"
                        className="w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] object-fill rounded-2xl"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                      Think of it as an apartment-only neighbourhood. Ghaf Woods offers one-, two- and three-bedroom apartments, including duplexes, penthouses and ground-floor units with gardens. The Lyra Ghaf Woods apartments follow the same idea, with buildings meant to face the greenery.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Majid Al Futtaim is the developer, and the community sits in Dubailand. The concept is forest living with biophilic design, and every home is an apartment. Ghaf Woods launched from about AED 1.2 million, though this phase's rate isn't confirmed. Planned features include walking trails, forest-edge pools and yoga and wellness pavilions. The payment plan, floor plans and handover date are still to be confirmed.
                    </p>
                  </div>

                  {/* H2: About the Developer */}
                  <div id="about-the-developer">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      About the Developer
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Lyra by Majid Al Futtaim comes from a developer with a master-community record. Majid Al Futtaim also launched Tilal Al Ghaf in Dubai and Al Mouj in Muscat. Ghaf Woods will also have Distrikt, a hub with retail and farm-to-table dining, and a Ghaf Woods Mall has been announced.
                    </p>
                  </div>

                  {/* H2: Living Inside a Forest */}
                  <div id="living-inside-a-forest">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Living Inside a Forest
                    </h2>
                    <div className="my-4 overflow-hidden rounded-2xl shadow-sm">
                      <img
                        src="/i (3).webp"
                        alt="Living Inside a Forest at Lyra Ghaf Woods"
                        className="w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] object-fill rounded-2xl"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                      Ghaf Woods is built on one promise: trees outnumbering residents. The plan calls for about 35,000 trees, and the developer says shade can bring average temperatures up to five degrees Celsius below the city's. It also expects over 20 bird species and up to 20 per cent cleaner air. For buyers weighing Lyra at Ghaf Woods, that means less glare and a cooler walk to the lift.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      The trees are not renders. A dedicated nursery is growing more than 30,000 trees and 350,000 shrubs, including acacia, citrus, ficus, tecomella, ziziphus and the Ghaf. Choosing species suited to the local climate is what keeps a desert forest alive.
                    </p>
                  </div>

                  {/* H2: Nature-Led Design */}
                  <div id="nature-led-design">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Nature-Led Design
                    </h2>
                    <div className="my-4 overflow-hidden rounded-2xl shadow-sm">
                      <img
                        src="/i (2).webp"
                        alt="Nature-Led Design at Lyra Ghaf Woods"
                        className="w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] object-fill rounded-2xl"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Biophilic design puts nature into the architecture, not just the landscaping. The neighbouring Capria phase uses biophilic and salutogenic design, spa-style pools and wellness gardens. Lyra at Ghaf Woods is described as following the same forest-first logic, with native trees, car-free ground levels and underground parking. Treat the parking details as planned and confirm them for each building. The official site frames the community around biodiversity, productive landscapes, a five-minute walkable layout and homes with front-row views of nature.
                    </p>
                  </div>

                  {/* H2: Amenities: Trails, Pools and Wellness */}
                  <div id="amenities">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Amenities: Trails, Pools and Wellness
                    </h2>
                    <div className="my-4 overflow-hidden rounded-2xl shadow-sm">
                      <img
                        src="/20240920044502587574306o.jpg"
                        alt="Amenities Trails Pools and Wellness at Lyra Ghaf Woods"
                        className="w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] object-fill rounded-2xl"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3">
                      The community promises eight kilometres of walking trails, a 3.5-kilometre biking loop, resort-style pools and fitness facilities. The official site also lists:
                    </p>
                    <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm md:text-base mb-4">
                      <li>An Enchanted Forest</li>
                      <li>Forest pools</li>
                      <li>Kids' nature gardens</li>
                      <li>A wellness and yoga pavilion</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      For families, that is a playground that is also a park. For runners and cyclists, it is a route without traffic lights. These are community-wide amenities, so ask which ones fall within the Lyra at Ghaf Woods boundary and when they open.
                    </p>
                  </div>

                  {/* H2: Lyra at Ghaf Woods Location */}
                  <div id="location">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Lyra at Ghaf Woods Location
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Ghaf Woods sits in Dubailand, along Sheikh Mohammed Bin Zayed Road (E311), close to Global Village. You get a quiet, tree-lined address with major roads close by. You get rough drive times of about 15 minutes to Tilal Al Ghaf, 20 minutes to Mall of the Emirates and 25 minutes to Dubai Marina. Those are estimates, so time the drive yourself at peak hours.
                    </p>
                  </div>

                  {/* H2: Property Types Available */}
                  <div id="property-types">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Property Types Available
                    </h2>
                    <div className="my-4 overflow-hidden rounded-2xl shadow-sm bg-white p-4">
                      <img
                        src="/Gemini_Generated_Image_8g6urr8g6urr8g6u.jfif"
                        alt="Property Types Available at Lyra Ghaf Woods"
                        className="w-full h-[380px] sm:h-[460px] md:h-[560px] object-contain mx-auto rounded-xl"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Lyra Ghaf Woods offers apartments, but no verified bedroom breakdown is currently available for Lyra Ghaf Woods apartments. Earlier phases of Ghaf Woods featured one-, two- and three-bedroom residences, which may provide a general indication of the potential unit mix. However, the bedroom configurations, apartment sizes, and availability of duplex or garden units at Lyra Ghaf Woods require written confirmation. In Lacina, one-bedroom apartments ranged from 675 to 1,052 sq ft, while three-bedroom units ranged from 1,725 to 2,653 sq ft.
                    </p>
                  </div>

                  {/* H2: Lyra at Ghaf Woods Floor Plan */}
                  <div id="floor-plan">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Lyra at Ghaf Woods Floor Plan
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Lyra at Ghaf Woods floor plan is not publicly confirmed. Ask for unit-wise plans showing internal area, balcony size and orientation toward the trees. Compare a forest-facing unit with a courtyard unit before you choose.
                    </p>
                  </div>

                  {/* H2: Lyra at Ghaf Woods Prices */}
                  <div id="prices">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Lyra at Ghaf Woods Prices
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Ghaf Woods units were priced from AED 1.2 million at launch. Recent releases have generally risen about 10 per cent between phases. Independent Lyra at Ghaf Woods prices are not published, so ask for a unit-wise price list. Budget for registration fees and service charges too.
                    </p>
                  </div>

                  {/* H2: Lyra at Ghaf Woods Payment Plan */}
                  <div id="payment-plan">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Lyra at Ghaf Woods Payment Plan
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      The plan for this phase is not confirmed. Earlier releases used a 60/40 plan, with 60% during construction and 40% at handover, and some recent ones used 10% on booking, 50% during construction and 40% on completion. The Lyra at Ghaf Woods payment plan’s official schedule is yet to be released. Eligible first-time buyers can also check Majid Al Futtaim's programme with the Dubai Land Department, which offers up to 5% savings.
                    </p>
                  </div>

                  {/* H2: Lyra at Ghaf Woods Brochure */}
                  <div id="brochure">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Lyra at Ghaf Woods Brochure
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      No brochure for this phase is available at the moment. The official website links to a Lacina brochure and lists the sales line as 800 GHAF (4423). It is recommended to contact the sales team directly to request the latest brochure before relying on third-party PDFs.
                    </p>
                  </div>

                  {/* H2: Development Status and Handover */}
                  <div id="development-status">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Development Status and Handover
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Ghaf Woods is delivered in phases. First unit deliveries were expected in 2027, and Capria and Maravelle construction was awarded in June 2026. No completion date for Lyra at Ghaf Woods is confirmed, so plan for a multi-year wait and get it in writing.
                    </p>
                  </div>

                  {/* H2: Investment Potential */}
                  <div id="investment-potential">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Investment Potential
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      For investors, Lyra at Ghaf Woods presents a compelling off-plan opportunity within a uniquely positioned community. The strong reputation of Lyra by Majid Al Futtaim and the proven capital appreciation of Ghaf Woods phases suggest solid long-term value. Those looking to buy apartments in Ghaf Woods Dubai are investing in a lifestyle concept with limited future supply, which could support resale and rental yields. However, potential investors must account for the multi-year construction timeline and confirm all payment plan details before committing.
                    </p>
                  </div>

                  {/* H2: Pros and Cautions */}
                  <div id="pros-and-cautions">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Pros and Cautions
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                      The strengths of Lyra at Ghaf Woods are its forest setting, a large-scale developer and wellness-led amenities. Nature is everywhere, the community is apartment-only, and there is a first-time buyer programme.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      On the other side, check the unconfirmed unit mix, payment plan and handover. Prices have risen between phases, and construction will continue nearby for years.
                    </p>
                  </div>

                  {/* H2: Who Should Consider It? */}
                  <div id="who-should-consider-it">
                    <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                      Who Should Consider It?
                    </h2>
                    <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm md:text-base">
                      <li>Nature lovers looking for a greener, more peaceful lifestyle.</li>
                      <li>Families seeking a community with outdoor spaces and wellness-focused amenities.</li>
                      <li>Wellness seekers who value walking trails and nature-inspired living.</li>
                      <li>Long-term investors interested in Dubai’s off-plan property market.</li>
                      <li>Off-plan buyers who are comfortable with construction timelines and potential delays.</li>
                    </ul>
                  </div>
                </div>

                {/* Continuity Sections Container */}
                <div id="continuity-sections"></div>
          </div>
        </section>

        {/* 3. FAQ SECTION (MATCHING HOMEPAGE THEME EXACTLY) */}
        <section id="faqs" className="bg-white py-16 md:py-20 border-b border-sand/60">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10 text-center">
              <span className="inline-block bg-[#e0c458] text-black font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-200 shadow-xs"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-semibold text-base md:text-lg text-[#6B7D56] hover:text-[#586847] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#6B7D56] font-bold text-base">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 font-sans">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. REGISTER FORM SECTION */}
        <div>
          <RegisterForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}
