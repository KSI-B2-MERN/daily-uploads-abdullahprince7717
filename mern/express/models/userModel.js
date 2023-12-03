const { models } = require('../models/index');

module.exports = {

    getUsers: async () => {
        try {
            const getUsers = await models.USERS.findAll();
            return {
                response: getUsers,
            }
        }
        catch (err) {
            return {
                error: err
            }
        }
    },
    createUser: async (firstName, lastName, email, password, userId) => {
        try {
            const createUser = await models.USERS.create({
                firstName,
                lastName,
                email,
                password,
                userId,
                // roleId

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
    }
}