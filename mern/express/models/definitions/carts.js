const sequelize = require('../../bin/dbConnection');
const { Model, DataTypes } = require('sequelize');

class Carts extends Model { }

Carts.init(
    {
        cartId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },

    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "CARTS",
})

module.exports = Carts;