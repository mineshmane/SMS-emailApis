module.exports.mail = (url,callback) => {
  var nodemailer = require('nodemailer');
 
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mineshmane94@gmail.com',
      pass: 'Rahul@12345'
    }
  });

  var mailOptions = {
    from: 'mineshmane94@gmail.com',
    to: 'mineshmane94@gmail.com',
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



