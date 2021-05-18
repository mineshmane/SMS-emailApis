const mongoose = require('mongoose');

// const byCrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');
const config = require('../configu/config');
const userSchema = new mongoose.Schema({
    'username': {
        type: String,
        required: [true, 'username is required']
    },
    'phone': {
        type: String,
        required: [true, 'phone is required']
    },
    'email': {
        type: String,
        required: [true, 'Email is Required'],
        unique: true

    },
    'password': {
        type: String,
        required: [true, 'password required']
    }

}, {
    'timestamps': true
});
let User = mongoose.model('User', userSchema);


const PaymentSchema = new mongoose.Schema({
    'amount': {
        type: Number,
    },
    'TotalAmount': {
        type: Number,
        required: [true, 'amount is required']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User Id required"]
    },

}, {
    'timestamps': true
});
let payment = mongoose.model('payment', PaymentSchema);

class UserModel {

    create(req) {
        return new Promise((resolve, reject) => {

            User.create(req).then((result) => {
                console.log(" user verifued info ", result);
                let reqObj = {
                    TotalAmount: '5000',
                    userId: result._id
                }

                payment.create(reqObj).then(res => {
                    console.log(res);
                    let data = result;
                    resolve({ " user": result, "account": res })
                }).catch(err => {
                    reject(err)
                })


            }).catch((err) => {
                reject(err)
            })
        })


    }

    get(req) {

        return new Promise((resolve, reject) => {
            User.find(req).then(result => {
                resolve(result)

            }).catch(err => {
                reject(err)
            })
        })

    }

    getAmount(req) {
        console.log(req);
        return new Promise((resolve, reject) => {
            payment.find(req).then(result => {
                console.log(" result ", result);
                resolve(result)

            }).catch(err => {
                reject(err)
            })
        })
    }
    Update(req) {
        return new Promise((resolve, reject) => {
            payment.updateOne({ _id: req._id }, { TotalAmount: req.TotalAmount, userId: req.userId },{ new: true }).then(result => {
                console.log(" request ", result);
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })

    }



}
module.exports = new UserModel();