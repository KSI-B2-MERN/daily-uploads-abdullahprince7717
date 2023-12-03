const router = require('express').Router();
const roleController = require('../controllers/roleController');

router.post('/createRole', roleController.createRole);
router.get('/getRoles', roleController.getRoles);

module.exports = router;