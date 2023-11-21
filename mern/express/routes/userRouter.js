const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

module.exports = [

    router.get('/getuser', userController.getUser)
]