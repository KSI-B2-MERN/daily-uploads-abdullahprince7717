const { models } = require('../models/index');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: (queryInterface) => {
        const roleId = uuidv4();
        return queryInterface.bulkInsert(models.ROLES, [{
            roleId: roleId,
            role: 'Admin',
        }]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete(models.ROLES, null, {});
    }
};