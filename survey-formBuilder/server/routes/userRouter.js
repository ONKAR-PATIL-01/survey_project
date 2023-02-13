
const express =require('express');
const router=express.Router();
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const {registerUser,login} =require('../controllers/userController')
router.route('/').post(registerUser)
router.route('/login').post(login)

module.exports=router;