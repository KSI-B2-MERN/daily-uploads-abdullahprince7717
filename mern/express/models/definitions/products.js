const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Products extends Model { }

Products.init(
    {
        productId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        productName: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        productDescription: {
            type: DataTypes.STRING(90),
            allowNull: true,
        },
        productImage: {
            type: DataTypes.STRING(90),
            allowNull: false,
            unique: true,
        }
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "PRODUCTS",
})

module.exports = Products;