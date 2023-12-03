const router = require('express').Router();
const roleController = require('../controllers/roleController');

router.post('/createrole', roleController.createRole);
router.get('/getroles', roleController.getRoles);
router.post('/updaterole', roleController.updateRole);
router.get('/deleterole', roleController.deleteRole);

module.exports = router;