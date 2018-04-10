var loopback = require('loopback');
var path = require('path');

module.exports = function(app) {
  if (process.env.NODE_ENV === 'production') {
    console.log('serving up the front end');

    app.use(loopback.static(path.join(__dirname, '../../build')));
    app.use(/^(?!\/?api).+$/, function (req, res) {
      console.log('Directly navigated to a page')
      res.sendFile(path.join(__dirname, '../../build/index.html'));
    });
  }
};
