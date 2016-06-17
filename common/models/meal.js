var _ = require('lodash');
var async = require('async');

module.exports = function(Meal) {
  /**
   * Create a new meal along with associated relations
   * @param {object} fullMeal The meal object with an array of objects representing the mealfoods
   * @param {Function(Error, object)} callback
   */

  Meal.fullMeal = function(fullMeal, callback) {
    var mealToCreate = _.omit(fullMeal, 'mealfoods');
    var mealfoodsToCreate = fullMeal.mealfoods;

    var models = Meal.app.models;

    Meal.beginTransaction({isolationLevel: Meal.Transaction.READ_COMMITTED}, function(err, tx) {
      if (err) return callback(err);

      var options = {transaction: tx};

      Meal.create(mealToCreate, options, function(err, meal) {
        if (err) return callback(err);

        async.each(mealfoodsToCreate, function(mealfoodToCreate, cb) {
          mealfoodToCreate.mealId = meal.id;
          models.mealfood.create(mealfoodToCreate, options, cb);
        }, function done(err) {
          if (err) return callback(err);

          tx.commit(function(err) {
            if (err) return callback(err);

            callback(null, meal);
          });
        });
      });
    });
  };
};
