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
    }
}