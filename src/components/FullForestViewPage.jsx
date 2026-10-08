import { useEffect, useState } from "react";
import bgImage from "../assets/background-image.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Properties from "./Properties";
import RegisterForm from "./RegisterForm";
import { setCanonicalUrl } from "../utils/canonical";

const faqs = [
  {
    q: "1. What is a full forest view in Ghaf Woods Dubai?",
    a: "A full forest view refers to a property positioned to provide a wide view of the green and forest-focused surroundings of Ghaf Woods."
  },
  {
    q: "2. Are there apartments with forest views in Ghaf Woods?",
    a: "Yes, buyers can explore apartments and residences based on their location and available views."
  },
  {
    q: "3. Which properties offer forest views in Ghaf Woods?",
    a: "Forest-facing options can vary by development and unit. The exact view should be confirmed for the specific property."
  },
  {
    q: "4. Is a forest view available from every property in Ghaf Woods?",
    a: "No. Views can vary depending on the property's location, floor, orientation, and surrounding buildings."
  },
  {
    q: "5. How can I find a property with a full forest view?",
    a: "You can request available units specifically with forest-facing or green views and compare their location, layout, and availability."
  },
  {
    q: "6. Are forest view properties good for families?",
    a: "A green and nature-focused environment can be attractive for families looking for a peaceful residential setting."
  },
  {
    q: "7. Can I buy an apartment with a forest view in Ghaf Woods?",
    a: "Yes, subject to current availability and the specific view offered by the unit."
  },
  {
    q: "8. What should I check before buying a forest view property?",
    a: "Check the unit's orientation, floor, windows, balcony, surrounding buildings, and the actual view from the property."
  },
  {
    q: "9. Can I get the current price of a forest view property?",
    a: "Yes. Property prices depend on the specific unit, size, location, and availability."
  },
  {
    q: "10. How can I enquire about Ghaf Woods forest view properties?",
    a: "Register your interest and share your preferred property type and view with the property team."
  }
];

export default function FullForestViewPage({ onBack }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Full Forest View in Ghaf Woods Dubai";
    setCanonicalUrl("https://forestliving.community/full-forest-view-in-ghaf-woods-dubai");

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore properties with a full forest view in Ghaf Woods Dubai. Discover apartments and residences designed around green spaces and a natural forest-living setting."
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
      "Full forest view in Ghaf Woods Dubai, Ghaf Woods forest view, Ghaf Woods full forest view, forest view apartments in Ghaf Woods, Ghaf Woods properties with forest view, Ghaf Woods apartments for sale, Ghaf Woods Dubai properties, forest living in Ghaf Woods"
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
    script.id = "full-forest-view-faq-schema";
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
      const existingScript = document.getElementById("full-forest-view-faq-schema");
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
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </a>
              </div>

              <span className="inline-block bg-[#e0c458] text-black font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                FOREST VIEW RESIDENCES
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] mb-4 text-white font-bold">
                Full Forest View in Ghaf Woods Dubai
              </h1>

              <p className="uppercase text-sm md:text-base tracking-wider font-bold text-white/90 mb-4">
                GHAF WOODS <span className="font-normal normal-case">By Majid Al Futtaim</span>
              </p>

              <p className="text-white/90 leading-relaxed mb-4 max-w-xl text-sm md:text-base font-sans">
                Experience a peaceful lifestyle with a full forest view in{" "}
                <a
                  href="/"
                  className="text-white underline font-semibold"
                >
                  Ghaf Woods Dubai
                </a>
                . Explore modern residences surrounded by greenery, open spaces, and natural views designed for comfortable living.
              </p>

              <p className="text-white/90 leading-relaxed mb-8 max-w-xl text-sm md:text-base font-sans">
                Discover available Ghaf Woods properties and find a home that brings nature closer to your everyday life.
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
                Explore Forest View Properties
              </a>
            </div>

            {/* Right Side Container with Fitted Image */}
            <div className="relative">
              <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/30">
                <img
                  src="/forestliv image/10design_ciliaghafwoods-09-17458.webp"
                  alt="Full Forest View in Ghaf Woods Dubai"
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
                  FULL FOREST VIEW IN GHAF WOODS DUBAI
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  A full forest view in{" "}
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onBack) onBack();
                      else {
                        window.history.pushState({}, "", "/");
                        window.dispatchEvent(new Event("popstate"));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="text-[#6b7d56] hover:underline font-semibold"
                  >
                    Ghaf Woods
                  </a>{" "}
                  Dubai offers a different way to experience residential living in the city. Instead of looking only at buildings and busy streets, residents can enjoy a setting focused on greenery, open spaces, and natural surroundings.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  For buyers searching for a home in Ghaf Woods, the view can be an important part of the property selection process. A property facing greenery or forest areas can create a more peaceful atmosphere and make the home feel connected to nature.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHY CHOOSE A FOREST VIEW PROPERTY?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  A forest-facing home can offer a calm and attractive environment for everyday living. Green surroundings can also add visual appeal to living rooms, balconies, and other areas of the home.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  When comparing properties with forest views, buyers should consider the exact position of the unit, floor level, orientation, balcony, windows, and the view available from the property.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS FOREST VIEW APARTMENTS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Forest view apartments in Ghaf Woods can be an attractive option for buyers who want modern residential living with access to green surroundings.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  The available apartments can differ in size, layout, location, and views. Some units may have different levels of visibility depending on their position within the development.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Before choosing an apartment, it is useful to check the actual unit location and confirm what type of view it offers.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  PROPERTIES WITH GREEN VIEWS IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  The forest-living concept of Ghaf Woods places nature and greenery at the center of the community experience. This makes green views an important feature for buyers who prefer a more natural residential environment.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  A property with a green or forest-facing outlook can be suitable for both homeowners and buyers who value the lifestyle appeal of nature-focused communities.
                </p>
              </div>

              {/* Block 5 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHAT TO CHECK BEFORE BUYING A FOREST VIEW PROPERTY
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  If the view is an important reason for buying a property, do not rely only on general project images. Check the exact property and its location within the development.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3 font-semibold text-forest-900">
                  Consider:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm md:text-base mb-4">
                  <li>Direction of the property</li>
                  <li>Floor level</li>
                  <li>Balcony position</li>
                  <li>Window views</li>
                  <li>Distance from green areas</li>
                  <li>Surrounding buildings</li>
                  <li>Property layout</li>
                  <li>Current availability</li>
                </ul>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  These details can help you understand the actual view before making a purchase decision.
                </p>
              </div>

              {/* Block 6 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  FOREST LIVING AT GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods is planned around a nature-focused residential concept. Green surroundings and open spaces form an important part of the community experience.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  For people who want a quieter atmosphere while remaining in Dubai, a forest-oriented residential environment can provide a different lifestyle compared with traditional urban developments.
                </p>
              </div>

              {/* Block 7 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  FIND A FULL FOREST VIEW IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Finding a property with a full forest view in Ghaf Woods Dubai depends on the exact location, unit, floor, and current availability. Buyers should also review the{" "}
                  <a
                    href="/ghaf-woods-dubai-price-and-payment-plan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6b7d56] hover:underline font-semibold"
                  >
                    Ghaf Woods Dubai price and payment plan
                  </a>{" "}
                  to understand the total property cost and available payment options before making a decision.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  If you are specifically looking for a forest-facing property, share your preferred property type and requirements with our team. We can help you explore available options, compare suitable units, and check the latest property prices, payment plans, and details.
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
