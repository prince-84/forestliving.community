import { useEffect, useState } from "react";
import bgImage from "../assets/background-image.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Properties from "./Properties";
import RegisterForm from "./RegisterForm";
import { setCanonicalUrl } from "../utils/canonical";

const faqs = [
  {
    q: "1. Are there off-plan properties for sale in Ghaf Woods?",
    a: "Yes, buyers can explore available off-plan residential properties in Ghaf Woods, subject to current availability."
  },
  {
    q: "2. What types of off-plan properties are available in Ghaf Woods?",
    a: "Available options can include apartments, villas, and other residential properties across different developments."
  },
  {
    q: "3. Is Ghaf Woods suitable for off-plan investment?",
    a: "Ghaf Woods can be considered by buyers and investors looking for residential property opportunities in Dubai."
  },
  {
    q: "4. What should I check before buying an off-plan property?",
    a: "Check the property price, payment plan, unit details, development information, expected handover, and current availability."
  },
  {
    q: "5. Are apartments available in Ghaf Woods?",
    a: "Yes, buyers can explore apartment options across different Ghaf Woods communities."
  },
  {
    q: "6. Are villas available in Ghaf Woods?",
    a: "Yes, villa options can also be explored based on current development and property availability."
  },
  {
    q: "7. Do Ghaf Woods properties have payment plans?",
    a: "Payment plans can vary by development and property. Buyers should request the latest payment details for their selected unit."
  },
  {
    q: "8. Can I buy an off-plan property as an investment?",
    a: "Yes, buyers can consider off-plan properties for investment after reviewing the property details and their own investment objectives."
  },
  {
    q: "9. How can I find the right off-plan property in Ghaf Woods?",
    a: "Compare available properties based on your budget, property type, location, size, payment plan, and preferred features."
  },
  {
    q: "10. How can I enquire about Ghaf Woods off-plan properties?",
    a: "Register your interest and share your requirements with the property team to explore available options."
  }
];

export default function OffPlanPropertiesPage({ onBack }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Off-Plan Properties for Sale in Ghaf Woods | Dubai";
    setCanonicalUrl("https://forestliving.community/off-plan-properties-for-sale-in-ghaf-woods");

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore off-plan properties for sale in Ghaf Woods Dubai. Discover apartments, villas, modern residences, and investment opportunities in a nature-focused community."
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
      "Off-plan properties for sale in Ghaf Woods, Ghaf Woods off-plan properties, off-plan property in Ghaf Woods, Ghaf Woods properties for sale, Ghaf Woods apartments for sale, Ghaf Woods villas for sale, Ghaf Woods Dubai properties, Ghaf Woods investment"
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
    script.id = "off-plan-properties-faq-schema";
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
      const existingScript = document.getElementById("off-plan-properties-faq-schema");
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
                OFF-PLAN DEVELOPMENT
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] mb-4 text-white font-bold">
                Off-Plan Properties for Sale in Ghaf Woods
              </h1>
              
              <p className="uppercase text-sm md:text-base tracking-wider font-bold text-white/90 mb-4">
                GHAF WOODS <span className="font-normal normal-case">By Majid Al Futtaim</span>
              </p>

              <p className="text-white/90 leading-relaxed mb-4 max-w-xl text-sm md:text-base font-sans">
                Explore off-plan properties for sale in{" "}
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
                and discover modern apartments, villas, and residences in a nature-focused Dubai community. Ghaf Woods offers buyers different property options surrounded by green spaces and a forest-living environment.
              </p>

              <p className="text-white/90 leading-relaxed mb-8 max-w-xl text-sm md:text-base font-sans">
                Find available properties and compare their location, type, price, and payment options to choose a home that matches your requirements.
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
                Register Now
              </a>
            </div>

            {/* Right Side Container with Fitted Image */}
            <div className="relative">
              <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/30">
                <img
                  src="/forestliv image/Ghaf_Woods_Experience_Centre_aoe.webp"
                  alt="Off-Plan Properties for Sale in Ghaf Woods"
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
                  OFF-PLAN PROPERTIES FOR SALE IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Off-plan properties for sale in Ghaf Woods offer buyers an opportunity to explore modern residential properties within a nature-focused Dubai community.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods includes different residential developments and property types, allowing buyers to compare apartments, villas, and other residences according to their budget and requirements.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Before choosing an off-plan property, buyers should understand the development, property type, payment terms, expected handover, and other purchase details.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHY BUY AN OFF-PLAN PROPERTY IN GHAF WOODS?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Off-plan properties can be attractive to buyers who want to purchase a property during its development stage.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods is designed around a forest-living concept, combining residential communities with green spaces and outdoor areas. This can appeal to buyers looking for a modern home in a different type of residential environment.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  However, buyers should always review the details of the specific property before making a purchase decision.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS APARTMENTS FOR SALE
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods apartments for sale provide an option for buyers looking for modern residential living.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Apartments can vary in size, layout, floor, location, and view. When comparing available off-plan apartments, buyers should look at the property specifications and payment terms alongside the purchase price.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Choosing the right apartment depends on your budget, lifestyle requirements, and long-term plans.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS VILLAS FOR SALE
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Buyers looking for more space can explore Ghaf Woods villas for sale.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Villa options can vary by size, design, layout, and location. Buyers should compare available villas and review the current purchase terms before selecting a property.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  For families, factors such as living space, outdoor areas, community environment, and location can also be important when choosing a villa.
                </p>
              </div>

              {/* Block 5 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS PAYMENT PLANS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  The payment plan is an important part of buying an off-plan property.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Payment structures can vary depending on the development and selected unit. Buyers should confirm the latest payment schedule and understand when each payment is due.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  It is also useful to consider the full purchase commitment rather than looking only at the initial payment.
                </p>
              </div>

              {/* Block 6 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHAT TO CHECK BEFORE BUYING OFF-PLAN
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Before purchasing an off-plan property in Ghaf Woods, buyers should review:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm md:text-base mb-4">
                  <li>Property type</li>
                  <li>Property size</li>
                  <li>Unit layout</li>
                  <li>Purchase price</li>
                  <li>Payment plan</li>
                  <li>Expected handover</li>
                  <li>Development details</li>
                  <li>Property location</li>
                  <li>Available views</li>
                  <li>Current availability</li>
                </ul>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Checking these details can help buyers make a more informed property decision.
                </p>
              </div>

              {/* Block 7 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  OFF-PLAN INVESTMENT IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods can also be considered by buyers looking for an off-plan investment opportunity in Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Investors should compare properties based on their budget, preferred property type, location, payment structure, and long-term investment objectives.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  There is no single property that suits every investor, so comparing available options is an important part of the buying process.
                </p>
              </div>

              {/* Block 8 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  FIND OFF-PLAN PROPERTIES IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Finding the right off-plan property in Ghaf Woods starts with understanding your requirements and investment goals.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Whether you are looking for an apartment, villa, or another residential property, you can explore available developments and compare their current prices, payment terms, and property details. Buyers and investors can also enquire about an{" "}
                  <a
                    href="/investor-deal-ghaf-woods"
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, "", "/investor-deal-ghaf-woods");
                      window.dispatchEvent(new Event("popstate"));
                      window.scrollTo(0, 0);
                    }}
                    className="text-[#6b7d56] hover:underline font-semibold"
                  >
                    Investor deal Ghaf Woods
                  </a>{" "}
                  to explore suitable opportunities based on their budget and investment plans.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Register your interest to explore suitable off-plan properties for sale in Ghaf Woods and find an option that matches your requirements.
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
