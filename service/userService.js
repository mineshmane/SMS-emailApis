const model = require('../model/userModel')
const SendOtp = require('sendotp');
// const sendOtp = new SendOtp('AuthKey');
const sendMail = require('../middleware/mailer')
const token = require('../middleware/token')
const sendOtp = new SendOtp('AuthKey', 'Otp for your order is {{otp}}, please do not share it with anybody');


class UserService {
    signupService(req) {
        return this.sendSmsOtp(req.phone).then(result => {

            console.log(" result after sms ", result);


        }).catch(error => {
            return error
        })

    }

    sendSmsOtp(mob) {
        return new Promise((resolve, reject) => {
            sendOtp.send(mob, "PRIIND", "4635", function (error, data) {
                if (error) {
                    return reject(error);
                } else {
                    return resolve(data);

                }
            });
        })


    }
    mailService(req) {
        console.log(req.email);
        return new Promise((resolve, reject) => {
            const payload = {
                email: req.email,
                phone: req.phone,
                username: req.username,
                password: req.password
            }

            const resObj = token.generateNewToken(payload);



            const url = `http://localhost:4200/verify/${resObj.token}`;


            sendMail.mail(url,payload, (err, data) => {
                if (err) {
                    reject(err)
                }
                console.log("sms ", data);
                resolve(data)
            });

        })


    }

    otpVeryfication(otp) {
        return new Promise((resolve, reject) => {
            sendOtp.verify("919999999999", "4365", function (error, data, response) {
                console.log(data); // data object with keys 'message' and 'type'
                if (data.type == 'success') console.log('OTP verified successfully')
                if (data.type == 'error') console.log('OTP verification failed')
            });
        })


    }
    storeInDatabase(req) {
        return model.create(req).then(data => {
            return { "message": "verified sucessfull", "data": data };
        }).catch(err => {
            return err;
        })
    }

    login(req) {

        let reqObj = { 'email': req.email }
        return model.get(reqObj).then(data => {
            if (data.length > 0) {
                if (req.password == data[0].password) {

                    const payload = {
                        email: data[0].email,
                        id: data[0]._id
                    }

                    const resObj = token.generateNewToken(payload);
                    let obj = {
                        username: data[0].username,
                        email: data[0].email,
                        phone: data[0].phone,
                        token: resObj.token,
                        UserId:data[0]._id
                    }

                    return { "message": "login successfull", "data": obj }
                } else {
                    return { "message": "password didnot match" }
                }

            } else {
                return { "message": "usernot found! please register first" }
            }
        }).catch(err => {
            return err
        })
    }


    depositeAmount(req) {
        let params = { userId: req.userId }     
        return model.getAmount(params).then((res) => {
            if (res.length > 0) {
                let re = {
                    TotalAmount: Number(req.amount) + Number(res[0].TotalAmount),
                    userId: req.userId,
                    _id: res[0]._id
                }
                return model.Update(re).then(result => {
                    console.log("  updated ", result);
                    return result
                }).catch(err => {
                    return err
                })

            }

        }).catch(err => {
            return err
        })
      

    }
    getAmount(req) {
        let param2 = { userId: req }
        console.log(param2);
        return model.getAmount(param2).then(result => {
            console.log(result);
            return result;
        }).catch(err => {
            return err
        })
    }

    withdrawService(req) {
        let params = { userId: req.userId }
        console.log(" req,", params);
        return model.getAmount(params).then((res) => {
            console.log(" result update in service", res);
            if (res.length > 0) {
                let re = {
                    TotalAmount: res[0].TotalAmount - req.amount,
                    userId: req.userId,
                    _id: res[0]._id
                }
                console.log(re);
                return model.Update(re).then(result => {
                    console.log("  updated ", result);
                    return result
                }).catch(err => {
                    return err
                })

            }

        }).catch(err => {
            return err
        })
    }
}
module.exports = new UserService();