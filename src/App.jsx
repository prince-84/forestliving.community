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

export default function App() {
  const [currentHash, setCurrentHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      if (
        window.location.hash === "#privacy" ||
        window.location.hash === "#privacy-policy" ||
        window.location.hash === "#terms" ||
        window.location.hash === "#terms-and-conditions"
      ) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentHash === "#privacy" || currentHash === "#privacy-policy") {
    return (
      <PrivacyPolicy
        onBack={() => {
          window.location.hash = "";
          setCurrentHash("");
        }}
      />
    );
  }

  if (currentHash === "#terms" || currentHash === "#terms-and-conditions") {
    return (
      <TermsConditions
        onBack={() => {
          window.location.hash = "";
          setCurrentHash("");
        }}
      />
    );
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


