'use strict';

const transactionEmail = require('../../server/server-utils/emailProvider').transactionEmail;

module.exports = function(EventVolunteer) {
  let frontendUrl = '';

  EventVolunteer.beforeRemote('**', function (ctx, unused, next) {
    frontendUrl = ctx.req.headers.origin;
    next();
  });

  EventVolunteer.observe('before save', function filterProperties(ctx, next) {
    if (!ctx.isNewInstance) {
      return next();
    }

    ctx.Model.app.models.Event.findById(ctx.instance.eventId, { include: 'owner' }, (err, res) => {
      const owner = res.owner();

      const eventSignupBody = {
        from: process.env.MAILGUN_FROM,
        to: 'nlkluth@gmail.com',// owner.email,
        subject: 'A musician requested to preform at your event!',
        text: `Hello, ${owner.username}.
        A musician has requested to perform at ${res.name}.
        Go to ${frontendUrl}/event/${res.id} to review the request.

        Thanks!`.replace(/^ +/gm, '')
      };

      transactionEmail(eventSignupBody, function(err, res) {
        next();
      });
    });
  });
};
