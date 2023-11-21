const userService = require('../services/userService');

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
    }
}