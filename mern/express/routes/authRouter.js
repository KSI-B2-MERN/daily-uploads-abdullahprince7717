const authController = require('../controllers/authController');
// const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

module.exports = [

    router.get('/signup', authController.signUp),
    // router.get('/users', userController.getUser)
]