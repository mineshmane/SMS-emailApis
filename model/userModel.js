const mongoose = require('mongoose');
const byCrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const config = require('../../config/config');
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
        required: [true, 'Email is Required']
    }

}, {
    'timestamps': true
});
let User = mongoose.model('User', userSchema);