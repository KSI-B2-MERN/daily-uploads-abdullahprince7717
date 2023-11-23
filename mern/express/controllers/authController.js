const authService = require('../services/authService');
const joi = require("joi");



// {
//     "name"  : "wow",
//     "email" : "wow@gmail.com"
// }

module.exports = {
    signUp: (req, res) => {
        try {
            console.log('req.body', req.body);
            const serviceResponse = authService.signUp();
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
    logIn: (req, res) => {
        try {
            console.log('req.body', req.body);
            const serviceResponse = authService.logIn();
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