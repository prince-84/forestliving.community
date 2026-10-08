import { useEffect, useState } from "react";
import bgImage from "../assets/background-image.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Properties from "./Properties";
import RegisterForm from "./RegisterForm";
import { setCanonicalUrl } from "../utils/canonical";

const averagePrices = [
  { community: "Maravelle Residences 2", price: "6,368,625" },
  { community: "Maravelle Residences 1", price: "6,368,625" },
  { community: "Capria East 4", price: "3,353,105" },
  { community: "Capria West 1", price: "2,875,551" },
  { community: "Capria East 3", price: "2,811,375" },
  { community: "Distrikt 2", price: "2,631,721" },
  { community: "Capria West 6", price: "2,624,600" },
  { community: "Distrikt 3", price: "2,492,277" },
  { community: "Distrikt 1", price: "2,405,299" },
  { community: "Distrikt 4", price: "2,153,236" },
];

const faqs = [
  {
    q: "1. What is the average price of property in Ghaf Woods Dubai?",
    a: "The average prices in the provided data range from AED 2,153,236 to AED 6,368,625, depending on the community."
  },
  {
    q: "2. What is the Ghaf Woods Dubai price and payment plan?",
    a: "The price and payment plan depend on the specific community, property, and unit. Buyers should request the latest details for their preferred property."
  },
  {
    q: "3. What is the average price of Maravelle Residences?",
    a: "The provided data lists the average price of Maravelle Residences 1 and Maravelle Residences 2 at AED 6,368,625."
  },
  {
    q: "4. What is the average price of Capria properties in Ghaf Woods?",
    a: "The provided data includes several Capria communities, with average prices ranging from AED 2,624,600 to AED 3,353,105."
  },
  {
    q: "5. What is the average price of Distrikt properties?",
    a: "The provided data lists Distrikt 1, Distrikt 2, Distrikt 3, and Distrikt 4 with average prices ranging from AED 2,153,236 to AED 2,631,721."
  },
  {
    q: "6. Are there apartments for sale in Ghaf Woods?",
    a: "Yes, buyers can explore apartment options across different Ghaf Woods communities, subject to current availability."
  },
  {
    q: "7. Are villas available for sale in Ghaf Woods?",
    a: "Yes, villa options can be explored based on current availability, property type, size, and budget."
  },
  {
    q: "8. Can I buy an off-plan property in Ghaf Woods?",
    a: "Yes, buyers interested in off-plan properties can explore available developments and review their current prices and payment terms."
  },
  {
    q: "9. Can the Ghaf Woods property price change?",
    a: "Yes, property prices can change based on availability, market conditions, unit specifications, and other factors."
  },
  {
    q: "10. How can I get the latest Ghaf Woods payment plan?",
    a: "You can contact the property team with your preferred community or property type to request the latest available payment and purchase details."
  }
];

export default function PricePaymentPlanPage({ onBack }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Ghaf Woods Dubai Price and Payment Plan";
    setCanonicalUrl("https://forestliving.community/ghaf-woods-Dubai-price-and-payment-plan");

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore Ghaf Woods Dubai price and payment plan options, property prices, and available apartments and villas in this forest-living community."
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
      "Ghaf Woods Dubai price and payment plan, Ghaf Woods Dubai price, Ghaf Woods payment plan, Ghaf Woods properties for sale, Ghaf Woods apartments, Ghaf Woods villas, Ghaf Woods off-plan properties"
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
    script.id = "price-payment-plan-faq-schema";
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
      const existingScript = document.getElementById("price-payment-plan-faq-schema");
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
                PRICING &amp; PAYMENT GUIDE
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] mb-4 text-white font-bold">
                Ghaf Woods Dubai Price and Payment Plan
              </h1>

              <p className="uppercase text-sm md:text-base tracking-wider font-bold text-white/90 mb-4">
                GHAF WOODS <span className="font-normal normal-case">By Majid Al Futtaim</span>
              </p>

              <p className="text-white/90 leading-relaxed mb-8 max-w-xl text-sm md:text-base font-sans">
                Explore Ghaf Woods Dubai price and payment plan options for apartments, villas, and other residential properties in this forest-living community by Majid Al Futtaim. Ghaf Woods combines modern homes with green surroundings, open spaces, and a peaceful lifestyle in Dubai. Whether you are looking for a new home or an off-plan investment, compare communities, property prices, and available options to find a property that fits your needs.
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
                Explore Prices &amp; Payment Plans
              </a>
            </div>

            {/* Right Side Container with Fitted Image */}
            <div className="relative">
              <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/30">
                <img
                  src="/forestliv image/20240920044502587574306o.webp"
                  alt="Ghaf Woods Dubai Price and Payment Plan"
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

        {/* 3. THIRD SECTION — Table: Average Property Prices in Ghaf Woods */}
        <section className="py-16 md:py-24 bg-white border-b border-sand/60">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            
            <div className="mb-10">
              <span className="inline-block bg-[#e0c458] text-black font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                PRICING DATA
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-forest-900 mb-3">
                Average Property Prices in Ghaf Woods
              </h2>
              <p className="text-forest-600 text-sm md:text-base max-w-3xl">
                Compare community average prices across Ghaf Woods developments in AED.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-sand shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-forest-900 text-white text-xs sm:text-sm uppercase tracking-wider font-semibold">
                    <th className="py-4 px-6 md:px-8">Community</th>
                    <th className="py-4 px-6 md:px-8 text-right">Average Price (AED)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/70 text-sm md:text-base font-sans text-forest-800">
                  {averagePrices.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white hover:bg-cream/40" : "bg-cream/30 hover:bg-cream/60"}
                    >
                      <td className="py-4 px-6 md:px-8 font-medium text-forest-900">{row.community}</td>
                      <td className="py-4 px-6 md:px-8 text-right font-bold text-[#647451]">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* 4. FOURTH SECTION — LONG CONTENT (Formatted exactly like ContentSection.jsx) */}
        <section className="bg-white py-16 md:py-24 border-b border-sand/60">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-10">
              
              {/* Block 1 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS PAYMENT PLAN
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  The Ghaf Woods payment plan can vary depending on the project and selected property. A payment plan helps buyers understand how the property price is structured throughout the purchase process.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Before buying an off-plan property, buyers should check the latest payment schedule, property price, expected completion, and other purchase terms for the selected unit.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  GHAF WOODS PROPERTIES FOR SALE
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
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
                    className="text-[#6b7d56] hover:underline font-semibold"
                  >
                    Ghaf Woods
                  </a>{" "}
                  offers different residential options for buyers looking for a modern home in a green community. Available properties can include apartments, villas, and other residential formats across different developments.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Property prices and availability can change, so buyers should always check the latest details before making a purchase decision.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  WHY INVEST IN GHAF WOODS?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Ghaf Woods is designed around a forest-living concept, combining residential communities with green spaces and modern amenities. Its range of property options makes it suitable for both homebuyers and investors looking for residential property in Dubai.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Investors should compare the property price, payment plan, location, property type, and their long-term investment goals before choosing a unit.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">
                  FIND YOUR PROPERTY IN GHAF WOODS
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                  Whether you are searching for an apartment, villa, or off-plan property, comparing different communities can help you find an option that matches your budget and requirements.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Get the latest information about{" "}
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
                    className="text-[#6b7d56] hover:underline font-semibold"
                  >
                    Ghaf Woods Dubai
                  </a>{" "}
                  price and payment plan, available properties, and current units from our property team.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. FIFTH SECTION — FAQ (Formated exactly like FAQSection.jsx) */}
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

        {/* 6. SIXTH SECTION — FORM */}
        <div>
          <RegisterForm />
        </div>

      </div>

      <Footer />
    </div>
  );
}
