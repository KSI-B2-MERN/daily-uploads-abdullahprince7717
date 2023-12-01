
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
}