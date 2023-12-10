const authModel = require('../models/authModel');
const userModel = require('../models/userModel');
const config = require('../config.json');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    signUp: async (body) => {
        try {
            delete body.repeatPassword;
            body.password = await bcrypt.hash(body.password, 10)
            const signUpResponse = await authModel.signUp(body);
            if (signUpResponse) {
                return {
                    response: signUpResponse.response,
                }
            }
            else {
                return {
                    error: signUpResponse.error,
                }
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
            const forgetPassResponse = authModel.forgetPass();
            if (forgetPassResponse) {
                return {
                    response: forgetPassResponse.response,
                }
            }
            else {
                return {
                    error: forgetPassResponse.error,
                }
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    }, resetPass: () => {
        try {
            const resetPassResponse = authModel.resetPass();
            if (resetPassResponse) {
                return {
                    response: resetPassResponse.response,
                }
            }
            else {
                return {
                    error: resetPassResponse.error,
                }
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    }, logOut: () => {
        try {
            const logOutResponse = authModel.logOut();
            if (logOutResponse) {
                return {
                    response: logOutResponse.response,
                }
            }
            else {
                return {
                    error: logOutResponse.error,
                }
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    }, logIn: async (email) => {
        try {
            const logInResponse = await userModel.getUserByEmail(email)
            if (logInResponse.error || !logInResponse.response) {
                return {
                    error: logInResponse.error || "Invalid Credentials",
                }
            }
            const login = await bcrypt.compare(body.password, logInResponse.response.password);

            if (!login) {
                return {
                    error: "Invalid credentials",
                }
            }
            delete logInResponse.response.dataValues.password;
            const token = jwt.sign(logInResponse.response.dataValues, config.jwt.secret, { expiresIn: '1h' });

            const session = await sessionModel.getSessionByUserId(
                logInResponse.response.dataValues.userId
            );

            if (session) {
                await sessionModel.deleteSession(logInResponse.response.dataValues.userId);
            }

            const sessionId = uuidv4();
            const createdSession = await sessionModel.createSession({
                token,
                userId: logInResponse.response.dataValues.userId,
                sessionId,
            });

            if (logInResponse.error || !logInResponse.response) {
                return {
                    error: logInResponse.error || "Unable to Login",
                }
            }

            return {
                response: createdSession.response,
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    }

}