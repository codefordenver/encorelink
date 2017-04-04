var mailerService = require('../../server/server-utils/emailProvider');

module.exports = function(user) {
    var User = user;
    var frontendUrl = "";
    console.log(frontendUrl);
    /* 
    WARNING: Utterly disgusting, dirty hack.
    So in order for our backend to find the correct URL to direct the client to in the email
    when resetting their password, we need to access the 'req' object. From what I can tell
    the only way to do that is with a pre or post hook, which is passed the 'context' argument as
    the first one in the list.

    I declard a variable above in a higher scope (frontendUrl) with an empty string. Before the
    user.on 'resetpasswordrequest' is called, the beforeRemote method fires, gets the req object 
    and sets frontendUrl equal to the headers.origin.

    frontendUrl is then accessed by the 'resetPasswordRequest' to set the URL.

    If anyone comes up with a better implementation, please go right ahead.

    I'm sorry.
    */


    User.beforeRemote('**', function (ctx, unused, next) {
      frontendUrl = ctx.req.headers.origin;
      next();
    });

    User.on('resetPasswordRequest', function(info){
      var accessToken = info.accessToken.id;
      var email = info.email;
      var user_id = info.accessToken.userId;

      var resetURL = frontendUrl + '/resetPassword/?id=' + user_id + '&token=' + accessToken;
   
      var emailObject = {
        to: email,
        subject: 'Your EncoreLink account recovery',
        text: '',
        html: `Hi ${User.name},
              <p>Somebody recently asked to reset your EncoreLink password.</p>
              <p><a href='${resetURL}'>Click here to change your password.</a></p>`
      }

      mailerService(emailObject, (err) => {
        if (err) throw err;

        console.log('Email sent.')
      })
    });

};
