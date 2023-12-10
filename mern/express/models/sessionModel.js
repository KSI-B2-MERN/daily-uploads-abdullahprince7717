const { models } = require('../index');

module.exports = {
    createSession: async (token, userId, sessionId) => {
        try {
            const createSession = await models.SESSIONS.create({  // upsert is used to update a row if it exists or create a new row if it doesnt exist
                token,
                userId,
                sessionId
            })
            return {
                response: createSession
            }
        }
        catch (err) {
            return {
                error: err
            }
        }
    },
    getSessionByUserId: async (userId) => {
        try {
            const session = await models.SESSIONS.findOne({
                where: {
                    userId: userId
                },
            })
            return {
                response: session
            }
        }
        catch (err) {
            return {
                error: err
            }
        }
    },
    deleteSession: async (userId) => {
        try {
            const deleteSession = await models.SESSIONS.destroy({   // destroy is used to delete a row as table isnt paranoid
                where: {
                    userId: userId
                }
            })
            return {
                response: deleteSession
            }
        }
        catch (err) {
            return {
                error: err
            }
        }
    }
}