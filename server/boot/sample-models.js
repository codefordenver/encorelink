module.exports = function(app) {
  var User = app.models.user;

  User.create([
    {username: 'scottsmeester', email: 'scott@smeester.com', password: 'password123'},
    {username: 'willydouglas', email: 'willy@codefordenver.org', password: 'password123'}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);


  });

};