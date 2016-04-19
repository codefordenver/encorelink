var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../client/src/index')
  ],
  output: {
    path: path.resolve(__dirname, '../client/dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.resolve(__dirname, '../client/src')
    }]
  }
};