const { models } = require('../models/index');

module.exports = {
    createSession: async (token, userId, sessonId) => {
        try {
            const session = await models.SESSION.create({  // upsert is used to update a row if it exists or create a new row if it doesnt exist
                sessonId,
                token,
                userId,

            });
            return {
                response: session
            };
        }
        catch (err) {
            console.log("Create Error", err);
            return {
                error: err
            }
        }
    },
    getSessionByUserId: async (userId) => {
        try {
            const session = await models.SESSION.findOne({
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
            const deleteSession = await models.SESSION.destroy({   // destroy is used to delete a row as table isnt paranoid
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