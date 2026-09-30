import { useState } from "react";
import logoSvg from "../assets/logo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ["About Us", "Gallery", "Payment Plan", "Location"];

  return (
    <header className="relative w-full bg-white z-30 shadow-sm border-b border-gray-100">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center gap-3">
          <img src={logoSvg} alt="Forest Living Logo" className="h-8 md:h-9 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-forest-900 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="hover:text-forest-600 transition-colors"
            >
              {l}
            </a>
          ))}
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
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-forest-900 text-base font-medium py-2 hover:text-forest-600 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}


