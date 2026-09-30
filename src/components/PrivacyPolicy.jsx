import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PrivacyPolicy({ onBack }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Privacy Policy";

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you explore forest living properties on our website."
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
                else window.location.hash = "";
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
              Privacy Policy
            </h1>
            <p className="text-xs text-forest-600 mb-8 font-medium">
              Last Updated: September 2026
            </p>

            <div className="space-y-8 text-forest-800 text-sm md:text-base leading-relaxed">
              {/* Section 1 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  1. Information Collection
                </h2>
                <p className="mb-4">
                  We collect information when you interact with <strong>forestliving.community</strong> or contact us regarding properties, projects, communities, and real estate opportunities.
                </p>
                <p className="font-semibold mb-2">You may provide information when you:</p>
                <ul className="list-disc pl-6 space-y-1.5 mb-4 text-forest-700">
                  <li>Submit an enquiry through our website.</li>
                  <li>Request information about properties, projects, or real estate services.</li>
                  <li>Contact us through phone, email, WhatsApp, social media, or other digital channels.</li>
                  <li>Subscribe to property updates, newsletters, or other communications.</li>
                </ul>

                <h3 className="font-display text-base font-bold text-forest-900 mb-2">What We Collect</h3>
                <div className="space-y-2 text-forest-700">
                  <p><strong>Contact Details:</strong> Name, email address, phone number, and other contact details you choose to provide.</p>
                  <p><strong>Property Preferences:</strong> Your property requirements, preferred locations, property type, budget, and other information related to your property search.</p>
                  <p><strong>Transaction Information:</strong> Information required to assist with property enquiries, purchases, or related real estate services where applicable.</p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  2. How We Use Information
                </h2>
                <p className="mb-3">We use the information we collect for the following purposes:</p>
                <ul className="space-y-2 text-forest-700">
                  <li><strong>Service Delivery:</strong> To understand your requirements and provide relevant property information and real estate assistance.</li>
                  <li><strong>Communication:</strong> To contact you regarding property enquiries, available projects, property updates, and other information you have requested.</li>
                  <li><strong>Property Enquiries:</strong> To help facilitate communication regarding properties, developers, projects, viewings, and related services.</li>
                  <li><strong>Improvement:</strong> To improve our website, services, content, and overall user experience.</li>
                  <li><strong>Compliance:</strong> To meet applicable legal, regulatory, and administrative requirements.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  3. Information Sharing &amp; Disclosure
                </h2>
                <p className="mb-3">We respect your privacy and take reasonable steps to protect your personal information.</p>
                <ul className="space-y-2 text-forest-700">
                  <li><strong>Service Providers:</strong> Information may be shared with trusted service providers where necessary to operate our website, manage enquiries, provide communication services, or deliver related services.</li>
                  <li><strong>Property Developers and Partners:</strong> Where appropriate and necessary to respond to your enquiry, relevant information may be shared with property developers, agents, or service partners involved in the property or project you have requested information about.</li>
                  <li><strong>Legal Authorities:</strong> Information may be disclosed to government authorities, regulatory bodies, law enforcement agencies, or other parties when required by applicable law.</li>
                  <li><strong>No Sale of Personal Information:</strong> We do not sell, rent, or trade your personal information to third parties for marketing purposes.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  4. Data Security &amp; Integrity
                </h2>
                <ul className="space-y-2 text-forest-700">
                  <li><strong>Protection:</strong> We use reasonable technical and organizational measures to help protect your personal information from unauthorized access, use, alteration, or disclosure.</li>
                  <li><strong>Prevention:</strong> We take appropriate steps to monitor and maintain our systems to reduce the risk of data loss, unauthorized access, and security breaches.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  5. Your Rights &amp; Choices
                </h2>
                <p className="mb-3">Depending on applicable laws, you may have the right to request:</p>
                <ul className="space-y-2 text-forest-700">
                  <li><strong>Access &amp; Update:</strong> Access, review, update, or correct the personal information we hold about you.</li>
                  <li><strong>Opt-Out:</strong> Stop receiving marketing, promotional, or property-related communications from us at any time.</li>
                  <li><strong>Delete Data:</strong> Request deletion of your personal information, subject to applicable legal, regulatory, and record-keeping requirements.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  6. Cookies, Tracking &amp; Third-Party Links
                </h2>
                <ul className="space-y-2 text-forest-700">
                  <li><strong>Cookies:</strong> We may use cookies and similar tracking technologies to improve website functionality, understand website usage, and enhance your browsing experience.</li>
                  <li><strong>External Links:</strong> Our website may contain links to third-party websites, including property developers, real estate companies, and other service providers. We do not control or take responsibility for their content, security, or privacy practices. We recommend reviewing their privacy policies before providing personal information.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  7. Children's Privacy
                </h2>
                <p className="text-forest-700">
                  Our website and services are intended for individuals who are 18 years of age or older. We do not knowingly collect personal information from children. If you believe that a minor has provided personal information through our website, please contact us so we can take appropriate steps to remove the information.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  8. Policy Updates
                </h2>
                <p className="text-forest-700">
                  We may update this Privacy Policy from time to time to reflect changes in our services, website, or applicable requirements. Any updates will be published on this page, and material changes may be communicated through appropriate channels where required.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="font-display text-xl font-bold text-forest-900 mb-3">
                  9. Contact Us
                </h2>
                <p className="text-forest-700">
                  If you have questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please contact us through the contact details provided on <strong>forestliving.community</strong>.
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
