# Ghaf Woods Landing Page — Vite + React + Tailwind CSS

Yeh Ghaf Woods (Majid Al Futtaim) forest living landing page ka clone hai, jo
Vite + React + Tailwind CSS mein banaya gaya hai.

## Setup (Local Machine Par)

1. Node.js (v18+) install hona chahiye.
2. Terminal mein project folder open karein aur yeh commands chalayein:

```bash
npm install
npm run dev
```

3. Browser mein `http://localhost:5173` open karein.

## Production Build

```bash
npm run build
npm run preview
```

## Folder Structure

```
ghaf-woods/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── leaf.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── InfoBar.jsx
        ├── BedroomTiers.jsx
        ├── LuxurySection.jsx
        ├── Amenities.jsx
        ├── Properties.jsx
        ├── FloorPlans.jsx
        ├── Gallery.jsx
        ├── PaymentPlan.jsx
        ├── LocationSection.jsx
        ├── ContentSection.jsx
        ├── RegisterForm.jsx
        └── Footer.jsx
```

## Notes

- Saari images abhi Unsplash placeholder URLs se aa rahi hain — aap apni
  asal Ghaf Woods property images `src/components/*.jsx` files mein
  `img` / `src` attributes replace karke laga sakte hain.
- Color palette `tailwind.config.js` mein `forest` naam ke under define hai
  (brand green shades). Ise apni brand guide ke mutabiq adjust kar sakte hain.
- Fonts: Cormorant Garamond (headings) + Inter (body), Google Fonts se
  `index.html` mein load ho rahe hain.
- Register form abhi sirf front-end validation/submit state dikhata hai —
  isko apne backend/CRM API se connect karna hoga.
