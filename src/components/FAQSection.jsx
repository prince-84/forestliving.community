import { useState } from "react";

const faqs = [
  {
    q: "1. What is the average price of property in Ghaf Woods Dubai?",
    a: "The average prices in the provided data range from AED 2,153,236 to AED 6,368,625, depending on the community.",
  },
  {
    q: "2. What is the Ghaf Woods Dubai price and payment plan?",
    a: "The price and payment plan depend on the specific community, property, and unit. Buyers should request the latest details for their preferred property.",
  },
  {
    q: "3. What is the average price of Maravelle Residences?",
    a: "The provided data lists the average price of Maravelle Residences 1 and Maravelle Residences 2 at AED 6,368,625.",
  },
  {
    q: "4. What is the average price of Capria properties in Ghaf Woods?",
    a: "The provided data includes several Capria communities, with average prices ranging from AED 2,624,600 to AED 3,353,105.",
  },
  {
    q: "5. What is the average price of Distrikt properties?",
    a: "The provided data lists Distrikt 1, Distrikt 2, Distrikt 3, and Distrikt 4 with average prices ranging from AED 2,153,236 to AED 2,631,721.",
  },
  {
    q: "6. Are there apartments for sale in Ghaf Woods?",
    a: "Yes, buyers can explore apartment options across different Ghaf Woods communities, subject to current availability.",
  },
  {
    q: "7. Are villas available for sale in Ghaf Woods?",
    a: "Yes, villa options can be explored based on current availability, property type, size, and budget.",
  },
  {
    q: "8. Can I buy an off-plan property in Ghaf Woods?",
    a: "Yes, buyers interested in off-plan properties can explore available developments and review their current prices and payment terms.",
  },
  {
    q: "9. Can the Ghaf Woods property price change?",
    a: "Yes, property prices can change based on availability, market conditions, unit specifications, and other factors.",
  },
  {
    q: "10. How can I get the latest Ghaf Woods payment plan?",
    a: "You can contact the property team with your preferred community or property type to request the latest available payment and purchase details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="bg-white py-16 md:py-20">
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
                  onClick={() => toggle(idx)}
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
  );
}
