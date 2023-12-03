const userModel = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {

    getUsers: async () => {
        try {
            const getUserResponse = await userModel.getUsers();
            if (getUserResponse.error) {
                return {
                    error: getUserResponse.error
                }
            }
            else {
                return {
                    response: getUserResponse.response,
                }
            }

        }

        catch (err) {
            return {
                error: err,
            }
        }
    },
    createUser: async (body) => {
        try {
            delete body.repeatPassword;
            const userId = uuidv4();
            body.password = await bcrypt.hash(body.password, 10)
            // const roleId = "4b412d9d-20c5-4587-97da-58e9b4923441";
            const createUserResponse = await userModel.createUser(body.firstName, body.lastName, body.email, body.password, userId);
            if (createUserResponse.error) {
                return {
                    error: createUserResponse.error
                }

            }
            else {
                return {
                    response: createUserResponse.response
                }
            }
        }
        catch (error) {
            return {
                error: error
            }
        }
    }
}