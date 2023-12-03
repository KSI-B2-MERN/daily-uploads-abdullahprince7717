const roleService = require('../services/roleService');
const joi = require("joi");

const createRoleSchema = joi.object().keys({
    roleName: joi.string().required(),
    roleDescription: joi.string().required()
})

const updateRoleSchema = joi.object().keys({
    roleId: joi.string().required(),
    roleName: joi.string().required(),
    roleDescription: joi.string().required()
})

const deleteRoleSchema = joi.object().keys({
    roleId: joi.string().required()
})

module.exports = {
    createRole: async (req, res) => {

        try {
            const validate = await createRoleSchema.validateAsync(req.body);
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
    },
    updateRole: async (req, res) => {
        try {
            const validate = await updateRoleSchema.validateAsync(req.body);
            const updateRole = await roleService.updateRole(validate)
            if (updateRole.error) {
                res.send({
                    error: updateRole.error
                })
            }
            else {
                res.send({
                    response: updateRole.response
                })
            }
        }
        catch (error) {
            res.send({
                error: error
            })
        }
    },
    deleteRole: async (req, res) => {
        try {
            // console.log("req", req)
            const validate = await deleteRoleSchema.validateAsync(req.query);
            const deleteRole = await roleService.deleteRole(validate);

            if (deleteRole.error) {
                res.send({
                    error: deleteRole.error
                })
            }
            else {
                res.send({
                    response: deleteRole.response
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