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
            type: DataTypes.ARRAY(DataTypes.STRING(1000)),
            allowNull: false,
            unique: true,
        },
        productQuantity: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        productCategory: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        productPrice: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "PRODUCTS",
})

module.exports = Products;