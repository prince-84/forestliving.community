import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function TermsConditions({ onBack }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Terms & Conditions";

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Read our Terms & Conditions to understand the rules, responsibilities, and terms of using our website and accessing property information."
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute("content", prevDesc);
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-cream text-forest-900 flex flex-col justify-between">
      <div>
        <Header />

        <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {/* Breadcrumb / Back Button */}
          <div className="mb-8">
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
              className="inline-flex items-center gap-2 text-sm text-[#7d8f67] hover:text-[#5a6b47] font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-forest-900 mb-3 border-b border-sand pb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-forest-600 mb-8 font-medium">
              Last Updated: September 2026
            </p>

            <div className="space-y-8 text-forest-800 text-sm md:text-base leading-relaxed">
              {/* Section 1 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  1. Agreement to Terms
                </h2>
                <p className="text-forest-700">
                  By accessing or using <strong>forestliving.community</strong>, you agree to these Terms &amp; Conditions. If you do not agree with any part of these terms, please stop using the website.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  2. Website Use
                </h2>
                <p className="text-forest-700">
                  This website provides general information about real estate, properties, projects, communities, and related services. You must use this website lawfully and responsibly. Unauthorized, fraudulent, harmful, or abusive use of the website is strictly prohibited.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  3. Property Information
                </h2>
                <p className="text-forest-700">
                  Property listings, prices, layouts, specifications, payment plans, availability, locations, and handover dates are provided for general reference only. Property information may change without notice and does not constitute a binding offer, agreement, or contract. Users should verify all property details with the relevant developer, seller, or authorized representative before making any commitment.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  4. No Professional Advice
                </h2>
                <p className="text-forest-700">
                  The information provided on <strong>forestliving.community</strong> does not constitute legal, financial, tax, investment, or immigration advice. You should conduct your own research and consult qualified professionals before making any property or investment decision.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  5. No Guarantee of Returns
                </h2>
                <p className="text-forest-700">
                  We do not guarantee future property values, rental income, capital appreciation, or investment returns. Past performance of a property, project, community, or developer does not guarantee future results.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  6. User Responsibilities
                </h2>
                <p className="text-forest-700">
                  You are responsible for providing accurate and complete information when submitting enquiries through this website. You must not provide false information, impersonate another person, or misuse the website or its services.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  7. Intellectual Property
                </h2>
                <p className="text-forest-700">
                  All text, logos, graphics, images, videos, designs, and other content available on <strong>forestliving.community</strong> are owned by the website owner or its respective licensors, unless otherwise stated. You may not copy, reproduce, distribute, modify, or use website content for commercial purposes without prior written permission.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  8. Third-Party Links
                </h2>
                <p className="text-forest-700">
                  This website may contain links to third-party websites, including property developers, real estate companies, service providers, and other websites. These links are provided for convenience only. We do not control, endorse, or take responsibility for the content, availability, security, or privacy practices of third-party websites.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  9. Limitation of Liability
                </h2>
                <p className="text-forest-700">
                  We take reasonable steps to provide accurate and up-to-date information, but we do not guarantee that all information on the website is complete, accurate, or current. We are not responsible for any losses or damages arising from reliance on information provided on this website. Users should independently verify property prices, availability, specifications, payment plans, project details, and other relevant information before making a decision.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  10. Governing Law
                </h2>
                <p className="text-forest-700">
                  These Terms &amp; Conditions shall be governed by the applicable laws and regulations of the jurisdiction in which the website owner operates. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the competent courts of the applicable jurisdiction.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
