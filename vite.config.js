import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

function cleanUrlMpaPlugin() {
  const rewriteMiddleware = (baseDir) => (req, res, next) => {
    if (!req.url) return next();
    const [urlPath, query] = req.url.split('?');
    const cleanPath = decodeURIComponent(urlPath).replace(/\/+$/, '');
    if (cleanPath && cleanPath !== '' && !path.extname(cleanPath)) {
      const candidate = path.join(baseDir, cleanPath, 'index.html');
      if (fs.existsSync(candidate)) {
        req.url = `${cleanPath}/index.html${query ? `?${query}` : ''}`;
      }
    }
    next();
  };

  return {
    name: 'clean-url-mpa',
    configureServer(server) {
      server.middlewares.use(rewriteMiddleware(__dirname));
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewriteMiddleware(path.resolve(__dirname, 'dist')));
    }
  };
}

export default defineConfig({
  plugins: [cleanUrlMpaPlugin()],
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
        saimaOneResidency: path.resolve(__dirname, 'saima-one-residency-clifton/index.html'),
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
