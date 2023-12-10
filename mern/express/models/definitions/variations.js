const sequelize = require('../../bin/dbConnection');
const { Model, DataTypes } = require('sequelize');

class Variations extends Model { }

Variations.init(
    {
        variationId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        variationPrice: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "VARIATIONS",
})

module.exports = Variations;