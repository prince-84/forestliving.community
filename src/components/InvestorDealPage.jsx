import { useEffect, useState } from "react";
import bgImage from "../assets/background-image.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Properties from "./Properties";
import RegisterForm from "./RegisterForm";

const faqs = [
  {
    q: "1. Is Ghaf Woods suitable for property investors?",
    a: "Ghaf Woods can be considered by investors looking for residential property opportunities in Dubai."
  },
  {
    q: "2. What is an investor deal in Ghaf Woods?",
    a: "An investor deal refers to a property opportunity that may suit an investor based on factors such as price, payment terms, property type, and investment objectives."
  },
  {
    q: "3. Can I invest in off-plan property in Ghaf Woods?",
    a: "Yes, buyers can explore available off-plan properties and review their current prices and payment plans."
  },
  {
    q: "4. What types of properties can investors find in Ghaf Woods?",
    a: "Investors can explore different residential options, including apartments, villas, and other modern residences."
  },
  {
    q: "5. What should I check before buying an investment property?",
    a: "Check the property price, payment plan, unit details, location, expected handover, availability, and your long-term investment goals."
  },
  {
    q: "6. Are Ghaf Woods apartments suitable for investment?",
    a: "Apartments can be considered as an investment option, depending on the specific property, price, location, and investment strategy."
  },
  {
    q: "7. Can I invest in Ghaf Woods villas?",
    a: "Yes, investors can explore available villas and compare them based on price, size, location, and investment requirements."
  },
  {
    q: "8. What is the best property deal in Ghaf Woods?",
    a: "There is no single best deal for every investor. The right property depends on your budget, goals, preferred property type, and investment timeline."
  },
  {
    q: "9. How can I find the latest Ghaf Woods investor deals?",
    a: "You can register your interest and request current property options, prices, and payment details from the property team."
  },
  {
    q: "10. Should I check the payment plan before investing?",
    a: "Yes. Understanding the payment plan is important when assessing the total purchase commitment and planning your investment."
  }
];

export default function InvestorDealPage({ onBack }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Investor Deal Ghaf Woods | Investment Opportunities in Dubai";

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore investor deal opportunities in Ghaf Woods Dubai. Discover off-plan properties, modern residences and investment options in a nature-focused community."
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
      "Investor deal Ghaf Woods, Ghaf Woods investment, Ghaf Woods investor deal, Ghaf Woods investment opportunity, Ghaf Woods properties for investment, Ghaf Woods off-plan investment, Ghaf Woods properties for sale, Ghaf Woods Dubai investment"
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
    script.id = "investor-deal-faq-schema";
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
      const existingScript = document.getElementById("investor-deal-faq-schema");
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
                INVESTMENT OPPORTUNITIES
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] mb-4 text-white font-bold">
                Investor Deal Ghaf Woods
              </h1>

              <p className="uppercase text-sm md:text-base tracking-wider font-bold text-white/90 mb-4">
                GHAF WOODS <span className="font-normal normal-case">By Majid Al Futtaim</span>
              </p>

              <p className="text-white/90 leading-relaxed mb-4 max-w-xl text-sm md:text-base font-sans">
                Explore an investor deal in{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onBack) onBack();
                    else window.location.hash = "";
                  }}
                  className="text-white underline font-semibold"
                >
                  Ghaf Woods
                </a>{" "}
                and discover modern residential properties in a nature-focused Dubai community. Ghaf Woods offers different property options for investors looking to explore off-plan homes and long-term property opportunities.
              </p>

              <p className="text-white/90 leading-relaxed mb-8 max-w-xl text-sm md:text-base font-sans">
                Compare available properties, locations, layouts, and current purchase options to find an investment that matches your goals.
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
                Explore Investor Deals
              </a>
            </div>

            {/* Right Side Container with Fitted Image */}
            <div className="relative">
              <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/30">
                <img
                  src="/forestliv image/i.webp"
                  alt="Investor Deal Ghaf Woods"
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
                  GHAF WOODS INVESTMENT OPPORTUNITY
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  An investor deal in Ghaf Woods can be considered by buyers looking for residential property in Dubai with a focus on modern living and nature-oriented surroundings.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods offers different residential communities and property types, allowing investors to compare options based on their budget, preferred property, location, and long-term plans.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Before selecting an investment property, it is important to understand the specific project, unit, price, payment terms, and expected handover.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHY CONSIDER INVESTING IN GHAF WOODS?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods is designed around a forest-living concept, with residential communities planned alongside green spaces and outdoor areas.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  For investors, this type of community can offer a different residential proposition compared with traditional urban developments. However, every property investment should be assessed based on the individual property and the investor's objectives.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS OFF-PLAN INVESTMENT
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods off-plan investment can be an option for buyers who want to purchase a property during its development stage.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  When considering an off-plan property, investors should review the developer, project details, payment structure, expected completion, property specifications, and current market conditions.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  It is also important to confirm the latest information for the specific unit before making a purchase.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHAT MAKES A GOOD INVESTOR DEAL?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  A good property deal depends on more than the advertised price. Investors should compare several factors before choosing a property.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3 font-semibold text-forest-900">
                  Important factors include:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm md:text-base mb-4">
                  <li>Property purchase price</li>
                  <li>Payment plan</li>
                  <li>Property type</li>
                  <li>Unit size</li>
                  <li>Location</li>
                  <li>Community features</li>
                  <li>Expected handover</li>
                  <li>Current availability</li>
                  <li>Potential rental demand</li>
                  <li>Long-term investment goals</li>
                </ul>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Looking at these factors together can help investors make a more informed decision.
                </p>
              </div>

              {/* Block 5 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  APARTMENTS AS AN INVESTMENT IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods apartments can be considered by investors looking for modern residential properties in Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Different apartments can vary in size, layout, location, views, and price. Investors should compare the available units and select a property that fits their investment strategy.
                </p>
              </div>

              {/* Block 6 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  VILLAS AS AN INVESTMENT IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  For investors interested in larger residential properties, Ghaf Woods villas can provide another option to explore.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Villa prices and investment potential can vary depending on the size, location, design, and specific property. Investors should review the current property details and compare them with their goals before making a decision.
                </p>
              </div>

              {/* Block 7 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  HOW TO FIND AN INVESTOR DEAL IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Finding the right investor deal in Ghaf Woods starts with defining your investment requirements.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Decide your preferred budget, property type, payment structure, and investment timeline. You can then compare suitable properties and review their current availability and purchase terms.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Our team can help you explore available Ghaf Woods properties and provide current information for the units that match your requirements.
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
