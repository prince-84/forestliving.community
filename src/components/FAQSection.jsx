import { useState } from "react";

const faqs = [
  {
    q: "1. What is Ghaf Woods in Dubai?",
    a: "Ghaf Woods is a forest-inspired residential community in Dubai developed by Majid Al Futtaim. It is designed around greenery, nature, wellness, and modern living, offering apartments surrounded by landscaped spaces and woodland-inspired environments.",
  },
  {
    q: "2. Where is Ghaf Woods located in Dubai?",
    a: "Ghaf Woods is located in Dubailand, Dubai. The community offers access to major roads and key areas of the city, making it convenient for residents to reach different parts of Dubai.",
  },
  {
    q: "3. Who is the developer of Ghaf Woods Dubai?",
    a: "Ghaf Woods is developed by Majid Al Futtaim, a major developer known for residential, retail, and lifestyle projects across the region.",
  },
  {
    q: "4. What types of properties are available in Ghaf Woods?",
    a: "Ghaf Woods offers modern apartments, including different layouts designed for individuals, couples, and families. Specific property types and configurations vary by residential project within the community.",
  },
  {
    q: "5. What is the starting price of properties in Ghaf Woods Dubai?",
    a: "Property prices in Ghaf Woods vary depending on the project, apartment type, size, and location within the community. Buyers should check the latest available listings for current starting prices.",
  },
  {
    q: "6. Is Ghaf Woods a good place to invest in Dubai?",
    a: "Ghaf Woods offers a nature-focused residential concept in Dubai with modern apartments, lifestyle amenities, and a location within Dubailand. Its investment potential depends on factors such as purchase price, rental demand, payment plan, and future market conditions.",
  },
  {
    q: "7. What amenities are available at Ghaf Woods?",
    a: "Ghaf Woods is planned with a range of lifestyle and wellness-focused amenities, including landscaped green spaces, walking areas, recreational facilities, and community spaces designed around forest living.",
  },
  {
    q: "8. What makes Ghaf Woods a forest living community in Dubai?",
    a: "Ghaf Woods focuses on bringing nature into everyday living through extensive greenery, landscaped areas, walking trails, and woodland-inspired surroundings. The community is designed to provide a quieter and more nature-focused residential environment.",
  },
  {
    q: "9. How can I buy a property in Ghaf Woods Dubai?",
    a: "You can buy a property in Ghaf Woods by selecting a suitable apartment, checking its availability and payment plan, and completing the required booking and purchase procedures through the developer or a registered real estate agency.",
  },
  {
    q: "10. What are the payment plans for Ghaf Woods properties?",
    a: "Payment plans for Ghaf Woods properties depend on the specific project and launch. They may include installments during construction and payments linked to the property's completion or handover. Buyers should confirm the latest payment plan for their selected property.",
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
