const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/getusers', userController.getUsers)
router.post('/createuser', userController.createUser)

module.exports = router