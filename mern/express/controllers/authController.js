const authService = require('../services/authService');
const joi = require("joi");

const signupSchema = joi.object().keys({
    name: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeatPassword: joi.ref('password')
})

const loginSchema = joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

// {
//     "name"  : "wow",
//     "email" : "wow@gmail.com"
// }

module.exports = {
    signUp: async (req, res) => {
        try {
            // console.log('req.body', req.body);
            const validate = await signupSchema.validateAsync(req.body)
            console.log(validate);
            const serviceResponse = await authService.signUp(validate);
            if (serviceResponse.response) {
                res.send({
                    response: serviceResponse.response
                })
            }
            else {
                res.send({
                    error: serviceResponse.error
                })
            }
        }
        catch (err) {
            console.log(err);
            res.send({
                error: err
            })
        }
    },
    logIn: async (req, res) => {
        try {
            const validate = await loginSchema.validateAsync(req.body)
            const serviceResponse = await authService.logIn(validate);
            if (serviceResponse.error) {
                return res.send({
                    error: serviceResponse.error

                })
            }
            const cookies = { token: serviceResponse.response }
            const hour = 60 * 60 * 1000
            res.cookie("auth", cookies, {
                maxAge: hour,
                httpOnly: true,
            })
            return res.send({
                response: serviceResponse.response
            })

        }
        catch (err) {
            return res.send({
                error: err
            })
        }
    },
    forgetpass: (req, res) => {
        try {
            console.log('req.body', req.body);
            const serviceResponse = authService.forgetPass();
            if (serviceResponse.response) {
                res.send({
                    response: serviceResponse.response
                })
            }
            else {
                res.send({
                    error: serviceResponse.error
                })
            }
        }
        catch (err) {
            res.send({
                error: err
            })
        }
    },
    resetPass: (req, res) => {
        try {
            console.log('req.body', req.body);
            const serviceResponse = authService.resetPass();
            if (serviceResponse.response) {
                res.send({
                    response: serviceResponse.response
                })
            }
            else {
                res.send({
                    error: serviceResponse.error
                })
            }
        }
        catch (err) {
            res.send({
                error: err
            })
        }
    },
    logOut: (req, res) => {
        try {
            console.log('req.body', req.body);
            const serviceResponse = authService.logOut();
            if (serviceResponse.response) {
                res.send({
                    response: serviceResponse.response
                })
            }
            else {
                res.send({
                    error: serviceResponse.error
                })
            }
        }
        catch (err) {
            res.send({
                error: err
            })
        }
    },

}