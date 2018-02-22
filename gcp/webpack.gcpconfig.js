const defaultConfig = require('../webpack.config');

console.log('GCP Webpack config is in', __dirname);

module.exports = Object.assign(defaultConfig, {
  entry: { index: './index.js' }
});
