const sequelize = require('../../bin/dbConnection');
const { Model, DataTypes } = require('sequelize');

class OrderItems extends Model { }

OrderItems.init(
    {
        orderItemId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        // orderId: {
        //     type: DataTypes.STRING(90),
        //     allowNull: false,
        // },
        // productId: {
        //     type: DataTypes.STRING(90),
        //     allowNull: false,
        // },
        orderItemQuantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        OrderItemPrice: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "ORDER_ITEMS",
});

module.exports = OrderItems;
