# Ghaf Woods Landing Page & Sub-Pages — Vite + React + Tailwind CSS

Forest Living (Majid Al Futtaim) Community Web Application built with Vite, React, and Tailwind CSS.

---

## 🚀 Setup & Local Development

1. Ensure **Node.js (v18+)** is installed.
2. Clone the repository and run:

```bash
npm install
npm run dev
```

3. Open `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Folder Structure

```
ghaf-woods/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── logo.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── footerPages.js        # Data configuration for 7 sub-pages
    └── components/
        ├── Header.jsx            # Main navigation header
        ├── Hero.jsx
        ├── Properties.jsx        # Property showcase cards
        ├── ContentSection.jsx    # Standard content block design
        ├── FAQSection.jsx        # Homepage & Page FAQ accordion
        ├── RegisterForm.jsx      # Webhook lead registration form
        ├── Footer.jsx            # 3-column footer with leaf SVG overlays & official logo
        ├── PricePaymentPlanPage.jsx # Page 1: Price and Payment Plan Page
        └── DummyPage.jsx         # Generic fallback template for new sub-pages
```

---

## 📄 Standard Page Template Blueprint (For Pages 2–7)

When providing content for any of the remaining 6 pages (Full Forest View, Forest and Park View, Investor Deal, Off-Plan Properties, Apartments for Sale, Villas for Sale), follow this exact **6-Section Standard Blueprint** to maintain 100% theme consistency:

### 1. SEO Metadata Integration
- **Title Tag**: Set dynamically via `document.title`.
- **Meta Description**: Injected into `<meta name="description">`.
- **Keywords**: Injected into `<meta name="keywords">`.

### 2. Section 1 — Hero Section
- **Breadcrumb**: `<a href="#" onClick={onBack}>Back to Home</a>`
- **Badge**: `<span className="inline-block bg-[#e0c458] text-black font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md mb-4">CATEGORY BADGE</span>`
- **Title**: `<h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-forest-900 mb-6 max-w-5xl">`
- **Subtitle**: `<p className="text-forest-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-5xl">`

### 3. Section 2 — Ghaf Woods Properties
- Render `<Properties />` component inside `max-w-8xl mx-auto px-6 lg:px-12`.

### 4. Section 3 — Data Table (Optional / Average Prices)
- Render styled responsive table with `bg-forest-900` table header and alternating `bg-white` / `bg-cream/30` rows.

### 5. Section 4 — Long Content Section
- **Container**: `max-w-4xl mx-auto px-6`
- **Section Sub-Headings**: Uppercase sage green font:
  `<h2 className="font-display text-xl md:text-2xl text-[#6b7d56] mb-3 uppercase tracking-wider font-semibold">`
- **Body Paragraphs**: Clean gray text:
  `<p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">`
- **Links**: `<a href="https://forestliving.community/" className="text-[#6b7d56] hover:underline font-semibold">`

### 6. Section 5 — Frequently Asked Questions (FAQ)
- **Container**: `max-w-4xl mx-auto px-6`
- **Card**: `bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-200 shadow-xs`
- **Question Button**: `font-display font-semibold text-base md:text-lg text-[#6B7D56]`
- **Toggle Icon**: Circular `+` / `−` badge `<span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#6B7D56] font-bold">{isOpen ? "−" : "+"}</span>`
- **Answer Body**: `px-6 pb-6 pt-1 text-gray-600 text-sm md:text-base leading-relaxed`

### 7. Section 6 — Registration Form
- Render `<RegisterForm />` at the bottom of the page.

---

## 🔗 List of 7 Sub-Pages & Hash Routes

| Page # | Title | Hash Route | Component File |
|---|---|---|---|
| **Page 1** | Ghaf Woods Dubai Price and Payment Plan | `#price-payment-plan` | `src/components/PricePaymentPlanPage.jsx` |
| **Page 2** | Full Forest View in Ghaf Woods Dubai | `#full-forest-view` | `src/components/DummyPage.jsx` (or custom page) |
| **Page 3** | Forest and Park View in Ghaf Woods Dubai | `#forest-park-view` | `src/components/DummyPage.jsx` (or custom page) |
| **Page 4** | Investor Deal Ghaf Woods | `#investor-deal` | `src/components/DummyPage.jsx` (or custom page) |
| **Page 5** | Off-Plan Properties for Sale in Ghaf Woods | `#off-plan-properties` | `src/components/DummyPage.jsx` (or custom page) |
| **Page 6** | Apartments for Sale in Ghaf Woods | `#apartments-for-sale` | `src/components/DummyPage.jsx` (or custom page) |
| **Page 7** | Villas for Sale in Ghaf Woods | `#villas-for-sale` | `src/components/DummyPage.jsx` (or custom page) |
