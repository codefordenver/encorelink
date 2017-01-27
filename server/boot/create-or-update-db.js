var seedModels = require('../seed-models');

module.exports = function(app, cb) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */

  var postgres = app.datasources.postgres;
  var connectorType = postgres.connector.name;

  if (connectorType === 'postgresql') {
    return postgres.autoupdate(cb); // attempt to automatically update the data and database
  }

  // If we are here, we are using the in memory database
  postgres.automigrate(function (err) { // creates a new database based on config
    if (err) {
      cb(err);
    }

    seedModels(app, cb);
  });
};
