const sequelize = require('../../bin/dbConnection');
const { Model, DataTypes } = require('sequelize');

class CartItems extends Model { }

CartItems.init(
    {
        cartItemId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        cartId: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        // productId: {
        //     type: DataTypes.STRING(90),
        //     allowNull: false,
        // },
        variationId: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        cartItemQuantity: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "CART_ITEMS",
})

module.exports = CartItems;