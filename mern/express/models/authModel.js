//Calling functions for definitions(Tables

const { models } = require('../models/index');
module.exports = {
    signUp: async (body) => {
        try {
            return {
                response: await models.Users.create(body),
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    logIn: async (email) => {
        try {
            const user = await models.USERS.findOne({
                where: {
                    email: email,
                }
            })
            return {
                response: "User Logged In",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    forgetPass: () => {
        try {
            return {
                response: "User Forgot Password",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    resetPass: () => {
        try {
            return {
                response: "User reset Password",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    logOut: () => {
        try {
            return {
                response: "User logged out",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    }


}