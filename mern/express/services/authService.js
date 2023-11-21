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
    }

}