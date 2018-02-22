const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

console.log('Webpack config is in', __dirname);

console.log('slsw found Entries: ', slsw.lib.entries);
module.exports = {
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [
    nodeExternals({
      modulesDir: path.join(__dirname, 'node_modules')
    })
  ],
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    // .webpack folder should be relative to the directory where we execute sls command
    path: path.resolve(process.cwd(), '.webpack'),
    filename: '[name].js',
  },
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      'node_modules'
    ]
  }
};
