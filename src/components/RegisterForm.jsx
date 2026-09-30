import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const WEBHOOK_URL = "https://n8n.srv1625508.hstgr.cloud/webhook/979a4b97-a515-4ee0-96e3-5d0ddb475e99";
const WEBHOOK_TOKEN = "fsa_n8n_secret_token_2026_x99a";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
      const utmCampaign = searchParams.get("utm_campaign") || searchParams.get("utm_source") || "";

      const payload = {
        name: form.name,
        phone: phone || "",
        email: form.email,
        source: "Website",
        sub_source: "Forest Living Website Registration Form",
        utm_campaign: utmCampaign,
        campaign_url: typeof window !== "undefined" ? window.location.href : "",
        project: "Forest Living",
        developer: "Forest Living",
        community: "Forest Living Community",
        property_type: "Residential",
        key_requirement: "",
        activity_description: "New lead registration submitted from landing page",
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

      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form to webhook:", err);
      // Still show success or error message
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="bg-cream py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden min-h-[480px]">
        <div className="p-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-forest-900 mb-2">
            Register Your Interest
          </h2>
          <p className="text-forest-600 mb-6">
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
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full border border-sand rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
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
                  className="w-full border border-sand rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                />
              </div>
              <div>
                <label className="text-xs text-forest-600 mb-1 block">Phone</label>
                <PhoneInput
                  international
                  defaultCountry="AE"
                  value={phone}
                  onChange={setPhone}
                  className="phone-input-wrapper"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>

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

