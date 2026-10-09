# Ghaf Woods Landing Page & Sub-Pages — Vanilla HTML + Vite + Tailwind CSS

Forest Living (Majid Al Futtaim) Community Web Application built with **Vanilla HTML5**, **Vite (Multi-Page Architecture)**, **Vanilla JS**, and **Tailwind CSS**.

---

## 🚀 Setup & Local Development

1. Ensure **Node.js (v18+)** is installed.
2. Clone the repository and install dependencies:

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

Vite compiles 10 distinct standalone static HTML pages into the `dist/` directory, optimized for SEO and fast loading.

---

## 📁 Project Folder Structure

```
ghaf-woods/
├── index.html                                        # Main Homepage
├── ghaf-woods-dubai-price-and-payment-plan/
│   └── index.html                                    # Price & Payment Plan Page
├── full-forest-view-in-ghaf-woods-dubai/
│   └── index.html                                    # Full Forest View Page
├── forest-and-park-view-in-ghaf-woods-dubai/
│   └── index.html                                    # Forest & Park View Page
├── investor-deal-ghaf-woods/
│   └── index.html                                    # Investor Deal Page
├── off-plan-properties-for-sale-in-ghaf-woods/
│   └── index.html                                    # Off-Plan Properties Page
├── apartments-for-sale-in-ghaf-woods/
│   └── index.html                                    # Apartments for Sale Page
├── villas-for-sale-in-ghaf-woods/
│   └── index.html                                    # Villas for Sale Page
├── privacy-policy/
│   └── index.html                                    # Privacy Policy Page
├── terms-and-conditions/
│   └── index.html                                    # Terms & Conditions Page
├── package.json                                      # Clean dependencies (Vite + Tailwind)
├── tailwind.config.js                                # Forest brand color palette & fonts
├── postcss.config.js
├── vite.config.js                                    # Vite Multi-Page Rollup Input Config
└── src/
    ├── main.js                                       # Vanilla JS logic (Menu, Accordion, Form, Tabs)
    ├── index.css                                     # Tailwind directives & styles
    └── assets/                                       # SVG Logo, Icons, and Community Images
```

---

## 🌐 Site Routes & Multi-Page Architecture

| Page Title | Route Path | Entry File |
|---|---|---|
| **Homepage** | `/` | `index.html` |
| **Ghaf Woods Dubai Price & Payment Plan** | `/ghaf-woods-dubai-price-and-payment-plan/` | `ghaf-woods-dubai-price-and-payment-plan/index.html` |
| **Full Forest View in Ghaf Woods Dubai** | `/full-forest-view-in-ghaf-woods-dubai/` | `full-forest-view-in-ghaf-woods-dubai/index.html` |
| **Forest and Park View in Ghaf Woods Dubai** | `/forest-and-park-view-in-ghaf-woods-dubai/` | `forest-and-park-view-in-ghaf-woods-dubai/index.html` |
| **Investor Deal Ghaf Woods** | `/investor-deal-ghaf-woods/` | `investor-deal-ghaf-woods/index.html` |
| **Off-Plan Properties for Sale in Ghaf Woods** | `/off-plan-properties-for-sale-in-ghaf-woods/` | `off-plan-properties-for-sale-in-ghaf-woods/index.html` |
| **Apartments for Sale in Ghaf Woods** | `/apartments-for-sale-in-ghaf-woods/` | `apartments-for-sale-in-ghaf-woods/index.html` |
| **Villas for Sale in Ghaf Woods** | `/villas-for-sale-in-ghaf-woods/` | `villas-for-sale-in-ghaf-woods/index.html` |
| **Privacy Policy** | `/privacy-policy/` | `privacy-policy/index.html` |
| **Terms & Conditions** | `/terms-and-conditions/` | `terms-and-conditions/index.html` |

---

## 🌟 Key Features & SEO Optimization

- **Semantic HTML5 Markup**: Built using standard `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, and `<figure>` tags.
- **Strict Heading Hierarchy**: Single `<h1>` tag per page with sequential `<h2>` and `<h3>` headings.
- **SEO Meta Tags**: Unique Page Titles, Meta Descriptions, Keywords, Canonical URLs (`https://forestliving.community/...`), Open Graph (`og:*`), and Twitter Cards.
- **JSON-LD Schema**:
  - `WebSite` & `Organization` Schema.
  - `FAQPage` Schema dynamically matched per page.
- **Pure Vanilla JS Controls** (`src/main.js`):
  - **Mobile Menu Drawer**: Responsive toggle for header navigation.
  - **Floor Plans Switcher**: Interactive 1-BR, 2-BR, 3-BR selector updating unit specs and imagery.
  - **FAQ Accordions**: Accordion collapse/expand logic with `aria-expanded` support.
  - **Lead Registration Form**: Auto-detects user country code via IP lookup (`api.country.is`) and submits lead data to n8n webhook (`https://n8n.srv1625508.hstgr.cloud/webhook/...`).
