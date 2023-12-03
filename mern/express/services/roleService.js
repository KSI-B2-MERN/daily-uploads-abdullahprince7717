const roleModel = require('../models/roleModel');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createRole: async (body) => {
        // console.log("check1")
        try {
            const roleId = uuidv4();
            const createRole = await roleModel.createRole(body.roleName, body.roleDescription, roleId);
            if (createRole.error) {
                return {
                    error: createRole.error
                }
            }
            else {
                return {
                    response: createRole.response
                }
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    getRoles: async () => {
        try {
            // console.log("getRole Service")
            const getRoles = await roleModel.getRoles();
            // console.log(getRoles);
            if (getRoles.error) {
                return {
                    error: getRoles.error
                };
            }
            else {
                return {
                    response: getRoles.response
                };

            }
        }
        catch (error) {
            return {
                error: error,
            }
        }
    },
    updateRole: async (body) => {
        try {
            const updateRole = await roleModel.updateRole(body);
            return {
                response: updateRole
            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    },
    deleteRole: async (query) => {
        try {
            const deleteRole = await roleModel.deleteRole(query);
            return {
                response: deleteRole
            };
        }
        catch (error) {
            return {
                error: error
            }
        }
    }
}