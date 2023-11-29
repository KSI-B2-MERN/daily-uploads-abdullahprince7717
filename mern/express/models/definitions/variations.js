const sequelize = require('../../bin/dbConnection');
const { Model, DataTypes } = require('sequelize');

class Variations extends Model { }

Variations.init(
    {
        variationId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        variationName: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        variationDescription: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        variationPrice: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        productId: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "VARIATIONS",
})