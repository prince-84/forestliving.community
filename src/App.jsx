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
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";

export default function App() {
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
      <RegisterForm />
      <Footer />
    </div>
  );
}

