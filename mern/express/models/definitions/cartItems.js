const sequelize = require('../../bin/dbConnection');
const { Model, DataTypes } = require('sequelize');

class CartItems extends Model { }

CartItems.init(
    {
        cartItemId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },

        cartItemQuantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "CART_ITEMS",
})

module.exports = CartItems;