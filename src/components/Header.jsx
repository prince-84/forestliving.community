import { useState } from "react";
import logoSvg from "../assets/logo.svg";

export default function Header({ hideSectionLinks = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLyraPage =
    hideSectionLinks ||
    (typeof window !== "undefined" &&
      (window.location.pathname.includes("lyra-at-ghaf-woods") ||
        window.location.hash === "#lyra-at-ghaf-woods"));

  const allLinks = [
    { label: "About Us", hash: "#about-us" },
    { label: "Gallery", hash: "#gallery" },
    { label: "Payment Plan", hash: "#payment-plan" },
    { label: "Location", hash: "#location" },
    { label: "Lyra at Ghaf Woods", path: "/lyra-at-ghaf-woods" },
  ];

  const handleNavClick = (e, item) => {
    if (item.path) {
      return;
    }
    const targetHash = item.hash;
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
    }
    window.location.hash = targetHash;

    setTimeout(() => {
      const el = document.querySelector(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
    }
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-md border-b border-gray-100 transition-all duration-200">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
          <img src={logoSvg} alt="Forest Living Logo" className="h-8 md:h-9 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-forest-900 text-sm font-medium">
          {isLyraPage ? (
            <a
              href="#register"
              className="inline-block bg-[#7d8f67] hover:bg-[#6b7d56] text-white text-sm font-semibold tracking-wide px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm"
            >
              Register Now
            </a>
          ) : (
            allLinks.map((item) => (
              <a
                key={item.label}
                href={item.path || item.hash}
                onClick={(e) => handleNavClick(e, item)}
                className="hover:text-forest-600 transition-colors"
              >
                {item.label}
              </a>
            ))
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-forest-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {isLyraPage ? (
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#7d8f67] hover:bg-[#6b7d56] text-white text-sm font-semibold tracking-wide px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm"
            >
              Register Now
            </a>
          ) : (
            allLinks.map((item) => (
              <a
                key={item.label}
                href={item.path || item.hash}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, item);
                }}
                className="block text-forest-900 text-base font-medium py-2 hover:text-forest-600 transition-colors"
              >
                {item.label}
              </a>
            ))
          )}
        </div>
      )}
    </header>
  );
}
