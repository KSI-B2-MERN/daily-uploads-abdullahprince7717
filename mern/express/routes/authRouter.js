const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();


router.post('/signup', authController.signUp)
router.post('/login', authController.logIn)
router.get('/resetpass', authController.resetPass)
router.get('/forgetpass', authController.forgetpass)
router.get('/logout', authController.logOut)


module.exports = router

