
const { models } = require('./index');
module.exports = {
    createRole: async (roleName, roleDescription, roleId) => {
        console.log("check1 Model")
        try {
            const createRole = await models.ROLES.create({
                roleName,               // roleName: roleName,
                roleDescription,        // roleDescription: roleDescription,
                roleId                  // roleId: roleId             
            });
            return {
                response: createRole
            };
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    getRoles: async () => {
        try {
            // console.log("getRole Model")
            const getRoles = await models.ROLES.findAll();
            // console.log(getRoles);
            return {
                response: getRoles
            };
        }
        catch (error) {
            return {
                error: error,
            }
        }
    },
    updateRole: async (body) => {
        try {
            const updateRole = await models.ROLES.update({
                roleName: body.roleName,
                roleDescription: body.roleDescription
            }, {
                where: {
                    roleId: body.roleId
                }
            });
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
    deleteRole: async (params) => {
        try {
            const deleteRole = await models.ROLES.destroy({
                where: {
                    roleId: params.roleId
                }
            });
            return {
                response: deleteRole
            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    }

}