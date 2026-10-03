import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const origin = (env.VITE_SITE_URL || process.env.RENDER_EXTERNAL_URL || '').replace(/\/$/, '');
  const safeOrigin = origin.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return {
    plugins: [{
      name: 'portfolio-sharing',
      transformIndexHtml(html) {
        return html.replaceAll('__SITE_ORIGIN__', safeOrigin);
      },
    }],
  };
});
