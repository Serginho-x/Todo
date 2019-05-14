const sendmail = require('sendmail')({silent: true});

const confirmEmail = (email, url) => sendmail({
    from: 'Todo 👻"<todo@example.com>',
    to: email,
    subject: 'Confirm Email',
    html: `Please click this email to confirm your email: <a href="${url}">Link</a>`      
  }, function (err) {
    if(err) {console.log(err)};
  }
) 

const recoverPassword = (email, url) => sendmail({
    from: 'Todo 👻"<todo@example.com>',
    to: email,
    subject: 'Recover password Email',
    html: `You can change password here: <a href="${url}">Link</a>`      
  }, function (err) {
    if(err) {console.log(err)};
  }
)    

module.exports = {confirmEmail, recoverPassword}