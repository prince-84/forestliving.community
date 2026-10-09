import logoSvg from "../assets/logo.svg";
import { FOOTER_PAGES } from "../data/footerPages";

export default function Footer() {
  const col1Pages = FOOTER_PAGES.slice(0, 4);
  const col2Pages = FOOTER_PAGES.slice(4, 7);

  return (
    <footer className="relative bg-[#2B3D22] text-[#e3ded5] overflow-hidden select-none w-full">
      
      {/* 1. Full-Width Edge-to-Edge Dark Green Solid Background Box (Layer z-10) */}
      <div className="w-full bg-[#2B3D22] text-[#e3ded5] py-12 sm:py-16 px-6 sm:px-12 lg:px-20 relative z-10 shadow-2xl">
        
        {/* 2. Opaque Botanical Leaves (Layer z-20) */}
        
        {/* Top Left Botanical Leaves */}
        <svg
          className="absolute top-0 left-0 w-28 sm:w-40 md:w-52 h-auto pointer-events-none z-20 opacity-100"
          viewBox="0 0 200 180"
          fill="none"
        >
          <path
            d="M-20 -10 C 60 15, 110 65, 145 125 C 105 110, 50 75, -20 -10 Z"
            fill="#39522f"
          />
          <path
            d="M-20 -10 C 40 40, 80 90, 110 155 C 80 120, 30 70, -20 -10 Z"
            fill="#1f2e18"
          />
          <path
            d="M5 -10 C 75 10, 125 45, 165 105 C 120 95, 70 55, 5 -10 Z"
            fill="#4d6c41"
          />
        </svg>

        {/* Top Right Botanical Leaves */}
        <svg
          className="absolute top-0 right-0 w-28 sm:w-40 md:w-52 h-auto pointer-events-none z-20 opacity-100"
          viewBox="0 0 200 180"
          fill="none"
        >
          <path
            d="M220 -10 C 140 15, 90 65, 55 125 C 95 110, 150 75, 220 -10 Z"
            fill="#39522f"
          />
          <path
            d="M220 -10 C 160 40, 120 90, 90 155 C 120 120, 170 70, 220 -10 Z"
            fill="#1f2e18"
          />
        </svg>

        {/* Bottom Left Botanical Leaves */}
        <svg
          className="absolute bottom-0 left-0 w-28 sm:w-36 md:w-48 h-auto pointer-events-none z-20 opacity-100"
          viewBox="0 0 200 140"
          fill="none"
        >
          <path
            d="M-20 150 C 50 100, 100 75, 165 50 C 115 80, 65 120, -20 150 Z"
            fill="#39522f"
          />
          <path
            d="M-20 150 C 65 110, 115 90, 180 70 C 130 100, 75 130, -20 150 Z"
            fill="#1f2e18"
          />
        </svg>

        {/* Bottom Right Botanical Leaves */}
        <svg
          className="absolute bottom-0 right-0 w-28 sm:w-36 md:w-48 h-auto pointer-events-none z-20 opacity-100"
          viewBox="0 0 200 140"
          fill="none"
        >
          <path
            d="M220 150 C 150 100, 100 75, 35 50 C 85 80, 135 120, 220 150 Z"
            fill="#39522f"
          />
          <path
            d="M220 150 C 135 110, 85 90, 20 70 C 70 100, 125 130, 220 150 Z"
            fill="#1f2e18"
          />
        </svg>

        {/* 3. Main Footer Content Container (Layer z-30) */}
        <div className="max-w-7xl mx-auto relative z-30">
          
          {/* Top Center Full-Width Disclaimer */}
          <div className="w-full text-center max-w-5xl mx-auto mb-10 md:mb-12">
            <p className="text-xs sm:text-sm text-[#b8c9b2] leading-relaxed font-normal">
              ForestLiving community operates as a proud subsidiary of MAF, we inform that all property information provided on this website is for general guidance only and not constitute a formal offer. Prices, availability, and property details may change at any time without prior notice. Images are for illustrative purposes only and reflect actual properties. For the most accurate and up-to-date information, please contact us directly through the details provided on the website.
            </p>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Logo + Copyright */}
            <div className="lg:col-span-4 space-y-4">
              {/* Logo */}
              <div>
                <img
                  src={logoSvg}
                  alt="Forest Living"
                  className="h-10 sm:h-12 w-auto brightness-0 invert"
                />
              </div>

              {/* Copyright */}
              <div className="text-[11px] uppercase tracking-widest text-[#9cb095] pt-1 space-y-0.5">
                <p>© {new Date().getFullYear()} FORESTLIVING COMMUNITY.</p>
                <p>ALL RIGHTS RESERVED.</p>
              </div>
            </div>

            {/* Right Section: 3 Distinct Columns/Boxes */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              {/* Box 1: First 4 Pages */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#e0c458] mb-4 border-b border-[#3e5433] pb-2">
                  COMMUNITY PAGES
                </h3>
                <ul className="space-y-3 text-xs font-semibold uppercase tracking-wider text-[#dcd5c7]">
                  {col1Pages.map((page) => (
                    <li key={page.id}>
                      <a
                        href={page.path || page.hash}
                        className="hover:text-[#ffffff] hover:translate-x-1 transition-all duration-200 block leading-snug"
                      >
                        {page.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 2: Next 3 Pages */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#e0c458] mb-4 border-b border-[#3e5433] pb-2">
                  GHAF WOODS LISTINGS
                </h3>
                <ul className="space-y-3 text-xs font-semibold uppercase tracking-wider text-[#dcd5c7]">
                  {col2Pages.map((page) => (
                    <li key={page.id}>
                      <a
                        href={page.path || page.hash}
                        className="hover:text-[#ffffff] hover:translate-x-1 transition-all duration-200 block leading-snug"
                      >
                        {page.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 3: Legal & Information Pages */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#e0c458] mb-4 border-b border-[#3e5433] pb-2">
                  LEGAL & INFORMATION
                </h3>
                <ul className="space-y-3 text-xs font-semibold uppercase tracking-wider text-[#dcd5c7]">
                  <li>
                    <a
                      href="/privacy-policy"
                      className="hover:text-[#ffffff] hover:translate-x-1 transition-all duration-200 block"
                    >
                      PRIVACY POLICY
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-and-conditions"
                      className="hover:text-[#ffffff] hover:translate-x-1 transition-all duration-200 block"
                    >
                      TERMS & CONDITIONS
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
