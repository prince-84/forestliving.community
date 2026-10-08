import { useEffect, useState } from "react";
import bgImage from "../assets/background-image.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Properties from "./Properties";
import RegisterForm from "./RegisterForm";
import { setCanonicalUrl } from "../utils/canonical";

const faqs = [
  {
    q: "1. Are there villas for sale in Ghaf Woods?",
    a: "Yes, buyers can explore villa options in Ghaf Woods based on current development and property availability."
  },
  {
    q: "2. What types of villas are available in Ghaf Woods?",
    a: "Villa sizes, layouts, bedroom options, and features can vary depending on the development and available properties."
  },
  {
    q: "3. Are Ghaf Woods villas suitable for families?",
    a: "Yes, villas can be suitable for families looking for more space, privacy, and a nature-focused residential environment."
  },
  {
    q: "4. Are there villas with forest views in Ghaf Woods?",
    a: "Some properties may offer green or forest-facing views depending on their exact location and orientation."
  },
  {
    q: "5. Can I buy an off-plan villa in Ghaf Woods?",
    a: "Yes, buyers can explore available off-plan villa opportunities subject to current project and unit availability."
  },
  {
    q: "6. What should I consider when buying a Ghaf Woods villa?",
    a: "Consider the villa size, layout, number of bedrooms, location, view, price, payment plan, expected handover, and current availability."
  },
  {
    q: "7. Are Ghaf Woods villas good for investment?",
    a: "They can be considered by investors looking for larger residential properties in Dubai, depending on the specific property and investment strategy."
  },
  {
    q: "8. Do Ghaf Woods villas have payment plans?",
    a: "Payment terms can vary depending on the development and property. Buyers should request the latest payment details for their preferred villa."
  },
  {
    q: "9. How much do villas in Ghaf Woods cost?",
    a: "Villa prices vary depending on the development, size, layout, location, specifications, and availability."
  },
  {
    q: "10. How can I find a villa for sale in Ghaf Woods?",
    a: "Register your interest and share your preferred villa size, budget, location, and other requirements with the property team."
  }
];

export default function VillasForSalePage({ onBack }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Villas for Sale in Ghaf Woods | Luxury Villas in Dubai";
    setCanonicalUrl("https://forestliving.community/villas-for-sale-in-ghaf-woods/");

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore villas for sale in Ghaf Woods Dubai. Discover modern villas, green surroundings, spacious layouts, and off-plan property options in Ghaf Woods."
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
      "Villas for sale in Ghaf Woods, Ghaf Woods villas, villas in Ghaf Woods Dubai, Ghaf Woods villa for sale, luxury villas in Ghaf Woods, Ghaf Woods properties for sale, off-plan villas in Ghaf Woods, Ghaf Woods Dubai villas"
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
    script.id = "villas-for-sale-faq-schema";
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
      const existingScript = document.getElementById("villas-for-sale-faq-schema");
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
                    else {
                      window.history.pushState({}, "", "/");
                      window.dispatchEvent(new Event("popstate"));
                    }
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
                VILLA COLLECTION
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] mb-4 text-white font-bold">
                Villas for Sale in Ghaf Woods
              </h1>

              <p className="uppercase text-sm md:text-base tracking-wider font-bold text-white/90 mb-4">
                GHAF WOODS <span className="font-normal normal-case">By Majid Al Futtaim</span>
              </p>

              <p className="text-white/90 leading-relaxed mb-4 max-w-xl text-sm md:text-base font-sans">
                Explore villas for sale in{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onBack) onBack();
                    else {
                      window.history.pushState({}, "", "/");
                      window.dispatchEvent(new Event("popstate"));
                    }
                  }}
                  className="text-white underline font-semibold"
                >
                  Ghaf Woods
                </a>{" "}
                and discover spacious homes within a nature-focused residential community in Dubai. Ghaf Woods offers a forest-living environment with green spaces, modern amenities, and residential options designed for comfortable living.
              </p>

              <p className="text-white/90 leading-relaxed mb-8 max-w-xl text-sm md:text-base font-sans">
                Find available villas and compare their size, layout, location, views, and current purchase options.
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
                Explore Ghaf Woods Villas
              </a>
            </div>

            {/* Right Side Container with Fitted Image */}
            <div className="relative">
              <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/30">
                <img
                  src="/forestliv image/1-0.webp"
                  alt="Villas for Sale in Ghaf Woods"
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
                  VILLAS FOR SALE IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Villas for sale in Ghaf Woods offer buyers an opportunity to enjoy spacious residential living within a nature-focused community in Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods is designed around a forest-living concept, combining modern residential spaces with greenery, open areas, and community-focused facilities.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  For families and buyers who prefer more space and privacy, a villa can be an attractive residential option. Available villas can vary in size, layout, location, design, and features.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHY CHOOSE A VILLA IN GHAF WOODS?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Villas can provide more living space and privacy compared with apartment living. They can be suitable for families who want larger rooms, additional outdoor space, and a comfortable residential environment.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods adds a nature-focused setting to this type of living, with green surroundings and open spaces forming an important part of the community.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Before choosing a villa, buyers should compare the available options and consider their lifestyle, budget, and long-term requirements.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS VILLA OPTIONS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Villa options can differ depending on the specific development and property.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3 font-semibold text-forest-900">
                  When comparing Ghaf Woods villas, buyers should consider:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm md:text-base mb-4">
                  <li>Villa size</li>
                  <li>Number of bedrooms</li>
                  <li>Layout</li>
                  <li>Outdoor space</li>
                  <li>Location</li>
                  <li>Views</li>
                  <li>Community facilities</li>
                  <li>Purchase price</li>
                  <li>Payment plan</li>
                  <li>Expected handover</li>
                  <li>Current availability</li>
                </ul>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  These factors can help buyers identify a villa that matches their needs.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  VILLAS WITH GREEN AND FOREST VIEWS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  For buyers who value natural surroundings, a villa with a green or forest-facing view can be an attractive option.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  The actual view depends on the villa's location, orientation, surrounding properties, and available open spaces. Buyers looking specifically for a forest view should confirm the exact location and view of the property before purchasing.
                </p>
              </div>

              {/* Block 5 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  OFF-PLAN VILLAS IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Buyers can also explore off-plan villas in Ghaf Woods.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Off-plan purchases require buyers to understand the development details, payment structure, expected completion, property specifications, and purchase terms.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Payment plans and availability can vary between properties, so it is important to request the latest information for the villa you are considering.
                </p>
              </div>

              {/* Block 6 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  VILLAS FOR FAMILIES
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods villas can be suitable for families looking for a spacious home within a green residential environment.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  When choosing a family villa, consider the number of bedrooms, living areas, outdoor spaces, community facilities, location, and access to important areas of Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  A well-planned villa can provide comfortable space for both everyday family life and entertaining guests.
                </p>
              </div>

              {/* Block 7 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  VILLAS AS AN INVESTMENT
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Villas in Ghaf Woods can also be considered by property investors interested in larger residential properties in Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Investors should look at the purchase price, payment terms, location, property specifications, potential demand, and their own investment goals before choosing a villa.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  The most suitable investment will depend on the individual investor's budget and strategy.
                </p>
              </div>

              {/* Block 8 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  HOW TO CHOOSE THE RIGHT GHAF WOODS VILLA
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Start by deciding what type of villa you need and how much you want to invest.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Consider your preferred number of bedrooms, property size, budget, desired view, location, payment plan, and expected handover.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Once these requirements are clear, you can compare available villas and focus on properties that match your needs.
                </p>
              </div>

              {/* Block 9 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  FIND VILLAS FOR SALE IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  If you are looking for villas for sale in Ghaf Woods, our team can help you explore available properties and compare suitable options. Along with villas, buyers can also explore{" "}
                  <a
                    href="/apartments-for-sale-in-ghaf-woods/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, "", "/apartments-for-sale-in-ghaf-woods/");
                      window.dispatchEvent(new Event("popstate"));
                      window.scrollTo(0, 0);
                    }}
                    className="text-[#6b7d56] hover:underline font-semibold"
                  >
                    Apartments for Sale in Ghaf Woods
                  </a>{" "}
                  as an alternative option depending on their lifestyle, budget, and investment goals.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Whether you are buying a family home or exploring an investment opportunity, you can request current villa and apartment prices, property details, payment plans, and availability to find the right property in Ghaf Woods.
                </p>
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
