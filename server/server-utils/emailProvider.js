const nodemailer = require('nodemailer');
const Mailgun = require('mailgun-js');

/**
 * use this for direct emails that the user requests
 * example: password reset
 */
function directEmail(mailObject, callback) {
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

/**
 * Use this for transactional emails that require unsubscribe
 * example: updates on an event
 */
function transactionEmail(mailObject, callback) {
  const api_key = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const from_who = process.env.MAILGUN_FROM;
  const data = {
    ...mailObject,
    from_who
  }

  const mailgun = new Mailgun({apiKey: api_key, domain: domain});
  mailgun.messages().send(data, callback);
}

module.exports = {
  directEmail,
  transactionEmail
};
