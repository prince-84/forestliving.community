import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function generateSubpageHtmlPlugin() {
  return {
    name: 'generate-subpage-html',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const routes = [
        'ghaf-woods-Dubai-price-and-payment-plan',
        'full-forest-view-in-ghaf-woods-dubai',
        'forest-and-park-view-in-ghaf-woods-dubai',
        'investor-deal-ghaf-woods',
        'off-plan-properties-for-sale-in-ghaf-woods',
        'apartments-for-sale-in-ghaf-woods',
        'villas-for-sale-in-ghaf-woods',
        'privacy-policy',
        'terms-and-conditions'
      ];

      const content = fs.readFileSync(indexHtmlPath, 'utf-8');

      routes.forEach((route) => {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), content);
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), generateSubpageHtmlPlugin()],
  server: {
    host: true,
    port: 5173
  }
});
