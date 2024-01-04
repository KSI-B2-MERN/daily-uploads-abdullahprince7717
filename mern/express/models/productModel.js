
const { models } = require('./index');
module.exports = {
    createProduct: async (userId, productName, productDescription, productId, productImage, productQuantity, productCategory, productPrice) => {
        console.log("check1 Model")
        try {
            const createProduct = await models.PRODUCTS.create({
                userId,
                productName,
                productDescription,
                productId,
                productImage,
                productQuantity,
                productCategory,
                productPrice
            });
            return {
                response: createProduct
            };
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    getProducts: async () => {
        try {
            const getProducts = await models.PRODUCTS.findAll();
            return {
                response: getProducts
            };
        }
        catch (error) {
            return {
                error: error,
            }
        }
    },
    updateProduct: async (body) => {
        try {
            const updateProduct = await models.PRODUCTS.update({
                productName: body.productName,
                productDescription: body.productDescription,
                productImage: body.productImage
            }, {
                where: {
                    productId: body.productId
                }
            });
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
            const deleteProduct = await models.PRODUCTS.destroy({
                where: {
                    productId: query.productId
                }
            });
            return {
                response: deleteProduct
            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    }

}