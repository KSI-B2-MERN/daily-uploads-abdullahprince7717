
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
    }

}