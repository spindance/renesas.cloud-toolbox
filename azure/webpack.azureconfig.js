const defaultConfig = require('../webpack.config');

console.log('Azure Webpack config is in', __dirname);

module.exports = Object.assign(defaultConfig, {
  // Azure has a hard time loading many files. Do NOT exclude npm_modules from the webpack
  externals: [],
});
