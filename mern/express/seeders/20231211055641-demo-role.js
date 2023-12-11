'use strict';

const { v4: uuidv4 } = require('uuid');
// const { models } = require('../models/index');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    const roleId = uuidv4();
    return queryInterface.bulkInsert("ROLEs", [{
      roleId: roleId,
      roleName: 'Admin',
      roleDescription: 'Admin has all the rights',
      createdAt: new Date(),
      updatedAt: new Date()

    }]);


    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  //   async down (queryInterface, Sequelize) {
  //     /**
  //      * Add commands to revert seed here.
  //      *
  //      * Example:
  //      * await queryInterface.bulkDelete('People', null, {});
  //      */
  //   }
};
