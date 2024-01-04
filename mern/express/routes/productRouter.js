const router = require('express').Router();
const productController = require('../controllers/productController');

router.post('/createproduct', productController.createProduct);
router.get('/getproducts', productController.getProducts);
router.post('/updateproduct', productController.updateProduct);
router.get('/deleteproduct', productController.deleteProduct);

module.exports = router;