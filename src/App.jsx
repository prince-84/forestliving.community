import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoBar from "./components/InfoBar";
import BedroomTiers from "./components/BedroomTiers";
import LuxurySection from "./components/LuxurySection";
import Amenities from "./components/Amenities";
import Properties from "./components/Properties";
import FloorPlans from "./components/FloorPlans";
import Gallery from "./components/Gallery";
import PaymentPlan from "./components/PaymentPlan";
import LocationSection from "./components/LocationSection";
import ContentSection from "./components/ContentSection";
import FAQSection from "./components/FAQSection";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import PricePaymentPlanPage from "./components/PricePaymentPlanPage";
import FullForestViewPage from "./components/FullForestViewPage";
import ForestParkViewPage from "./components/ForestParkViewPage";
import InvestorDealPage from "./components/InvestorDealPage";
import OffPlanPropertiesPage from "./components/OffPlanPropertiesPage";
import ApartmentsForSalePage from "./components/ApartmentsForSalePage";
import VillasForSalePage from "./components/VillasForSalePage";
import DummyPage from "./components/DummyPage";
import { FOOTER_PAGES } from "./data/footerPages";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    return { hash, path };
  });

  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      setCurrentRoute({ hash, path });

      const matchedFooterPage = FOOTER_PAGES.find((p) => p.hash === hash);
      const isSubpage =
        hash === "#privacy" ||
        hash === "#privacy-policy" ||
        hash === "#terms" ||
        hash === "#terms-and-conditions" ||
        matchedFooterPage ||
        [
          "#price-payment-plan",
          "#full-forest-view",
          "#forest-park-view",
          "#investor-deal",
          "#off-plan-properties",
          "#apartments-for-sale",
          "#villas-for-sale",
        ].includes(hash) ||
        (path.length > 1 && path !== "/");

      if (isSubpage) {
        window.scrollTo(0, 0);
      } else if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);

    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleBack = () => {
    if (window.history.length > 1 && window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
    }
    window.location.hash = "";
    setCurrentRoute({ hash: "", path: "/" });
    window.scrollTo(0, 0);
  };

  const { hash, path } = currentRoute;

  // 1. Privacy Policy
  if (hash === "#privacy" || hash === "#privacy-policy" || path.includes("privacy-policy")) {
    return <PrivacyPolicy onBack={handleBack} />;
  }

  // 2. Terms & Conditions
  if (hash === "#terms" || hash === "#terms-and-conditions" || path.includes("terms-and-conditions")) {
    return <TermsConditions onBack={handleBack} />;
  }

  // 3. Page 1 (#price-payment-plan / /price-and-payment-plan-in-ghaf-woods-dubai/)
  if (hash === "#price-payment-plan" || path.includes("price-and-payment-plan-in-ghaf-woods-dubai")) {
    return <PricePaymentPlanPage onBack={handleBack} />;
  }

  // 4. Page 2 (#full-forest-view / /full-forest-view-in-ghaf-woods-dubai/)
  if (hash === "#full-forest-view" || path.includes("full-forest-view-in-ghaf-woods-dubai")) {
    return <FullForestViewPage onBack={handleBack} />;
  }

  // 5. Page 3 (#forest-park-view / /forest-and-park-view-in-ghaf-woods-dubai/)
  if (hash === "#forest-park-view" || path.includes("forest-and-park-view-in-ghaf-woods-dubai")) {
    return <ForestParkViewPage onBack={handleBack} />;
  }

  // 6. Page 4 (#investor-deal / /investor-deal-ghaf-woods/)
  if (hash === "#investor-deal" || path.includes("investor-deal-ghaf-woods")) {
    return <InvestorDealPage onBack={handleBack} />;
  }

  // 7. Page 5 (#off-plan-properties / /off-plan-properties-for-sale-in-ghaf-woods/)
  if (hash === "#off-plan-properties" || path.includes("off-plan-properties-for-sale-in-ghaf-woods")) {
    return <OffPlanPropertiesPage onBack={handleBack} />;
  }

  // 8. Page 6 (#apartments-for-sale / /apartments-for-sale-in-ghaf-woods/)
  if (hash === "#apartments-for-sale" || path.includes("apartments-for-sale-in-ghaf-woods")) {
    return <ApartmentsForSalePage onBack={handleBack} />;
  }

  // 9. Page 7 (#villas-for-sale / /villas-for-sale-in-ghaf-woods/)
  if (hash === "#villas-for-sale" || path.includes("villas-for-sale-in-ghaf-woods")) {
    return <VillasForSalePage onBack={handleBack} />;
  }

  // 10. Check if hash corresponds to any other footer page
  const activeFooterPage = FOOTER_PAGES.find((p) => p.hash === hash);
  if (activeFooterPage) {
    return <DummyPage page={activeFooterPage} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <InfoBar />
      <div className="section-gap"><BedroomTiers /></div>
      <div className="section-gap"><LuxurySection /></div>
      <div className="section-gap"><Amenities /></div>
      <div className="section-gap"><Properties /></div>
      <div className="section-gap"><FloorPlans /></div>
      <div className="section-gap"><Gallery /></div>
      <div className="section-gap"><PaymentPlan /></div>
      <div className="section-gap"><LocationSection /></div>
      <div className="section-gap"><ContentSection /></div>
      <div className="section-gap"><FAQSection /></div>
      <RegisterForm />
      <Footer />
    </div>
  );
}
