const roleService = require('../services/roleService');
const joi = require("joi");

const roleSchema = joi.object().keys({
    roleName: joi.string().required(),
    roleDescription: joi.string().required()
})

module.exports = {
    createRole: async (req, res) => {

        try {
            const validate = await roleSchema.validateAsync(req.body);
            const createRole = await roleService.createRole(validate);
            if (createRole.error) {
                res.send({
                    error: createRole.error
                })
            }
            else {
                res.send({
                    response: createRole
                })
            }
        }
        catch (err) {
            res.send({
                error: err
            })
        }
    },
    getRoles: async (req, res) => {
        try {
            // console.log("getRole Controller")
            const getRoles = await roleService.getRoles();
            // console.log(getRoles);
            if (getRoles.error) {
                res.send({
                    error: getRoles.error
                });
            }
            else {
                res.send({
                    response: getRoles.response
                });
            }

        }
        catch (error) {
            res.send({
                error: error
            })
        }
    }
}