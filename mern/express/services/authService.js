const authModel = require('../models/authModel');

module.exports = {
    signUp: () => {
        try {
            const signUpResponse = authModel.signUp();
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
    }, logIn: () => {
        try {
            const logInResponse = authModel.logIn();
            if (logInResponse) {
                return {
                    response: logInResponse.response,
                }
            }
            else {
                return {
                    error: logInResponse.error,
                }
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    }

}