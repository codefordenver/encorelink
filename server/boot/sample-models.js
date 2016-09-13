var async = require('async');

module.exports = function(app) {

  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  var users = [
    {
      email: 'organizer@a.bc',
      password: 'p'
    },
    {
      email: 'musician@a.bc',
      password: 'p'
    },
    {
      email: 'scott@smeester.com',
      password: 'password123'
    },
    {
      email: 'willy@eastcolfaxcorner.com',
      password: 'password123'
    },
    {
      email: 'devin@sketchyalley.com',
      password: 'password123'
    },
    {
      email: 'ryan@eastaurora.com',
      password: 'password123'
    }
  ];

  var roles = [{
    name: 'organizer'
  }, {
    name: 'volunteer'
  }];

  User.create(users, function(err, createdUsers) {
    if (err) throw err;

    console.log('Created users:', createdUsers);

    //create the admin role
    Role.create(roles, function(err, createdRoles) {
      if (err) throw err;

      console.log('Created roles:', createdRoles);

      // add roles
      async.each(
        [0,1],

        function(id, cb) {
          createdRoles[id].principals.create({
            principalType: RoleMapping.USER,
            principalId: users[id].id
          }, function(err, principal) {
            cb(err);
          });
        },

        function(err) {
          if (err) throw err;

          console.log('assigned roles');
        }
      );
    });
  });
};
