const productModel = require('../models/productModel');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createProduct: async (body) => {
        // console.log("check1")
        try {
            const productId = uuidv4();
            const createProduct = await productModel.createProduct(body.userId, body.productName, body.productDescription, productId, body.productImage);
            if (createProduct.error) {
                return {
                    error: createProduct.error
                }
            }
            else {
                return {
                    response: createProduct.response
                }
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    getProducts: async () => {
        try {
            // console.log("getRole Service")
            const getProducts = await productModel.getProducts();
            // console.log(getRoles);
            if (getProducts.error) {
                return {
                    error: getProducts.error
                };
            }
            else {
                return {
                    response: getProducts.response
                };

            }
        }
        catch (error) {
            return {
                error: error,
            }
        }
    },
    updateProduct: async (body) => {
        try {
            const updateProduct = await productModel.updateProduct(body);
            return {
                response: updateProduct
            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    },
    deleteProduct: async (query) => {
        try {
            // check if role exists or not! then delete it!
            const deleteProduct = await productModel.deleteProduct(query);
            return {
                response: deleteProduct
            };
        }
        catch (error) {
            return {
                error: error
            }
        }
    }
}