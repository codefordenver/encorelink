const mailerService = require('../../server/server-utils/emailProvider');

module.exports = function(user) {
  const User = user;
  let frontendUrl = '';

  User.beforeRemote('**', function (ctx, unused, next) {
    frontendUrl = ctx.req.headers.origin;
    next();
  });

  User.on('resetPasswordRequest', function(info){
    const accessToken = info.accessToken.id;
    const email = info.email;
    const user_id = info.accessToken.userId;
    const user = info.user;

    const resetURL = `${ frontendUrl }/resetPassword/?id=${ user_id }&token=${ accessToken }`;
    const emailObject = {
      to: email,
      subject: 'Your EncoreLink account recovery',
      text: '',
      html: `Hi ${user.username || 'friend'},
              <p>Somebody recently asked to reset your EncoreLink password.</p>
              <p><a href='${resetURL}'>Click here to change your password.</a></p>`
    }

    mailerService(emailObject, (err) => {
      if (err) throw err;

      console.log('Email sent.')
    })
  });
};
