import { useEffect, useState } from "react";
import bgImage from "../assets/background-image.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Properties from "./Properties";
import RegisterForm from "./RegisterForm";

const faqs = [
  {
    q: "1. What is a forest and park view in Ghaf Woods?",
    a: "It refers to properties that overlook green, forest, landscaped, or park areas within or around the Ghaf Woods community."
  },
  {
    q: "2. Are there apartments with park views in Ghaf Woods?",
    a: "Available views depend on the individual property and its location. Buyers can enquire about currently available units with park views."
  },
  {
    q: "3. Are forest view properties available in Ghaf Woods?",
    a: "Yes, buyers can explore properties based on their preferred forest or green outlook, subject to current availability."
  },
  {
    q: "4. Does every property in Ghaf Woods have a forest or park view?",
    a: "No. Views vary depending on the building, unit, floor, orientation, and surrounding properties."
  },
  {
    q: "5. Which is better, a forest view or park view?",
    a: "It depends on personal preference. Some buyers prefer natural forest surroundings, while others may prefer landscaped park views."
  },
  {
    q: "6. What should I check when buying a park view property?",
    a: "Check the exact unit location, floor, orientation, balcony, windows, and surrounding buildings."
  },
  {
    q: "7. Can I buy a Ghaf Woods apartment with a green view?",
    a: "Yes, subject to current availability and the specific view offered by the unit."
  },
  {
    q: "8. Can forest and park view properties be used as investments?",
    a: "They can be considered as part of a property investment strategy, but buyers should evaluate the full property, price, location, and investment objectives."
  },
  {
    q: "9. How can I check the view of a specific property?",
    a: "Ask for the exact unit location, floor plan, orientation, and available property visuals before purchasing."
  },
  {
    q: "10. How can I enquire about forest and park view properties?",
    a: "Register your interest and share your preferred property type and view with the property team."
  }
];

export default function ForestParkViewPage({ onBack }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Forest and Park View in Ghaf Woods Dubai";

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore forest and park view properties in Ghaf Woods Dubai. Discover modern apartments and residences surrounded by green spaces and natural views."
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
      "Forest and park view in Ghaf Woods Dubai, Ghaf Woods forest and park view, Ghaf Woods park view, forest view properties in Ghaf Woods, park view apartments in Ghaf Woods, Ghaf Woods apartments for sale, Ghaf Woods properties for sale, Ghaf Woods Dubai properties"
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
    script.id = "forest-park-view-faq-schema";
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
      const existingScript = document.getElementById("forest-park-view-faq-schema");
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
                PARK &amp; FOREST VIEWS
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] mb-4 text-white font-bold">
                Forest and Park View in Ghaf Woods Dubai
              </h1>
              
              <p className="uppercase text-sm md:text-base tracking-wider font-bold text-white/90 mb-4">
                GHAF WOODS <span className="font-normal normal-case">By Majid Al Futtaim</span>
              </p>

              <p className="text-white/90 leading-relaxed mb-4 max-w-xl text-sm md:text-base font-sans">
                Discover a more natural way of living with a forest and park view in{" "}
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
                </a>
                . Explore modern residences surrounded by greenery, open spaces, and landscaped areas designed to bring nature closer to everyday life.
              </p>

              <p className="text-white/90 leading-relaxed mb-8 max-w-xl text-sm md:text-base font-sans">
                Find available Ghaf Woods properties and explore homes that match your preferred view, lifestyle, and requirements.
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
                Explore Forest &amp; Park View Properties
              </a>
            </div>

            {/* Right Side Container with Fitted Image */}
            <div className="relative">
              <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/30">
                <img
                  src="/forestliv image/75914d231374601.68884b7d7e4c2.webp"
                  alt="Forest and Park View in Ghaf Woods Dubai"
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
                  FOREST AND PARK VIEW IN GHAF WOODS DUBAI
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  A forest and park view in Ghaf Woods Dubai can offer a peaceful residential setting surrounded by greenery and open spaces. For buyers who prefer natural surroundings, choosing a property facing a forest or park can add to the overall living experience.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Ghaf Woods is designed around a forest-living concept, making green spaces an important part of the community environment. Buyers can explore different properties and compare their locations, layouts, and available views before choosing a home.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHY CHOOSE A FOREST AND PARK VIEW?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  A home overlooking greenery can create a more open and relaxing atmosphere. Instead of facing only surrounding buildings, residents may have views of trees, landscaped areas, and open spaces depending on the location of their property.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  For many buyers, the view is an important factor when selecting a new home. It can influence the feel of living spaces, balconies, bedrooms, and other areas of the property.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS PARK VIEW APARTMENTS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Park view apartments in Ghaf Woods can be an attractive option for buyers who want modern residential living with a green outlook.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  The actual view can differ from one unit to another. Floor level, building position, orientation, windows, balconies, and surrounding structures can all affect what residents see from their property.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  For this reason, buyers should always check the exact unit before making a decision.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS PROPERTIES WITH GREEN VIEWS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  The nature-focused setting of{" "}
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
                  </a>{" "}
                  makes green views an important feature for people looking for a different type of residential environment in Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  A property facing a forest, park, or landscaped area can provide a visually pleasant setting and a stronger connection with the surrounding outdoor spaces.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Whether you are buying a home or considering an investment, it is useful to compare properties based on both their price and location within the community.
                </p>
              </div>

              {/* Block 5 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  FOREST VIEW VS PARK VIEW
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Forest and park views can offer different visual experiences.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  A forest view may provide a stronger sense of natural surroundings, while a park view can offer an outlook toward landscaped open areas and community spaces.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  The best option depends on your personal preference. Buyers should review the exact location and available view of each property before selecting a unit.
                </p>
              </div>

              {/* Block 6 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHAT SHOULD YOU CHECK BEFORE BUYING?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  If the view is one of your main reasons for choosing a Ghaf Woods property, consider the following:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm md:text-base mb-4">
                  <li>Exact property location</li>
                  <li>Floor level</li>
                  <li>Building orientation</li>
                  <li>Window direction</li>
                  <li>Balcony position</li>
                  <li>Distance from green spaces</li>
                  <li>Nearby buildings</li>
                  <li>Current availability</li>
                </ul>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  These factors can help you understand the actual view offered by a specific property.
                </p>
              </div>

              {/* Block 7 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  FIND FOREST AND PARK VIEW PROPERTIES IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Finding a forest and park view in Ghaf Woods Dubai depends on the available units and their exact location within the development. For buyers seeking a more immersive natural setting, properties offering a{" "}
                  <a
                    href="/full-forest-view-in-ghaf-woods-dubai/"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname !== "/full-forest-view-in-ghaf-woods-dubai/") {
                        window.history.pushState({}, "", "/full-forest-view-in-ghaf-woods-dubai/");
                      }
                      window.location.hash = "#full-forest-view";
                    }}
                    className="text-[#6b7d56] hover:underline font-semibold"
                  >
                    Full forest view in Ghaf Woods Dubai
                  </a>{" "}
                  can be explored based on current availability.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  If you are looking for a specific view, share your preferred property type and requirements with our team. We can help you explore suitable properties and provide the latest available information.
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
