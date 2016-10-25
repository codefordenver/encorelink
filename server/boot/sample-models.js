module.exports = function (app) {

  /**
   * User creation
   */
  var User = app.models.user;
  var users = [
    {
      username: 'admin',
      email: 'admin@encorelink.com',
      password: 'password123'
    },
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

  User.create(users, function (err, users) {
    if (err) throw err;

    console.log('Created users:', users);
  });

  /**
   * Event creation
   */
  var Event = app.models.Event;
  var events = [
    {
      "name": "event 1",
      "date": "2016-12-22T14:00:00.000Z",
      "notes": "sample note",
      "location": "east colfax corner",
      "endDate": "2016-12-22T15:00:00.000Z",
      "ownerId": 1
    },
    {
      "name": "event 2",
      "date": "2017-01-22T14:00:00.000Z",
      "notes": "sample note",
      "location": "east colfax corner",
      "endDate": "2017-01-22T15:00:00.000Z",
      "ownerId": 1
    },
    {
      "name": "event 3",
      "date": "2016-11-22T14:00:00.000Z",
      "notes": "sample note",
      "location": "east colfax corner",
      "endDate": "2016-11-22T15:00:00.000Z",
      "ownerId": 1
    },
    {
      "name": "event 4",
      "date": "2016-12-23T14:00:00.000Z",
      "notes": "sample note",
      "location": "east colfax corner",
      "endDate": "2016-12-23T15:00:00.000Z",
      "ownerId": 1
    },

  ];

  Event.create(events, function (err, events) {
    if (err) throw err;

    console.log('Created events:', events);
  });
};
