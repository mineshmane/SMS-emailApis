const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const auth = require('../middleware/verify')


router.post('/register', userController.signUp);
router.post('/verification/:token', auth, userController.veryfyController);
router.post('/login',userController.login);
router.get('/getamount/:token',auth,userController.getMount)
router.put('/deposite/:token',auth,userController.deposite)
router.put('/withdraw/:token', auth,userController.withdraw)

console.log(" in the router ");
module.exports = router;