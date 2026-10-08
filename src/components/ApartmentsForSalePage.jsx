import { useEffect, useState } from "react";
import bgImage from "../assets/background-image.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Properties from "./Properties";
import RegisterForm from "./RegisterForm";

const faqs = [
  {
    q: "1. Are there apartments for sale in Ghaf Woods?",
    a: "Yes, buyers can explore apartment options across different residential developments in Ghaf Woods."
  },
  {
    q: "2. What types of apartments are available in Ghaf Woods?",
    a: "Apartment types, sizes, layouts, and bedroom options can vary depending on the development and available units."
  },
  {
    q: "3. Are Ghaf Woods apartments available off-plan?",
    a: "Yes, buyers can explore off-plan apartment opportunities subject to current project and unit availability."
  },
  {
    q: "4. Are there apartments with forest views in Ghaf Woods?",
    a: "Some properties may offer forest or green views depending on their location, floor, and orientation."
  },
  {
    q: "5. What should I consider when buying an apartment in Ghaf Woods?",
    a: "Consider the apartment size, layout, price, payment plan, location, view, floor level, and current availability."
  },
  {
    q: "6. Are Ghaf Woods apartments suitable for investment?",
    a: "They can be considered by investors looking for residential property opportunities in Dubai, depending on the individual property and investment strategy."
  },
  {
    q: "7. Do Ghaf Woods apartments have payment plans?",
    a: "Payment plans can vary by development and property. Buyers should confirm the latest payment terms for their preferred apartment."
  },
  {
    q: "8. Can I choose an apartment based on its view?",
    a: "Yes. Buyers can request properties based on preferred views, although availability depends on the specific development and unit."
  },
  {
    q: "9. How much does an apartment in Ghaf Woods cost?",
    a: "Prices vary depending on the development, apartment size, layout, location, and unit availability."
  },
  {
    q: "10. How can I find an apartment in Ghaf Woods?",
    a: "Register your interest and share your preferred apartment type, budget, and requirements with the property team."
  }
];

export default function ApartmentsForSalePage({ onBack }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Apartments for Sale in Ghaf Woods | Dubai Apartments";

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore apartments for sale in Ghaf Woods Dubai. Discover modern apartments, green surroundings, different layouts, and off-plan property options."
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
      "Apartments for sale in Ghaf Woods, Ghaf Woods apartments, apartments in Ghaf Woods Dubai, Ghaf Woods apartment for sale, Ghaf Woods property for sale, off-plan apartments in Ghaf Woods, Ghaf Woods Dubai apartments"
    );

    // FAQ JSON-LD Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((item) => ({
        "@type": "Question",
        "name": item.q.replace(/^\d+\.\s*/, ""),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "apartments-for-sale-faq-schema";
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
      const existingScript = document.getElementById("apartments-for-sale-faq-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-forest-900 flex flex-col justify-between">
      <div>
        <Header />

        {/* 1. HERO SECTION (Matching Homepage Hero layout with Background Overlay & Side Fitted Image) */}
        <section
          className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat min-h-[580px] flex items-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Overlay color #7d8f67 with 0.6 opacity */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ backgroundColor: "#7d8f67", opacity: 0.6 }}
          />

          <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center w-full">
            <div>
              {/* Breadcrumb / Back Link */}
              <div className="mb-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onBack) onBack();
                    else window.location.hash = "";
                  }}
                  className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </a>
              </div>

              <span className="inline-block bg-[#e0c458] text-black font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                APARTMENTS COLLECTION
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] mb-4 text-white font-bold">
                Apartments for Sale in Ghaf Woods
              </h1>
              
              <p className="uppercase text-sm md:text-base tracking-wider font-bold text-white/90 mb-4">
                GHAF WOODS <span className="font-normal normal-case">By Majid Al Futtaim</span>
              </p>

              <p className="text-white/90 leading-relaxed mb-4 max-w-xl text-sm md:text-base font-sans">
                Explore apartments for sale in{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onBack) onBack();
                    else window.location.hash = "";
                  }}
                  className="text-white underline font-semibold"
                >
                  Ghaf Woods Dubai
                </a>{" "}
                and discover modern homes surrounded by green spaces and a forest-living environment. Ghaf Woods offers different residential communities where buyers can explore apartments based on their preferred size, layout, location, and budget.
              </p>

              <p className="text-white/90 leading-relaxed mb-8 max-w-xl text-sm md:text-base font-sans">
                Find your ideal apartment in Ghaf Woods and explore available properties and current purchase options.
              </p>

              {/* CTA Button */}
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  const regForm = document.getElementById("register");
                  if (regForm) regForm.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block border border-white/60 hover:border-white bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide px-8 py-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                Explore Ghaf Woods Apartments
              </a>
            </div>

            {/* Right Side Container with Fitted Image */}
            <div className="relative">
              <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/30">
                <img
                  src="/forestliv image/tug4hwr7wch_x7n28zxq6av49_kuwjlk.webp"
                  alt="Apartments for Sale in Ghaf Woods"
                  className="w-full h-[380px] md:h-[440px] object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 2. SECOND SECTION — GHAF WOODS PROPERTIES */}
        <div className="border-b border-sand/60">
          <Properties />
        </div>

        {/* 3. THIRD SECTION — LONG CONTENT (Formatted exactly like ContentSection.jsx) */}
        <section className="bg-white py-16 md:py-24 border-b border-sand/60">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-10">
              
              {/* Block 1 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  APARTMENTS FOR SALE IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Apartments for sale in Ghaf Woods offer buyers the opportunity to own a modern home within a nature-focused residential community in Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods brings together different residential developments, giving buyers a range of apartment options to consider. The available properties can vary in size, layout, floor level, location, views, and price.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Whether you are looking for a home for your family or considering an apartment as an investment, comparing different properties can help you find an option that matches your needs.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHY CHOOSE AN APARTMENT IN GHAF WOODS?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods is designed around a forest-living concept, with greenery and open spaces forming an important part of the community environment.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  For apartment buyers, this can provide a different residential experience compared with traditional city developments. The combination of modern homes and green surroundings can appeal to buyers who want a more peaceful lifestyle while remaining connected to Dubai.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS APARTMENT OPTIONS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Apartments in Ghaf Woods can differ depending on the development and individual unit.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3 font-semibold text-forest-900">
                  When comparing apartments, buyers should consider:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm md:text-base mb-4">
                  <li>Apartment size</li>
                  <li>Number of bedrooms</li>
                  <li>Layout</li>
                  <li>Floor level</li>
                  <li>View</li>
                  <li>Building location</li>
                  <li>Community facilities</li>
                  <li>Purchase price</li>
                  <li>Payment plan</li>
                  <li>Current availability</li>
                </ul>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Looking at these details together can make it easier to choose the right apartment.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  OFF-PLAN APARTMENTS IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Buyers can also explore off-plan apartments in{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onBack) onBack();
                      else window.location.hash = "";
                    }}
                    className="text-[#6b7d56] hover:underline font-semibold"
                  >
                    Ghaf Woods
                  </a>
                  .
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  An off-plan property is purchased during its development stage, so buyers should carefully review the project information, payment plan, expected handover, property specifications, and other purchase terms.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  The exact terms can vary between developments and units, so it is important to confirm the latest information before making a purchase.
                </p>
              </div>

              {/* Block 5 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  APARTMENTS WITH FOREST AND GREEN VIEWS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  One of the key features of Ghaf Woods is its nature-focused setting. Buyers who value green surroundings can explore apartments based on their available views.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  The actual view depends on the specific unit, floor, building position, orientation, and surrounding structures. Buyers should check the exact property details when looking for a forest or park-facing apartment.
                </p>
              </div>

              {/* Block 6 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  APARTMENTS FOR INVESTMENT
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods apartments can also be considered by property investors looking for residential opportunities in Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Investors should compare the purchase price, payment plan, location, property size, expected handover, and their own investment objectives before choosing an apartment.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  The right investment property depends on the individual investor's budget and long-term plans.
                </p>
              </div>

              {/* Block 7 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  HOW TO CHOOSE THE RIGHT GHAF WOODS APARTMENT
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Start by deciding what you need from your new home.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Consider your preferred number of bedrooms, budget, apartment size, desired view, community, and payment requirements. You can then compare available apartments that match these preferences.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  It is also useful to check the current availability and latest price because property options can change over time.
                </p>
              </div>

              {/* Block 8 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  FIND APARTMENTS FOR SALE IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  If you are searching for apartments for sale in Ghaf Woods, our team can help you explore available properties and compare suitable options.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                  Share your preferred budget, apartment type, number of bedrooms, and other requirements to find properties that match your needs.
                </p>

                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault();
                    const regForm = document.getElementById("register");
                    if (regForm) regForm.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-block bg-[#6B7D56] hover:bg-[#586847] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors"
                >
                  Find Your Ghaf Woods Apartment &rarr;
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 4. FOURTH SECTION — FAQ (Formatted exactly like FAQSection.jsx) */}
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

        {/* 5. FIFTH SECTION — FORM */}
        <div>
          <RegisterForm />
        </div>

      </div>

      <Footer />
    </div>
  );
}
