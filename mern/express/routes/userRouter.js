const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/getuser', userController.getUser)
router.post('/createuser', userController.createUser)

module.exports = router