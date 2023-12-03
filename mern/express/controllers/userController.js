const userService = require('../services/userService');
const joi = require("joi");

const userSchema = joi.object().keys({
    firstName: joi.string().required().min(3),
    lastName: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeatPassword: joi.ref('password')
})


module.exports = {
    getUsers: (req, res) => {
        try {
            const userServiceResponse = userService.getUsers();
            if (userServiceResponse.error) {
                res.send({
                    error: userServiceResponse.error
                })
            }
            else {
                res.send({
                    response: userServiceResponse.response
                })
            }
        }
        catch (err) {
            res.send({
                error: err
            })
        }
    },
    createUser: async (req, res) => {
        try {
            const validate = await userSchema.validateAsync(req.body)
            const createUserResponse = await userService.createUser(validate);
            if (createUserResponse.error) {
                res.send({
                    error: createUserResponse.error
                })
            }
            else {
                res.send({
                    response: createUserResponse.response
                })
            }
        }
        catch (error) {
            res.send({
                error: error
            })
        }
    }
}