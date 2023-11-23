const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/getuser', userController.getUser)

module.exports = router