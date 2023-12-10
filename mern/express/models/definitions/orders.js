const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Orders extends Model { }

Orders.init(
    {
        orderId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },

    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "ORDERS",
})

module.exports = Orders;