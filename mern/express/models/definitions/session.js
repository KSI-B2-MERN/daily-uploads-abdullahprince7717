const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Session extends Model { }
Session.init(
    {
        sessonId: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    modelName: "SESSION",
})

module.exports = Session;