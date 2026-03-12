const { defineConfig } = require('vite');
const reactSvgPlugin = require('vite-plugin-react-svg');

module.exports = defineConfig({
  plugins: [reactSvgPlugin()],
  server: {
    port: 3001,
  },
});
