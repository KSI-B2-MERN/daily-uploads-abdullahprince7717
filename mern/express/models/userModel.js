const { models } = require('../models/index');
const { Op } = require('sequelize');

module.exports = {

    getUsers: async (offset, query) => {
        try {
            const getUsers = await models.USERS.findAll({
                where: {
                    ...(query.email ? { email: { [Op.substring]: query.email } } : true)
                },

                attributes: {
                    exclude: ["password", "createdAt", "updatedAt", "deletedAt"]
                },
                include: {
                    model: models.ROLES,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "deletedAt"]
                    },
                    where: {
                        ...(query.roleName ? { role: query.roleName } : true) // ...(3 dots) is used here to apply ternary operator 
                    }
                },
                offset: offset,
                limit: query.limit,
                order: [
                    [query.sortValue, query.sortOrder]
                ]

            });
            return {
                response: getUsers

            }
        }
        catch (err) {
            return {
                error: err
            }
        }
    },
    createUser: async (body, userId) => {
        console.log('In Model')
        try {
            const createUser = await models.USERS.create({
                userId,
                ...body,
            })
            return {
                response: createUser
            }
        }
        catch (error) {
            return {
                error: error
            }
        }
    },

    getUserByEmail: async (email) => {    // to check if email already exists and will also be used in login
        try {
            const getUserByEmail = await models.USERS.findOne({
                where: {
                    email: email
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"]
                },
            })
            return {
                response: getUserByEmail
            }
        }
        catch (error) {
            return {
                error: error
            }
        }
    },
    deleteUser: async (userId) => {
        try {
            const user = await models.users.destroy({
                where: {
                    userId: userId,
                },
            });
            return {
                response: user,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    getRoleByUserId: async (userId) => {
        try {
            const getRoleByUserId = await models.USERS.findOne({
                where: {
                    userId: userId
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"]
                },
                include: {
                    model: models.ROLES,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "deletedAt"]
                    }
                }
            })
            return {
                response: getRoleByUserId
            }
        }
        catch (error) {
            return {
                error: error
            }
        }
    }
}