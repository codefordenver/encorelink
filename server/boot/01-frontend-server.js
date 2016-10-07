var loopback = require('loopback');
var path = require('path');
var webpack = require('webpack');

module.exports = function(app, done) {

  if (process.env.NODE_ENV === 'production') {
    var prodConfig = require('../webpack.prod.config');
    var compiler = webpack(prodConfig);

    compiler.run(function(err, stats) {
      if (err) {
        return done(err);
      }

      var jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) {
        return done(jsonStats.errors);
      }
      if (jsonStats.warnings.length > 0) {
        console.warn('Webpack warnings:');
        console.error.apply(null, jsonStats.warnings);
      }

      console.log('webpacked for production');

      app.use('/dist', loopback.static(path.join(__dirname, '../../client/dist')));
      app.use('/public', loopback.static(path.join(__dirname, '../../client/public')));

      // For non-api routes serve the index file
      app.use(/^(?!\/?api).+$/, function (req, res) {
        res.sendFile(path.join(__dirname, '../../client/index.html'));
      });

      done();
    });
  }

  // If the node_env is NOT set to production, run the webpackdev server
  // Uses the webpack.dev.config.js file for webpack configuration.
  else {
    var WebpackDevServer = require('webpack-dev-server');
    var devConfig = require('../webpack.dev.config.js');

    var server = new WebpackDevServer(webpack(devConfig), {
      contentBase: path.resolve(__dirname, '../../client'),
      publicPath: devConfig.output.publicPath,
      hot: true,
      historyApiFallback: false,
      proxy: {
        '/api/*': {
          target: 'http://localhost:3000'
        }
      }
    });

    // For non-api routes serve the index file
    server.use(/^(?!\/?api).+$/, function (req, res) {
      res.sendFile(path.join(__dirname, '../../client/index.html'));
    });

    server.listen(8080, '0.0.0.0', function (err, result) {
      if (err) {
        return console.log(err);
      }

      console.log('Frontend located at http://localhost:8080/');
      done();
    });
  }
}
