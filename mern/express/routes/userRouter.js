const middleware = require('../middleware');
const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/getusers', middleware.customer, userController.getUsers) // middleware usage : only the logged in user will be able to access this route
router.post('/createuser', middleware.vendor, userController.createUser)

module.exports = router
