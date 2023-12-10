//relations exists here in this file
//this file is used to define the table structure of the users table
const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Users extends Model { } // Users class will be treated as a model(table) now after extending Model class.

Users.init(
    {
        userId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        firstName: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(990),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "USERS",
})

module.exports = Users;