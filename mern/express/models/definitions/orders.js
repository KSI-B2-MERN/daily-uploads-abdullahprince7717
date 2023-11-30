const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Orders extends Model { }

Orders.init(
    {
        orderId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        // userId: {
        //     type: DataTypes.STRING(90),
        //     allowNull: false,
        // },
        // productId: {
        //     type: DataTypes.STRING(90),
        //     allowNull: false,
        // },
        // orderStatus: {
        //     type: DataTypes.STRING(90),
        //     allowNull: false,
        // }
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "ORDERS",
})

module.exports = Orders;