module.exports = function(app) {

  var User = app.models.user;
  var users = [
    {
      username: 'scottsmeester',
      email: 'scott@smeester.com',
      password: 'password123'
    },
    {
      username: 'willydouglas',
      email: 'willy@eastcolfaxcorner.com',
      password: 'password123'
    },
    {
      username: 'devindeScenza',
      email: 'devin@sketchyalley.com',
      password: 'password123'
    },
    {
      username: 'ryanbird',
      email: 'ryan@eastaurora.com',
      password: 'password123'
    }
  ];

  User.create(users, function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);
  });
};
