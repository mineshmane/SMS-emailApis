module.exports.mail = (url,email,callback) => {
  var nodemailer = require('nodemailer');
 console.log(" email is in emailer", email.email);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mineshmane94@gmail.com',
      pass: 'Rahul@12345'
    }
  });

  var mailOptions = {
    from: 'mineshmane94@gmail.com',
    to: email.email,
    subject: 'Verification link',
    text: url
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      callback(error)
    } else {
      console.log('Email sent: ' + info.response);
     callback(null, info.response)
    }

  });

}



