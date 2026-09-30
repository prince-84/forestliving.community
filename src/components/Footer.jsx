export default function Footer() {
  return (
    <footer className="bg-forest-900 py-6">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <p className="text-forest-300 text-xs text-center leading-relaxed max-w-4xl mx-auto">
          ForestLiving community operates as a proud subsidiary of MAF, we
          inform that all property information provided on this website is for
          general guidance only and not constitute a formal offer. Prices,
          availability, and property details may change at any time without
          prior notice. Images are for illustrative purposes only and reflect
          actual properties. For the most accurate and up-to-date information,
          please contact us directly through the details provided on the
          website.
        </p>
        <div className="mt-4 text-center text-xs text-forest-300 font-medium">
          <a href="#privacy" className="hover:underline hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="mx-2 text-forest-400 font-normal">|</span>
          <a href="#terms" className="hover:underline hover:text-white transition-colors">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
