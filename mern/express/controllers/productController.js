const productService = require('../services/productService');
const joi = require("joi");

const createProductSchema = joi.object().keys({
    userId: joi.string().required(),
    productName: joi.string().required(),
    productDescription: joi.string().required(),
    productImage: joi.string().required()
})

const updateProductSchema = joi.object().keys({
    productId: joi.string().required(),
    productName: joi.string().required(),
    productDescription: joi.string().required(),
    productImage: joi.string().required()
})

const deleteProductSchema = joi.object().keys({
    roleId: joi.string().required()
})

module.exports = {
    createProduct: async (req, res) => {

        try {
            const validate = await createProductSchema.validateAsync(req.body);
            const createProduct = await productService.createProduct(validate);
            if (createProduct.error) {
                res.send({
                    error: createProduct.error
                })
            }
            else {
                res.send({
                    response: createProduct
                })
            }
        }
        catch (err) {
            res.send({
                error: err
            })
        }
    },
    getProducts: async (req, res) => {
        try {
            // console.log("getRole Controller")
            const getProducts = await productService.getProducts();
            // console.log(getRoles);
            if (getProducts.error) {
                res.send({
                    error: getProducts.error
                });
            }
            else {
                res.send({
                    response: getProducts.response
                });
            }

        }
        catch (error) {
            res.send({
                error: error
            })
        }
    },
    updateProduct: async (req, res) => {
        try {
            const validate = await updateProductSchema.validateAsync(req.body);
            const updateProduct = await productService.updateProduct(validate)
            if (updateProduct.error) {
                res.send({
                    error: updateProduct.error
                })
            }
            else {
                res.send({
                    response: updateProduct.response
                })
            }
        }
        catch (error) {
            res.send({
                error: error
            })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            // console.log("req", req)
            const validate = await deleteProductSchema.validateAsync(req.query);
            const deleteProduct = await productService.deleteProduct(validate);

            if (deleteRole.error) {
                res.send({
                    error: deleteProduct.error
                })
            }
            else {
                res.send({
                    response: deleteProduct.response
                })
            }
        }
        catch (error) {
            res.send({
                error: error
            })
        }
    }
}