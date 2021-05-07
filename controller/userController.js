const service = require('../service/userService')
const sendMail = require('../middleware/mailer')
const token = require('../middleware/token')
class UserController {

    signUp(req, res) {
        console.log(" controller is calling ", req.body);
        service.mailService(req.body).then(result => {

            service.sendSmsOtp(req.body.phone).then(response => {
                return res.send({ "email": response, "sms": result })


            }).catch(err => {
                return res.send(err).status(200)
            });
        }).catch(err => {
            return res.send(err).status(400)
        })



    }

    veryfyController(req, res) {
        console.log(" request ", req.body.data.payload);
        let obj = {
            username: req.body.data.payload.username,
            email: req.body.data.payload.email,
            phone: req.body.data.payload.phone,
            password: req.body.data.payload.password
        }
        service.storeInDatabase(obj).then(result => {
            return res.send(result)
        }).catch(err => {
            return res.send(err)
        })

    }
    login(req, res) {
        console.log(" req ", req.body);
        service.login(req.body).then(response => {
            return res.send(response)
        }).catch(err => {
            return err
        })
    }

    getMount(req, res) {
        console.log("paload", req.body.data.payload.id);
        service.getAmount(req.body.data.payload.id).then(data => {
            return res.send(data)
        }).catch(err => {
            return res.send(err)
        })
    }
    deposite(req, res) {
        console.log("paload", req.body.data.payload.id, "abcd", req.body.amount);
        let obj = {
            userId: req.body.data.payload.id,
            amount: req.body.amount
        }
        service.depositeAmount(obj).then(re => {
            return res.send(re)
        }).catch(err => {
            return res.send(err)
        })

    }
    withdraw(req,res){
        console.log("paload", req.body.data.payload.id, "abcd", req.body.amount);
        let obj = {
            userId: req.body.data.payload.id,
            amount: req.body.amount
        }
        service.withdrawService(obj).then(re => {
            return res.send(re)
        }).catch(err => {
            return res.send(err)
        })
    }

}
module.exports = new UserController();
