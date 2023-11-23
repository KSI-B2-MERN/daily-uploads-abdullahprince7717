const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();


router.get('/signup', authController.signUp)
router.get('/login', authController.logIn)
router.get('/resetpass', authController.resetPass)
router.get('/forgetpass', authController.forgetpass)
router.get('/logout', authController.logOut)


module.exports = router

