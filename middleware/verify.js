const jwt = require('jsonwebtoken');
const config = require('../config/config')
var auth = (req, res, next) => {
    // let token = req.headers['token']
    let token=req.params.token
     console.log(" tokemn=====>>>>>>",token);
var secret = "secretkey";
     
     jwt.verify(token, secret, function (err, decoded) {
          if (err) {
               // console.log(err);
               return res.status(401).send({ message: 'Not Authenticated' });
          } else {
               // console.log('decoded data', decoded);
               req.body['data'] = decoded;
               // console.log(req.body);
               req.token = decoded;
               next();
          }
     });

}
module.exports = auth;