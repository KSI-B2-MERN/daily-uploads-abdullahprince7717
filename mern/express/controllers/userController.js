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
    getUser: (req, res) => {
        try {
            const userServiceResponse = userService.getUser();
            if (userServiceResponse.response) {
                res.send({
                    response: userServiceResponse.response
                })
            }
            else {
                res.send({
                    error: userServiceResponse.error
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