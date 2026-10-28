import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    {
      name: 'multi-page-clean-urls',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && !req.url.includes('.') && req.url !== '/') {
            const cleanPath = req.url.split('?')[0].replace(/^\/|\/$/g, '');
            const filePath = path.resolve(__dirname, cleanPath, 'index.html');
            if (fs.existsSync(filePath)) {
              req.url = `/${cleanPath}/` + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
            }
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        pricePaymentPlan: path.resolve(__dirname, 'ghaf-woods-dubai-price-and-payment-plan/index.html'),
        fullForestView: path.resolve(__dirname, 'full-forest-view-in-ghaf-woods-dubai/index.html'),
        forestParkView: path.resolve(__dirname, 'forest-and-park-view-in-ghaf-woods-dubai/index.html'),
        investorDeal: path.resolve(__dirname, 'investor-deal-ghaf-woods/index.html'),
        offPlanProperties: path.resolve(__dirname, 'off-plan-properties-for-sale-in-ghaf-woods/index.html'),
        apartmentsForSale: path.resolve(__dirname, 'apartments-for-sale-in-ghaf-woods/index.html'),
        villasForSale: path.resolve(__dirname, 'villas-for-sale-in-ghaf-woods/index.html'),
        privacyPolicy: path.resolve(__dirname, 'privacy-policy/index.html'),
        termsAndConditions: path.resolve(__dirname, 'terms-and-conditions/index.html'),
        thankYou: path.resolve(__dirname, 'thank-you/index.html')
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});

