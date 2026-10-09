import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
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
        termsAndConditions: path.resolve(__dirname, 'terms-and-conditions/index.html')
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});

