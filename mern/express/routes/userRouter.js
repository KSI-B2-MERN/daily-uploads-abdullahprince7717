const middleware = require('../middleware');
const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/getusers', userController.getUsers) // middleware usage : only the logged in user will be able to access this route
router.post('/createuser', userController.createUser)

module.exports = router
