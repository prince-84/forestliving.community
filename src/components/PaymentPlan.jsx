import about2 from "../assets/about_2.png";

export default function PaymentPlan() {
  return (
    <section id="payment-plan" className="bg-white py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={about2}
            alt="Ghaf Woods Outdoor Dining Terrace"
            className="w-full h-[400px] md:h-[480px] object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 leading-tight max-w-xl">
            Ghaf Woods by Majid Al Futtaim Payment Plan
          </h2>

          <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Ghaf Woods offers a diverse range of properties designed to cater to
            different lifestyles.
          </p>

          <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            With an attractive payment plan in place, purchasing your dream home will be a
            hassle-free experience.
          </p>

          {/* Stats Row */}
          <div className="flex items-center gap-12 md:gap-16 mb-8">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-black mb-1">
                60/40
              </p>
              <p className="font-sans text-xs md:text-sm font-medium text-gray-600">
                Payment Plan
              </p>
            </div>

            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-black mb-1">
                10%
              </p>
              <p className="font-sans text-xs md:text-sm font-medium text-gray-600">
                Down Payment
              </p>
            </div>
          </div>

          <a
            href="#register"
            className="inline-block bg-[#788863] hover:bg-[#677753] text-white text-sm md:text-base font-medium px-8 py-3.5 rounded-xl shadow-sm transition-colors duration-200"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

