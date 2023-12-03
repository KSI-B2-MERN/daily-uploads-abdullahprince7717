const { models } = require('../models/index');

module.exports = {

    getUser: () => {
        try {
            return {
                response: "Getting User",
            }
        }
        catch (err) {
            return {
                error: "User not found" + err.message
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