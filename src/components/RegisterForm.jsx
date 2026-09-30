import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            <p className="text-forest-700 font-medium">
              Thank you — our team will contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button type="submit" className="btn-primary w-full text-center">
                Submit
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
