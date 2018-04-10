var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

  // define environment variables for e-mail
  if (!process.env.APP_EMAIL || !process.env.APP_EMAILPW) {
    console.log('WARNING: Email environment variables not defined. App cannot send email.')
    if (process.env.NODE_ENV === 'production'){
      process.exit();
    }
  }

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
