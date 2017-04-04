var nodemailer = require('nodemailer');

module.exports = function emailProvider(mailObject, callback) {
  //from email:
  var fromEmail = process.env.APP_EMAIL; // 'email-address'
  //emailserver token:
  var smtpToken = process.env.APP_EMAILPW; // 'smtpassword';

 var transporter = nodemailer.createTransport({
    service: 'Zoho',
    auth: {
      user: fromEmail,
      pass: smtpToken
    }
   });

  mailObject.from = "'EncoreLink' <" + fromEmail + ">";
  
  return transporter.sendMail(mailObject, callback);
}