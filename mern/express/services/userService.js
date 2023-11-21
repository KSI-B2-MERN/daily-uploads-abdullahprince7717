const userModel = require('../models/userModel');

module.exports = {

    getUser: () => {
        try {
            const getUserResponse = userModel.getUser;
            if (getUserResponse) {
                return {
                    response: getUserResponse.response,
                }
            }
            else {
                return {
                    error: 'User not found'
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