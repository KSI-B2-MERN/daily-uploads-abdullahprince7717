const router = require('express').Router();
const productController = require('../controllers/productController');
// const upload = multer({ storage: storage });

// router.post('/upload', upload.single('image'), (req, res) => {
//     console.log("req.file: ", req.file);
//     res.send(req.file);
// })
router.post('/createproduct', productController.createProduct);
router.get('/getproducts', productController.getProducts);
router.post('/updateproduct', productController.updateProduct);
router.get('/deleteproduct', productController.deleteProduct);

module.exports = router;