const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Roles extends Model { }

Roles.init(
    {
        roleId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        roleName: {
            type: DataTypes.STRING(34),
            allowNull: false,
            unique: true,
        },
        roleDescription: {
            type: DataTypes.STRING(90),
            allowNull: false,
        }
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "ROLES",
})

module.exports = Roles;