module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  server.use(router);
};
