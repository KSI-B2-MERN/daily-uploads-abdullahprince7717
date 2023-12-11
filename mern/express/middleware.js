const jwt = require('jsonwebtoken');
const sessionModel = require('./models/definitions/session');
const userModel = require('./models/definitions/users');
const config = require('./config.json');

module.exports = {
    customer: async (req, res, next) => {
        console.log("req.cookies", req.cookies)
        try {
            // const userId = req.cookies.auth.token.userId;
            const token = req.cookies.auth.token.token;

            jwt.verify(token, config.jwt.secret, async (error, data) => {

                if (error) {
                    return res.send({
                        error: "Invalid request",
                    })
                }
                const session = await sessionModel.getSessionByuserId(data.userId);
                if (session.error) {
                    res.send({
                        message: "Invalid Request"
                    })
                }

                const role = await userModel.getRoleByUserId(data.userId);
                if (role.error || !role.response) {
                    res.send({
                        message: "Invalid Request"
                    })
                }
                if (role.response.dataValues.role.dataValues.role !== "Customer") {
                    return res.send({
                        message: "Invalid Request"
                    })
                }
                console.log("user", user)
            })
            next();
        }
        catch {
            res.send({
                message: "Invalid Request"
            })
        }
    },
    vendor: async (req, res, next) => {
        try {
            const token = req.cookies.auth.token.token;
            jwt.verify(token, config.jwt.secret, async (error, data) => {
                if (error) {
                    return res.send({
                        error: "Invalid request1",
                    });
                }
                const session = await sessionModel.getSessionByUserId(data.userId);
                if (session.error || !session.response) {
                    return res.send({
                        error: "Invalid request2",
                    });
                }
                const role = await userModel.getRoleByUserId(data.userId);
                if (role.error || !role.response) {
                    return res.send({
                        error: "Invalid request3",
                    });
                }
                console.log("role ", role.response.dataValues.role.dataValues);

                if (role.response.dataValues.role.dataValues.role !== "Vendor") {
                    return res.send({
                        error: "Invalid request4",
                    });
                }
                next();
            });
        } catch (error) {
            return res.send({
                message: "Invalid request5",
            });
        }
    },
};