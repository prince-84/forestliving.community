import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { setCanonicalUrl } from "../utils/canonical";

export default function ThankYouPage({ onBack }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Thank You | Forest Living Community";
    setCanonicalUrl("https://forestliving.community/thank-you");

    let metaRobots = document.querySelector('meta[name="robots"]');
    let createdRobots = false;
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.name = "robots";
      document.head.appendChild(metaRobots);
      createdRobots = true;
    }
    const prevRobots = metaRobots.getAttribute("content") || "";
    metaRobots.setAttribute("content", "noindex, follow");

    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
      if (createdRobots) {
        metaRobots.remove();
      } else if (prevRobots) {
        metaRobots.setAttribute("content", prevRobots);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#2B3D22] flex flex-col justify-between">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-[#e8e2d5] p-8 sm:p-12 text-center relative overflow-hidden">
          
          {/* Subtle Botanical Glow */}
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#edf2ea] rounded-full filter blur-2xl opacity-60 pointer-events-none"></div>
          <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-[#f5eddb] rounded-full filter blur-2xl opacity-60 pointer-events-none"></div>

          {/* Success Checkmark Icon */}
          <div className="relative mx-auto mb-6 w-20 h-20 rounded-full bg-[#edf2ea] border-2 border-[#a4c297] flex items-center justify-center shadow-inner">
            <div className="w-14 h-14 rounded-full bg-[#3e5433] flex items-center justify-center shadow-md">
              <svg className="w-8 h-8 text-[#e0c458]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <div className="inline-block px-3.5 py-1 rounded-full bg-[#edf2ea] text-[#3e5433] text-xs font-bold uppercase tracking-widest mb-4">
            Registration Received
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B3D22] mb-4 leading-tight">
            Thank You for Your Interest
          </h1>

          <p className="text-base sm:text-lg text-[#55694c] leading-relaxed max-w-lg mx-auto mb-8 font-normal">
            Your request for <span className="font-semibold text-[#2B3D22]">Ghaf Woods Dubai</span> has been successfully registered. A dedicated property advisor will contact you within 24 hours.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#e8e2d5]">
              <div className="text-[#3e5433] text-lg mb-1">⏱</div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B3D22]">Fast Response</h2>
              <p className="text-[12px] text-[#6b7c62] mt-0.5">Direct contact within 24 hours</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#e8e2d5]">
              <div className="text-[#3e5433] text-lg mb-1">📑</div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B3D22]">Brochures &amp; Plans</h2>
              <p className="text-[12px] text-[#6b7c62] mt-0.5">Floor plans &amp; payment options</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#e8e2d5]">
              <div className="text-[#3e5433] text-lg mb-1">🌟</div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B3D22]">VIP Access</h2>
              <p className="text-[12px] text-[#6b7c62] mt-0.5">Direct developer pricing</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              onClick={(e) => {
                if (onBack) {
                  e.preventDefault();
                  onBack();
                }
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2B3D22] hover:bg-[#1f2d19] text-[#e0c458] font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Return to Home Page
            </a>
            <a
              href="/ghaf-woods-dubai-price-and-payment-plan"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#2B3D22] text-[#2B3D22] hover:bg-[#2B3D22] hover:text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200"
            >
              View Price &amp; Payment Plan
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
