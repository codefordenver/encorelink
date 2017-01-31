var async = require('async');
var chalk = require('chalk');

var users = [
  {
    username: 'admin',
    email: 'admin@encorelink.com',
    password: 'password123',
    isMusician: false
  },
  {
    username: 'musician',
    email: 'musician@encorelink.com',
    password: 'password123',
    isMusician: true,
    bio: 'Hi, my name is Musician!  This is my bio.  I\'m a first chair clarinetist specializing in drum and bass.',
    instruments: ['clarinet', 'piano', 'vocals']
  },
  {
    username: 'scottsmeester',
    email: 'scott@smeester.com',
    password: 'password123',
    isMusician: false
  },
  {
    username: 'willydouglas',
    email: 'willy@eastcolfaxcorner.com',
    password: 'password123',
    isMusician: false
  },
  {
    username: 'devindeScenza',
    email: 'devin@sketchyalley.com',
    password: 'password123',
    isMusician: false
  },
  {
    username: 'ryanbird',
    email: 'ryan@eastaurora.com',
    password: 'password123',
    isMusician: false
  }
];

var events = [
  {
    name: 'event 1',
    date: '2016-12-22T14:00:00.000Z',
    notes: 'sample note',
    location: 'Coffee at The Point, 710 E 26th Ave, Denver, CO 80205, USA',
    endDate: '2016-12-22T15:00:00.000Z',
    ownerId: 1
  },
  {
    name: 'event 2',
    date: '2017-01-22T14:00:00.000Z',
    notes: 'sample note',
    location: 'Coffee at The Point, 710 E 26th Ave, Denver, CO 80205, USA',
    endDate: '2017-01-22T15:00:00.000Z',
    ownerId: 1
  },
  {
    name: 'event 3',
    date: '2016-11-22T14:00:00.000Z',
    notes: 'sample note',
    location: 'Coffee at The Point, 710 E 26th Ave, Denver, CO 80205, USA',
    endDate: '2016-11-22T15:00:00.000Z',
    ownerId: 1
  },
  {
    name: 'event 4',
    date: '2016-12-23T14:00:00.000Z',
    notes: 'sample note',
    location: 'Coffee at The Point, 710 E 26th Ave, Denver, CO 80205, USA',
    endDate: '2016-12-23T15:00:00.000Z',
    ownerId: 1
  },
];

var organizations = [];

module.exports = function (app, cb) {
  var User = app.models.user;
  var Event = app.models.Event;
  var Organization = app.models.Organization;

  async.parallel([
    function (done) {
      User.create(users, done);
    },
    function (done) {
      Event.create(events, done);
    },
    function (done) {
      Organization.create(organizations, done);
    },
  ], function (err, results) {
    if (err) {
      cb(err);
    }
    var userCount = results[0].length;
    var eventCount = results[1].length;
    var orgCount = results[2].length;

    console.log(chalk.green.bold('Successfully Initialized Database models'));
    console.log('✅ Created ' + userCount + ' users');
    console.log('✅ Created ' + eventCount + ' Events');
    console.log('✅ Created ' + orgCount + ' Organizations');

    cb();
  });
};
