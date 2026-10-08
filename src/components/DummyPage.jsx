import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DummyPage({ page, onBack }) {
  useEffect(() => {
    if (!page) return;
    const prevTitle = document.title;
    document.title = `${page.title} | ForestLiving`;

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        page.subtitle || `${page.title} - ForestLiving Community`
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute("content", prevDesc);
      }
    };
  }, [page]);

  if (!page) return null;

  return (
    <div className="min-h-screen bg-cream text-forest-900 flex flex-col justify-between">
      <div>
        <Header />

        <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8 flex items-center justify-between">
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

            <span className="text-xs px-3 py-1 bg-forest-100 text-forest-800 rounded-full font-medium border border-forest-200">
              {page.category}
            </span>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand">
            {/* Page Header */}
            <div className="border-b border-sand pb-6 mb-8">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-forest-900 mb-3">
                {page.title}
              </h1>
              <p className="text-base text-forest-600 font-medium max-w-2xl">
                {page.subtitle}
              </p>
              <div className="mt-4 text-xs text-forest-400">
                Last Updated: {page.lastUpdated}
              </div>
            </div>

            {/* Quick Stats Grid (if available) */}
            {page.stats && page.stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-6 bg-cream/60 rounded-2xl border border-sand/80">
                {page.stats.map((stat, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-display font-bold text-[#647451]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-forest-600 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Main Content Sections */}
            <div className="space-y-8 text-forest-800 text-sm md:text-base leading-relaxed">
              {page.sections.map((section, sIdx) => (
                <section key={sIdx} className="bg-white">
                  <h2 className="font-display text-xl md:text-2xl font-bold text-forest-900 mb-3">
                    {section.heading}
                  </h2>

                  {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="mb-4 text-forest-700">
                      {p}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="list-disc pl-6 space-y-2 mb-4 text-forest-700">
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Bottom Callout / Contact Box */}
            <div className="mt-12 p-6 rounded-2xl bg-forest-900 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-cream">
                  Interested in learning more about ForestLiving?
                </h3>
                <p className="text-xs text-forest-200 mt-1">
                  Connect with our team today to download brochure or schedule a site visit.
                </p>
              </div>
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  if (onBack) onBack();
                  else {
                  window.history.pushState({}, "", "/");
                  window.dispatchEvent(new Event("popstate"));
                }
                  setTimeout(() => {
                    const regElem = document.getElementById("register");
                    if (regElem) regElem.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="px-5 py-2.5 bg-gold hover:bg-gold-dark text-forest-900 font-semibold rounded-xl text-sm transition-all whitespace-nowrap"
              >
                Register Interest
              </a>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
