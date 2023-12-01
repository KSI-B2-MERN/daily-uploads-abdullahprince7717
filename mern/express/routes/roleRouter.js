const router = require('express').Router();
const roleController = require('../controllers/roleController');

router.post('/createRole', roleController.createRole);

module.exports = router;