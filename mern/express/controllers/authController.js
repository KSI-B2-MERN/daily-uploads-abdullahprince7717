const authService = require('../services/authService');

module.exports = {
    signUp: (req, res) => {
        try {
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
    }
}