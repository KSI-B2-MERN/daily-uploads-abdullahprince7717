const userModel = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {

    getUsers: async (query) => {
        try {
            const offset = (query.pageNo - 1) * query.limit;
            const getUserResponse = await userModel.getUsers(offset, query);
            if (!getUserResponse.response || getUserResponse.error) {
                return {
                    error: getUserResponse.error || "No users found"
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
        console.log("In service")
        try {
            delete body.repeatPassword;
            const userId = uuidv4();

            const user = await userModel.getUserByEmail(body.email);   // to check if email already exists
            if (user.response || user.error) {
                return {
                    error: "User already exists"
                }
            }
            body.password = await bcrypt.hash(body.password, 10)
            // const roleId = "4b412d9d-20c5-4587-97da-58e9b4923441";
            const createUserResponse = await userModel.createUser(body, userId);
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