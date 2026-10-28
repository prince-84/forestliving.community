import { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const WEBHOOK_URL = "https://n8n.srv1625508.hstgr.cloud/webhook/979a4b97-a515-4ee0-96e3-5d0ddb475e99";
const WEBHOOK_TOKEN = "fsa_n8n_secret_token_2026_x99a";

export default function RegisterForm({ isHeroCard = false }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [phone, setPhone] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("AE");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let isMounted = true;
    const detectCountry = async () => {
      try {
        const res = await fetch("https://api.country.is");
        if (res.ok) {
          const data = await res.json();
          if (data && data.country && isMounted) {
            setDefaultCountry(data.country.toUpperCase());
            return;
          }
        }
      } catch (err) {
        console.warn("api.country.is failed, trying secondary IP service:", err);
      }

      try {
        const res = await fetch("https://ipwho.is/");
        if (res.ok) {
          const data = await res.json();
          if (data && data.country_code && isMounted) {
            setDefaultCountry(data.country_code.toUpperCase());
          }
        }
      } catch (err) {
        console.warn("Fallback to AE due to IP lookup failure:", err);
      }
    };

    detectCountry();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
      const utmCampaign = searchParams.get("utm_campaign") || searchParams.get("utm_source") || "";

      const isLyraPage =
        typeof window !== "undefined" &&
        (window.location.pathname.includes("lyra-at-ghaf-woods") ||
          window.location.hash === "#lyra-at-ghaf-woods");

      const payload = {
        name: form.name,
        phone: phone || "",
        email: form.email,
        source: "Website",
        sub_source: isLyraPage
          ? "Lyra at Ghaf Woods Page Registration Form"
          : "Forest Living Website Registration Form",
        utm_campaign: utmCampaign,
        campaign_url: typeof window !== "undefined" ? window.location.href : "",
        project: isLyraPage ? "Lyra at Ghaf Woods" : "Forest Living",
        developer: isLyraPage ? "Majid Al Futtaim" : "Forest Living",
        community: isLyraPage ? "Ghaf Woods, Dubailand" : "Forest Living Community",
        property_type: "Residential",
        key_requirement: "",
        activity_description: isLyraPage
          ? "New lead registration submitted from Lyra at Ghaf Woods page"
          : "New lead registration submitted from landing page",
        token: WEBHOOK_TOKEN
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": WEBHOOK_TOKEN
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        console.warn("Webhook returned status:", response.status);
      }

      window.location.href = "/thank-you";
    } catch (err) {
      console.error("Error submitting form to webhook:", err);
      window.location.href = "/thank-you";
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <div className={isHeroCard ? "bg-white rounded-2xl shadow-2xl p-5 sm:p-7 md:p-10 text-left text-forest-900 w-full overflow-hidden" : "p-5 sm:p-8 md:p-10 w-full overflow-hidden"}>
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-forest-900 mb-2">
        Register Your Interest
      </h2>
      <p className="text-forest-600 mb-5 sm:mb-6 text-xs sm:text-sm md:text-base">
        Fill the forms and we will get back to you as soon as possible.
      </p>

      {submitted ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <p className="text-emerald-800 font-medium text-lg mb-1">
            Thank you!
          </p>
          <p className="text-emerald-700 text-sm">
            Your request has been received. Our team will contact you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          {errorMsg && (
            <p className="text-red-600 text-sm font-medium">{errorMsg}</p>
          )}
          <div>
            <label className="text-xs text-forest-600 mb-1 block">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-sand rounded-sm px-3.5 sm:px-4 py-2.5 text-sm text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-500"
            />
          </div>
          <div>
            <label className="text-xs text-forest-600 mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-sand rounded-sm px-3.5 sm:px-4 py-2.5 text-sm text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-500"
            />
          </div>
          <div>
            <label className="text-xs text-forest-600 mb-1 block">Phone</label>
            <PhoneInput
              key={defaultCountry}
              international
              defaultCountry={defaultCountry}
              value={phone}
              onChange={setPhone}
              className="phone-input-wrapper text-forest-900"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );

  if (isHeroCard) {
    return formContent;
  }

  return (
    <section id="register" className="bg-cream py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden md:min-h-[480px]">
        {formContent}

        <div className="hidden md:block h-full min-h-[480px] self-stretch">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
            alt="Ghaf Woods evening exterior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
