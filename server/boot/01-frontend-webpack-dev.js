var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: false
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Frontend located at http://localhost:8080/client/');
});